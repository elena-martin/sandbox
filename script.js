const checkboxes = document.querySelectorAll('.filter');
const filters = document.getElementById('selected-filters');
const labels = document.getElementsByTagName('label')

const featured = document.querySelectorAll('.featured');
const boxes = document.querySelectorAll('.item-hover');

const header = document.getElementById('header');
const pageContent = document.getElementById('page-content');
const siteBody = document.getElementsByClassName('body') 

const gallery = document.getElementById('gallery');

/*----- GET FILTERS -----*/
const galleryItems = document.getElementsByClassName('gallery-item');
const activeFilters = document.getElementById('selected-filters')

const gfxFilter = document.getElementsByClassName('gfx');
const webFilter = document.getElementsByClassName('web');
const brandingFilter = document.getElementsByClassName('branding');
const uxuiFilter = document.getElementsByClassName('uxui');
const otherFilter = document.getElementsByClassName('other');

const fullProjFilter = document.getElementsByClassName('full');
const singleFilter = document.getElementsByClassName('single');

const wipFilter = document.getElementsByClassName('wip');
const completedFilter = document.getElementsByClassName('completed');

/*----- CREATE IMG LIGHTBOX -----*/
const boxContent = document.createElement("div");
boxContent.id = "boxContent";

const boxImg = document.createElement("img");
boxImg.id = "boxImg";

const multiImg = document.getElementsByClassName("lightbox-only");

const imgContent = document.createElement("div");
imgContent.id = "imgContent";

const imgTitle = document.createElement("h2");
imgTitle.id = "imgTitle";

const imgDesc = document.createElement("p");
imgDesc.id = "imgDesc";

const closeLightbox = document.createElement("a");
closeLightbox.id = "close-lightbox";
closeLightbox.textContent="\u2716"
closeLightbox.setAttribute("onclick","lightboxClose();")

const closeLightboxMulti = document.createElement("a");
closeLightboxMulti.id = "close-lightbox";
closeLightboxMulti.textContent="\u2716"
closeLightboxMulti.setAttribute("onclick","lightboxCloseMulti();")

var source = ""
var relsource = ""
var title = ""
var desc = ""

document.body.onload = load(); lightbox();

function load(){
    editFilters();
    for (let i = 0; i < galleryItems.length; i++) {
        let items = galleryItems.item(i);
        let itemsClasses = items.classList;
        itemsClasses.add('loaded')
        console.log(itemsClasses)
    };
};

