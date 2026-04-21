// ميكانيكية ظهور العناصر عند السكرول (Scroll Reveal)
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

// تفعيل الحركة عند التحميل وعند السكرول
window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// تأثير الـ Sticky Navbar (تغيير لونها عند النزول)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#000';
        nav.style.padding = '15px 50px';
    } else {
        nav.style.background = 'rgba(18, 18, 18, 0.95)';
        nav.style.padding = '20px 50px';
    }
});