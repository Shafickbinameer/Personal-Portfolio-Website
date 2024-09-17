
//creating an slider effect
const productContainer = document.querySelectorAll('.port-slider');
const nxtbtn = document.querySelectorAll('.next');
const prebnt = document.querySelectorAll('.prev');

productContainer.forEach((item, i) => {
    let contentdimenssion = item.getBoundingClientRect();
    let contentwidth = contentdimenssion.width;


    nxtbtn[i].addEventListener('click', () => {
        item.scrollLeft += contentwidth;
    })

    prebnt[i].addEventListener('click', () => {
        item.scrollLeft -= contentwidth;
    })
})


//media queries

var menu = document.querySelector('.navmob');
if (menu.addEventListener('mouseover', () => {
    var navbar = document.querySelector(".port-nav");
    var screenwidth = screen.availWidth;
    if (screenwidth <= 500) {
        navbar.style.display = "flex";
        navbar.style.transition = ".3s";
    } else {
        navbar.style.display = "none";
    }
}));
else if (menu.addEventListener('mouseout', () => {
    var navbar = document.querySelector(".port-nav");

    navbar.style.display = "none";
}));

var screenwidth = screen.availWidth;
if (screenwidth <= 500) {
    const productContainer = document.querySelectorAll('.port-slider');
    const nxtbtn = document.querySelectorAll('.next');
    const prebnt = document.querySelectorAll('.prev');

    productContainer.forEach((item, i) => {
        let contentdimenssion = item.getBoundingClientRect();
        let contentwidth = contentdimenssion.width;


        nxtbtn[i].addEventListener('click', () => {
            item.scrollLeft += contentwidth;
        })

        prebnt[i].addEventListener('click', () => {
            item.scrollLeft -= contentwidth;
        })
    })
}

var screenwidth = screen.availWidth;
if (screenwidth  = 900) {
    const productContainer = document.querySelectorAll('.port-slider');
    const nxtbtn = document.querySelectorAll('.next');
    const prebnt = document.querySelectorAll('.prev');

    productContainer.forEach((item, i) => {
        let contentdimenssion = item.getBoundingClientRect();
        let contentwidth = contentdimenssion.width;


        nxtbtn[i].addEventListener('click', () => {
            item.scrollLeft += contentwidth;
        })

        prebnt[i].addEventListener('click', () => {
            item.scrollLeft -= contentwidth;
        })
    })
}
