// 拜年文案數據庫
const messages = {
  family: [
    "祝您闔家歡樂，幸福美滿！",
    "新年快樂，身體健康，萬事如意！",
    "願新的一年，家人平安喜樂，幸福安康！"
  ],
  friends: [
    "祝好友新年快樂，友誼長存！",
    "新年新氣象，願我們的友誼更上一層樓！",
    "祝你新年快樂，心想事成，萬事如意！"
    "",
    "",
    "",
  ],
  business: [
    "祝貴公司生意興隆，財源廣進！",
    "新年新氣象，願我們合作愉快，共創輝煌！",
    "祝您事業蒸蒸日上，財源滾滾來！"
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
