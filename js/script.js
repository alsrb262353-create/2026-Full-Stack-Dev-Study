// .btn-menu 요소를 자져와 btn 변수에 저장
const btn = document.querySelector('.btn-menu');
// .btn-nav 요소를 자져와 nav 변수에 저장
const nav = document.querySelector('.main-nav');

//버튼을 클릭하면..
btn.addEventListener('click', () => {
    //nav 요소의 클래스에 'open-menu' 를 토글한다.
    nav.classList.toggle('open-menu');
    //만약 btn 요소의 innerHTML 이 'mune'인 경우
    if (btn.innerHTML === 'Menu') {
        // btn 요소의 innerHTML을 'Close'로 변경
        btn.innerHTML = 'Close';
    } else { //아니면
        // btn 요소의 innerHTML을 'Mune'로 변경
        btn.innerHTML = 'Menu';
    } 
});

const themeBtn = document.querySelector('.btn-theme');

themeBtn.addEventListener('click', () => {
    // body에 'dark' 클래스를 붙였다 뗀다.
    document.body.classList.toggle('dark');
    // body에 'dark' 클래스가 있으면 해 아이콘, 없으면 달 아이콘으로 바꾼다.
    if(document.body.classList.contains('dark')) {
        themeBtn.innerHTML = '☀️';
    } else {
        themeBtn.innerHTML = '🌙';
    }
});

const textarea = document.querySelector('.apply-textarea');
const charCount = document.querySelector('.char-count');

textarea.addEventListener('input', () => {
    const length = textarea.value.length; 
    charCount.textContent = length + ' /  200자';

    if (length >= 180) {
        charCount.classList.add('warn');
    } else {
        charCount.classList.remove('warn');
    }
});

const clockDate = document.querySelector('.clock-date');
const clockTime = document.querySelector('.clock-time');
const days = ['일','월','화','수','목','금','토'];

function updateClock() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = days[now.getDay()];
    clockDate.textContent = year + '년 ' + month + '월 ' + date + '일 (' + day + ')';

    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clockTime.textContent = h + ':' + m + ':' + s;
}

updateClock();

setInterval(updateClock, 1000);

/* ================================
 커리큘럼 탭 메뉴
 ================================*/

const tabBtns = document.querySelectorAll('.tab-btn');     // 버튼 3개 
const tabPanels = document.querySelectorAll('.tab-panel'); // 패널 3개 
 
tabBtns.forEach((tab) => {          // 버튼을 하나씩 꺼내서 
  tab.addEventListener('click', () => {   // 각각에 클릭 이벤트를 단다
    // 모든 탭 버튼과 패널에서 'active'를 제거한다. 
    tabBtns.forEach((b) => b.classList.remove('active'));   // ① 모든 버튼 끄기 
    tabPanels.forEach((p) => p.classList.remove('active')); // ① 모든 패널 끄기

    // 클릭한 번튼과, 그 버든의 data-tab 값과 같은 id 를 가진 패널에 'active'를 붙인다.
    tab.classList.add('active');                             // ② 클릭한 버튼 켜기 
    document.getElementById(tab.dataset.tab).classList.add('active'); // ② 짝 패널 켜기

  }); 
});

// ======================================
// 스터디 사진 갤러리
// ======================================

const galleryMain = document.querySelector('.gallery-main');
const galleryThumbs = document.querySelectorAll('.gallery-thumbs img');

galleryThumbs.forEach((thumb) => { 
  thumb.addEventListener('click', () => { 
    // 큰 이미지의 수소(src)와 설명(alt)을 클릭한 썸네일 것으로 바꾼다.
    galleryMain.src = thumb.src;   // 큰 이미지의 주소를 클릭한 썸네일 것으로 
    galleryMain.alt = thumb.alt; 

    // 선택 표시(active)를 클릭한 썸네일로 옮긴다.
    galleryThumbs.forEach((t) => t.classList.remove('active')); 
    thumb.classList.add('active'); 
  }); 
}); 