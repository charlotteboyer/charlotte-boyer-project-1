// credit to https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0 -  for tutorial 
//PsEuDo CoDe
//1. display a hamburger icon that users can click in mobile view to see the menu
//2. when icon is clicked menu appears 
//3. when each item in the menu is clicked, link takes us to that page
//4. when items are hovered over, color changes 

const menu = document.querySelector("ul");

const hamburgerButton = document.querySelector("button");
console.log(hamburgerButton);

hamburgerButton.addEventListener('click', function(){
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
    }else {
        menu.classList.add('showMenu');
    }  
})
