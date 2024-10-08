// Salvar este arquivo como "scroll-animation.js" na pasta D:\audace-website\js

document.addEventListener('DOMContentLoaded', function() {
    // Script para a animação dos cards de serviço ao rolar a página
    const cards = document.querySelectorAll('.servico-card');
    
    function showCards() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                card.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', showCards);
    showCards(); // Chama ao carregar a página para garantir que os elementos visíveis estejam visíveis

    // Script para o menu-hambúrguer em dispositivos móveis
    const menuToggle = document.getElementById('menu-toggle');
    const body = document.body;

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            body.classList.toggle('menu-open');
        });
    }
});
