// template_8dp2wge
// service_ippb0pp
// cbM7V2aKMo5f0HbPc

let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
  document.body.classList += " dark-theme"
}
  else {
document.body.classList.remove("dark-theme")
  }
}
function contact(event) {
  event.preventDefault();
  
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  
  // Show loading state
  loading.classList.add('modal__overlay--visible');
  
  emailjs
    .sendForm(
      'service_ippb0pp',
      'template_8dp2wge',
      event.target,
      'cbM7V2aKMo5f0HbPc'
    )
    .then(() => {
      loading.classList.remove('modal__overlay--visible');
      success.classList.add('modal__overlay--visible');
    })
    .catch(() => {
      loading.classList.remove('modal__overlay--visible');
      alert(
        'The email service is temporarily unavailable. Please contact me directly on babyboy198331@gmail.com'
      );
    });
}
    let isModalOpen = false;
    function toggleModal() {
      window.scrollTo(0, 0);
      if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");

      }
   isModalOpen = true;
   document.body.classList += " modal--open";
    }
    
 


