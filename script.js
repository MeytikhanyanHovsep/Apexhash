let menuToggle = false;

function toggleMenu() {
    menuToggle = !menuToggle;
    mobileMenu.style.top = menuToggle ? "0" : "-150%";
    headerInner.style.opacity = menuToggle ? 1 : 0;
    headerInner.style.position = menuToggle ? "fixed" : "static";
    main.style.marginTop = menuToggle ? headerInner.offsetHeight + "px" : 0;
    menuBtn.style.display = menuToggle ? "none" : "block";
    closeBtn.style.display = menuToggle ? "block" : "none";
}

function toggleFaqItem(index) {
    const faqAnswer = document.getElementsByClassName('faq-answer')[index];
    faqAnswer.classList.toggle("hidden");
    const faqToggle = document.getElementsByClassName('faq-toggle')[index];
    faqToggle.innerText = faqToggle.innerText === "-" ? "+" : "-";
}

const phoneInput = document.querySelector("#phone");
const iti = window.intlTelInput(phoneInput, {
    initialCountry: "ru",
    separateDialCode: true,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js"
});

phoneInput.addEventListener("blur", () => {
    phoneInput.classList.toggle("invalid", phoneInput.value.trim() && !iti.isValidNumber());
});