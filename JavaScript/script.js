//SEÇÕES
// Função para mostrar/ocultar as seções
document.addEventListener("DOMContentLoaded", function() {
    // Oculta todas as seções inicialmente
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('ocultar');
    });

    // Mostra a seção desejada por padrão
    const sobreSection = document.getElementById('sobre');
    sobreSection.classList.remove('ocultar');
    sobreSection.classList.add('active');

    // Adiciona evento de clique para mostrar o conteúdo oculto
    const linkParaOculto = document.createElement('a');
    linkParaOculto.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        const conteudoOculto = document.getElementById('montar');
        conteudoOculto.classList.remove('ocultar');
        conteudoOculto.classList.add('active');
    });
});

// Seleciona todos os dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

// Adiciona um evento de clique para cada dropdown
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        // Alterna a classe "show" no dropdown clicado
        dropdown.classList.toggle('show');
    });
});

// Fecha o menu dropdown ao clicar fora
window.addEventListener('click', (e) => {
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});