function editFilters()  {
    let filterID = document.activeElement.id
    let arrayItem = filterID.split('r').pop();
    
    //Creates active filter buttons whenever a filter is checked.
    function activate(){
        if (document.activeElement.checked == true){
            console.log(filterID + ' Checked')

            document.getElementById('selected-filters').className = 'animate-in'
            let show = document.getElementsByClassName("animate-in")
            show.item(0).style = "display: block"
            
            let active = document.createElement('button');
            let close = document.createElement('span');
        
            active.className = 'active-filter';
            active.id = labels.item(arrayItem - 1).textContent;
            close.textContent = '\xa0\xa0\u2716'
            let buttonText = document.createTextNode(labels.item(arrayItem - 1).textContent) 
            filters.appendChild(active);
            active.appendChild(buttonText);
            active.appendChild(close);
            active.addEventListener('click', function() {
                let active = document.getElementById(labels.item(arrayItem - 1).textContent);
                active.remove();
                checkboxes.item(arrayItem - 1).checked = false;
                checkRemove();
                
            }, false)
            
            let galShift = gallery.classList;
            galShift.add('bump-gallery')
            console.log(galShift)

           
        }
    };

    //Checks if any other filters are active. If not, hides the "selected-filters" div. Automatically called before running remove();
    function checkRemove(){
        if (checkboxes.item(0).checked == false && checkboxes.item(1).checked == false && checkboxes.item(2).checked == false && checkboxes.item(3).checked == false && checkboxes.item(4).checked == false && checkboxes.item(5).checked == false && checkboxes.item(6).checked == false && checkboxes.item(7).checked == false) {
            console.log("No Filters");
            document.getElementById('selected-filters').className = 'animate-out'
            let hide = document.getElementsByClassName("animate-out")
            setTimeout(() => {
                hide.item(0).style = "display: none"
            }, "300"); 
            let galShift = gallery.classList;
            galShift.remove('bump-gallery')
            console.log(galShift)
            
            for (let i = 0; i < galleryItems.length; i++) {
                let itemClasses = galleryItems[i].classList;
                itemClasses.add('loaded')
            }
        }

    }
    //Checks if any other filters are active. If not, hides the "selected-filters" div and makes all gallery items visible again
    function remove(){
        checkRemove();
        if (document.activeElement.checked == false){
            console.log(filterID + ' Un-Checked')
            let active = document.getElementById(labels.item(arrayItem - 1).textContent);
            active.remove();
        }
        
    };

    let currentlyActive = document.getElementsByClassName("active-filter");

    function checkBoxes(){
        for (let i = 0; i < checkboxes.length; i++){
            console.log(checkboxes[i].checked)

            if (checkboxes[i].checked == true) {
                for (let i2 = 0; i2 < galleryItems.length; i2++) {
                    let itemClasses = galleryItems[i2].classList;

                    //FIRST FILTER - GFX
                    if (checkboxes[0].checked == true && galleryItems[i2].classList.contains('gfx') == true) {
                        itemClasses.add('active')
                        itemClasses.remove ('loaded')
                    };
                    if (checkboxes[0].checked == false && galleryItems[i2].classList.contains('gfx') == true){
                        itemClasses.remove ('active')
                        itemClasses.remove ('loaded')
                    };
                    //SECOND FILTER - WEB
                    if (checkboxes[1].checked == true && galleryItems[i2].classList.contains('web') == true) {
                        itemClasses.add('active')
                        itemClasses.remove ('loaded')
                    };
                    if (checkboxes[1].checked == false && galleryItems[i2].classList.contains('web') == true){
                        itemClasses.remove ('active')
                        itemClasses.remove ('loaded')
                    };
                    //THIRD FILTER - BRANDING
                    if (checkboxes[2].checked == true && galleryItems[i2].classList.contains('branding') == true) {
                        itemClasses.add('active')
                        itemClasses.remove ('loaded')
                    };
                    if (checkboxes[2].checked == false && galleryItems[i2].classList.contains('branding') == true){
                        itemClasses.remove ('active')
                        itemClasses.remove ('loaded')
                    };
                    //FOURTH FILTER - UX & UI
                    if (checkboxes[3].checked == true && galleryItems[i2].classList.contains('uxui') == true) {
                        itemClasses.add('active')
                        itemClasses.remove ('loaded')
                    };
                    if (checkboxes[3].checked == false && galleryItems[i2].classList.contains('uxui') == true){
                        itemClasses.remove ('active')
                        itemClasses.remove ('loaded')
                    };
                    //FIFTH FILTER - OTHER
                    if (checkboxes[4].checked == true && galleryItems[i2].classList.contains('other') == true) {
                        itemClasses.add('active')
                        itemClasses.remove ('loaded')
                    };
                    if (checkboxes[4].checked == false && galleryItems[i2].classList.contains('other') == true){
                        itemClasses.remove ('active')
                        itemClasses.remove ('loaded')
                    };

                    //SIXTH FILTER - SOLO DESIGNS
                    if (checkboxes[5].checked == true && galleryItems[i2].classList.contains('single') == true) {
                        itemClasses.add('active')
                        itemClasses.remove ('loaded')
                    };
                    if (checkboxes[5].checked == false && galleryItems[i2].classList.contains('single') == true){
                        itemClasses.remove ('active')
                        itemClasses.remove ('loaded')
                    };

                    //SEVENTH FILTER - FULL PROJECTS
                    if (checkboxes[6].checked == true && galleryItems[i2].classList.contains('full') == true) {
                        itemClasses.add('active')
                        itemClasses.remove ('loaded')
                    };
                    if (checkboxes[6].checked == false && galleryItems[i2].classList.contains('full') == true){
                        itemClasses.remove ('active')
                        itemClasses.remove ('loaded')
                    };
                };
            } if (checkboxes[i].checked == false) {
                let itemClasses = galleryItems[i].classList;
                console.log("Nothing Checked")
            };
        }
    }

    checkBoxes();
    activate();
    remove();
}


function lightbox(){
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.setAttribute("style", "display: none;");
    
    document.body.insertBefore(lightbox, pageContent);

    
    lightbox.appendChild(boxContent);
    boxContent.appendChild(boxImg);
    lightbox.appendChild(imgContent);
    
    imgContent.appendChild(imgTitle);
    imgContent.appendChild(imgDesc);
}

