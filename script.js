const featured = document.querySelectorAll('.featured');
const boxes = document.querySelectorAll('.featured-hover');
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