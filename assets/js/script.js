$(document).ready(function(){

	jQuery.fn.isFullyVisible = function(){

	var win = $(window);

	var viewport = {
	    top : win.scrollTop(),
	    left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();

	var elemtHeight = this.height();// Get the full height of current element
	elemtHeight = Math.round(elemtHeight);// Round it to whole humber

	var bounds = this.offset();// Coordinates of current element
	bounds.top = bounds.top + elemtHeight;
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();

	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	}

// about me
	$(window).on("scroll", function(){
		if($("#about-me-img").isFullyVisible()){
			$("#about-me-img").addClass("bounceInDown");
			$("#about-me-img").removeClass("disappear");
		};
	});

	$(window).on("scroll", function(){
		if($("#about-me-resume").isFullyVisible()){
			$("#about-me-resume").addClass("slideInLeft");
			$("#about-me-resume").removeClass("disappear");
		};
	});	

	$(window).on("scroll", function(){
		if($("#about-me-text").isFullyVisible()){
			$("#about-me-text").addClass("fadeInRight");
			$("#about-me-text").removeClass("disappear");
		};
	});

// verse what-i-do-head
	$(window).on("scroll", function(){
		if($("#verse").isFullyVisible()){
			$("#verse").addClass("rollIn");
			$("#verse").removeClass("disappear");
		};
	});

// What I do
	$(window).on("scroll", function(){
		if($("#what-i-do-head").isFullyVisible()){
			$("#what-i-do-head").addClass("flipInX");
			$("#what-i-do-head").removeClass("disappear");
		};
	});

	$(window).on("scroll", function(){
		if($("#what-i-do-img1").isFullyVisible()){
			$("#what-i-do-img1").addClass("rotateIn");
			$("#what-i-do-img1").removeClass("disappear");
		};
	});

	$(window).on("scroll", function(){
		if($("#what-i-do-img1text").isFullyVisible()){
			$("#what-i-do-img1text").addClass("slideInRight");
			$("#what-i-do-img1text").removeClass("disappear");
		};
	});

	$(window).on("scroll", function(){
		if($("#what-i-do-img2text").isFullyVisible()){
			$("#what-i-do-img2text").addClass("slideInLeft");
			$("#what-i-do-img2text").removeClass("disappear");
		};
	});

	$(window).on("scroll", function(){
		if($("#what-i-do-img2").isFullyVisible()){
			$("#what-i-do-img2").addClass("rotateIn");
			$("#what-i-do-img2").removeClass("disappear");
		};
	});

// why me
	$(window).on("scroll", function(){
		if($("#why-me-head").isFullyVisible()){
			$("#why-me-head").addClass("flipInX");
			$("#why-me-head").removeClass("disappear");
		};
	});

	$(window).on("scroll", function(){
		if($("#why-me-img1").isFullyVisible()){
			$("#why-me-img1").addClass("slideInLeft");
			$("#why-me-img1").removeClass("disappear");
		};
	});

	$(window).on("scroll", function(){
		if($("#why-me-img1text").isFullyVisible()){
			$("#why-me-img1text").addClass("slideInRight");
			$("#why-me-img1text").removeClass("disappear");
		};
	});

	$(window).on("scroll", function(){
		if($("#why-me-img2").isFullyVisible()){
			$("#why-me-img2").addClass("tada");
			$("#why-me-img2").removeClass("disappear");
		};
	});

	$(window).on("scroll", function(){
		if($("#why-me-img2text").isFullyVisible()){
			$("#why-me-img2text").addClass("shake");
			$("#why-me-img2text").removeClass("disappear");
		};
	});

	$(window).on("scroll", function(){
		if($("#why-me-img3").isFullyVisible()){
			$("#why-me-img3").addClass("rotateInDownLeft");
			$("#why-me-img3").removeClass("disappear");
		};
	});

	$(window).on("scroll", function(){
		if($("#why-me-img3text").isFullyVisible()){
			$("#why-me-img3text").addClass("rotateInDownRight");
			$("#why-me-img3text").removeClass("disappear");
		};
	});	
//skills
	$(window).on("scroll", function(){
		if($("#skill").isFullyVisible()){
			$("#skill").addClass("rotateInUpLeft");
			$("#skill").removeClass("disappear");
            $('.pie_progress').asPieProgress('start');
		};
	});


// contact me
	$(window).on("scroll", function(){
		if($("#contact-head").isFullyVisible()){
			$("#contact-head").addClass("flipInX");
			$("#contact-head").removeClass("disappear");
		};
	});

	$(window).on("scroll", function(){
		if($("#contact-subhead").isFullyVisible()){
			$("#contact-subhead").addClass("jackInTheBox");
			$("#contact-subhead").removeClass("disappear");
		};
	});

	$(window).on("scroll", function(){
		if($("#contact-mail").isFullyVisible()){
			$("#contact-mail").addClass("heartBeat");
			$("#contact-mail").removeClass("disappear");
		};
	});

	$(window).on("scroll", function(){
		if($("#contact-links").isFullyVisible()){
			$("#contact-links").addClass("bounce");
			$("#contact-links").removeClass("disappear");
		};
	});																									
});