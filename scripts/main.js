let putanja = window.location.pathname;

if (putanja == "/" || putanja == "/index.html") {
  console.log("index");
  index();
}
if (putanja == "/pricing.html") {
  console.log("pricing");
  pricing();
}
if (putanja == "/contact.html") {
  console.log("contact");
  contact();
}
if (putanja == "/about.html") {
  console.log("about");
  about();
}
if (putanja == "/author.html") {
  console.log("author");
  author();
}
function navigacija() {
  let navbar = document.querySelector("nav");

  let navbarInfo = [
    ["Početna", "index.html"],
    ["O nama", "about.html"],
    ["Cenovnik", "pricing.html"],
    ["Kontakt", "contact.html"],
    ["O autoru", "author.html"],
  ];

  let navbarWrap = document.createElement("div");
  navbarWrap.setAttribute("class", "container");

  let navbarBrand = document.createElement("a");
  navbarBrand.setAttribute("class", "dark-color navbar-brand secondary-font");
  navbarBrand.setAttribute("href", "index.html");
  let brandText = document.createTextNode("Juliet B.C.");
  navbarBrand.appendChild(brandText);
  let navbarToggler = document.createElement("button");
  navbarToggler.setAttribute("class", "navbar-toggler");
  navbarToggler.setAttribute("type", "button");
  let navbarTogglerIcon = document.createElement("span");
  navbarTogglerIcon.setAttribute("class", "navbar-toggler-icon");
  navbarToggler.appendChild(navbarTogglerIcon);

  let navbarNav = document.createElement("div");
  navbarNav.setAttribute("class", "collapse navbar-collapse");
  navbarNav.setAttribute("id", "navbarNavDropdown");
  let navbarUl = document.createElement("ul");
  navbarUl.setAttribute("class", "navbar-nav text-uppercase mx-4 small");
  for (let i in navbarInfo) {
    let liItem = document.createElement("li");
    liItem.setAttribute("class", "nav-item mx-2");
    let navLink = document.createElement("a");
    navLink.setAttribute("class", "nav-link text-dark");
    navLink.setAttribute("href", navbarInfo[i][1]);
    let itemText = document.createTextNode(navbarInfo[i][0]);
    navLink.appendChild(itemText);
    if (putanja.includes(navbarInfo[i][1])) {
      navLink.classList.add("active");
    }
    navLink.appendChild(itemText);
    liItem.appendChild(navLink);
    navbarUl.appendChild(liItem);
  }
  navbarNav.appendChild(navbarUl);

  let btnNav = document.createElement("div");
  btnNav.setAttribute("class", "btn-nav justify-content-end");
  let btnLink = document.createElement("a");
  btnLink.setAttribute("href", "contact.html");
  btnLink.setAttribute("class", "primary-btn");
  let btnText = document.createTextNode("Zakaži");
  btnLink.appendChild(btnText);
  btnNav.appendChild(btnLink);
  navbar.innerHTML = "";
  navbarWrap.appendChild(navbarBrand);
  navbarWrap.appendChild(navbarToggler);
  navbarWrap.appendChild(navbarNav);
  navbarWrap.appendChild(btnNav);
  navbar.appendChild(navbarWrap);

  $(document).ready(() => {
    $(".navbar-toggler").click(() => {
      $("#navbarNavDropdown").slideToggle();
    });
  });
  let pom = false;
  window.addEventListener("scroll", () => {
    let height = window.scrollY;

    if (height > 700 && !pom) {
      pom = true;
      navbar.classList.add("position-fixed");
      navbar.classList.add("bg-light");
      navbar.classList.remove("position-absolute");
    } else if (height < 700 && pom) {
      pom = false;
      navbar.classList.remove("position-fixed");
      navbar.classList.add("position-absolute");
      navbar.classList.remove("bg-light");
    }
  });
}

