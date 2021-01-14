const siteContent = document.querySelectorAll('nav a');
    siteContent[0].textContent = "Services";
    siteContent[1].textContent = "Product";
    siteContent[2].textContent = "Vision";
    siteContent[3].textContent = "Features";
    siteContent[4].textContent = "About";
    siteContent[5].textContent = "Contact";
    console.log('nav a');

    const logoImg = document.querySelector(".logo");
    logoImg.src = "img/logo.png";
  
const topPart = document.querySelector("h1");
    var node = document.createTextNode("DOM \n Is \n Awesome");
    topPart.appendChild(node);

const press = document.querySelector("button");
    var node = document.createTextNode("Get Started");
    press.appendChild(node); 
    
const codePic = document.querySelector("#cta-img");
    codePic.src = "img/header-img.png";
    
const topContent = document.querySelectorAll(".top-content .text-content h4");
  topContent[0].textContent = "Features";
  topContent[1].textContent = "About";

const topText = document.querySelectorAll(".top-content .text-content p");
  topText[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
  topText[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
  /*
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    /*"middle-img-src": "img/mid-page-accent.jpg",*/
    const middlePic = document.querySelector("#middle-img");
    middlePic.src = "img/mid-page-accent.jpg"; 

    const bottomContent = document.querySelectorAll(".bottom-content .text-content h4");
    bottomContent[0].textContent = "Services";
    bottomContent[1].textContent = "Product";
    bottomContent[2].textContent = "Vision";

    const bottomText = document.querySelectorAll(".bottom-content .text-content p");
    bottomText[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
    bottomText[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
    bottomText[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

    /*"services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },*/
const contact = document.querySelector(".contact h4");
  contact.textContent = "Contact";

const address = document.querySelectorAll(".contact p");
  address[0].textContent = "123 Way 456 Street Somewhere, USA";
  address[1].textContent = "1 (888) 888-8888";
  address[2].textContent = "sales@greatidea.io";

  /*"contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};*/
const foot = document.querySelector("footer p");
foot.textContent =  "Copyright Great Idea! 2018";

// Example: Update the img src for the logo
/*let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])*/
