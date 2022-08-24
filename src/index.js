const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const contactusBUtton = document.querySelector('.contactus-button');
const bookatableBUtton = document.querySelector('.bookatable-button');
const buttons = document.querySelectorAll('.buttons');

const homeContainer = document.querySelector('.home-container');
const menuContainer = document.querySelector('.menu-container');
const contactusContainer = document.querySelector('.contactus-container');
const bookatableContainer = document.querySelector('.bookatable-container');
const containers = document.querySelectorAll('.containers')

// import './style.css';

function createHomePage(){
  // ------------------------------------------------------Phase 1--------------------------------------------------------
  const header_container = document.createElement('div');
  header_container.classList.add("header-container");
  const header_text = document.createElement('div');
  header_text.classList.add("header-text");
  
  const header_text_h2 = document.createElement('h2');
  header_text_h2.textContent = "Embrace With";

  const header_text_h1 = document.createElement('h1');
  header_text_h1.textContent = "Foody Love";
  
  const header_text_p1 = document.createElement('p');
  header_text_p1.textContent = "THE PERFECT PLACE FOR FOOD LOVER";
  
  const header_text_p2 = document.createElement('p');
  const header_text_a = document.createElement('a');
  header_text_a.textContent = "Book A Table";
  header_text_p2.appendChild(header_text_a);
  header_text_p2.classList.add("purchasenow");
  
  header_text.append(header_text_h2);
  header_text.append(header_text_h1);
  header_text.append(header_text_p1);
  header_text.append(header_text_p2);

  header_container.append(header_text);
  homeContainer.append(header_container);


  // ------------------------------------------------------Phase 2--------------------------------------------------------
  const aboutus_hero = document.createElement('div');
  aboutus_hero.classList.add("aboutus-hero")
  const aboutus_container = document.createElement('div');
  aboutus_container.classList.add("aboutus-container");


  const aboutus_container_img = document.createElement('img');
  aboutus_container_img.classList.add("aboutus-item1");
  aboutus_container_img.src = "https://i.pinimg.com/originals/8d/4c/66/8d4c66c3b50585528c68272e6cc234ae.jpg";
  aboutus_container.append(aboutus_container_img);


  const aboutus_item2 = document.createElement('div');
  aboutus_item2.classList.add("aboutus-item2");

  const aboutus_item2_h3 = document.createElement('h3');
  aboutus_item2_h3.textContent = "About Us";
  const aboutus_item2_h1 = document.createElement('h1');
  aboutus_item2_h1.textContent = "Cooking Since 1990";
  const aboutus_item2_p1 = document.createElement('p');
  aboutus_item2_p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.";
  const aboutus_item2_p2 = document.createElement('p');
  aboutus_item2_p2.classList.add("aboutus-paragraph2");
  aboutus_item2_p2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.";
  const aboutus_item2_a = document.createElement('a');
  aboutus_item2_a.classList.add("bookatable");
  aboutus_item2_a.textContent = "Book A Table";

  aboutus_item2.append(aboutus_item2_h3);
  aboutus_item2.append(aboutus_item2_h1);
  aboutus_item2.append(aboutus_item2_p1);
  aboutus_item2.append(aboutus_item2_p2);
  aboutus_item2.append(aboutus_item2_a);
  aboutus_container.append(aboutus_item2);

  aboutus_hero.append(aboutus_container);
  homeContainer.append(aboutus_hero);



  // ------------------------------------------------------Phase 3--------------------------------------------------------
  // Services-hero
  const services_hero = document.createElement('div');
  services_hero.classList.add("services-hero");

  const services_hero_h1 = document.createElement('h1');
  services_hero_h1.classList.add("servicesh1");
  services_hero_h1.textContent = "Services";
  services_hero.append(services_hero_h1);

  // Service Container
  const services_container = document.createElement('div');
  services_container.classList.add('services-container');

  // Service Item 1
  const services_item1 = document.createElement('div');
  services_item1.classList.add("services-item1");

  const service_item1_img = document.createElement('img');
  service_item1_img.src = "https://thebigmansworld.com/wp-content/uploads/2022/01/healthy-breakfast-recipes.jpeg";
  const service_item1_h2 = document.createElement('h2');
  service_item1_h2.textContent = "Breakfast";
  const service_item1_p = document.createElement('p');
  service_item1_p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa obcaecati accusamus numquam nihil modi velit unde delectus eius architecto facilis fuga voluptatem, animi id ipsa officia labore! Repudiandae, quidem pariatur.";

  services_item1.append(service_item1_img);
  services_item1.append(service_item1_h2);
  services_item1.append(service_item1_p);

  services_container.append(services_item1);
  // services_hero.append(services_container);
  

  // Service Item 2
  const services_item2 = document.createElement('div');
  services_item2.classList.add("services-item2");

  const services_item2_img = document.createElement('img');
  services_item2_img.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lettuce-wraps-1561757630.png";
  const services_item2_h2 = document.createElement('h2');
  services_item2_h2.textContent = "Lunch";
  const services_item2_p = document.createElement('p');
  services_item2_p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui at accusantium, dolores, provident sapiente deserunt beatae quo voluptatibus maxime explicabo consequuntur error laborum, tenetur aperiam aut! Aspernatur iusto incidunt fugiat!";

  services_item2.append(services_item2_img);
  services_item2.append(services_item2_h2);
  services_item2.append(services_item2_p);

  services_container.append(services_item2);


  // Service Item 3
  const services_item3 = document.createElement('div');
  services_item3.classList.add("services-item2");

  const services_item3_img = document.createElement('img');
  services_item3_img.src = "https://www.foodiecrush.com/wp-content/uploads/2019/07/Pomodoro-Sauce-foodiecrush.com-018-500x500.jpg";
  const services_item3_h2 = document.createElement('h2');
  services_item3_h2.textContent = "Dinner";
  const services_item3_p = document.createElement('p');
  services_item3_p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, atque minima. Nulla provident repellendus officiis voluptates sapiente corporis temporibus tempora consectetur reiciendis a, adipisci beatae, qui natus aspernatur aperiam sit?";

  services_item3.append(services_item3_img);
  services_item3.append(services_item3_h2);
  services_item3.append(services_item3_p);

  services_container.append(services_item3);

  services_hero.append(services_container);
  homeContainer.append(services_hero);
}