function galerija() {
  let galleryWrap = document.getElementById("galleryWrap");

  let galleryInfo = [
    "gallery-1.jpg",
    "gallery-3.jpg",
    "gallery-2.jpg",
    "gallery-6.jpg",
    "gallery-4.jpg",
    "gallery-5.jpg",
    "gallery-7.jpg",
    "gallery-10.jpg",
    "gallery-8.jpg",
    "gallery-11.jpg",
    "gallery-9.jpg",
    "gallery-12.jpg",
  ];

  let galleryHTML = ``;

  for (let i = 6; i <= 12; i += 6) {
    galleryHTML += `<div class="row">`;
    for (let j = i - 6; j < i; j++) {
      galleryHTML += `<div class="col-lg-2 col-md-4 col-6 p-0">
                        <a href="img/${galleryInfo[j]}" data-lightbox="gallery"  data-title="My caption">
                            <img src="img/${galleryInfo[j]}" alt="img" class="img-fluid" />
                        </a>
                    </div>`;
    }
    galleryHTML += `</div>`;
  }
  galleryWrap.innerHTML = "";
  galleryWrap.innerHTML = galleryHTML;
}
function price(sort = "all") {
  let pricingPlan = document.querySelector("#pricingPlan");
  let prvaKolona = [
    "col-lg-4 col-md-12 mb-lg-0 mb-md-5 mb-0",
    "Juliet B.C.",
    "CENE USLUGA",
    `Trudili smo se da odnos cene i kvaliteta bude jako dobar. Postite
      nas i sami se uverite u to.`,
  ];
  let ceneHTML = `<div class="${prvaKolona[0]}">
                      <h5 class="text-muted p-font small">${prvaKolona[1]}</h5>
                      <h2 class="primary-font text-uppercase">${prvaKolona[2]}</h2>
                      <hr class="w-5" />
                      <p class="p-font mb-4">
                          ${prvaKolona[3]}
                      </p>
                      <a href="#" class="primary-btn price-sort">SORTIRAJ JEFTINIJE</a>
                  </div>`;

  let drugaTrecaKolona = [
    ["col-lg-4 col-md-6 my-sm-0 my-5", "col-lg-4 col-md-6"],
    ["ŠIŠANJE", "6-22", "Cena zavisi od dužine kose."],
    ["FENIRANJE", "7-15", "Cena zavisi od dužine kose."],
    ["FARBANJE", "30-60", "Cena zavisi od dužine kose."],
    ["ŠIŠANJE I FENIRANJE", "8-14", "Cena zavisi od dužine kose."],
    ["BALAYAGE", "40-70", "Cena zavisi od dužine kose."],
    [
      "MANIKIR",
      "10",
      "Sređivanje zanoktica, oblikovanje noktiju, piling i masaža ruku.",
    ],
    ["PEDIKIR", "20", "Sređivanje noktiju, zanoktica, kože stopala, masaža."],
    ["QUEEN TRETMAN", "40", "Istovremeno manikir i pedikir."],
  ];

  if (sort != "all") {
    if (sort == "high") {
      drugaTrecaKolona.sort((a, b) => parseInt(b[1]) - parseInt(a[1]));
    } else {
      drugaTrecaKolona.sort((a, b) => parseInt(a[1]) - parseInt(b[1]));
    }
  }

  for (let i = 4; i <= 8; i += 4) {
    ceneHTML += `<div class="${drugaTrecaKolona[0][i / 4 - 1]}">`;

    for (let j = i - 4 + 1; j < i; j++) {
      ceneHTML += `<h4 class="primary-font text-uppercase h5">${drugaTrecaKolona[j][0]} - $${drugaTrecaKolona[j][1]}</h4>
      <p class="p-font text-muted">${drugaTrecaKolona[j][2]}</p>`;
    }

    ceneHTML += `</div>`;
  }
  pricingPlan.innerHTML = ceneHTML;
  $(document).ready(function () {
    $("#pricing .price-sort").click(function (e) {
      e.preventDefault();
      price("low");
    });
  });
}

