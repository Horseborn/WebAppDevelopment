$(document).ready(function () {
    var x = 0;
    var s = "";

    console.log("hello mates");

    var theForm = $("#theForm");
    theForm.hide();
    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Buying a bloody cock and ball item")
    })
    
    let productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You clicked on " + $(this).text());
    });


    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(500);
    })

});