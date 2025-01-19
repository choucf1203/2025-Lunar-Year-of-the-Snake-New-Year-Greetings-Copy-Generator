// 拜年文案數據庫
const messages = {
  family: [
    "願新的一年，家人平安喜樂，幸福安康！",
    "蛇年到，願家人平安健康，幸福像蛇環繞，溫暖永不散！",
    "祝福家人蛇年吉祥，生活如蛇般靈活順暢，事事如意！",
    "蛇年新氣象，願一家人團團圓圓，福氣滿門，笑聲常伴！",
    "蛇年好運來，願家人如蛇般智慧，日子越過越精彩！",
    "祝家人蛇年平安喜樂，生活如蛇般蜿蜒向上，充滿希望！",
    "蛇年大吉，願家中如蛇盤福，幸福滿滿，財運滾滾！",
    "蛇年祝福一家人，健康如靈蛇般活力四射，快樂無限！",
    "祝家人蛇年如意，愛情親情如蛇般緊密相繫，永不分離！",
    "蛇年到，願家人事業如蛇般蜿蜒直上，生活多姿多彩！",
    "祝福家人蛇年吉星高照，福如長蛇綿延不絕，日子甜如蜜！"
  ],
  friends: [
    "祝好友新年快樂，友誼長存！",
    "新年新氣象，願我們的友誼更上一層樓！",
    "蛇年吉祥如意，願你步步高升，財源滾滾來！",
    "蛇年行大運，生活如蛇般靈活，事業如蛇般蜿蜒向前！",
    "祝你蛇年好運纏身，幸福如蛇盤繞，永不分離！",
    "蛇年到，願你像蛇一樣敏捷，抓住每個機會，成功無限！",
    "蛇年新氣象，願你生活如彩蛇般多姿多彩，幸福滿滿！",
    "蛇年大吉，願你像靈蛇般智慧，解決一切難題，事事順心！",
    "祝福你蛇年如蛇舞般充滿活力，日子精彩絕倫！",
    "蛇年來臨，願你如蛇般靈動，生活充滿驚喜與奇蹟！",
    "蛇年祝你蛇行天下，事業蒸蒸日上，幸福如影隨形！",
    "蛇年好運連連，願你像蛇一樣，靈巧避險，處處逢春！"
  ],
  business: [
    "祝貴公司生意興隆，財源廣進！",
    "新年新氣象，願我們合作愉快，共創輝煌！",
    "祝您事業蒸蒸日上，財源滾滾來！",
    "蛇年行大運，祝工作順心如意，事業步步高升！",
    "蛇年到，願我們合作如蛇般靈活默契，共創佳績！",
    "祝你蛇年如蛇般敏捷，抓住每個機會，職場大展宏圖！",
    "蛇年吉祥，願你的事業如蛇蜿蜒向上，蒸蒸日上！",
    "蛇年祝福同事，工作順利，升職加薪，天天開心！",
    "蛇年到，願你的才能如蛇般靈動，贏得更多掌聲與機會！",
    "祝你蛇年福氣滿滿，工作如蛇行般順暢，成功無限！",
    "蛇年好運連連，願我們的團隊如蛇般團結，創造更多奇蹟！",
    "祝蛇年職場如意，目標如蛇般精準，成就如蛇般長久！",
    "蛇年到，願你的努力如靈蛇般敏捷，收穫滿滿，幸福滿懷！"
  ],
  humor: [
    "祝你新年快樂，紅包拿來！",
    "新年新氣象，體重不變樣！",
    "祝你新年快樂，吃嘛嘛香，睡嘛嘛甜！",
    "蛇年到，祝你像蛇一樣靈活，躲得了麻煩，抓得住機會！",
    "蛇年行大運，願你「蛇」出重圍，錢包塞滿滿，幸福不打烊！",
    "祝你蛇年像蛇一樣「滑」向成功，快樂無法擋！",
    "蛇年祝福你，工作像蛇一樣蜿蜒向上，老闆看你心花怒放！",
    "今年是蛇年，願你生活滑得順溜，財運繞得緊密！",
    "蛇年到，祝你像靈蛇般「繞」開煩惱，「纏」住好運！",
    "蛇年大吉，願你每天像蛇一樣「扭」出好心情，快樂無極限！",
    "祝你蛇年「蛇」不住的好運來，「蜿蜒」不絕的幸福到！",
    "蛇年祝福，願你「蛇」出新高度，生活像蛇般多姿多彩！",
    "蛇年來臨，願你像蛇一樣「溜得快」，壞運氣追不上，好運氣全纏身！"
  ],
};

// DOM 元素
const generateBtn = document.getElementById('generateBtn');
const resultContent = document.getElementById('resultContent');

// 隨機生成文案
function generateMessage() {
  const allMessages = Object.values(messages).flat();
  const randomIndex = Math.floor(Math.random() * allMessages.length);
  return allMessages[randomIndex];
}

// 顯示文案
function showMessage(message) {
  resultContent.textContent = message;
  resultContent.classList.add('show-content');
}

// 複製文案到剪貼板
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const successMsg = document.createElement('div');
    successMsg.className = 'copy-success';
    successMsg.textContent = '複製成功！';
    resultBox.appendChild(successMsg);
    setTimeout(() => successMsg.remove(), 1500);
  });
}

// 事件監聽
generateBtn.addEventListener('click', () => {
  const message = generateMessage();
  showMessage(message);
  
  // 播放音效
  new Audio('new-year-sound.mp3').play();
  
  // 按鈕動畫
  generateBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    generateBtn.style.transform = 'scale(1)';
  }, 100);
});

resultBox.addEventListener('click', () => {
  const message = resultContent.textContent;
  if (message) {
    copyToClipboard(message);
  }
});

// 初始化
resultContent.textContent = '';
