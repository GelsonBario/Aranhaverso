(function() {
  function controlModal() {
    const openModalButtons = document.querySelectorAll('[data-trailer-url]');
    const closeModalButton = document.querySelector('.s-modal__close-button button');
    const modal = document.getElementById('trailer-modal');
    
    if (!modal || !closeModalButton) return;

    const iframe = modal.querySelector('iframe');

    openModalButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const trailerUrl = event.currentTarget.getAttribute('data-trailer-url');
        if (trailerUrl) {
          iframe.setAttribute('src', trailerUrl);
          modal.classList.add('s-modal--active');
        }
      });
    });

    const closeModal = () => {
      modal.classList.remove('s-modal--active');
      iframe.setAttribute('src', ''); // Para a reprodução do vídeo
    };

    closeModalButton.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if(event.key === 'Escape' && modal.classList.contains('s-modal--active')) {
        closeModal();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', controlModal);
})();