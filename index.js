// template_8dp2wge
// service_ippb0pp
// cbM7V2aKMo5f0HbPc

function contact(event) {
    event.preventDefault();
    emailjs
    .sendform(
        'service_ippb0pp',
        'template_8dp2wge',
        event.target,
        'user_cbM7V2aKMo5f0HbPc'
    ).then(() => {
        console.log('this worked1')
    })
    
}