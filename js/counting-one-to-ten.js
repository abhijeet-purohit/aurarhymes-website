let CONFIG=null;
let currentLang=localStorage.getItem("auraCountingLanguage")||"en";
let selectedNumber=1;
let activeAudio=null;

const $=id=>document.getElementById(id);

async function loadLocalization(){
  // First try the external JSON. This is used when the widget is hosted
  // normally (GitHub Pages, a web server, etc.).
  try{
    const response=await fetch("../counting-one-to-ten-localization.json",{cache:"no-store"});
    if(response.ok){
      return await response.json();
    }
  }catch(error){
    // file:// pages commonly block fetch() because of browser security rules.
  }

  // Local fallback: use the identical JSON embedded in counting-one-to-ten.html.
  const embedded=document.getElementById("localization-data");
  if(embedded){
    return JSON.parse(embedded.textContent);
  }

  throw new Error("Localization data could not be loaded.");
}

async function init(){
  CONFIG=await loadLocalization();
  if(!CONFIG.languages[currentLang]) currentLang="en";
  buildLanguageMenu();
  applyLanguage();
  buildNumbers();
}

function buildLanguageMenu(){
  const select=$("languageSelect");
  select.innerHTML="";
  const ordered=[
    ["india","India"],
    ["middle-east","Middle East / West Asia"]
  ];
  const seen=new Set();
  const add=(code)=>{
    if(seen.has(code)||!CONFIG.languages[code]) return;
    seen.add(code);
    const l=CONFIG.languages[code];
    const opt=document.createElement("option");
    opt.value=code;
    opt.textContent=`${l.nativeName} — ${l.name}`;
    select.appendChild(opt);
  };
  // Keep English as the base/reference language.
  add("en");
  for(const [groupKey] of ordered){
    for(const family of CONFIG.groups[groupKey].families){
      Object.entries(CONFIG.languages)
        .filter(([code,l])=>l.family===family)
        .forEach(([code])=>add(code));
    }
  }
  select.value=currentLang;
  select.addEventListener("change",()=>{
    currentLang=select.value;
    localStorage.setItem("auraCountingLanguage",currentLang);
    applyLanguage();
    buildNumbers();
    playAuraOrTTS(`number-${selectedNumber}.mp3`, numberSpeech(selectedNumber));
  });
}

function applyLanguage(){
  const lang=CONFIG.languages[currentLang];
  const t=CONFIG.translations[currentLang];
  document.documentElement.lang=currentLang==="pa-Guru"?"pa":currentLang==="pa-Arab"?"pa":currentLang;
  document.documentElement.dir=lang.direction;
  $("languageLabel").textContent=t.select;
  $("title").textContent=t.title;
  $("instruction").textContent=t.instruction;
  $("hearButton").textContent=t.hear;
  $("tryButton").textContent=t.try;
  $("feedback").textContent="";
}

function buildNumbers(){
  const grid=$("numberGrid");
  grid.innerHTML="";
  for(let n=1;n<=10;n++){
    const b=document.createElement("button");
    b.className="number"+(n===selectedNumber?" selected":"");
    b.type="button";
    b.textContent=n;
    b.setAttribute("aria-label",`${n} ${numberSpeech(n)}`);
    b.addEventListener("click",()=>{
      selectedNumber=n;
      document.querySelectorAll(".number").forEach(x=>x.classList.remove("selected"));
      b.classList.add("selected");
      $("feedback").textContent="";
      playAuraOrTTS(`number-${n}.mp3`,numberSpeech(n));
    });
    grid.appendChild(b);
  }
}

$("hearButton").addEventListener("click",()=>{
  playAuraOrTTS(`number-${selectedNumber}.mp3`,numberSpeech(selectedNumber));
});

$("tryButton").addEventListener("click",()=>{
  const t=CONFIG.translations[currentLang];
  $("feedback").textContent=t.wrong;
  playAuraOrTTS("try-again.mp3",t.try);
});

function numberSpeech(n){
  const t=CONFIG.translations[currentLang];
  return t.numbers[n-1]||String(n);
}

function playAuraOrTTS(filename,fallbackText){
  if(activeAudio){try{activeAudio.pause();}catch(e){} activeAudio=null;}
  const path=`audio/${currentLang}/${filename}`;
  const audio=new Audio(path);
  activeAudio=audio;
  let settled=false;
  const fallback=()=>{
    if(settled)return;
    settled=true;
    try{audio.pause();}catch(e){}
    speak(fallbackText,CONFIG.languages[currentLang].tts);
  };
  audio.addEventListener("error",fallback,{once:true});
  audio.addEventListener("canplaythrough",()=>{if(!settled){audio.play().catch(fallback)}},{once:true});
  audio.load();
  setTimeout(()=>{if(!settled && audio.readyState<3) fallback();},1200);
}

function speak(text,lang){
  if(!("speechSynthesis" in window)){return;}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang=lang;
  u.rate=.82;
  u.pitch=1.05;
  speechSynthesis.speak(u);
}

init().catch(err=>{
  console.error(err);
  $("feedback").textContent="Unable to load counting-one-to-ten-localization.json";
});
