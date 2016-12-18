$(document).ready(function(){

	//initiate page transition plugin
    		$('.animsition').animsition();	
	//fade in on load
			TweenMax.from($("#landingPage"), 1.2, {top:"-75px", ease: Power3.easeOut},0.5);
	//initiate full page scroll plugin
			$('#fullpage').fullpage({				
				anchors: ['1', '2', '3', '4', '5', '6', '7'],
				menu: '#menu',
				scrollingSpeed: 1000
			});   	

					
///////////////////////////////////////////////
///////////////HOME PAGE///////////////////////
///////////////////////////////////////////////

	//TITLE BOTTUNS
    		var	$meBtn = $("#meBtn");
    			//$animationBtn = $("#animationBtn"),
    			//$graphicBtn = $("#graphicBtn"),
    			//$homeBtn = $("#homeBtn"); 			

///////////////////////////////////////////////
///////////////ABOUT ME////////////////////////
///////////////////////////////////////////////

    		$meBtn.click(function(){
    			console.log("take me to me page");
    			TweenMax.to("#landingPage", 1.5, 
    				{
    					top: "-100%", 
    					opacity:0,
    					ease: Power4.easeOut,
    					
    				});
    			TweenMax.to("#mePage", 2, {css:{top:0}, ease: Power4.easeOut,delay: 0.45});
    			TweenMax.from("#mePage", 2, {opacity:0, ease: Power4.easeOut,delay: 0.6});
    		});

///////////////////////////////////////////////
///////////////GRAPHIC DESIGN//////////////////
///////////////////////////////////////////////

			//Photogrid fade in
    		TweenMax.from($(".box-small"), 1.75, {opacity:0, ease: Power3.easeOut, delay:0.25});
    		TweenMax.from($(".box-medium"), 1.75, {opacity:0, ease: Power3.easeOut, delay:0.45});
    		TweenMax.from($(".box-big"), 1.75, {opacity:0, ease: Power3.easeOut, delay:0.15});
    		//
    		//LIGHTBOX//
    		//
			var $i1 = $("#i1");
			$i1.click(function(){
				TweenMax.from("#i1Page", 1.2, {css:{top:"100%"}, ease: Power3.easeOut});
			});
			var $i2 = $("#i2");
			$i2.click(function(){
				TweenMax.from("#i2Page", 1.2, {css:{top:"100%"}, ease: Power3.easeOut});
			});
			var $i3 = $("#i3");
			$i3.click(function(){
				TweenMax.from("#i3Page", 1.2, {css:{top:"100%"}, ease: Power3.easeOut});
			});
			var $i4 = $("#i4");
			$i4.click(function(){
				TweenMax.from("#i4Page", 1.2, {css:{top:"100%"}, ease: Power3.easeOut});
			});
			var $i5 = $("#i5");
			$i5.click(function(){
				TweenMax.from("#i5Page", 1.2, {css:{top:"100%"}, ease: Power3.easeOut});
			});

			var $i6 = $("#i6");
			$i6.click(function(){
				TweenMax.from("#i6Page", 1.2, {css:{top:"100%"}, ease: Power3.easeOut});
			});
			var $i7 = $("#i7");
			$i7.click(function(){
				TweenMax.from("#i7Page", 1.2, {css:{top:"100%"}, ease: Power3.easeOut});
			});
			var $i8 = $("#i8");
			$i8.click(function(){
				TweenMax.from("#i8Page", 1.2, {css:{top:"100%"}, ease: Power3.easeOut});
			});
			var $i9 = $("#i9");
			$i9.click(function(){
				TweenMax.from("#i9Page", 1.2, {css:{top:"100%"}, ease: Power3.easeOut});
			});
			var $i10 = $("#i10");
			$i10.click(function(){
				TweenMax.from("#i10Page", 1.2, {css:{top:"100%"}, ease: Power3.easeOut});
			});
			var $i11 = $("#i11");
			$i11.click(function(){
				TweenMax.from("#i11Page", 1.2, {css:{top:"100%"}, ease: Power3.easeOut});
			});
			var $i12 = $("#i12");
			$i11.click(function(){
				TweenMax.from("#i12Page", 1.2, {css:{top:"100%"}, ease: Power3.easeOut});
			});

			// project description slide
			var $infoBtn = $(".infoBtn");
			$infoBtn.click(function(){				
				$(".lightboxInfo").slideDown(400);
				TweenMax.from(".closeInfoBtn", 1.2, {opacity:0, ease: Power3.easeOut,delay: 0.6});
			});

			var $closeInfoBtn = $(".closeInfoBtn");
			$closeInfoBtn.click(function(){				
				$(".lightboxInfo").slideUp(400);
				
			});
			// Btn fade in
			function BtnTransit(e){
				TweenMax.from(".returnBtn", 1.2, {opacity:0, ease: Power3.easeOut,delay: 0.6});
				TweenMax.from(".infoBtn", 1.2, {opacity:0, ease: Power3.easeOut,delay: 0.6});				
			}
			$i1.click(BtnTransit);
			$i2.click(BtnTransit);
			$i3.click(BtnTransit);
			$i4.click(BtnTransit);
			$i5.click(BtnTransit);
			$i6.click(BtnTransit);
			$i7.click(BtnTransit);
			$i8.click(BtnTransit);
			$i9.click(BtnTransit);
			$i10.click(BtnTransit);
			$i11.click(BtnTransit);
			$i12.click(BtnTransit);

//////////////////////////////////////////
///////////////ANIMATION//////////////////
//////////////////////////////////////////

	
	//NAVIGATION
		TweenMax.to($("#ani_nav"), 1.9, {display:"initial", left:"35px", ease: Power3.easeOut, delay:0.5});

        var $navButtons = $("li");
		
        $navButtons.click(function(e){
            //get rid of the previous navButton
            TweenMax.to($navButtons, 0.2, {className:"-=active"});
            //activate this navButton
            TweenMax.to(this, 0.2, {className:"+=active"});
        });
	//VIDEO BUTTONS			
			var 
			$videoBtn1 = $("#videoBtn1"),
			$videoBtn2 = $("#videoBtn2"),
			$videoBtn3 = $("#videoBtn3"),
			$videoBtn4 = $("#videoBtn4"),
			$videoBtn5 = $("#videoBtn5"),
			$videoBtn6 = $("#videoBtn6"),
			$videoBtn7 = $("#videoBtn7"),

			$backBtn1 = $("#backBtn1"),
			$backBtn2 = $("#backBtn2"),
			$backBtn3 = $("#backBtn3"),
			$backBtn4 = $("#backBtn4"),
			$backBtn5 = $("#backBtn5"),
			$backBtn6 = $("#backBtn6"),
			$backBtn7 = $("#backBtn7");
			
			//shuffle in and out video div
			function videoTransitTo(e){
				TweenMax.to(".ani_Preview", 1.5, {opacity:0, css:{left:"-100%"}, ease: Power4.easeOut},0.5);
				TweenMax.to(".ani_Video", 1.5, {css:{left:0}, ease: Power4.easeOut},0.5);
				TweenMax.to($("#ani_nav"), 1.5, {display:"none", left:"-500px", ease: Power4.easeOut},0.5);
				TweenMax.to($("header"), 1.5, {display:"none", top:"-50px", ease: Power4.easeOut},0.5);

				$.fn.fullpage.setMouseWheelScrolling(false);
				$.fn.fullpage.setAllowScrolling(false);	
							
			}

			function videoTransitBack(e){
				TweenMax.to(".ani_Preview", 1.5, {css:{left:0}, opacity:100, ease: Power4.easeOut},0.5);
				TweenMax.to(".ani_Video", 1.5, {css:{left:"100%"}, opacity:0, ease: Power4.easeOut},0.5);
				TweenMax.to($("#ani_nav"), 1.5, {display:"initial", left:"35px", ease: Power4.easeOut},0.5);
				TweenMax.to($("header"), 1.5, {display:"initial", top:"46px", ease: Power4.easeOut},0.5);

				$.fn.fullpage.setMouseWheelScrolling(true);
				$.fn.fullpage.setAllowScrolling(true);	

			}
			//fade in video
			function fadeInVideo(e){
				TweenMax.from($("iframe"),1,{opacity:0, ease: Power2.easeOut, delay:0.8});
			}

			$videoBtn1.click(fadeInVideo);
			$videoBtn2.click(fadeInVideo);
			$videoBtn3.click(fadeInVideo);
			$videoBtn4.click(fadeInVideo);
			$videoBtn5.click(fadeInVideo);
			$videoBtn6.click(fadeInVideo);
			$videoBtn7.click(fadeInVideo);
			
			$videoBtn1.click(videoTransitTo);
			$videoBtn2.click(videoTransitTo);
			$videoBtn3.click(videoTransitTo);
			$videoBtn4.click(videoTransitTo);
			$videoBtn5.click(videoTransitTo);
			$videoBtn6.click(videoTransitTo);
			$videoBtn7.click(videoTransitTo);

			$backBtn1.click(videoTransitBack);
			$backBtn2.click(videoTransitBack);
			$backBtn3.click(videoTransitBack);
			$backBtn4.click(videoTransitBack);
			$backBtn5.click(videoTransitBack);
			$backBtn6.click(videoTransitBack);
			$backBtn7.click(videoTransitBack);

	//pause videos when leaving the section
			var $frame1 = $('iframe#video1');
			var vidsrc1 = $frame1.attr('src');

			var $frame2 = $('iframe#video2');
			var vidsrc2 = $frame2.attr('src');

			var $frame3 = $('iframe#video3');
			var vidsrc3 = $frame3.attr('src');

			var $frame4 = $('iframe#video4');
			var vidsrc4 = $frame4.attr('src');

			var $frame5 = $('iframe#video5');
			var vidsrc5 = $frame5.attr('src');

			var $frame6 = $('iframe#video6');
			var vidsrc6 = $frame6.attr('src');
			
			var $frame7 = $('iframe#video7');
			var vidsrc7 = $frame7.attr('src');

			$backBtn1.click(function(){
				$frame1.attr('src', '');
			});
			$videoBtn1.click(function(){
				$frame1.attr('src', vidsrc1);
			});

			$backBtn2.click(function(){
				$frame2.attr('src', '');
			});
			$videoBtn2.click(function(){
				$frame2.attr('src', vidsrc2);
			});

			$backBtn3.click(function(){
				$frame3.attr('src', '');
			});
			$videoBtn3.click(function(){
				$frame3.attr('src', vidsrc3);
			});

			$backBtn4.click(function(){
				$frame4.attr('src', '');
			});
			$videoBtn4.click(function(){
				$frame4.attr('src', vidsrc4);
			});

			$backBtn5.click(function(){
				$frame5.attr('src', '');
			});
			$videoBtn5.click(function(){
				$frame5.attr('src', vidsrc5);
			});

			$backBtn6.click(function(){
				$frame6.attr('src', '');
			});
			$videoBtn6.click(function(){
				$frame6.attr('src', vidsrc6);
			});

			$backBtn7.click(function(){
				$frame7.attr('src', '');
			});
			$videoBtn7.click(function(){
				$frame7.attr('src', vidsrc7);
			});


	//Initiate FitVids (video resize) plugin
			$(".videocontent").fitVids();

	//Video Resize Formula
			setPanelSize();
	
		    $(window).resize(function(){
		    	setPanelSize();
		    });
		    
			 // function to set panels to window size and constrain video
			function setPanelSize(){
				var windowHeight = $(window).height();
				var windowWidth = $(window).width();
				var videoWidth;
				//calculate whether the video is too tall for the space
				if ( ((windowWidth-120)*.5625) > (windowHeight-160) ) {
					videoWidth = (windowHeight-160)*1.777;
				}
				//resize video and panel
			    $('.videocontent').css({'max-width':videoWidth+'px'});
			    $('.panel').css({'height':windowHeight+'px'});
			}

});
	