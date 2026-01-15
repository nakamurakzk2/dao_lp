// スムーススクロール関数
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
         const headerOffset = document.querySelector('header').offsetHeight || 100; /* ヘッダー高さ反映 */
         const elementPosition = contactSection.getBoundingClientRect().top;
         const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
         window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
}

// ページ内リンクのスムーススクロール (ヘッダー考慮)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if(this.closest('.contact-bar')) return;

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
             e.preventDefault();
            const headerOffset = document.querySelector('header').offsetHeight || 100; /* ヘッダー高さ反映 */
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    });
});
