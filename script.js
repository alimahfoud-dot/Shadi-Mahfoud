
const text = document.querySelector('.SS');
let pos = -text.offsetWidth; // ا

function moveMarquee() {
    pos += 0.3; //
    if (pos >100) {
        pos = -text.offsetWidth; // 
    }
    text.style.left = pos + '%';
    requestAnimationFrame(moveMarquee);
}

moveMarquee();
const toggleBtn = document.getElementById('lang-toggle');
let isArabic = false;

function switchLanguage() {
    isArabic = !isArabic;

    document.querySelectorAll('[data-en]').forEach(el => {
        if (isArabic) {
            el.textContent = el.getAttribute('data-ar');
        } else {
            el.textContent = el.getAttribute('data-en');
        }
    });

    if (isArabic) {
        document.documentElement.setAttribute('lang', 'ar');
        document.documentElement.setAttribute('dir', 'rtl');
        toggleBtn.innerHTML = 'ترجم للانكليزي';
    } else {
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
        toggleBtn.innerHTML = ' Translate to Arabic';
    }
}

toggleBtn.addEventListener('click', switchLanguage);