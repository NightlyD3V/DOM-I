const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "mainContent": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//            NAVIGATION
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('a');
const navItemsArray = Array.from(navItems);
//console.log(navItems);
const jasonNav = siteContent.nav;
// console.log(jasonNav);
const navValues = Object.entries(jasonNav);
//              LOOP
navItemsArray.forEach((element, index, array) => {
  //  json nav [index] is not an array
  element.textContent = navValues[index][1]; 
  element.className = navValues[index][0];
  console.log(array);
  // console.log({'nav': 'item'}.nav);
  // console.log(jasonNav['nav-item-1']);
  // navItems.className = jasonNav[index].key;
});
// console.log(navItems);
// console.log(navItemsArray);
// navItems.append(navValues[i]);
// console.log(navItemsArray);

//            CTA 
const cta = siteContent.cta;
const ctaArray = Array.from(cta);
ctaValues = Object.entries(cta);
console.log(cta);
//          POINTERS
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const img = document.getElementById('cta-img');
//        MANIPULATION
h1.textContent = ctaValues[0][1];
button.textContent = ctaValues[1][1];
img.src = 'img/header-img.png';

//        MAIN CONTENT 
const mainContent = siteContent.mainContent; //had to change json name is there a way to do it without doing that?
const mainContentArray = Array.from(mainContent);
const mainContentValues = Object.entries(mainContent);
//          POINTERS
const allH4 = document.querySelectorAll('h4');
//            LOOP
const h4Array = [];
const filter = mainContentArray.filter((element, index) => {
      if(element.includes('-h4')) {
        h4Array.push(element[index]);
        console.log('contains h4');
      }
});
console.log(h4Array);
console.log(mainContent);
console.log(mainContentArray);
// allH4.forEach((element,index) => {
//   element.textContent = mainContentValues[index][1];
// });