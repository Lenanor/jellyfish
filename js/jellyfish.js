
$(document).ready(function(){ 
						   
	var pulse1 = $('#pulse1');
	var pulse2 = $('#pulse2');
	var toggle = $('.toggle');
	var bars = $('.fa-bars');
	var x = $('.fa-times');
	var nav = $('nav');

	// Makes page heading scale back and forth
	TweenMax.to(pulse1, 2.7, {scale:1.03, ease:Back.easeInOut, repeat:-1, yoyo: true});
	TweenMax.to(pulse2, 3, {scale:1.03, ease:Back.easeInOut, repeat:-1, yoyo: true});

	// Navigation animation
	$(x).hide();
	TweenMax.set(nav, {y:-350});

	$(bars).on('click', function() {
		TweenMax.to(bars, 0.5, {rotation: 360, transformOrigin: 'center center', onComplete: changeIcon});
		TweenMax.to(nav, 1, {y:0, delay: 0.3, ease:Power4.easeInOut});
	});
	function changeIcon(){
		$(bars).hide();
		$(x).show();
	}
	$(x).on('click', function() {
		TweenMax.to(x, 0.5, {rotation: 360, transformOrigin: 'center center', onComplete: changeIconX});
		TweenMax.to(nav, 1, {y:-350, delay: 0.3});
	});
	function changeIconX(){
		$(x).hide();
		$(bars).show();
	};

    // AJAX - TO GET PHOTOS WITH #maneter FROM FLICKR
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions = {
      tags: "maneter",
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul class="fli">';
      console.log(data.items)
      $.each(data.items,function(i,photo) {
        photoHTML += '<li>';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }

    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
	
});