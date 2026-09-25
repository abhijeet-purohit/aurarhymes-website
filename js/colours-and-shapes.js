// Aura Rhymes — Widget 3: Colours & Shapes
// Localization is embedded directly in this JavaScript file, matching Widget 2 architecture.
// No external localization JSON file is required.

const $ = id => document.getElementById(id);

const C = [
  ['red', '#ff5c6c'], ['yellow', '#ffd447'], ['blue', '#59a9ff'], ['green', '#62d58a'],
  ['orange', '#ff9b4a'], ['pink', '#ff77b7'], ['purple', '#9a7cff'], ['brown', '#a97655']
];
const S = ['circle', 'square', 'triangle', 'rectangle', 'star'];
const STORAGE_KEY = 'auraColoursShapesLanguage';

const L = {"en":{"loc":"en-IN","title":"Colours & Shapes","ey":"Learn • Explore • Play","hero":"Let's learn colours and shapes!","txt":"Tap a card to hear Aura say its name.","listen":"Listen","learn":"Learn","explore":"Explore","play":"Play","colors":"Colours","shapes":"Shapes","hint":"Tap to hear","cq":"Which colour is this?","sq":"Which shape is this?","great":"Great job!","try":"Try again!","done":"You finished!","again":"Play again","cn":["Red","Yellow","Blue","Green","Orange","Pink","Purple","Brown"],"sn":["Circle","Square","Triangle","Rectangle","Star"]},"hi":{"loc":"hi-IN","title":"रंग और आकृतियाँ","ey":"सीखें • देखें • खेलें","hero":"आओ रंग और आकृतियाँ सीखें!","txt":"कार्ड को छुएँ और ऑरा का नाम सुनें।","listen":"सुनें","learn":"सीखें","explore":"देखें","play":"खेलें","colors":"रंग","shapes":"आकृतियाँ","hint":"सुनने के लिए छुएँ","cq":"यह कौन सा रंग है?","sq":"यह कौन सी आकृति है?","great":"बहुत बढ़िया!","try":"फिर कोशिश करें!","done":"आपने पूरा कर लिया!","again":"फिर खेलें","cn":["लाल","पीला","नीला","हरा","नारंगी","गुलाबी","बैंगनी","भूरा"],"sn":["गोला","वर्ग","त्रिकोण","आयत","तारा"]},"mr":{"loc":"mr-IN","title":"रंग आणि आकार","ey":"शिका • पहा • खेळा","hero":"चला रंग आणि आकार शिकूया!","txt":"कार्डवर टॅप करा आणि ऑराचा आवाज ऐका.","listen":"ऐका","learn":"शिका","explore":"पहा","play":"खेळा","colors":"रंग","shapes":"आकार","hint":"ऐकण्यासाठी टॅप करा","cq":"हा कोणता रंग आहे?","sq":"हा कोणता आकार आहे?","great":"खूप छान!","try":"पुन्हा प्रयत्न करा!","done":"तुम्ही पूर्ण केले!","again":"पुन्हा खेळा","cn":["लाल","पिवळा","निळा","हिरवा","नारिंगी","गुलाबी","जांभळा","तपकिरी"],"sn":["वर्तुळ","चौरस","त्रिकोण","आयत","तारा"]},"sa":{"loc":"sa-IN","title":"वर्णाः आकाराः च","ey":"शिक्षामः • पश्यामः • क्रीडामः","hero":"आगच्छन्तु वर्णान् आकारांश्च शिक्षामः!","txt":"पत्रं स्पृशन्तु, आरायाः नाम शृण्वन्तु।","listen":"शृण्वन्तु","learn":"शिक्षामः","explore":"पश्यामः","play":"क्रीडामः","colors":"वर्णाः","shapes":"आकाराः","hint":"श्रोतुं स्पृशन्तु","cq":"अयं कः वर्णः?","sq":"अयं कः आकारः?","great":"साधु!","try":"पुनः प्रयतन्ताम्!","done":"भवता समाप्तम्!","again":"पुनः क्रीडन्तु","cn":["रक्तः","पीतः","नीलः","हरितः","नारङ्गः","गुलाबी","धूम्रः","कपिशः"],"sn":["वृत्तम्","चतुरस्रम्","त्रिकोणः","आयतम्","तारा"]},"pa-Guru":{"loc":"pa-IN","dir":"ltr","title":"ਰੰਗ ਅਤੇ ਆਕਾਰ","ey":"ਸਿੱਖੋ • ਦੇਖੋ • ਖੇਡੋ","hero":"ਆਓ ਰੰਗ ਅਤੇ ਆਕਾਰ ਸਿੱਖੀਏ!","txt":"ਕਾਰਡ ਨੂੰ ਟੈਪ ਕਰਕੇ ਆਰਾ ਦਾ ਨਾਮ ਸੁਣੋ।","listen":"ਸੁਣੋ","learn":"ਸਿੱਖੋ","explore":"ਦੇਖੋ","play":"ਖੇਡੋ","colors":"ਰੰਗ","shapes":"ਆਕਾਰ","hint":"ਸੁਣਨ ਲਈ ਟੈਪ ਕਰੋ","cq":"ਇਹ ਕਿਹੜਾ ਰੰਗ ਹੈ?","sq":"ਇਹ ਕਿਹੜੀ ਆਕ੍ਰਿਤੀ ਹੈ?","great":"ਬਹੁਤ ਵਧੀਆ!","try":"ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ!","done":"ਤੁਸੀਂ ਪੂਰਾ ਕਰ ਲਿਆ!","again":"ਦੁਬਾਰਾ ਖੇਡੋ","cn":["ਲਾਲ","ਪੀਲਾ","ਨੀਲਾ","ਹਰਾ","ਸੰਤਰੀ","ਗੁਲਾਬੀ","ਜਾਮਨੀ","ਭੂਰਾ"],"sn":["ਗੋਲਾ","ਵਰਗ","ਤਿਕੋਣ","ਆਇਤ","ਤਾਰਾ"]},"kn":{"loc":"kn-IN","title":"ಬಣ್ಣಗಳು ಮತ್ತು ಆಕಾರಗಳು","ey":"ಕಲಿ • ನೋಡಿ • ಆಡಿ","hero":"ಬಣ್ಣಗಳು ಮತ್ತು ಆಕಾರಗಳನ್ನು ಕಲಿಯೋಣ!","txt":"ಕಾರ್ಡ್ ತಟ್ಟಿ ಔರಾ ಹೆಸರನ್ನು ಕೇಳಿ.","listen":"ಕೇಳಿ","learn":"ಕಲಿ","explore":"ನೋಡಿ","play":"ಆಡಿ","colors":"ಬಣ್ಣಗಳು","shapes":"ಆಕಾರಗಳು","hint":"ಕೇಳಲು ತಟ್ಟಿ","cq":"ಇದು ಯಾವ ಬಣ್ಣ?","sq":"ಇದು ಯಾವ ಆಕಾರ?","great":"ಚೆನ್ನಾಗಿದೆ!","try":"ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ!","done":"ನೀವು ಮುಗಿಸಿದ್ದೀರಿ!","again":"ಮತ್ತೆ ಆಡಿ","cn":["ಕೆಂಪು","ಹಳದಿ","ನೀಲಿ","ಹಸಿರು","ಕಿತ್ತಳೆ","ಗುಲಾಬಿ","ನೇರಳೆ","ಕಂದು"],"sn":["ವೃತ್ತ","ಚೌಕ","ತ್ರಿಕೋನ","ಆಯತ","ನಕ್ಷತ್ರ"]},"te":{"loc":"te-IN","title":"రంగులు & ఆకారాలు","ey":"నేర్చుకో • చూడు • ఆడు","hero":"రంగులు మరియు ఆకారాలు నేర్చుకుందాం!","txt":"కార్డ్‌ను తట్టి ఆరా పేరు వినండి.","listen":"వినండి","learn":"నేర్చుకో","explore":"చూడు","play":"ఆడు","colors":"రంగులు","shapes":"ఆకారాలు","hint":"వినడానికి తట్టండి","cq":"ఇది ఏ రంగు?","sq":"ఇది ఏ ఆకారం?","great":"చాలా బాగుంది!","try":"మళ్లీ ప్రయత్నించండి!","done":"మీరు పూర్తి చేశారు!","again":"మళ్లీ ఆడు","cn":["ఎరుపు","పసుపు","నీలం","ఆకుపచ్చ","నారింజ","గులాబీ","ఊదా","గోధుమ"],"sn":["వృత్తం","చతురస్రం","త్రిభుజం","దీర్ఘచతురస్రం","నక్షత్రం"]},"ta":{"loc":"ta-IN","title":"வண்ணங்கள் & வடிவங்கள்","ey":"கற்போம் • பார்ப்போம் • விளையாடுவோம்","hero":"வண்ணங்களையும் வடிவங்களையும் கற்போம்!","txt":"அட்டையைத் தட்டி ஆரா பெயரை கேளுங்கள்.","listen":"கேளுங்கள்","learn":"கற்போம்","explore":"பார்ப்போம்","play":"விளையாடுவோம்","colors":"வண்ணங்கள்","shapes":"வடிவங்கள்","hint":"கேட்கத் தட்டுங்கள்","cq":"இது என்ன வண்ணம்?","sq":"இது என்ன வடிவம்?","great":"மிகவும் நன்று!","try":"மீண்டும் முயற்சி செய்யுங்கள்!","done":"முடித்துவிட்டீர்கள்!","again":"மீண்டும் விளையாடு","cn":["சிவப்பு","மஞ்சள்","நீலம்","பச்சை","ஆரஞ்சு","இளஞ்சிவப்பு","ஊதா","பழுப்பு"],"sn":["வட்டம்","சதுரம்","முக்கோணம்","செவ்வகம்","நட்சத்திரம்"]},"ml":{"loc":"ml-IN","title":"നിറങ്ങളും ആകൃതികളും","ey":"പഠിക്കാം • നോക്കാം • കളിക്കാം","hero":"നിറങ്ങളും ആകൃതികളും പഠിക്കാം!","txt":"കാർഡിൽ തട്ടി ഓറയുടെ പേര് കേൾക്കൂ.","listen":"കേൾക്കൂ","learn":"പഠിക്കാം","explore":"നോക്കാം","play":"കളിക്കാം","colors":"നിറങ്ങൾ","shapes":"ആകൃതികൾ","hint":"കേൾക്കാൻ തട്ടൂ","cq":"ഇത് ഏത് നിറമാണ്?","sq":"ഇത് ഏത് ആകൃതിയാണ്?","great":"വളരെ നന്നായി!","try":"വീണ്ടും ശ്രമിക്കൂ!","done":"നിങ്ങൾ പൂർത്തിയാക്കി!","again":"വീണ്ടും കളിക്കൂ","cn":["ചുവപ്പ്","മഞ്ഞ","നീല","പച്ച","ഓറഞ്ച്","പിങ്ക്","ധൂമ്രനിറം","തവിട്ട്"],"sn":["വൃത്തം","ചതുരം","ത്രികോണം","ദീർഘചതുരം","നക്ഷത്രം"]},"bn":{"loc":"bn-IN","title":"রং ও আকার","ey":"শিখি • দেখি • খেলি","hero":"চলো রং ও আকার শিখি!","txt":"কার্ডে ট্যাপ করে অরার নাম শুনুন।","listen":"শুনুন","learn":"শিখি","explore":"দেখি","play":"খেলি","colors":"রং","shapes":"আকার","hint":"শুনতে ট্যাপ করুন","cq":"এটি কোন রং?","sq":"এটি কোন আকার?","great":"দারুণ!","try":"আবার চেষ্টা করুন!","done":"তুমি শেষ করেছ!","again":"আবার খেলুন","cn":["লাল","হলুদ","নীল","সবুজ","কমলা","গোলাপি","বেগুনি","বাদামি"],"sn":["বৃত্ত","বর্গ","ত্রিভুজ","আয়তক্ষেত্র","তারা"]},"or":{"loc":"or-IN","title":"ରଙ୍ଗ ଓ ଆକାର","ey":"ଶିଖିବା • ଦେଖିବା • ଖେଳିବା","hero":"ଚାଲ ରଙ୍ଗ ଓ ଆକାର ଶିଖିବା!","txt":"କାର୍ଡକୁ ଟ୍ୟାପ୍ କରି ଅରାର ନାମ ଶୁଣନ୍ତୁ।","listen":"ଶୁଣନ୍ତୁ","learn":"ଶିଖନ୍ତୁ","explore":"ଦେଖନ୍ତୁ","play":"ଖେଳନ୍ତୁ","colors":"ରଙ୍ଗ","shapes":"ଆକାର","hint":"ଶୁଣିବାକୁ ଟ୍ୟାପ୍ କରନ୍ତୁ","cq":"ଏହା କେଉଁ ରଙ୍ଗ?","sq":"ଏହା କେଉଁ ଆକାର?","great":"ବହୁତ ଭଲ!","try":"ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ!","done":"ଆପଣ ସମାପ୍ତ କରିଛନ୍ତି!","again":"ପୁଣି ଖେଳନ୍ତୁ","cn":["ଲାଲ","ହଳଦିଆ","ନୀଳ","ସବୁଜ","କମଳା","ଗୋଲାପୀ","ବାଇଗଣୀ","ବାଦାମୀ"],"sn":["ବୃତ୍ତ","ବର୍ଗ","ତ୍ରିଭୁଜ","ଆୟତ","ତାରା"]},"ar":{"loc":"ar-SA","dir":"rtl","title":"الألوان والأشكال","ey":"تعلّم • استكشف • العب","hero":"هيا نتعلم الألوان والأشكال!","txt":"اضغط على البطاقة لسماع اسمها من آورا.","listen":"استمع","learn":"تعلّم","explore":"استكشف","play":"العب","colors":"الألوان","shapes":"الأشكال","hint":"اضغط للاستماع","cq":"ما هذا اللون؟","sq":"ما هذا الشكل؟","great":"أحسنت!","try":"حاول مرة أخرى!","done":"لقد أكملت!","again":"العب مرة أخرى","cn":["أحمر","أصفر","أزرق","أخضر","برتقالي","وردي","بنفسجي","بني"],"sn":["دائرة","مربع","مثلث","مستطيل","نجمة"]},"tr":{"loc":"tr-TR","dir":"ltr","title":"Renkler ve Şekiller","ey":"Öğren • Keşfet • Oyna","hero":"Haydi renkleri ve şekilleri öğrenelim!","txt":"Aura’nın adını söylemesini duymak için karta dokun.","listen":"Dinle","learn":"Öğren","explore":"Keşfet","play":"Oyna","colors":"Renkler","shapes":"Şekiller","hint":"Dinlemek için dokun","cq":"Bu hangi renk?","sq":"Bu hangi şekil?","great":"Harika!","try":"Tekrar dene!","done":"Bitirdin!","again":"Tekrar oyna","cn":["Kırmızı","Sarı","Mavi","Yeşil","Turuncu","Pembe","Mor","Kahverengi"],"sn":["Daire","Kare","Üçgen","Dikdörtgen","Yıldız"]},"ur":{"loc":"ur-PK","dir":"rtl","title":"رنگ اور اشکال","ey":"سیکھیں • دریافت کریں • کھیلیں","hero":"آئیے رنگ اور اشکال سیکھیں!","txt":"آورا کا نام سننے کے لیے کارڈ پر ٹیپ کریں۔","listen":"سنیں","learn":"سیکھیں","explore":"دریافت کریں","play":"کھیلیں","colors":"رنگ","shapes":"اشکال","hint":"سننے کے لیے ٹیپ کریں","cq":"یہ کون سا رنگ ہے؟","sq":"یہ کون سی شکل ہے؟","great":"شاباش!","try":"دوبارہ کوشش کریں!","done":"آپ نے مکمل کر لیا!","again":"دوبارہ کھیلیں","cn":["لال","پیلا","نیلا","سبز","نارنجی","گلابی","جامنی","بھورا"],"sn":["دائرہ","مربع","مثلث","مستطیل","ستارہ"]},"fa":{"loc":"fa-IR","dir":"rtl","title":"رنگ‌ها و شکل‌ها","ey":"یاد بگیر • کشف کن • بازی کن","hero":"بیایید رنگ‌ها و شکل‌ها را یاد بگیریم!","txt":"برای شنیدن نام از زبان آئورا روی کارت بزنید.","listen":"گوش بده","learn":"یاد بگیر","explore":"کشف کن","play":"بازی کن","colors":"رنگ‌ها","shapes":"شکل‌ها","hint":"برای شنیدن ضربه بزن","cq":"این چه رنگی است؟","sq":"این چه شکلی است؟","great":"آفرین!","try":"دوباره تلاش کن!","done":"تمام کردی!","again":"دوباره بازی کن","cn":["قرمز","زرد","آبی","سبز","نارنجی","صورتی","بنفش","قهوه‌ای"],"sn":["دایره","مربع","مثلث","مستطیل","ستاره"]},"pa-Arab":{"loc":"pa-PK","dir":"rtl","title":"رنگ تے شکل","ey":"سکھو • ویکھو • کھیڈو","hero":"آؤ رنگ تے شکل سکھئیے!","txt":"آورا دا ناں سنن لئی کارڈ تے ٹیپ کرو۔","listen":"سنو","learn":"سکھو","explore":"ویکھو","play":"کھیڈو","colors":"رنگ","shapes":"شکل","hint":"سنن لئی ٹیپ کرو","cq":"ایہہ کیہڑا رنگ اے؟","sq":"ایہہ کیہڑی شکل اے؟","great":"بہت ودھیا!","try":"فیر کوشش کرو!","done":"تسی مکمل کر لیا اے!","again":"فیر کھیڈو","cn":["لال","پیلا","نیلا","سبز","نارنجی","گلابی","بنفشی","بھورا"],"sn":["گولا","چوکور","تکون","مستطیل","تارا"]}};

