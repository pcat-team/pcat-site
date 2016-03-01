 var $ = require("common:pc-jquery");

 var Slide = require("index:jquery.slide")

 $(function(){
    new Slide.focus({
        target: $( '#slide01 li' ),
        effect: 'fade',
        autoPlay: true
    });
});

