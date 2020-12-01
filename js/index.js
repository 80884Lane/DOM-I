const siteContent = document.querySelectorAll('nav a');
    siteContent[0].textContent = "Services";
    siteContent[1].textContent = "Product";
    siteContent[2].textContent = "Vision";
    siteContent[3].textContent = "Features";
    siteContent[4].textContent = "About";
    siteContent[5].textContent = "Contact";
    
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
    
/*const midText = document.querySelector(".top-content.text-content");
    midText.textContent = "Features";

    "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",*/

const middlePic = document.querySelector("#middle-img");
    middlePic.src = "img/mid-page-accent.jpg"; 
    
    
 /*   "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },*/
/*const contactInfo = document.querySelector(".contact"); 
    var info = document.createTextNode("Contact");
    press.appendChild(info); 

const contactAddress = document.querySelector(".contact p"); 
    var node = document.createTextNode("123 Way 456 Street Somewhere, USA");
    press.appendChild(node); 
    
 const contactPhone = document.querySelector(".contact.children[2]"); 
    var node = document.createTextNode("1 (888) 888-8888");
    press.appendChild(node); 
    
 const contactEmail = document.querySelector(".contact.children[3]"); 
    var node = document.createTextNode("sales@greatidea.io");
    press.appendChild(node); */   

  
  const foot = document.querySelector("footer p")
    foot.textContent =  "Copyright Great Idea! 2018";
    
  


// Example: Update the img src for the logo
/*let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);*/