const LANGUAGE_OPTIONS = [["en","English"],["hi","हिन्दी"],["mr","मराठी"],["sa","संस्कृतम्"],["pa-Guru","ਪੰਜਾਬੀ — ਗੁਰਮੁਖੀ"],["kn","ಕನ್ನಡ"],["te","తెలుగు"],["ta","தமிழ்"],["ml","മലയാളം"],["bn","বাংলা"],["or","ଓଡ଼ିଆ"],["ar","العربية"],["tr","Türkçe"],["ur","اردو"],["fa","فارسی"],["pa-Arab","پنجابی — شاہ مکھی"]];

let lang = localStorage.getItem(STORAGE_KEY) || 'en';
let mode = 'learn';
let qi = 0;
let score = 0;
let items = [];

if (!L[lang]) lang = 'en';

function buildLanguageSelector() {
  const sel = $('language');
  if (!sel) return;
  sel.replaceChildren();
  LANGUAGE_OPTIONS.forEach(([value, label]) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    sel.appendChild(option);
  });
  sel.value = lang;
}

function T() { return L[lang] || L.en; }

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = T().loc;
  utterance.rate = 0.82;
  utterance.pitch = 1.12;
  speechSynthesis.speak(utterance);
}

function playAudio(kind, key, text) {
  const audio = new Audio(`audio/colours-shapes/${lang}/${kind}-${key}.mp3`);
  let completed = false;
  const fallback = () => {
    if (completed) return;
    completed = true;
    speak(text);
  };
  audio.addEventListener('error', fallback, { once: true });
  audio.play().catch(fallback);
}