function price2(sort = "all") {
  let pricingPlan = document.querySelector("#pricingPlan2");

  let drugaTrecaKolona = [
    ["col-lg-4 col-md-6 my-sm-0 my-5 ", "col-lg-4 col-md-6"],
    [
      "KOREKCIJA GELA",
      "15-20",
      "U zavisnosti da li je prepravka našeg ili tuđeg rada.",
    ],
    [
      "manikir + opi",
      "13",
      "Sređivanje zanoktica, masaža ruku hranljivom OPI kremom.",
    ],
    [
      "pedikir + opi",
      "20",
      "Sređivanje zanoktica, masaža stopala hranljivom OPI kremom.",
    ],
    ["profesionalno šminkanje", "40", "Za sve prilike."],
    [
      "nadogradnja noktiju",
      "15-20",
      "Sređivanje zanoktica, lepljenje i oblikovanje tipsi.",
    ],
    [
      "IZLIVANJE NOKTIJU",
      "20-30",
      "Sređivanje zanoktica, izlivanje i oblikovanje noktiju.",
    ],
    [
      "MANIKIR + GEL LAK",
      "15",
      "Sređivanje zanoktica, oblikovanje noktiju, gel.",
    ],
    [
      "profesionalno šminkanje",
      "40",
      "Sređivanje zanoktica, lakiranje noktiju.",
    ],
  ];
  if (sort != "all") {
    if (sort == "high") {
      drugaTrecaKolona.sort((a, b) => parseInt(b[1]) - parseInt(a[1]));
    } else {
      drugaTrecaKolona.sort((a, b) => parseInt(a[1]) - parseInt(b[1]));
    }
  }

  let ceneHTML = ``;
  for (let i = 4; i <= 8; i += 4) {
    ceneHTML += `<div class="${drugaTrecaKolona[0][i / 4 - 1]}">`;

    for (let j = i - 4 + 1; j < i; j++) {
      ceneHTML += `<h4 class="primary-font text-uppercase h5">${drugaTrecaKolona[j][0]} - $${drugaTrecaKolona[j][1]}</h4>
      <p class="p-font text-muted">${drugaTrecaKolona[j][2]}</p>`;
    }

    ceneHTML += `</div>`;
  }
  let prvaKolona = [
    "col-lg-4 col-md-12 mb-lg-0 mb-md-5 mb-0",
    "Juliet B.C.",
    "CENE USLUGA",
    `Trudili smo se da odnos cene i kvaliteta bude jako dobar. Postite
      nas i sami se uverite u to.`,
  ];
  ceneHTML += `<div class="${prvaKolona[0]}">
                      <h5 class="text-muted p-font small">${prvaKolona[1]}</h5>
                      <h2 class="primary-font text-uppercase">${prvaKolona[2]}</h2>
                      <hr class="w-5" />
                      <p class="p-font mb-4">
                          ${prvaKolona[3]}
                      </p>
                      <a href="#" class="price-sort primary-btn">SORTIRAJ SKUPLJE</a>
                  </div>`;
  pricingPlan.innerHTML = ceneHTML;

  $(document).ready(function () {
    $("#pricing-2 .price-sort").click(function (e) {
      e.preventDefault();
      price2("high");
    });
  });
}

function working() {
  let workingHours = [
    "Ponedeljak - Petak - 09:00 - 21:00",
    "Subota - 09:00 - 18:00",
    "Nedelja - 09:00 - 14:00",
  ];

  let hoursHTML = ``;
  for (let i in workingHours) {
    hoursHTML += `<p class="p-font w-75 mx-auto">
                        ${workingHours[i]}
                 </p>`;
  }
  document.querySelector(".working-hours").innerHTML = hoursHTML;
  let vreme = new Date();
  let dan = vreme.getDay();
  let sati = vreme.getHours();
  if (dan == 6) {
    if (sati >= 9 && sati <= 18) {
      document
        .querySelectorAll(".working-hours p")[1]
        .classList.add("text-success");
      workingText.classList.add("text-success");
      workingText.innerHTML = "Radimo, svratite!";
    } else {
      document
        .querySelectorAll(".working-hours p")[1]
        .classList.add("text-danger");
      workingText.classList.add("text-danger");
      workingText.innerHTML = "Ne radimo trenutno, vidimo se sutra!";
    }
  } else if (dan >= 1 && dan <= 5) {
    if (sati >= 9 && sati <= 21) {
      document
        .querySelectorAll(".working-hours p")[0]
        .classList.add("text-success");
      workingText.classList.add("text-success");
      workingText.innerHTML = "Radimo, svratite!";
    } else {
      document
        .querySelectorAll(".working-hours p")[0]
        .classList.add("text-danger");
      workingText.classList.add("text-danger");
      workingText.innerHTML = "Ne radimo trenutno, vidimo se sutra!";
    }
  } else if (dan == 0) {
    if (sati >= 9 && sati <= 16) {
      document
        .querySelectorAll(".working-hours p")[2]
        .classList.add("text-success");
      workingText.classList.add("text-success");
      workingText.innerHTML = "Radimo, svratite!";
    } else {
      document
        .querySelectorAll(".working-hours p")[2]
        .classList.add("text-danger");
      workingText.classList.add("text-danger");
      workingText.innerHTML = "Ne radimo trenutno, vidimo se sutra!";
    }
  }
}