function createMenuPage(){
  // Menu Hero
  const menu_hero = document.createElement('div');
  menu_hero.classList.add("menu-hero");

  // Menu Container
  const menu_container = document.createElement('div');
  menu_container.classList.add("menu-container");

  // Menu Container h1 and p
  const menu_container_h1 = document.createElement('h1');
  menu_container_h1.classList.add("menu-header-title");
  menu_container_h1.textContent = "Popular Dish";
  const menu_container_p = document.createElement('p');
  menu_container_p.classList.add("menu-header-text");
  menu_container_p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

  menu_container.append(menu_container_h1);
  menu_container.append(menu_container_p);

  // Food Container
  const food_container = document.createElement('div');
  food_container.classList.add("food-container");



  // Food Container Items

  // Food Item 1
  const food_container_item1 = document.createElement('div');
  food_container_item1.classList.add("food");
  food_container_item1.classList.add("food1");

  const food_container_item1_img = document.createElement('img');
  food_container_item1_img.src = "https://wallpaperboat.com/wp-content/uploads/2020/10/23/57820/pasta-02.jpg";
  const food_container_item1_h3 = document.createElement('h3');
  food_container_item1_h3.textContent = "Pasta";
  const food_container_item1_p = document.createElement('p');
  food_container_item1_p.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur porro nobis adipisci molestiae aliquam eligendi blanditiis, consequatur necessitatibus, praesentium pariatur veniam nihil repellendus culpa sit sed ut reiciendis? Magnam.";

  food_container_item1.append(food_container_item1_img);
  food_container_item1.append(food_container_item1_h3);
  food_container_item1.append(food_container_item1_p);

  food_container.append(food_container_item1);
  

  // Food Item 2
  const food_container_item2 = document.createElement('div');
  food_container_item2.classList.add("food");
  food_container_item2.classList.add("food2");

  const food_container_item2_img = document.createElement('img');
  food_container_item2_img.src = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2007%2F02%2F13%2F429048911_6010269155001_6010260911001-vs.jpg";
  const food_container_item2_h3 = document.createElement('h3');
  food_container_item2_h3.textContent = "Chicken Adobo";
  const food_container_item2_p = document.createElement('p');
  food_container_item2_p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tenetur, ratione molestias velit labore vel doloremque nostrum illo, quia, magnam nihil expedita dolorum dicta praesentium sit natus odio odit harum.";

  food_container_item2.append(food_container_item2_img);
  food_container_item2.append(food_container_item2_h3);
  food_container_item2.append(food_container_item2_p);

  food_container.append(food_container_item2);


  // Food Item 3
  const food_container_item3 = document.createElement('div');
  food_container_item3.classList.add("food");
  food_container_item3.classList.add("food3");

  const food_container_item3_img = document.createElement('img');
  food_container_item3_img.src = "https://cdn.wallpapersafari.com/9/88/2hopm0.jpg";
  const food_container_item3_h3 = document.createElement('h3');
  food_container_item3_h3.textContent = "Fried Chicken";
  const food_container_item3_p = document.createElement('p');
  food_container_item3_p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et at facere doloribus totam, veritatis modi dignissimos culpa, id pariatur asperiores provident molestiae sunt iste blanditiis. Maiores asperiores dolorem quam perferendis.";

  food_container_item3.append(food_container_item3_img);
  food_container_item3.append(food_container_item3_h3);
  food_container_item3.append(food_container_item3_p);

  food_container.append(food_container_item3);


  // Food Item 4
  const food_container_item4 = document.createElement('div');
  food_container_item4.classList.add("food");
  food_container_item4.classList.add("food4");

  const food_container_item4_img = document.createElement('img');
  food_container_item4_img.src = "https://images4.alphacoders.com/235/235738.jpg";
  const food_container_item4_h3 = document.createElement('h3');
  food_container_item4_h3.textContent = "Barbeque Steak";
  const food_container_item4_p = document.createElement('p');
  food_container_item4_p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum consequuntur non saepe ipsum voluptas quidem vitae expedita at maiores, voluptatum beatae aliquam ex delectus doloremque illo quasi veniam autem neque!";

  food_container_item4.append(food_container_item4_img);
  food_container_item4.append(food_container_item4_h3);
  food_container_item4.append(food_container_item4_p);

  food_container.append(food_container_item4);


  // Food Item 5
  const food_container_item5 = document.createElement('div');
  food_container_item5.classList.add("food");
  food_container_item5.classList.add("food5");

  const food_container_item5_img = document.createElement('img');
  food_container_item5_img.src = "https://cdn.wallpapersafari.com/15/73/I3A5uW.jpg";
  const food_container_item5_h3 = document.createElement('h3');
  food_container_item5_h3.textContent = "Banana Split";
  const food_container_item5_p = document.createElement('p');
  food_container_item5_p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus, repellat et debitis voluptas ratione officia culpa doloribus maiores quisquam voluptate aliquam quae iste distinctio natus impedit aspernatur magni placeat?";

  food_container_item5.append(food_container_item5_img);
  food_container_item5.append(food_container_item5_h3);
  food_container_item5.append(food_container_item5_p);

  food_container.append(food_container_item5);
  

  // Food Item 6
  const food_container_item6 = document.createElement('div');
  food_container_item6.classList.add("food");
  food_container_item6.classList.add("food6");

  const food_container_item6_img = document.createElement('img');
  food_container_item6_img.src = "https://images.hdqwalls.com/download/hot-spicy-burger-ys-1920x1080.jpg";
  const food_container_item6_h3 = document.createElement('h3');
  food_container_item6_h3.textContent = "Spicy Burger";
  const food_container_item6_p = document.createElement('p');
  food_container_item6_p.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officiis culpa molestiae, laboriosam maxime iure ex adipisci nostrum earum debitis nihil provident veniam, animi, molestias quia fugiat. Impedit, ex perspiciatis.";

  food_container_item6.append(food_container_item6_img);
  food_container_item6.append(food_container_item6_h3);
  food_container_item6.append(food_container_item6_p);

  food_container.append(food_container_item6);

  
  menu_container.append(food_container);
  menu_hero.append(menu_container);
  menuContainer.append(menu_hero);
}