function getFigure(e){ 
    console.log(e.target.children[0].firstElementChild.textContent);
    let img = e.target.nextElementSibling;
    source = e.target.nextElementSibling.src
    relsource = source.split('x/').pop();
    
    title = e.target.children[0].firstElementChild.textContent
    let descP = e.target.parentElement.lastElementChild
    desc = descP.textContent
    console.log(desc);

    
    boxImg.setAttribute("src", relsource);
    imgTitle.textContent = title;
    imgDesc.textContent = desc;
}

/*----------LIGHTBOX FUNCTIONS----------*/
function lightboxOpen(){
    let lightbox = document.getElementById('lightbox')
    lightbox.appendChild(closeLightbox);
    console.log(siteBody);
    boxImg.style = "display: block"

    siteBody[0].style = "transition: .5s -webkit-filter linear; -webkit-filter: blur(10px); -moz-filter: blur(10px); -o-filter: blur(10px); -ms-filter: blur(10px); filter: blur(10px);"
    siteBody[1].style = "transition: .5s -webkit-filter linear; -webkit-filter: blur(10px); -moz-filter: blur(10px); -o-filter: blur(10px); -ms-filter: blur(10px); filter: blur(10px);"

    lightbox.style = "display: block";
    setTimeout(() => {
        lightbox.style = "opacity: 1";
    }, "100");
    boxImg.setAttribute("target", "_blank");
    disableScroll();
}

function lightboxOpenMulti(){
    let lightbox = document.getElementById('lightbox')
    lightbox.appendChild(closeLightboxMulti);
    boxImg.style = "display: none"

    siteBody[0].style = "transition: .5s -webkit-filter linear; -webkit-filter: blur(10px); -moz-filter: blur(10px); -o-filter: blur(10px); -ms-filter: blur(10px); filter: blur(10px);"
    siteBody[1].style = "transition: .5s -webkit-filter linear; -webkit-filter: blur(10px); -moz-filter: blur(10px); -o-filter: blur(10px); -ms-filter: blur(10px); filter: blur(10px);"

    lightbox.style = "display: block";
    setTimeout(() => {
        lightbox.style = "opacity: 1";
    }, "100");
    disableScroll();
    for (let i = 0; i < (multiImg.length); i++){
        const newImg = document.createElement("img");
        console.log(multiImg);
        boxContent.appendChild(newImg);
        newImg.setAttribute("target", "_blank");
        newImg.setAttribute("src", multiImg[i].src);
        newImg.className = "multiImg"

        console.log(multiImg[i])
    }
    
}

function lightboxClose(){
    let lightbox = document.getElementById('lightbox')
    lightbox.style = "opacity: 0";
    siteBody[0].style = "transition: .5s -webkit-filter linear; -webkit-filter: blur(0px); -moz-filter: blur(0px); -o-filter: blur(0px); -ms-filter: blur(0px); filter: blur(0px);"
    siteBody[1].style = "transition: .5s -webkit-filter linear; -webkit-filter: blur(0px); -moz-filter: blur(0px); -o-filter: blur(0px); -ms-filter: blur(0px); filter: blur(0px);"

    closeLightbox.style = "cursor: pointer"
    boxImg.setAttribute("target", "_blank");
    enableScroll();
    setTimeout(() => {
        lightbox.style = "display: none";
    }, "500");
}

function lightboxCloseMulti(){
    let lightbox = document.getElementById('lightbox')
    lightbox.style = "opacity: 0";
    siteBody[0].style = "transition: .5s -webkit-filter linear; -webkit-filter: blur(0px); -moz-filter: blur(0px); -o-filter: blur(0px); -ms-filter: blur(0px); filter: blur(0px);"
    siteBody[1].style = "transition: .5s -webkit-filter linear; -webkit-filter: blur(0px); -moz-filter: blur(0px); -o-filter: blur(0px); -ms-filter: blur(0px); filter: blur(0px);"

    closeLightbox.style = "cursor: pointer"
    
    enableScroll();
    setTimeout(() => {
        lightbox.style = "display: none";
    }, "500");

    
    
    function removeMulti(images){
        for (let i = 0; i < images.length; i++){
            console.log(images)
            images[i].parentNode.removeChild(images[i]);
        }
    }
    removeMulti(document.querySelectorAll('.multiImg'));
    
}

/*----------DISABLE SCROLL IN LIGHTBOX----------*/

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
}
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
}));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

//Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventList
};

//Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}