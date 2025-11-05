(function () {
  // Função para adicionar os efeitos de hover aos cards
  function addEventListenersToCards() {
    const cardElements = document.querySelectorAll('.s-card');

    cardElements.forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.classList.add('s-card--hovered');
        document.body.id = `${this.id}-hovered`;
      });

      card.addEventListener('mouseleave', function () {
        this.classList.remove('s-card--hovered');
        document.body.id = 'home'; // Retorna ao ID padrão
      });
    });
  }

  // Função para adicionar os eventos de clique aos botões de controle do carrossel
  function addClickListenerToControls() {
    const controlButtons = document.querySelectorAll('.s-controller__button');

    controlButtons.forEach(button => {
      button.addEventListener('click', () => {
        selectCarouselItem(button);
      });
    });
  }

  // Função que executa a rotação do carrossel
  function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    
    // O ângulo de rotação é calculado com base no ID do botão (1, 2 ou 3)
    // O item 1 fica em 0deg, o 2 em -120deg, o 3 em -240deg
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    carousel.style.transform = `translateZ(-40vw) rotateY(${rotateYDeg}deg)`;

    // Remove a classe 'active' do botão que estava ativo anteriormente
    const activeButtonElement = document.querySelector('.s-controller__button--active');
    if (activeButtonElement) {
      activeButtonElement.classList.remove('s-controller__button--active');
    }
    
    // Adiciona a classe 'active' ao botão que foi clicado
    selectedButtonElement.classList.add('s-controller__button--active');
  }

  // Garante que o script só será executado após o carregamento completo do HTML
  document.addEventListener("DOMContentLoaded", () => {
    addEventListenersToCards();
    addClickListenerToControls();
  });

})();