function createContactUsPage(){

  // ContactUs Hero
  const contactus_hero = document.createElement('div');
  contactus_hero.classList.add('contactus-hero');
  contactusContainer.append(contactus_hero);

  // ContactUs Container
  const contactus_container = document.createElement('div');
  contactus_container.classList.add('contactus-container');
  contactus_hero.append(contactus_container);

  // ContactUs Container p and h1
  const contactus_container_p = document.createElement('div');
  contactus_container_p.classList.add('p1');
  contactus_container_p.textContent = "Contact Us";
  contactus_container.append(contactus_container_p);

  const contactus_container_h1 = document.createElement('h1');
  contactus_container_h1.textContent = "Contact Us For Any Query";
  contactus_container.append(contactus_container_h1);


  // ContactUs Info
  const contactus_info = document.createElement('div');
  contactus_info.classList.add('contactus-info');
  contactus_container.append(contactus_info);

  // ContactUs Info Item1
  const contactus_info_item1 = document.createElement('div');
  contactus_info_item1.classList.add('contactus-info-item1');
  contactus_info.append(contactus_info_item1);

  // ContactUs Info Item1 Mini Item1
  const mini_item_1 = document.createElement('div');
  mini_item_1.classList.add('mini-item-1');
  contactus_info_item1.append(mini_item_1);

  // ContactUs Info Item1 Mini Item1 - bg-color-orange 1
  const bg_color_orange_1 = document.createElement('div');
  bg_color_orange_1.classList.add('bg-color-orange');
  mini_item_1.append(bg_color_orange_1);

  const bg_color_orange_1_img = document.createElement('img');
  // bg_color_orange_1_img.src = "../dist/location-dot-solid.svg";
  bg_color_orange_1_img.src = "location-dot-solid.svg";
  bg_color_orange_1.classList.add("img-logo", "img-logo1");
  bg_color_orange_1.append(bg_color_orange_1_img);


  // ContactUs Info Item1 Mini Item1 div1
  const div1 = document.createElement('div');
  mini_item_1.append(div1);

  const div1_h4 = document.createElement('h4');
  div1_h4.classList.add('margin-bottom');
  div1_h4.textContent = "Address";
  div1.append(div1_h4);

  const div1_p = document.createElement('p');
  div1_p.textContent = "204 Yap Quiña, Brgy.1, Victorias City, Negros Occidental, Philippines.";
  div1.append(div1_p);



  // ContactUs Info Item1 Mini Item2
  const mini_item_2 = document.createElement('div');
  mini_item_2.classList.add('mini-item-2');
  contactus_info_item1.append(mini_item_2);

  // ContactUs Info Item1 Mini Item2 - bg-color-orange 2
  const bg_color_orange_2 = document.createElement('div');
  bg_color_orange_2.classList.add('bg-color-orange');
  mini_item_2.append(bg_color_orange_2);

  const bg_color_orange_2_img = document.createElement('img');
  // bg_color_orange_2_img.src = "../dist/mobile-screen-solid.svg";
  bg_color_orange_2_img.src = "mobile-screen-solid.svg";
  bg_color_orange_2.classList.add("img-logo", "img-logo2");
  bg_color_orange_2.append(bg_color_orange_2_img);


  // ContactUs Info Item1 Mini Item2 div2
  const div2 = document.createElement('div');
  mini_item_2.append(div2);

  const div2_h4 = document.createElement('h4');
  div2_h4.classList.add('margin-bottom');
  div2_h4.textContent = "Call Us";
  div2.append(div2_h4);

  const div2_p = document.createElement('p');
  div2_p.textContent = "0916 263 7791";
  div2.append(div2_p);



  // ContactUs Info Item2
  const contactus_info_item2 = document.createElement('div');
  contactus_info_item2.classList.add('contactus-info-item1');
  contactus_info.append(contactus_info_item2);

  // ContactUs Info Item2 Mini Item3
  const mini_item_3 = document.createElement('div');
  mini_item_3.classList.add('mini-item-3');
  contactus_info_item2.append(mini_item_3);

  // ContactUs Info Item2 Mini Item3 - bg-color-orange 3
  const bg_color_orange_3 = document.createElement('div');
  bg_color_orange_3.classList.add('bg-color-orange');
  mini_item_3.append(bg_color_orange_3);

  const bg_color_orange_3_img = document.createElement('img');
  // bg_color_orange_3_img.src = "../dist/envelope-solid.svg";
  bg_color_orange_3_img.src = "envelope-solid.svg";
  bg_color_orange_3.classList.add("img-logo", "img-logo3");
  bg_color_orange_3.append(bg_color_orange_3_img);

  // ContactUs Info Item2 Mini Item3 div3
  const div3 = document.createElement('div');
  mini_item_3.append(div3);

  const div3_h4 = document.createElement('h4');
  div3_h4.classList.add('margin-bottom');
  div3_h4.textContent = "Email Us";
  div3.append(div3_h4);

  const div3_p = document.createElement('p');
  div3_p.textContent = "wdotgonzales@gmail.com";
  div3.append(div3_p);


  // ContactUs Info Item2 Mini Item3
  const mini_item_4 = document.createElement('div');
  mini_item_4.classList.add('mini-item-4');
  contactus_info_item2.append(mini_item_4);

  // ContactUs Info Item2 Mini Item3 - bg-color-orange 3
  const bg_color_orange_4 = document.createElement('div');
  bg_color_orange_4.classList.add('bg-color-orange');
  mini_item_4.append(bg_color_orange_4);

  const bg_color_orange_4_img = document.createElement('img');
  // bg_color_orange_4_img.src = "../dist/share-solid.svg";
  bg_color_orange_4_img.src = "share-solid.svg";
  bg_color_orange_4.classList.add("img-logo", "img-logo4");
  bg_color_orange_4.append(bg_color_orange_4_img);

  // ContactUs Info Item2 Mini Item3 div3
  const div4 = document.createElement('div');
  mini_item_4.append(div4);

  const div4_h4 = document.createElement('h4');
  div4_h4.classList.add('margin-bottom');
  div4_h4.textContent = "Follow Us";
  div4.append(div4_h4);


  const socials_container = document.createElement('div');
  socials_container.classList.add('socials');
  div4.append(socials_container);

  const socials1 = document.createElement('img');
  socials1.classList.add('img-logo','img-logo5');
  // socials1.src = "../dist/twitter-brands.svg";
  socials1.src = "twitter-brands.svg";
  socials_container.append(socials1);

  const socials2 = document.createElement('img');
  socials2.classList.add('img-logo','img-logo6');
  // socials2.src = "../dist/facebook-f-brands.svg";
  socials2.src = "facebook-f-brands.svg";
  socials_container.append(socials2);

  const socials3 = document.createElement('img');
  socials3.classList.add('img-logo','img-logo7');
  // socials3.src = "../dist/youtube-brands.svg";
  socials3.src = "youtube-brands.svg";
  socials_container.append(socials3);

  const socials4 = document.createElement('img');
  socials4.classList.add('img-logo','img-logo8');
  // socials4.src = "../dist/instagram-brands.svg";
  socials4.src = "instagram-brands.svg";
  socials_container.append(socials4);

  const socials5 = document.createElement('img');
  socials5.classList.add('img-logo','img-logo9');
  // socials5.src = "../dist/linkedin-in-brands.svg";
  socials5.src = "linkedin-in-brands.svg";
  socials_container.append(socials5);

  // Map and Form - Hero Container
  const contactus_map_form = document.createElement('div');
  contactus_map_form.classList.add('contactus-map-form');
  contactus_container.append(contactus_map_form);

  // Map Container
  const map_container = document.createElement('div');
  map_container.classList.add('map-container');
  contactus_map_form.append(map_container);

  // Map
  const map = document.createElement('iframe');
  map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.8140736884498!2d123.0717050151344!3d10.901730459848547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af2d2a04110bd9%3A0x68e52bf9725546a7!2sYap%20Qui%C3%B1a%20St%2C%20Victorias%20City%2C%20Negros%20Occidental!5e0!3m2!1sen!2sph!4v1660525608232!5m2!1sen!2sph";
  map.width = "562";
  map.height = "350";
  map.style.border = "0";
  map.allowFullscreen = "";
  map.referrerpolicy="no-referrer-when-downgrade";
  map_container.append(map);

  // Form Container
  const form_container = document.createElement('div');
  form_container.classList.add('form-container');
  contactus_map_form.append(form_container);

  // Form
  const frm = document.createElement('form');
  frm.action = "";
  form_container.append(frm);
  
  const yourName = document.createElement('input');
  yourName.type = "text";
  yourName.placeholder = "Your Name";
  yourName.classList.add('input','input1');
  frm.append(yourName);

  const yourEmail = document.createElement('input');
  yourEmail.type = "email";
  yourEmail.placeholder = "Your Email";
  yourEmail.classList.add('input','input2');
  frm.append(yourEmail);

  const subject = document.createElement('input');
  subject.type = "text";
  subject.placeholder = "Subject";
  subject.classList.add('input','input3');
  frm.append(subject);

  const message = document.createElement('input');
  message.type = "text";
  message.placeholder = "Message";
  message.classList.add('input','input4');
  frm.append(message);

  const divbutton = document.createElement('div');
  frm.append(divbutton);

  const submitBttn = document.createElement('button');
  submitBttn.textContent = "Submit";
  submitBttn.type = "submit";
  divbutton.append(submitBttn);
}