function card(type, key, index) {
  const names = type === 'c' ? T().cn : T().sn;
  const name = names[index];
  const button = document.createElement('button');
  button.className = 'card';

  if (type === 'c') {
    button.innerHTML = `
      <span class="swatch" style="background:${C[index][1]}">
        <span class="shape circle" style="color:${C[index][1]}"></span>
      </span>
      <span>${name}</span>
      <span class="hint">${T().hint}</span>`;
  } else {
    button.innerHTML = `
      <span class="swatch" style="background:#efe7ff">
        <span class="shape ${key}" style="color:#7b61ff"></span>
      </span>
      <span>${name}</span>
      <span class="hint">${T().hint}</span>`;
  }

  button.addEventListener('click', () => playAudio(type === 'c' ? 'colour' : 'shape', key, name));
  return button;
}

function learnView() {
  const t = T();
  $('content').innerHTML = `
    <h2 class="heading">${t.colors}</h2>
    <div class="grid" id="cg"></div>
    <h2 class="heading">${t.shapes}</h2>
    <div class="grid" id="sg"></div>`;
  C.forEach((item, index) => $('cg').appendChild(card('c', item[0], index)));
  S.forEach((item, index) => $('sg').appendChild(card('s', item, index)));
}

function exploreView() {
  const t = T();
  $('content').innerHTML = `
    <div class="exploreGrid">
      <div class="panel"><h3>${t.explore} ${t.colors}</h3><div class="demo" id="cd"></div></div>
      <div class="panel"><h3>${t.explore} ${t.shapes}</h3><div class="demo" id="sd"></div></div>
    </div>`;

  let colourIndex = 0;
  let shapeIndex = 0;

  function renderColour() {
    const item = C[colourIndex];
    $('cd').innerHTML = `<button class="card"><span class="swatch" style="background:${item[1]}"><span class="shape circle" style="color:${item[1]}"></span></span><b>${t.cn[colourIndex]}</b></button>`;
    $('cd').firstElementChild.onclick = () => {
      playAudio('colour', item[0], t.cn[colourIndex]);
      colourIndex = (colourIndex + 1) % C.length;
      renderColour();
    };
  }

  function renderShape() {
    const key = S[shapeIndex];
    $('sd').innerHTML = `<button class="card"><span class="swatch" style="background:#efe7ff"><span class="shape ${key}" style="color:#7b61ff"></span></span><b>${t.sn[shapeIndex]}</b></button>`;
    $('sd').firstElementChild.onclick = () => {
      playAudio('shape', key, t.sn[shapeIndex]);
      shapeIndex = (shapeIndex + 1) % S.length;
      renderShape();
    };
  }

  renderColour();
  renderShape();
}

