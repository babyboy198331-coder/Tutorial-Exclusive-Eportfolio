// template_8dp2wge
// service_ippb0pp
// cbM7V2aKMo5f0HbPc

 function contact(event) {
    event.preventDefault();
 const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');



   emailjs
    .sendform(
        'service_ippb0pp',
        'template_8dp2wge',
        event.target,
        'user_cbM7V2aKMo5f0HbPc'
 )      .then(() => {
    throw new ERROR("error");
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
 }).catch(() => {
 loading.classList.remove("modal__overlay--visible")
 alert(
  "the email service is temporarily unavailable. Please contact me directly on babyboy198331@gmail.com"
 );

 })

    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
  
    console.log('this worked1')
    }, 500);
  }