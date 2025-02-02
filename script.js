function switchLanguage(language) {
    
    const languages = document.querySelectorAll('.language');
    languages.forEach(lang => {
        lang.classList.remove('active');
    });

    const selectedLanguage = document.getElementById(language);
    selectedLanguage.classList.add('active');
}