function startQuiz() {
  items = [
    ...C.slice(0, 5).map(item => ({ type: 'c', key: item[0], hex: item[1], i: C.indexOf(item) })),
    ...S.map((item, index) => ({ type: 's', key: item, i: index }))
  ].sort(() => Math.random() - 0.5);
  qi = 0;
  score = 0;
  playView();
}

function playView() {
  const t = T();
  if (qi >= items.length) {
    $('content').innerHTML = `<div class="quiz"><div style="font-size:4rem">🏆</div><h2>${t.done}</h2><p>${t.great} ${score}/${items.length}</p><button class="hero" id="again" style="margin:auto;border:0;padding:12px 18px;display:inline-block;background:#7b61ff;color:#fff;font-weight:900;border-radius:999px;cursor:pointer">${t.again}</button></div>`;
    $('again').onclick = startQuiz;
    return;
  }

  const item = items[qi];
  const isColour = item.type === 'c';
  const name = isColour ? t.cn[item.i] : t.sn[item.i];
  const options = (isColour ? C.map((x, i) => ({ k: x[0], n: t.cn[i] })) : S.map((x, i) => ({ k: x, n: t.sn[i] }))).sort(() => Math.random() - 0.5);

  $('content').innerHTML = `<div class="quiz"><div class="progress">${qi + 1} / ${items.length}</div><h2>${isColour ? t.cq : t.sq}</h2><div class="question"><span class="swatch" style="background:${isColour ? item.hex : '#efe7ff'}"><span class="shape ${isColour ? 'circle' : item.key}" style="color:${isColour ? item.hex : '#7b61ff'}"></span></span></div><div class="answers" id="answers"></div></div>`;

  options.forEach(option => {
    const button = document.createElement('button');
    button.className = 'answer';
    button.textContent = option.n;
    button.onclick = () => {
      if (option.k === item.key) {
        score++;
        playAudio(isColour ? 'colour' : 'shape', item.key, name);
        $('feedback').hidden = false;
        $('feedback').textContent = `🌟 ${t.great}`;
        setTimeout(() => {
          $('feedback').hidden = true;
          qi++;
          playView();
        }, 650);
      } else {
        playAudio('general', 'try', t.try);
      }
    };
    $('answers').appendChild(button);
  });
}

function render() {
  const t = T();
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir || 'ltr';
  $('title').textContent = t.title;
  $('eyebrow').textContent = t.ey;
  $('heroTitle').textContent = t.hero;
  $('heroText').textContent = t.txt;
  $('listen').textContent = t.listen;
  $('learn').textContent = t.learn;
  $('explore').textContent = t.explore;
  $('play').textContent = t.play;
  $('language').value = lang;
  document.querySelectorAll('.tab').forEach(tab => tab.classList.toggle('active', tab.dataset.mode === mode));
  if (mode === 'learn') learnView();
  else if (mode === 'explore') exploreView();
  else if (!items.length) startQuiz();
  else playView();
}

function init() {
  buildLanguageSelector();

  document.querySelectorAll('.tab').forEach(button => {
    button.addEventListener('click', () => {
      mode = button.dataset.mode;
      items = [];
      render();
    });
  });

  $('language').addEventListener('change', event => {
    lang = event.target.value;
    localStorage.setItem(STORAGE_KEY, lang);
    items = [];
    mode = 'learn';
    render();
  });

  $('intro').addEventListener('click', () => playAudio('general', 'intro', T().hero));
  render();
}

init();
