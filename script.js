const checkboxes = document.querySelectorAll('.filter');
const filters = document.getElementById('selected-filters');
const labels = document.getElementsByTagName('label')

const featured = document.querySelectorAll('.featured');
const boxes = document.querySelectorAll('.item-hover');

const pageContent = document.getElementById('page-content')

document.body.onload = load();

function load(){
    for (let i = 0; i < checkboxes.length; i++){
        
    }
}

function editFilters(){
    let filterID = document.activeElement.id
    let arrayItem = filterID.split('r').pop();
    let activeFilters = document.getElementById('Filter '+ arrayItem)
    
    function activate(){
        if (document.activeElement.checked == true){
            console.log(filterID + ' Checked')
            
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
            }, false)
            }

    }

    function remove(){
        if (document.activeElement.checked == false){
            console.log(filterID + ' Un-Checked')

            let active = document.getElementById(labels.item(arrayItem - 1).textContent);
            active.remove()
        }
        
    }

    activate();
    remove();
}


function createFigure(){

}



console.log(boxes)
var boxNum = ""

function box1(){
    boxNum = 1;
    console.log(boxNum);
};
function box2(){
    boxNum = 2;
    console.log(boxNum);
};
function box3(){
    boxNum = 3;
    console.log(boxNum);
};

mouseOut();

function mouseOver() {
    if (boxNum == 1) {
        featured[0].style.transform = 'scale(1.05)';
        boxes[0].style.opacity = '50%';
    };

    if (boxNum == 2) {
        featured[1].style.transform = 'scale(1.05)';
        boxes[1].style.opacity = '50%';
    };
    if (boxNum == 3) {
        featured[2].style.transform = 'scale(1.05)';
        boxes[2].style.opacity = '50%';
    }
};

function mouseOut() {
    if (boxNum == 1) {
        featured[0].style.transform = 'scale(1.0)';
        boxes[0].style.opacity = '0%';
    };

    if (boxNum == 2) {
        featured[1].style.transform = 'scale(1.0)';
        boxes[1].style.opacity = '0%';
    };
    if (boxNum == 3) {
        featured[2].style.transform = 'scale(1.0)';
        boxes[2].style.opacity = '0%';
    }
};