var images = [
    "https://cdn2.jomashop.com/media/wysiwyg/banner_main_EARLY_BIRD_2020.jpg",
    "https://s.yimg.com/aah/4-watches/img-1277676.jpg",
    "https://s.yimg.com/aah/4-watches/img-1277675.jpg"
];
var num = 0;

function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}