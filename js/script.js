const swiper = new Swiper('.swiper',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});


const isMobile = {
  Android: function(){
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function(){
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function(){
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function(){
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function(){
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function(){
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()){
  document.querySelector("body").classList.add("mobile");
  const MenuArrows = document.querySelectorAll(".arrow__icon");

  MenuArrows.forEach(item => {
    item.addEventListener("click", event =>{
      let Arrow = event.currentTarget;

      Arrow.classList.toggle("active");
      const NavItem = Arrow.closest(".nav__item");
      const SubNav = NavItem.querySelector(".subnav__list");
      SubNav.classList.toggle("active");

    });
  });
}
else  document.querySelector("body").classList.add("pc");




//<================BURGER================================>

const Burger = document.querySelector(".menu__icon");
const Nav = document.querySelector(".nav");

Burger.addEventListener("click", event =>{
  event.currentTarget.classList.toggle("active");
  Nav.classList.toggle("active");
  document.querySelector("body").classList.toggle("active");
});

//<=========================================================>




//<==========================SCROLL========================>

const SectionLinks = document.querySelectorAll(".nav__link[data-goto]");
const SectionSubNavLinks = document.querySelectorAll(".subnav__link[data-goto]");

if (SectionLinks.length > 0){
  SectionLinks.forEach(item => {
    item.addEventListener("click", ScrollToSection);
  });
};

if (SectionSubNavLinks.length > 0){
  SectionSubNavLinks.forEach(item => {
    item.addEventListener("click", ScrollToSection);
  });
};

function ScrollToSection(event){
  const NavLink = event.currentTarget;
  if (NavLink.dataset.goto && document.querySelector(NavLink.dataset.goto)){
    const GoToBlock = document.querySelector(NavLink.dataset.goto);
    const GoToBlockValue = GoToBlock.getBoundingClientRect().top + scrollY - document.querySelector(".header").offsetHeight;
    
    if (Burger.classList.contains("active")){
      Burger.classList.remove("active");
      Nav.classList.remove("active");
      document.querySelector("body").classList.remove("active");
    }

      window.scrollTo({
      top: GoToBlockValue,
      behavior: "smooth",
    });
  }
};
//<================================================================>