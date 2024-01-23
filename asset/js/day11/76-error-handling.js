document.querySelector('#frmLogin').addEventListener('submit',(e)=>{

  e.preventDefault();//gonderme dedik. kontrol etmemiz lazim
    console.log(e.target);
  const email = document.querySelector('email').value;
  const password = document.querySelector('password').value;
if(!isEmail(email)){
  alert('Geçerli bir eposta giriniz');
  return;
}
if(!password){
alert('Lütfen şifrenizi giriniz');
return;
}


  try {
    
  } catch (error) {
    
  }
  alert('SUBMIT YAPILDI');

});
const isEmail=(email)=>{
  //email kontrol işlemleri
return true;
}