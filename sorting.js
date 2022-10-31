// CREATE ARRAY TEMPLATE
const categoriesList = {
    "gfx":"",
    "web":"",
    "branding":"",
    "pm":"",
    "other":"",
    "full":"",
    "overview":"",
    "wip":"",
    "completed":""
}

console.log(categoriesList);

//GET ALL GALLERY ITEMS
//const galleryItems = document.getElementsByClassName('gallery-item');

//GET ALL FILTER OPTIONS
//const checkboxes = document.querySelectorAll('.filter');

// GET GALLERY ITEMS BY FILTER
/*const gfxFilter = document.getElementsByClassName('gfx');
const webFilter = document.getElementsByClassName('web');
const brandingFilter = document.getElementsByClassName('branding');
const pmFilter = document.getElementsByClassName('pm');
const otherFilter = document.getElementsByClassName('other');

const fullProjFilter = document.getElementsByClassName('full');
const overviewFilter = document.getElementsByClassName('overview');

const wipFilter = document.getElementsByClassName('wip');
const completedFilter = document.getElementsByClassName('completed');*/

function loadPage(){
    // LOAD ITEMS INTO ARRAY BY FILTER
    function loadArray(){
        // LOAD GFX ITEMS
        for (let i = 0; i < gfxFilter.length; i++) {
            let itemTitle = gfxFilter.item(i).firstElementChild.firstElementChild.firstElementChild.textContent
            categoriesList.gfx += itemTitle + ", ";
        }
        //console.log(categoriesList.gfx)
        
        // LOAD WEB ITEMS
        for (let i = 0; i < webFilter.length; i++) {
            let itemTitle = webFilter.item(i).firstElementChild.firstElementChild.firstElementChild.textContent
            categoriesList.web += itemTitle + ", ";
        }
        //console.log(categoriesList.web)

        // LOAD BRANDING ITEMS
        for (let i = 0; i < brandingFilter.length; i++) {
            let itemTitle = brandingFilter.item(i).firstElementChild.firstElementChild.firstElementChild.textContent
            categoriesList.branding += itemTitle + ", ";
        }
        //console.log(categoriesList.branding)

        // LOAD PM ITEMS
        for (let i = 0; i < pmFilter.length; i++) {
            let itemTitle =pmFilter.item(i).firstElementChild.firstElementChild.firstElementChild.textContent
            categoriesList.pm += itemTitle + ", ";
        }
        //console.log(categoriesList.pm)

        // LOAD OTHER ITEMS
        for (let i = 0; i < otherFilter.length; i++) {
            let itemTitle = otherFilter.item(i).firstElementChild.firstElementChild.firstElementChild.textContent
            categoriesList.other += itemTitle + ", ";
        }
        //console.log(categoriesList.other)

        // LOAD FULL PROJECT ITEMS
        for (let i = 0; i < fullProjFilter.length; i++) {
            let itemTitle = fullProjFilter.item(i).firstElementChild.firstElementChild.firstElementChild.textContent
            categoriesList.full += itemTitle + ", ";
        }
        //console.log(categoriesList.full)

        // LOAD OVERVIEW ITEMS
        for (let i = 0; i < overviewFilter.length; i++) {
            let itemTitle = overviewFilter.item(i).firstElementChild.firstElementChild.firstElementChild.textContent
            categoriesList.overview += itemTitle + ", ";
        }
        //console.log(categoriesList.overview)

        // LOAD WIP ITEMS
        for (let i = 0; i < wipFilter.length; i++) {
            let itemTitle = wipFilter.item(i).firstElementChild.firstElementChild.firstElementChild.textContent
            categoriesList.wip += itemTitle + ", ";
        }
        //console.log(categoriesList.wip)

        // LOAD COMPLETED ITEMS
        for (let i = 0; i < completedFilter.length; i++) {
            let itemTitle = completedFilter.item(i).firstElementChild.firstElementChild.firstElementChild.textContent
            categoriesList.completed += itemTitle + ", ";
        }
        //console.log(categoriesList.completed)
        console.log(categoriesList)
    }
    loadArray();

    function loadAllItems(){
        let currentlyActive = ""
        if (checkboxes[0].checked == false && checkboxes[1].checked == false && checkboxes[2].checked == false && checkboxes[3].checked == false && checkboxes[4].checked == false && checkboxes[5].checked == false && checkboxes[6].checked == false && checkboxes[7].checked == false){
            for (let i = 0; i < galleryItems.length; i++) {
                galleryItems[i].classList.add("active");
            }
            console.log("No boxes checked")
        } 
        if (checkboxes[0].checked == true){
            currentlyActive += "GFX Checked"
            console.log(currentlyActive)
            sortItems();
        }
        if (checkboxes[1].checked == true){
            currentlyActive += "Web Checked "
            console.log(currentlyActive)
        }
        if (checkboxes[2].checked == true){
            currentlyActive += "Branding Checked "
            console.log(currentlyActive)
        }
        if (checkboxes[3].checked == true){
            currentlyActive += "PM Checked "
            console.log(currentlyActive)
        }
        if (checkboxes[4].checked == true){
            currentlyActive += "Other Checked "
            console.log(currentlyActive)
        }
        if (checkboxes[5].checked == true){
            currentlyActive += "Full Projects Checked "
            console.log(currentlyActive)
        }
        if (checkboxes[6].checked == true){
            currentlyActive += "Overviews Checked "
            console.log(currentlyActive)
        }
        if (checkboxes[7].checked == true){
            currentlyActive += "WIP Checked "
            console.log(currentlyActive)
        }
    }
    loadAllItems();
}



function sortItems(){
    
    for (let i = 0; i < galleryItems.length; i++) {
        let itemClasses = galleryItems[i].classList.value;
        console.log(itemClasses)
        if (itemClasses.includes("gfx") == true){
            let activate = galleryItems[i].classList.add("active")
            console.log(galleryItems[i].classList)
        }
        if (itemClasses.includes("web") == true){
            let activate = galleryItems[i].classList.add("active")
            console.log(galleryItems[i].classList)
        }
    }
}