//SEÇÕES
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav a[href^="#"]');

    //Função para mostrar as 'seções' com base no ID
    function showSection(id) {
        sections.forEach(section => {
            if (section.id === id) {
                section.classList.remove('ocultar');
                section.classList.add('active');
            } else {
                section.classList.add('ocultar');
                section.classList.remove('active');
            }
        });
    }

    //Mostra a seção "sobre" por padrão
    showSection('sobre');

    //Adiciona evento de clique para os links do menu de navegação
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href').replace('#', '');
            if (document.getElementById(targetId)) {
                event.preventDefault();
                showSection(targetId);
            }
        });
    });
});

//DROPDOWN
//Seleciona todos os dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

//Adiciona um evento de clique para cada dropdown
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        //Alterna a classe "show" no dropdown clicado
        dropdown.classList.toggle('show');
    });
});

//Fecha o menu dropdown ao clicar fora
window.addEventListener('click', (e) => {
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});

//RESPONSIVIDADE
//Menu hambúrguer para responsividade em celulares e telas pequenas
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});