function footer() {
  let inkoniceInfo = [
    [
      "https://instagram.com",
      "px-4 text-muted h6 border-start border-end",
      "akar-icons:instagram-fill",
    ],
    [
      "sitemap.xml",
      "px-4 text-muted h6 border-start border-end",
      "cil:sitemap",
    ],
    [
      "documentation.pdf",
      "px-4 text-muted h6 border-start border-end",
      "fluent-mdl2:documentation",
    ],
    [
      "css/style.min.css",
      "px-4 text-muted h6 border-start border-end",
      "fontisto:css3",
    ],
  ];

  let ikoniceHTML = ``;

  for (let i in inkoniceInfo) {
    ikoniceHTML += `<a
                        href="${inkoniceInfo[i][0]}"
                        target="blank"
                        class="${inkoniceInfo[i][1]}"
                    >
                        <span
                        class="iconify"
                        data-icon="${inkoniceInfo[i][2]}"
                        ></span> </a>`;
  }
  footerIcons.innerHTML = ikoniceHTML;

  let aboutInfo = [
    "Adresa: Beograd 11, 11000",
    "Telefon: +381 69 1483 399",
    "Pišite nam: test&#64;gmail&#46;com",
  ];

  let infoHTML = ``;

  for (let i in aboutInfo) {
    infoHTML += `<p class="text-muted p-font">${aboutInfo[i]}</p>`;
  }

  footerInfo.innerHTML = infoHTML;

  footerSubmit.addEventListener("click", () => {
    let footerForma = document.footerForm;
    regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let brGresaka = 0;
    if (!regEmail.test(footerForma.email.value)) {
      footerMessage.innerHTML = "Loše unet email";
      footerForma.email.classList.add("border-danger");
      brGresaka++;
    } else {
      footerMessage.innerHTML = "";
      footerForma.email.classList.remove("border-danger");
    }
    if (brGresaka == 0) {
      footerMessage.classList.remove("text-danger");
      footerMessage.classList.add("text-success");
      footerForma.reset();
      footerMessage.innerHTML = "Uspesno ste se prijvaili za letter";
      setTimeout(() => {
        footerMessage.innerHTML = "";
      }, 5000);
    }
  });
}

