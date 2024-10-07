// Salvar este arquivo como "scroll-animation.js" na pasta D:\audace-website\js

// Adiciona a classe 'visible' aos elementos quando eles entram na área visível da tela
document.addEventListener('DOMContentLoaded', function() {
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
});