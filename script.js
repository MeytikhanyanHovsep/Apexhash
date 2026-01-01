let menuToggle = false;

function setMenuToggle() {
    menuToggle = !menuToggle

    if (menuToggle) {
        mobileMenu.style.top = "0"
        headerInner.style.opacity = 0
        setTimeout(() => {
            menuBtn.style.display = "none"
            closeBtn.style.display = "block"
            headerInner.style.opacity = 1
            headerInner.style.position = 'fixed'

            main.style.marginTop = headerInner.offsetHeight + "px"
        }, 700);
    } else {
        mobileMenu.style.top = "-150%"
        menuBtn.style.display = "block"
        closeBtn.style.display = "none"
        headerInner.style.position = 'static'
        main.style.marginTop = 0
    }
}

function setFaqItem(ind) {

    document.getElementsByClassName('faq-answer')[ind].classList.toggle("hidden")
    const btn = document.getElementsByClassName('faq-toggle')[ind]
    btn.innerText = btn.innerText == "-" ? "+" : "-"
}

const phoneInput = document.querySelector("#phone");

const iti = window.intlTelInput(phoneInput, {
    initialCountry: "ru",           // стартовая страна
    separateDialCode: true,         // отдельный код страны слева
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js"
});

phoneInput.addEventListener("blur", () => {
    if (phoneInput.value.trim()) {
        if (!iti.isValidNumber()) {
            phoneInput.classList.add("invalid");
        } else {
            phoneInput.classList.remove("invalid");
        }
    }
});