const selectElement = (element) => document.querySelector(element);

selectElement('.mobile_menu_icon').addEventListener('click', () => {
 selectElement('header').classList.toggle('active');
});


const header = document.querySelector('header');

window.onscroll = ()=>{
    this.scrollY > 20 ? header.classList.add("sticky") : header.classList.remove("sticky");
  }