function workers() {
  $(document).ready(() => {
    $("#workers").hide();

    workersToggle.addEventListener("click", (e) => {
      e.preventDefault();
      $("#workers").slideToggle();
    });
  });

  let workerOneInfo = [
    "staff-1.jpg",
    "Marija Perić",
    `Marija je pravi proesionalac u svom poslu. Sa sigurnošću joj
        možete prepustiti svoju kosu i postići efekat kakav želite.`,

    [
      "akar-icons:instagram-fill",
      "entypo-social:facebook",
      "akar-icons:pinterest-fill",
      "akar-icons:linkedin-box-fill",
    ],
    [
      "https://www.facebook.com",
      "https://www.facebook.com",
      "https://www.facebook.com",
      "https://www.facebook.com",
    ],
  ];

  let workerOneHTML = `<div class="col-sm-6 p-0">
                        <img src="img/${workerOneInfo[0]}" class="img-fluid" alt="img" />
                        </div>
                        <div
                        class="col-sm-6 p-sm-0 bg-light py-5 d-flex justify-content-center align-items-center"
                        >
                        <div class="text-center">
                            <h5 class="text-muted p-font small">Juliet B.C.</h5>
                            <h2 class="primary-font text-uppercase">${workerOneInfo[1]}</h2>
                            <hr class="w-50 mx-auto" />
                            <p class="p-font w-75 mx-auto">
                            ${workerOneInfo[2]}
                            </p>
                            <div class="d-flex justify-content-center">`;
  for (let i in workerOneInfo[3]) {
    workerOneHTML += `<a
                            href="${workerOneHTML[4][i]}"
                            class="px-sm-4 px-3 text-dark h6 border-start border-end"
                        >
                            <span
                            class="iconify"
                            data-icon="${workerOneInfo[3][i]}"
                            ></span>
                        </a>`;
  }
  workerOneHTML += `</div>
                    </div>
                    </div>`;
  workerOne.innerHTML = workerOneHTML;

  let workerTwoInfo = [
    "staff-2.jpg",
    "Nikolina Jovanović",
    `Nikolina je vredna i pažljiva i pravi perfekcionista u crtanju
    frencha i sređivanju Vaših zanoktica. Ako želite prelepe nokte,
    koji su brzo gotovi Nikolina je pravi izbor za Vas!`,

    [
      "akar-icons:instagram-fill",
      "entypo-social:facebook",
      "akar-icons:pinterest-fill",
      "akar-icons:linkedin-box-fill",
    ],
    [
      "https://www.facebook.com",
      "https://www.facebook.com",
      "https://www.facebook.com",
      "https://www.facebook.com",
    ],
  ];

  workerTwoHTML = `<div class="col-sm-6 p-sm-0 py-5 bg-light d-flex justify-content-center align-items-center">
                    <div class="text-center">
                        <h5 class="text-muted p-font small">Juliet B.C.</h5>
                        <h2 class="primary-font text-uppercase">Nikolina Jovanović</h2>
                        <hr class="w-50 mx-auto" />
                        <p class="p-font w-75 mx-auto">
                        Nikolina je vredna i pažljiva i pravi perfekcionista u crtanju
                        frencha i sređivanju Vaših zanoktica. Ako želite prelepe nokte,
                        koji su brzo gotovi Nikolina je pravi izbor za Vas!
                        </p>
                        <div class="d-flex justify-content-center">`;
  for (let i in workerOneInfo[3]) {
    workerTwoHTML += `<a
                            href="${workerTwoHTML[4][i]}"
                            class="px-sm-4 px-3 text-dark h6 border-start border-end"
                        >
                            <span
                            class="iconify"
                            data-icon="${workerTwoInfo[3][i]}"
                            ></span>
                        </a>`;
  }
  workerTwoHTML += `</div>
                    </div>
                    </div>
                    <div class="col-sm-6 p-0">
                    <img src="img/staff-2.jpg" class="img-fluid" alt="img" />
                    </div>`;
  workerTwo.innerHTML = workerTwoHTML;
}

function testimonials() {
  let testimonialsInfo = [
    [
      `Svaka preporuka za frizerske usluge, uvek ispunite moja
          očekivanja.`,
      `Maja Marković`,
    ],
    [
      `Pelep ambijent i izuzetno stručno osoblje, sve preporuke!`,
      `Marina Savić`,
    ],
    [
      `Trudim se da izdvojim bar jedan dan u mesecu i da dođem na
      ulepšavanje kod Vas, jako sam zadovoljna svim uslugama!`,
      `Ana Jović`,
    ],
  ];
  let testimonialsHTML = ``;

  testimonialsHTML += `<div class="testimonials-item ">
                        <p class="p-font text-center">
                            ${testimonialsInfo[0][0]}
                        </p>
                        <p class="text-uppercase text-second p-font text-center">
                        - ${testimonialsInfo[0][1]}
                        </p>
                    </div>`;

  var tren = 0;
  let testimonialsWrap = document.getElementById("testimonialsWrap");
  setInterval(() => {
    tren++;
    testimonialsHTML = `<div class="testimonials-item ">
                        <p class="p-font text-center">
                            ${testimonialsInfo[tren][0]}
                        </p>
                        <p class="text-uppercase text-second p-font text-center">
                        - ${testimonialsInfo[tren][1]}
                        </p>
                    </div>`;

    if (tren == 2) tren = -1;
    testimonialsWrap.innerHTML = testimonialsHTML;
  }, 4000);
  testimonialNext.addEventListener("click", () => {
    tren++;
    testimonialsHTML = `<div class="testimonials-item ">
    <p class="p-font text-center">
        ${testimonialsInfo[tren][0]}
    </p>
    <p class="text-uppercase text-second p-font text-center">
    - ${testimonialsInfo[tren][1]}
    </p>
</div>`;
    if (tren == 2) tren = -1;
    testimonialsWrap.innerHTML = testimonialsHTML;
  });
  testimonialPrev.addEventListener("click", () => {
    if (tren <= 0) tren = 3;

    tren--;
    testimonialsHTML = `<div class="testimonials-item ">
    <p class="p-font text-center">
        ${testimonialsInfo[tren][0]}
    </p>
    <p class="text-uppercase text-second p-font text-center">
    - ${testimonialsInfo[tren][1]}
    </p>
</div>`;

    testimonialsWrap.innerHTML = testimonialsHTML;
  });
  testimonialsWrap.innerHTML = testimonialsHTML;
}

