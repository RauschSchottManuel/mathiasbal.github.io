var ofText = 'Read Less';
var rfText = 'Read Less';
var save = document.title;

window.onblur = function() {
  document.title="Please don't leave (︶︿︶)";
}

window.onfocus = function() {
  document.title=save;
}


$('#ReadMoreRF').animate({
  height: 'toggle'
}, 0);


$('#ReadMoreIF').animate({
  height: 'toggle'
}, 0);

console.log("JS Loaded");

$('#rm1').click(function() {
  $(this).html(rfText);
  rfText = rfText == 'Read Less' ? 'Read More' : 'Read Less';
  console.log("ReadMore RF");
  $('#ReadMoreRF').animate({
      height: 'toggle'
    }, 3600);
});
  
$('#rm2').click(function() {
  $(this).html(ofText);
  ofText = ofText == 'Read Less' ? 'Read More' : 'Read Less';
  console.log("ReadMore IF");
  $('#ReadMoreIF').animate({
      height: 'toggle'
  }, 3600);
});
