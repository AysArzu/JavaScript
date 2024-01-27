document.querySelector('nav.menu').addEventListener('mouseenter',(e)=>{
e.target.classList.add('opened');/* uzerine gelince menu acildi */
});
document.querySelector('nav.menu').addEventListener('mouseleave',(e)=>{
e.target.classList.remove('opened'); /* uzerinden fareyi cekince menu kapandi */
});