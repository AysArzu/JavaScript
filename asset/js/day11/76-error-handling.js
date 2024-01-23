document.querySelector("#frmLogin").addEventListener("submit", (e) => {
  e.preventDefault(); //gonderme dedik. kontrol etmemiz lazim

  try {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if (!isEmail(email)) throw "Geçerli bir eposta giriniz";

    if (!password) throw "Lütfen şifrenizi giriniz";

    e.target.submit();
  } catch (error) {
    alert(error);
  }
});
const isEmail = (email) => {
const regex=/\S+@\S+\.\S{2,5}$/; // regex bu araya yazılır==> /  / içindekileri programdan aldık. https://regexr.com
  return regex.test(email);
};

