$(document).ready(function(){
    $('.question').hover(function() {
        $(this).css("cursor", "pointer");
        $(this).toggle({
          effect: "zoom",
          percent: "90%"
        },50);
    }, function() {
         $(this).toggle({
           effect: "zoom",
           percent: "80%"
         },50);
    });


//     var angle = 0;
//
// var $rotateElement =   $('.rotate');
//     var interval = setInterval(function(){
//         if (angle <= 360) {
//             $rotateElement.css({
//                 MozTransform: 'rotate(-' + -counter + 'deg)',
//                 WebkitTransform: 'rotate(' + -counter + 'deg)',
//                 transform: 'rotate(' + -counter + 'deg)'
//             });
//             angle++;
//         } else {
//           angle = 0;
//           $rotateElement.css({
//               MozTransform: 'rotate(-' + -counter + 'deg)',
//               WebkitTransform: 'rotate(' + -counter + 'deg)',
//               transform: 'rotate(' + -counter + 'deg)'
//           });
//         }
//     }, 10);

});
