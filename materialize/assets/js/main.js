document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o Sidenav (Menu Mobile)
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    const bodyElement = document.body;
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    const themeBtnMobile = document.getElementById('theme-toggle-mobile');
    const themeIconMobile = document.getElementById('theme-icon-mobile');

    // Verifica tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        bodyElement.classList.remove('light-theme');
        bodyElement.classList.add('dark-theme');
        updateIcons('dark');
    }

    // Função para alternar o tema
    function toggleTheme(e) {
        if(e) e.preventDefault();
        
        if (bodyElement.classList.contains('dark-theme')) {
            bodyElement.classList.remove('dark-theme');
            bodyElement.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            updateIcons('light');
        } else {
            bodyElement.classList.remove('light-theme');
            bodyElement.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            updateIcons('dark');
        }
    }

    // Função para atualizar os ícones
    function updateIcons(theme) {
        const iconName = theme === 'dark' ? 'wb_sunny' : 'brightness_2';
        if(themeIcon) themeIcon.textContent = iconName;
        if(themeIconMobile) themeIconMobile.textContent = iconName;
    }

    // Event Listeners
    if(themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if(themeBtnMobile) themeBtnMobile.addEventListener('click', toggleTheme);
});
