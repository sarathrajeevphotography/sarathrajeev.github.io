// HTML ലെ ഘടകങ്ങളെ തിരഞ്ഞെടുക്കുന്നു
const hamburger = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-menu');

// മെനു ഐക്കണിൽ ക്ലിക്ക് ചെയ്യുമ്പോൾ
hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active'); // മെനു കാണിക്കുന്നു
});

// ക്ലോസ് 'X' ഐക്കണിൽ ക്ലിക്ക് ചെയ്യുമ്പോൾ
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active'); // മെനു മറയ്ക്കുന്നു
});
