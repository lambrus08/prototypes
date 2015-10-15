function myMessage() {
    console.log('Function message');
}

function add(al, doo) {
   var lambrus = al + doo;
    console.log(lambrus);
}

function add2(lam, brus){
    var chini = lam + brus;
    return chini;
}

var add2result = add2(3, 10);

function cardFlip(element){
    $(element).hide();
    src = getSrc(element);
    console.log(src);

}
function getSrc(back){
    return $(back).prev().find('img').attr('src');
}