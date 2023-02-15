//Assignment 1


let aside = document.querySelector('.col-lg-4');
aside.style.overflowY = "scroll";



const line = document.createElement('hr');
line.classList.add('hr-line');

const hd2 = document.createElement('h2');
hd2.innerHTML="This is my custom heading";
hd2.classList.add('new-head');

aside.appendChild(line);

aside.appendChild(hd2);


//Assignment 2
const bgc = document.querySelector('body');

bgc.style.background="#fff";

//Assignment 3

let navIcon = document.querySelector("nav button span");

navIcon.addEventListener("click", (click) => {
  let navItems = document.querySelector("#navbarTogglerDemo01");
  if ((navItems.style.display = "none")) {
    navItems.style.display = "block";
  } else if ((navItems.style.display = "block")) {
    navItems.style.display = "none";
  } else {
    navItems.style.display = "none";
  }
});