function createBookATablePage(){
  // bookatableContainer <- index container

  // Book A Table Hero
  const bookatable_hero = document.createElement('div');
  bookatable_hero.classList.add('bookatable-hero');
  bookatableContainer.append(bookatable_hero);

  // Book A Table Container
  const bookatable_container = document.createElement('div');
  bookatable_container.classList.add('bookatable-container');
  bookatable_hero.append(bookatable_container);

  // Book A Table Container Item1
  const bookatable_container_item1 = document.createElement('div');
  bookatable_container_item1.classList.add("bookatable-item1");
  bookatable_container.append(bookatable_container_item1);

  // Book A Table Container Item1 p1
  const bookatable_container_item1_p1 = document.createElement('p');
  bookatable_container_item1_p1.classList.add('p1-2');
  bookatable_container_item1_p1.textContent = "Book A Table";
  bookatable_container_item1.append(bookatable_container_item1_p1);

  // Book A Table Container Item1 h1
  const bookatable_container_item1_h1 = document.createElement('h1');
  bookatable_container_item1_h1.textContent = "Book Your Table For Private Dinners & Happy Hours";
  bookatable_container_item1.append(bookatable_container_item1_h1);

  // Book A Table Container Item1 p2
  const bookatable_container_item1_p2 = document.createElement('p');
  bookatable_container_item1_p2.classList.add('p2');
  bookatable_container_item1_p2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.";
  bookatable_container_item1.append(bookatable_container_item1_p2);

  // Book A Table Container Item1 p3
  const bookatable_container_item1_p3 = document.createElement('p');
  bookatable_container_item1_p3.classList.add('p3');
  bookatable_container_item1_p3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.";
  bookatable_container_item1.append(bookatable_container_item1_p3);


  // Book A Table Container Item2
  const bookatable_container_item2 = document.createElement('div');
  bookatable_container_item2.classList.add("bookatable-item2");
  bookatable_container.append(bookatable_container_item2);

  // Book Form
  const bookatable_frm = document.createElement('form');
  bookatable_frm.action = "";
  bookatable_container_item2.append(bookatable_frm);


  // Book Form Div 1
  const bookatable_frm_div1 = document.createElement('div');
  bookatable_frm_div1.classList.add("form-item","form-item1");
  bookatable_frm.append(bookatable_frm_div1);

  const bookatable_frm_div1_label = document.createElement('label');
  const bookatable_frm_div1_label_img = document.createElement('img');
  // bookatable_frm_div1_label_img.src = "../dist/user-regular.svg";
  bookatable_frm_div1_label_img.src = "user-regular.svg";
  bookatable_frm_div1_label_img.classList.add('bookatable-img','bookatable-img1');
  bookatable_frm_div1_label.append(bookatable_frm_div1_label_img);

  bookatable_frm_div1.append(bookatable_frm_div1_label);

  const bookatable_frm_div1_input = document.createElement('input');
  bookatable_frm_div1_input.type = "text";
  bookatable_frm_div1_input.id = "name";
  bookatable_frm_div1_input.placeholder = "Name";
  bookatable_frm_div1_input.style.fontSize = "16px";
  
  bookatable_frm_div1.append(bookatable_frm_div1_input);


  // Book Form Div 2
  const bookatable_frm_div2 = document.createElement('div');
  bookatable_frm_div2.classList.add("form-item","form-item2");
  bookatable_frm.append(bookatable_frm_div2);

  const bookatable_frm_div2_label = document.createElement('label');
  const bookatable_frm_div2_label_img = document.createElement('img');
  // bookatable_frm_div2_label_img.src = "../dist/envelope-solid.svg";
  bookatable_frm_div2_label_img.src = "envelope-solid.svg";
  bookatable_frm_div2_label_img.classList.add('bookatable-img','bookatable-img2');
  bookatable_frm_div2_label.append(bookatable_frm_div2_label_img);

  bookatable_frm_div2.append(bookatable_frm_div2_label);

  const bookatable_frm_div2_input = document.createElement('input');
  bookatable_frm_div2_input.type = "email";
  bookatable_frm_div2_input.id = "email";
  bookatable_frm_div2_input.placeholder = "Email";
  bookatable_frm_div2_input.style.fontSize = "16px";
  
  bookatable_frm_div2.append(bookatable_frm_div2_input);


  // Book Form Div 3
  const bookatable_frm_div3 = document.createElement('div');
  bookatable_frm_div3.classList.add("form-item","form-item3");
  bookatable_frm.append(bookatable_frm_div3);

  const bookatable_frm_div3_label = document.createElement('label');
  const bookatable_frm_div3_label_img = document.createElement('img');
  // bookatable_frm_div3_label_img.src = "../dist/mobile-screen-solid.svg";
  bookatable_frm_div3_label_img.src = "mobile-screen-solid.svg";
  bookatable_frm_div3_label_img.classList.add('bookatable-img','bookatable-img3');
  bookatable_frm_div3_label.append(bookatable_frm_div3_label_img);

  bookatable_frm_div3.append(bookatable_frm_div3_label);

  const bookatable_frm_div3_input = document.createElement('input');
  bookatable_frm_div3_input.type = "tel";
  bookatable_frm_div3_input.id = "number";
  bookatable_frm_div3_input.placeholder = "Number";
  bookatable_frm_div3_input.style.fontSize = "15.9px";
  
  bookatable_frm_div3.append(bookatable_frm_div3_input);


  // Book Form Div 3.5
  const bookatable_frm_div4 = document.createElement('div');
  bookatable_frm_div4.classList.add("form-item","form-item4");
  bookatable_frm.append(bookatable_frm_div4);

  const bookatable_frm_div4_input = document.createElement('input');
  bookatable_frm_div4_input.type = "date";
  bookatable_frm_div4_input.id = "date";
  bookatable_frm_div4_input.placeholder = "Date";
  bookatable_frm_div4_input.style.fontSize = "16px";
  
  bookatable_frm_div4.append(bookatable_frm_div4_input);



  // Book Form Div 5
  const bookatable_frm_div5 = document.createElement('div');
  bookatable_frm_div5.classList.add("form-item","form-item5");
  bookatable_frm.append(bookatable_frm_div5);

  const bookatable_frm_div5_label = document.createElement('label');
  const bookatable_frm_div5_label_img = document.createElement('img');
  // bookatable_frm_div5_label_img.src = "../dist/clock-regular.svg";
  bookatable_frm_div5_label_img.src = "clock-regular.svg";
  bookatable_frm_div5_label_img.classList.add('bookatable-img','bookatable-img4');
  bookatable_frm_div5_label.append(bookatable_frm_div5_label_img);

  bookatable_frm_div5.append(bookatable_frm_div5_label);

  const bookatable_frm_div5_input = document.createElement('input');
  bookatable_frm_div5_input.type = "text";
  bookatable_frm_div5_input.id = "time";
  bookatable_frm_div5_input.placeholder = "Time";
  bookatable_frm_div5_input.style.fontSize = "16px";
  
  bookatable_frm_div5.append(bookatable_frm_div5_input);


  // Book Form Button
  const bookatable_button = document.createElement('button');
  bookatable_button.textContent = "Book Now";
  bookatable_button.type = "submit";
  bookatable_button.classList.add('booknow');
  bookatable_frm.append(bookatable_button);
  


}


