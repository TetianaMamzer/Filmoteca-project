const btnOpenModalWindowTeam = document.querySelector('.open-mdl-win');
const backdropIsHidden = document.querySelector('.backdrop-team');
const modalWindowTeam = document.querySelector('.mdl-win-team')
const btnCloseModalWindowTeam = document.querySelector('.close-btn-mdl');

const scrollController = {
    disabledScroll(){
    document.body.style.cssText = `
    overflow: hidden;
    `;
    },
    enabledScroll(){
        document.body.style.cssText = '';
    }
  
  }

const openModal = e => {
    e.preventDefault();
    scrollController.disabledScroll();
    backdropIsHidden.classList.remove('is-hidden');
};

btnOpenModalWindowTeam.addEventListener('click', openModal);

const closeModal = e => {

    backdropIsHidden.classList.add('is-hidden');
    scrollController.enabledScroll();
};

btnCloseModalWindowTeam.addEventListener('click', closeModal);

function closeModalBackdrop(e) {
    if (e.target.classList.contains('backdrop-team')) {
      closeModal();

    } 
  };

  const closeModalEscape = event => {
if (event.code === 'Escape') {
  closeModal();

}
};
backdropIsHidden.addEventListener('click', closeModalBackdrop);
window.addEventListener('keydown', closeModalEscape);