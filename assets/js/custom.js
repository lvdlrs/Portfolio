$(document).ready(function(){

	$(window).load(function(){
		$('.se-pre-con').fadeOut('1500', function(){});
	})
		

// animation script
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
	
	var $icon = $("#hov");
	// icon hover show scroll down text
	$icon.hover(function(){
		$("#hov p").toggleClass("disappear");
	});

	  $("#hov a").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 1500, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if
	  });
	  
	  //form javascript
	  $("#reused_form").on('submit', function(e) {
	      e.preventDefault();
	    
	      var $form = $(this);
	      
	      $('button[type="submit"]', $form).each(function()
	        {
	            $btn = $(this);
	            $btn.prop('type','button' ); 
	            $btn.prop('orig_label',$btn.text());
	            $btn.text('Sending ...');
	        });
		  
	        $.post($form.attr("action"), $form.serialize()).then(function() {
	        	
	        	  $('#myModal').modal('toggle');
	        	
	        	const bootstrapButtons = Swal.mixin({
				  confirmButtonClass: 'btn btn-outline-success',
				  buttonsStyling: false,
				})
				
	        	bootstrapButtons.fire({
			        text: 'Message sent successfully',
			        type: 'success',
			        confirmButtonClass: 'btn btn-outline-success',
			        confirmButtonText: 'Thank you!'
			    }).then((result) => {
			        if (result.value) {
			          $("#name").val("");
			    	  $("#email").val("");
			          $("textarea").val("");
			          
			          grecaptcha.reset();     
			          
			          $('button[type="button"]', $form).each(function()
			            {
			                $btn = $(this);
			                label = $btn.prop('orig_label');
			                if(label)
			                {
			                    $btn.prop('type','submit' ); 
			                    $btn.text(label);
			                    $btn.prop('orig_label','');
			                }
			            });
			          
			          return false;
			         }else {
			            Swal.fire({
			            	text: 'Sending Error!',
			    			type: 'error'
			            })
			         }

			      });
				
			});
			
	   });
	 
		
	  //scroll to top
	  var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},controlHTML:'<img src="https://i1155.photobucket.com/albums/p559/scrolltotop/arrow66.png" />',controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var t=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);t="string"==typeof t&&1==jQuery("#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate({scrollTop:t},this.setting.scrollduration)},keepfixed:function(){var t=jQuery(window),o=t.scrollLeft()+t.width()-this.$control.width()-this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function(){var t=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=t>=this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(t){var o=scrolltotop,s=document.all;o.cssfixedsupport=!s||s&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,o.$body=t(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),o.$control=t('<div id="topcontrol">'+o.controlHTML+"</div>").css({position:o.cssfixedsupport?"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll to Top"}).click(function(){return o.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=o.$control.text()&&o.$control.css({width:o.$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword+'"]').click(function(){return o.scrollup(),!1}),t(window).bind("scroll resize",function(t){o.togglecontrol()})})}};scrolltotop.init();

});