// const homeButton = document.querySelector('.home-button');
// const menuButton = document.querySelector('.menu-button');
// const contactusBUtton = document.querySelector('.contactus-button');
// const bookatableBUtton = document.querySelector('.bookatable-button');
// const buttons = document.querySelectorAll('.buttons');

// const homeContainer = document.querySelector('.home-container');
// const menuContainer = document.querySelector('.menu-container');
// const contactusContainer = document.querySelector('.contactus-container');
// const bookatableContainer = document.querySelector('.bookatable-container');
// const containers = document.querySelectorAll('.containers')



function tabSwitchPage(){
  createHomePage();
  createMenuPage();
  createContactUsPage();
  createBookATablePage();

  // Default
  homeContainer.classList.add('active');
  menuContainer.classList.add('inactive');
  contactusContainer.classList.add('inactive');
  bookatableContainer.classList.add('inactive');

  // Home Button
  homeButton.addEventListener('click',() => {
    homeContainer.classList.remove('inactive');
    homeContainer.classList.add('active')
    menuContainer.classList.add('inactive');
    contactusContainer.classList.add('inactive');
    bookatableContainer.classList.add('inactive');
  })

  // Menu Button
  menuButton.addEventListener('click',() => {
    homeContainer.classList.add('inactive');
    menuContainer.classList.remove('inactive');
    menuContainer.classList.add('active');
    contactusContainer.classList.add('inactive');
    bookatableContainer.classList.add('inactive');
  })

  // Contact Us
  contactusBUtton.addEventListener('click',() => {
    homeContainer.classList.add('inactive');
    menuContainer.classList.add('inactive');
    contactusContainer.classList.remove('inactive');
    contactusContainer.classList.add('active');
    bookatableContainer.classList.add('inactive');
  })

  // Book A Table
  bookatableBUtton.addEventListener('click',() => {
    homeContainer.classList.add('inactive');
    menuContainer.classList.add('inactive');
    contactusContainer.classList.add('inactive');
    bookatableContainer.classList.remove('inactive');
    bookatableContainer.classList.add('active');
  })

}

tabSwitchPage();
