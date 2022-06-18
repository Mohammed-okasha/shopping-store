/*
[Access Elements]
- Toggle btn Open & Close Style
- Open And Close Nav Menu
*/
const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");

toggle.addEventListener("click", activeItem);

// Active Item Function > To DO Things
function activeItem () {
    !toggle.classList.contains("active") ?
    toggle.classList.add("active")
    :toggle.classList.remove("active");

    // Add active To Class Nav Menu
    navMenu.classList.toggle("active");
};
//=============================================================
// Open And Close Search Form
const searchForm = document.querySelector(".search-form");
const searchBtn = document.getElementsByClassName("search-btn");

// loop For All search-btn
for (let i = 0; i < searchBtn.length; i++) {
    const btn = searchBtn[i];

    btn.addEventListener("click", activeSearchForm);
}

function activeSearchForm() {

    // Add Active Class To Search Form
    searchForm.classList.add("active");

    const closeBtn = searchForm.lastElementChild;

    closeBtn.onclick = function() {
    // Add Active Class To Search Form
    searchForm.classList.remove("active");
    }

    // When Click To Search Btn > Remove Active Class From Nav Menu
    navMenu.classList.remove("active");
    // When Click To Search Btn > Remove Active Class From Toggle btn
    toggle.classList.remove("active");
}
//=============================================================
// Active Modal Wishlist Items

const wishlist = document.querySelector(".wishlist");
const wishlistBtn = document.querySelectorAll(".wishlist-btn");
// Access To Close Btn
const cloesBtn = document.querySelector(".wishlist-header .close-btn");

wishlistBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Add active-item Calss To wishlist
        wishlist.classList.add("active-item");
        overlay();
    });
});


// Active Modal Cart Items
const cart = document.querySelector(".cart");
const cartBtn = document.querySelectorAll(".cart-btn");
// Access To Close Btn
const cloesModal = document.querySelector(".cart-header .close-btn");

cartBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Add active-item Calss To cart
        cart.classList.add("active-item");
        // Calling Overlay Fun
        overlay();
    });
});
//=============================================================
// Create Overlay Element
function overlay() {
    const div = document.createElement("div");
    div.className = "overlay";

    div.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.4);
    opacity: 0;
    z-index: 700;
    `;

    // div.classList.add("active-overlay");

    // Append Overlay Div To Body
    document.body.appendChild(div);


    cloesBtn.addEventListener("click", () => {
        // remove active-item Calss From wishlist
        wishlist.classList.remove("active-item");

        // Remove Overlay
        div.remove();

        // When Click To cloes Btn > Remove Active Class From Toggle btn
        toggle.classList.remove("active");

    });
    

    cloesModal.addEventListener("click", () => {
        // remove active-item Calss From wishlist
        cart.classList.remove("active-item");

        // Remove Overlay
        div.remove();

        // When Click To cloes Btn > Remove Active Class From Toggle btn
        toggle.classList.remove("active");

    });
    
    // When Click To wishlistc Btn > Remove Active Class From Nav Menu
    navMenu.classList.remove("active");
    // When Click To wishlist Btn > Remove Active Class From Toggle btn
    toggle.classList.remove("active");
}
//=============================================================
/*
[Hero Section Slider]
- Access To All Control Btn
- access To Slide Img
*/

const controlBtns = document.querySelectorAll(".control-btn");
const slide = document.querySelector(".slider .slide");

// Loop For All Control Btn
controlBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        controlBtns.forEach((btn) => {
        // Remove Active Class From All Btn
        btn.classList.remove("active");
        });

        // Add Active Class To Current Btn
        e.currentTarget.classList.add("active");

        const dataSrc = btn.getAttribute("data-src");

        slide.src = dataSrc;
    });
});
//=============================================================
/*
[Filter Products]
- access To All Filter Btns
- Access To All Products Container
*/

const btnsContainer = document.getElementsByClassName("filter-btns")[0];
const filterBtns = btnsContainer.getElementsByClassName("filter");

for (let i = 0; i < filterBtns.length; i++) {
    const btn  = filterBtns[i];

    btn.addEventListener("click", activeBtn);
}

// Active Btn function
function activeBtn(e) {
    // Current Target Filter Btn
    let btn = e.currentTarget;

    for (let i = 0; i < filterBtns.length; i++) {
        const btn  = filterBtns[i];

        // Remove Active Class From All Filter Btn
        btn.classList.remove("active");
    }
    // Add Active Class To Current Filter Btn
    btn.classList.add("active");

    // Access To All Products Container
    const products = document.querySelectorAll(".products-container");

    products.forEach((product) => {
        // Display none To All Products Container
        product.style.display = "none";

        // Access To All Filter Btn With Custom Att > data-product
        const filterBtns = document.querySelectorAll(btn.dataset.product);

        // loop For All Filter Btn With Custom Att
        filterBtns.forEach((product) => {
            // when cus Att in filter btn = class Att in product Container
            // Display block To All Products Container
            product.style.display = "block";
        });
    });
};
//=============================================================
/*
[Actions When Window Scrolling]
- Sticky Header
*/

const upBtn = document.getElementById("up");

upBtn.onclick = _ => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

window.addEventListener("scroll", windowScrolling);


function windowScrolling() {
    const header = document.getElementById("header");

    if (window.scrollY >= 200) {
        if (!header.classList.contains("sticky-header")) {
            // Add sticky-header Class To Header
            header.classList.add("sticky-header");
        };

    } else {
        // Remove sticky-header Class From Header
        header.classList.remove("sticky-header");
    }

    if (window.scrollY >= 1000) {
        upBtn.classList.add("show");

    } else {
        upBtn.classList.remove("show");
    }
};
//=============================================================