function contactForm() {
  contactSubmit.addEventListener("click", () => {
    let forma = document.forms[0];
    let brGresaka = 0;

    let proveraIme = /^[A-Z][a-z]{2,14}\s[A-Z][a-z]{2,14}$/;
    let proveraBroj = /^\+3816[0-9]{7,8}$/;
    if (!proveraIme.test(forma.name.value)) {
      brGresaka++;
      forma.name.nextElementSibling.innerHTML =
        "Loš unos imena. Primer: Pera Perić";
    } else {
      forma.name.nextElementSibling.innerHTML = "";
    }
    if (!proveraBroj.test(forma.number.value)) {
      brGresaka++;
      forma.number.nextElementSibling.innerHTML =
        "Loš unos broja. Primer: +381691234823";
    } else {
      forma.number.nextElementSibling.innerHTML = "";
    }
    if (forma.service.selectedIndex == 0) {
      brGresaka++;
      forma.service.nextElementSibling.innerHTML = "Niste izabrali uslugu";
    } else {
      forma.service.nextElementSibling.innerHTML = "";
    }
    if (forma.payment.value == "") {
      brGresaka++;
      paymentError.innerHTML = "Niste izabrali nacin placanja";
    } else {
      paymentError.innerHTML = "";
    }
    if (forma.message.value == "") {
      brGresaka++;
      forma.message.nextElementSibling.innerHTML = "Morate uneti poruku";
    } else {
      forma.message.nextElementSibling.innerHTML = "";
    }
    if (!forma.terms.checked) {
      brGresaka++;
      forma.terms.nextElementSibling.nextElementSibling.innerHTML =
        "Morate uneti poruku";
    } else {
      forma.terms.nextElementSibling.nextElementSibling.innerHTML = "";
    }
    if (brGresaka == 0) {
      formSuccess.innerHTML = "Uspesno ste poslali poruku!";
      forma.reset();
      setTimeout(() => {
        formSuccess.innerHTML = "";
      }, 3000);
    }
  });
}

function cover() {
  let coverInfo = ["test-3.jpg", "test-5.jpg", "test-2.jpg"];

  let coverHTML = ``;

  for (let i in coverInfo) {
    coverHTML += `<div class="cover-item d-none">
                    <div class="white-overlay"></div>
                    <img src="img/${coverInfo[i]}" class="d-block w-100" alt="cover img 1" />
                  </div>`;
  }
  carouselWrap.innerHTML = coverHTML;

  let coverItems = document.querySelectorAll(".cover-item");
  coverItems[0].classList.remove("d-none");
  var tren = 0;
  setInterval(() => {
    tren++;
    for (let i = 0; i < coverItems.length; i++) {
      if (i == tren) {
        coverItems[i].classList.remove("d-none");
      } else {
        coverItems[i].classList.add("d-none");
      }
    }
    if (tren == 2) tren = -1;
  }, 3000);
}

function index() {
  navigacija();
  galerija();
  working();
  price();
  workers();
  cover();
  testimonials();
  footer();
}

function about() {
  navigacija();
  galerija();
  working();
  footer();
}
function pricing() {
  price();
  price2();
  navigacija();
  $(document).ready(() => {
    $("#modalPlay").click((e) => {
      e.preventDefault();
      $("#staticBackdrop").modal("show");
    });
  });
  footer();
}
function contact() {
  navigacija();
  galerija();
  contactForm();
  footer();
}
function author() {
  navigacija();
  footer();
}
