
// JAVASCRIPT FORM VALIDATION

function validateForm()
{
var x=document.forms["subscribe"]["fname"].value;
if (x==null || x=="")
  {
  alert("Please Enter Email Address");
  return false;
  }
}

$(function(){
	
// JQUERY ANIMATION FOR INVITATION WINDOW

	$(".invitation").animate({
	    position: "absolute",
		bottom: 0,
	  }, 500, function() {
	    // Animation complete.
	  });

// JQUERY CLICK EVENTS FOR RSVP BUTTONS

	$( ".nav-yes").bind("click", function (event) {
		$(".rsvp-yes").slideToggle("fast");
	});
	
	$( ".nav-no").bind("click", function (event) {
		$(".rsvp-no").slideToggle("fast");
	});
	
	$( "#close-button-yes").bind("click", function (event) {
		$(".rsvp-yes").hide();
	});
	
	$( "#close-button-no").bind("click", function (event) {
		$(".rsvp-no").hide();
	});


});