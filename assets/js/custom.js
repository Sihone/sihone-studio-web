(function ($) {
	"use strict";
  
  const language = localStorage.getItem('language') || navigator.language.split('-')[0] || 'en';  

	$('.sidebar-button').on("click", function () {
		$(this).toggleClass('active');
	});

	const sidebarButton = document.querySelector('.sidebar-button');
	
	if (sidebarButton) {
		sidebarButton.addEventListener('click', () => {
			document.querySelector('.main-menu').classList.toggle('show-menu');
		});
	}

	$('.menu-close-btn').on("click", function () {
		$('.main-menu').removeClass('show-menu');
	});

	jQuery('.dropdown-icon').on('click', function () {
		jQuery(this).toggleClass('active').next('ul, .mega-menu, .mega-menu2').slideToggle();
		jQuery(this).parent().siblings().children('ul, .mega-menu, .mega-menu2').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});
	jQuery('.dropdown-icon2').on('click', function () {
		jQuery(this).toggleClass('active').next('.submenu-list').slideToggle();
		jQuery(this).parent().siblings().children('.submenu-list').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});
	jQuery(function ($) {
		$(document).on('click', '.portfolio-drop-down', function (e) {
			e.preventDefault(); // Prevent default anchor behavior
	
			let submenu = $(this).siblings('.sub-menu'); // Get submenu
	
			if (submenu.length) {
				// Close other submenus at the same level
				$(this).parent().siblings().find('.sub-menu').slideUp();
	
				// Toggle clicked submenu
				submenu.stop(true, true).slideToggle();
			}
		});
	});
	
	
	// FancyBox Js
	$('[data-fancybox="gallery-01"]').fancybox({
		buttons: [
		  "close",
		],
		loop: false,
		protect: true,
	  });
	$('.video-player').fancybox({
		buttons: [
		  "close",
		],
		loop: false,
		protect: true,
	  });
	  	  
	// sticky header

	window.addEventListener('scroll', function () {
		const header = document.querySelector('header.header-area');
		header.classList.toggle("sticky", window.scrollY > 0);
	});


	//Counter up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


	// Home1 Process Slider
	var swiper = new Swiper(".home1-process-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 60,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".process-slider-next",
			prevEl: ".process-slider-prev",
		},
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 1,
			spaceBetween: 15,
		  },
		  768: {
			slidesPerView: 2,
			spaceBetween: 15,
		  },
		  992: {
			slidesPerView: 3,
		  },
		  1200: {
			slidesPerView: 3,
			spaceBetween: 25,
		  },
		  1400: {
			slidesPerView: 3,
		  },
		},
	});

	var slider = new Swiper(".home1-testimonial-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		loop: true,
		effect: 'fade', // Use fade effect
		fadeEffect: { crossFade: true },
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".testimonial-slider-next",
			prevEl: ".testimonial-slider-prev",
		},
		
	});
	
	var swiper = new Swiper(".home2-testimonial-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		loop: true,
		effect: 'fade',             // Use the fade effect
		fadeEffect: {
		  crossFade: true           // Enable cross-fade transition
		},
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".testimonial-slider-next",
			prevEl: ".testimonial-slider-prev",
		},
		pagination: {
			el: ".franctional-pagi",
			type: "fraction",
		},
	});
	var swiper = new Swiper(".home2-feature-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		loop: true,
		effect: 'fade',             // Use the fade effect
		fadeEffect: {
		  crossFade: true           // Enable cross-fade transition
		},
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".feature-slider-next",
			prevEl: ".feature-slider-prev",
		},
		pagination: {
			el: ".swiper-pagination1",
			clickable: true,
		},
	});
	// Home3 Blog Slider
	var swiper = new Swiper(".home3-blog-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 60,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".blog-slider-next",
			prevEl: ".blog-slider-prev",
		},
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 1,
			spaceBetween: 15,
		  },
		  768: {
			slidesPerView: 1,
			spaceBetween: 15,
		  },
		  992: {
			slidesPerView: 2,
		  },
		  1200: {
			slidesPerView: 2,
			spaceBetween: 25,
		  },
		  1400: {
			slidesPerView: 2,
		  },
		},
	});
	// Home3 Testimonial Slider
	var swiper = new Swiper(".home3-testimonial-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 24,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".blog-slider-next",
			prevEl: ".blog-slider-prev",
		},
		pagination: {
			el: ".swiper-pagination1",
			clickable: true,
		},
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 1,
			spaceBetween: 15,
		  },
		  768: {
			slidesPerView: 1,
			spaceBetween: 15,
		  },
		  992: {
			slidesPerView: 2,
		  },
		  1200: {
			slidesPerView: 2,
		  },
		  1400: {
			slidesPerView: 2,
		  },
		},
	});
	// Home4 Team Slider
	var swiper = new Swiper(".home4-team-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 24,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			pauseOnMouseEnter: true,
            disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination1",
			clickable: true,
		},
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 2,
			spaceBetween: 15,
		  },
		  768: {
			slidesPerView: 3,
			spaceBetween: 15,
		  },
		  992: {
			slidesPerView: 3,
		  },
		  1200: {
			slidesPerView: 4,
		  },
		  1400: {
			slidesPerView: 4,
		  },
		},
	});
	// Home5 Banner Slider
	var swiper = new Swiper(".home5-banner-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		loop: true,
		effect: 'fade',             // Use the fade effect
		fadeEffect: {
		  crossFade: true           // Enable cross-fade transition
		},
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination1",
			clickable: true,
		},
	});
	// Home6 Testimonial Slider
	var swiper = new Swiper(".home6-testimonial-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 24,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".testimonial-slider-next",
			prevEl: ".testimonial-slider-prev",
		},
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 1,
			spaceBetween: 15,
		  },
		  768: {
			slidesPerView: 1,
			spaceBetween: 15,
		  },
		  992: {
			slidesPerView: 2,
		  },
		  1200: {
			slidesPerView: 2,
		  },
		  1400: {
			slidesPerView: 2,
		  },
		},
	});
	// Service Details Slider
	var swiper = new Swiper(".service-details-post-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		loop: true,
		effect: 'fade',             // Use the fade effect
		fadeEffect: {
		  crossFade: true           // Enable cross-fade transition
		},
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".post-slider-next",
			prevEl: ".post-slider-prev",
		},
	});
	// Recent Post Slider
	var swiper = new Swiper(".related-product-slider", {
		speed: 1500,
		spaceBetween: 24,
		autoplay: {
		  delay: 2000, // Autoplay duration in milliseconds
		  disableOnInteraction: false,
		  pauseOnMouseEnter: true,
		},
		navigation: {
		  nextEl: ".related-product-slider-next",
		  prevEl: ".related-product-slider-prev",
		},
	
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  420: {
			slidesPerView: 1,
			spaceBetween: 15,
		  },
		  576: {
			slidesPerView: 2,
			spaceBetween: 15,
		  },
		  768: {
			slidesPerView: 2,
		  },
		  992: {
			slidesPerView: 3,
		  },
		  1200: {
			slidesPerView: 4,
		  },
		  1400: {
			slidesPerView: 4,
		  },
		},
	});
	// About banner Slider
	var swiper = new Swiper(".about-page-banner-slider", {
		speed: 1500,
		spaceBetween: 24,
		autoplay: {
		  delay: 2000, // Autoplay duration in milliseconds
		  disableOnInteraction: false,
		},
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  350: {
			slidesPerView: 2,
			spaceBetween: 10,
		  },
		  576: {
			slidesPerView: 3,
			spaceBetween: 15,
		  },
		  768: {
			slidesPerView: 4,
		  },
		  992: {
			slidesPerView: 5,
		  },
		  1200: {
			slidesPerView: 6,
			spaceBetween: 15,
		  },
		  1400: {
			slidesPerView: 6,
		  },
		},
	});
	// Home4 Team Slider
	var swiper = new Swiper(".about-page-team-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 24,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			pauseOnMouseEnter: true,
            disableOnInteraction: false,
		},
		
		navigation: {
			nextEl: ".about-page-team-slider-next",
			prevEl: ".about-page-team-slider-prev",
		},
	  
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 2,
			spaceBetween: 15,
		  },
		  768: {
			slidesPerView: 2,
			spaceBetween: 15,
		  },
		  992: {
			slidesPerView: 3,
		  },
		  1200: {
			slidesPerView: 4,
		  },
		  1400: {
			slidesPerView: 4,
		  },
		},
	});

	var swiper = new Swiper(".pf-horizontal-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		effect: "fade",
		mousewheel: {
		  invert: false,
		},
		navigation: {
		  nextEl: ".next-16",
		  prevEl: ".prev-16",
		},
	});

	var swiper = new Swiper(".portfolio-carousel-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		effect: "fade",
		fadeEffect: {
			crossFade: true           // Enable cross-fade transition
		},
		mousewheel: {
		  invert: false,
		},
		navigation: {
			nextEl: ".portfolio-carousel-slider-next",
			prevEl: ".portfolio-carousel-slider-prev",
		},
		pagination: {
			el: ".swiper-pagination1",
			clickable: true,
		},
	});

	gsap.registerPlugin(Observer);

	let sections = document.querySelectorAll("section"),
	images = document.querySelectorAll(".bg"),
	outerWrappers = gsap.utils.toArray(".outer"),
	innerWrappers = gsap.utils.toArray(".inner");

	if (sections.length && images.length && outerWrappers.length && innerWrappers.length) {
	let currentIndex = -1,
		wrap = gsap.utils.wrap(0, sections.length),
		animating;

	gsap.set(outerWrappers, { yPercent: 100 });
	gsap.set(innerWrappers, { yPercent: -100 });

	function gotoSection(index, direction) {
		index = wrap(index); // make sure it's valid
		animating = true;
		let fromTop = direction === -1,
		dFactor = fromTop ? -1 : 1,
		tl = gsap.timeline({
			defaults: { duration: 1.25, ease: "power1.inOut" },
			onComplete: () => (animating = false),
		});

		if (currentIndex >= 0) {
		gsap.set(sections[currentIndex], { zIndex: 0 });
		tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(sections[currentIndex], { autoAlpha: 0 });
		}

		gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
		tl.fromTo(
		[outerWrappers[index], innerWrappers[index]],
		{ yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
		{ yPercent: 0 },
		0
		).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

		currentIndex = index;
	}

	Observer.create({
		type: "wheel,touch,pointer",
		wheelSpeed: -1,
		onDown: () => !animating && gotoSection(currentIndex - 1, -1),
		onUp: () => !animating && gotoSection(currentIndex + 1, 1),
		tolerance: 10,
		preventDefault: true,
	});

	gotoSection(0, 1);
	}
	
	//wow js 
    jQuery(window).on('load', function () {
        new WOW().init();
        window.wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            offset: 80
        })
        window.wow.init();
    });
	
	// niceSelect
	// if ($('select').length) {
	// 	$("select").niceSelect();
	// }

	//Quantity Increment
	$(".quantity__minus").on("click", function (e) {
	   e.preventDefault();
	   var input = $(this).siblings(".quantity__input");
	   var value = parseInt(input.val(), 10);
	   if (value > 1) {
		 value--;
	   }
	   input.val(value.toString().padStart(2, "0"));
	});
	$(".quantity__plus").on("click", function (e) {
		e.preventDefault();
		var input = $(this).siblings(".quantity__input");
		var value = parseInt(input.val(), 10);
		value++;
		input.val(value.toString().padStart(2, "0"));
	});

	window.addEventListener('scroll', function () {
		const appbackimg = document.querySelector('.home2-app-banner-section .banner-img');
		if (appbackimg) { // Check if the element exists
			const getAppBlockHeight = appbackimg.getBoundingClientRect().y;
			appbackimg.classList.toggle("animate-back-img", 320 >= getAppBlockHeight);
		}
	});

	window.addEventListener('scroll', function () {
		const appbackimg = document.querySelector('.home7-about-section .skill-area .skill-list');
		if (appbackimg) { // Check if the element exists
			const getAppBlockHeight = appbackimg.getBoundingClientRect().y;
			appbackimg.classList.toggle("active", 700 >= getAppBlockHeight);
		}
	});
	
	// services Images
	const serviceImgItem = document.querySelectorAll(
		".sevices-wrap .single-services "
	);
	function followImageCursor(event, serviceImgItem) {
		const contentBox = serviceImgItem.getBoundingClientRect();
		const dx = event.clientX - contentBox.x;
		const dy = event.clientY - contentBox.y;
		serviceImgItem.children[1].style.transform = `translate(${dx}px, ${dy}px) rotate(25deg)`;
	}

	serviceImgItem.forEach((item, i) => {
		item.addEventListener("mousemove", (event) => {
		setInterval(followImageCursor(event, item), 100);
		});
	});

	//Cart Menu Quantity button toggle
	$(".qty-btn").on("click", function (e) {
		e.stopPropagation();
		// Toggle "active" class for the current quantity button and its related elements
		$(this).next(".quantity-area").toggleClass("active");

		// Remove "active" class from other quantity buttons and related elements
		$(".quantity-area")
		.not($(this).next(".quantity-area"))
		.removeClass("active");
  	});
	$(document).on("click", function (e) {
		if (!$(e.target).closest(".quantity-area").length) {
		// Remove "active" class from all quantity buttons and related elements
		$(".quantity-area").removeClass("active");
		}
	});

	 // Payment Method
	 $(function () {
		$(".choose-payment-method ul li").on("click", function () {
		  $(".choose-payment-method ul li").removeClass("active"); // Remove active class from all list items
		  if ($(this).hasClass("stripe")) {
			$("#StripePayment").show();
			$("#OfflinePayment").hide();
			$(this).addClass("active"); // Add active class to the clicked list item
		  } else if ($(this).hasClass("paypal")) {
			$("#OfflinePayment").hide();
			$("#StripePayment").hide();
			$(this).addClass("active"); // Add active class to the clicked list item
		  } else if ($(this).hasClass("offline")) {
			$("#OfflinePayment").show();
			$("#StripePayment").hide();
			$(this).addClass("active"); // Add active class to the clicked list item
		  } else {
			$("#StripePayment").hide();
			$("#OfflinePayment").hide();
		  }
		});
	  });

	// BTN Hover
	$(".btn-hover")
	.on("mouseenter", function (e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find("span").css({ top: 0, left: 0 });
		$(this).find("span").css({ top: relY, left: relX });
	})
	.on("mouseout", function (e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find("span").css({ top: 0, left: 0 });
		$(this).find("span").css({ top: relY, left: relX });
	});
	  
	document.addEventListener("DOMContentLoaded", () => {
		const paths = document.querySelectorAll(".blinking-svg .circle");
	
		// Check if paths exist on the current page
		if (paths.length > 0) {
			function randomHide() {
				// Select a random path
				const randomIndex = Math.floor(Math.random() * paths.length);
				const randomPath = paths[randomIndex];
	
				// Add the "hide" class
				randomPath.classList.add("hide");
	
				// Remove the "hide" class after 0.8s
				setTimeout(() => {
					randomPath.classList.remove("hide");
				}, 800);
			}
	
			// Run the randomHide function repeatedly
			setInterval(randomHide, 500);
		}
	});
	
	document.addEventListener("DOMContentLoaded", () => {
		const contactSection = document.querySelector(".home4-contact-btn-area");
		const btnArea = document.querySelector(".home4-contact-btn-area");
	  
		const observerOptions = {
		  root: null, // Use the viewport as the root
		  threshold: 0.1, // Trigger when 10% of the section is visible
		};
	  
		const observer = new IntersectionObserver((entries) => {
		  entries.forEach((entry) => {
			if (entry.isIntersecting) {
			  btnArea.classList.add("active");
			} else {
			//   btnArea.classList.remove("active");
			}
		  });
		}, observerOptions);
	  
		if (contactSection) {
		  observer.observe(contactSection);
		}
	});
	
	// Home4 Industry Hover
	$(".industry-list ul li").on({
		mouseenter: function () {
			// Remove the 'active' class from all content list items
			$(".industry-list ul li").removeClass("active");
			// Add the 'active' class to the hovered content list item
			$(this).addClass("active");
	
			// Get the index of the hovered content list item
			var index = $(this).index();
	
			// Remove the 'active' class from all image list items in both industry-img containers
			$(".industry-img ul li").removeClass("active");
	
			// Add the 'active' class to the corresponding image list items in both industry-img containers
			$(".industry-img").each(function () {
				$(this).find("ul li:eq(" + index + ")").addClass("active");
			});
		},
	});
	
	// Serch Btn
	$(".search-btn").on("click", function (e) {

		let parent = $(this).parent();

		parent.find(".search-input").toggleClass("active");

		e.stopPropagation();

	});
	$(document).on("click", function (e) {
		if (!$(e.target).closest(".search-input, .search-btn").length) {
			$(".search-input").removeClass("active");
		}
	});
	$(".search-close").on("click", function (e) {
		$(".search-input").removeClass("active");
	});

	// Language Btn
	$(".language-btn").on("click", function (e) {
		let parent  = $(this).parent();
		parent.find(".language-list").toggleClass("active");
		e.stopPropagation();
	});
	$(document).on("click", function (e) {
		if (!$(e.target).closest(".language-btn" ).length) {
		  $(".language-list").removeClass("active");
		}
	});


	gsap.registerPlugin(ScrollTrigger);
	let mm = gsap.matchMedia();
	gsap.to(".home3-video-wrapper .video-area", {
		y: 420, // Move 500px down
		width: "97vw",  // Expand to full window width
		height: "80vh", // Ensure it also takes full height
		right: "auto",      // Set right to 0 to make sure the expansion happens from the right side
		x: 120,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".home3-video-wrapper",
			start: "top 25%",  // Trigger when the top of the video-wrapper reaches 30% of the viewport
			end: "bottom top", // Animation ends when the video-wrapper leaves the viewport
			scrub: 3,  // Smooth transition
			// markers: true // Optional, for debugging purposes
		}
	});
	// Adjust x value for screens ≤ 1700px without overwriting the animation
	mm.add("(max-width: 1700px)", () => {
		gsap.to(".home3-video-wrapper .video-area", {
			x: 70, // Update x only for screens ≤ 1700px
			scrollTrigger: {
				trigger: ".home3-video-wrapper",
				start: "top 25%",
				end: "bottom top",
				scrub: 3,
			}
		});
  	});
	mm.add("(max-width: 1600px)", () => {
		gsap.to(".home3-video-wrapper .video-area", {
			y: 500,
			x: 25, 
			width: "95vw", 
			scrollTrigger: {
				trigger: ".home3-video-wrapper",
				start: "top 25%",
				end: "bottom top",
				scrub: 3,
			}
		});
  	});
	mm.add("(max-width: 1470px)", () => {
		gsap.to(".home3-video-wrapper .video-area", {
			y: 500,
			x: 20, 
			width: "95vw", 
			scrollTrigger: {
				trigger: ".home3-video-wrapper",
				start: "top 25%",
				end: "bottom top",
				scrub: 3,
			}
		});
  	});
	mm.add("(max-width: 1199px)", () => {
		gsap.to(".home3-video-wrapper .video-area", {
			y: 500,
			x: 12, 
			width: "95vw", 
			height: "70vh",
			scrollTrigger: {
				trigger: ".home3-video-wrapper",
				start: "top 25%",
				end: "bottom top",
				scrub: 3,
			}
		});
  	});

	$(window).scroll(function() {
		if ($(window).width() <= 767) { // Adjust the breakpoint as needed (576px is Bootstrap's sm breakpoint)
			return; // Disable animation for small devices
		}
	
		var scroll = $(window).scrollTop();
	
		// Move banner down and scale down gradually
		var translateYBanner = Math.min(scroll / 2, 500); // Moves down, limit to 500px
		var scale = Math.max((100 - scroll / 5) / 100, 0); // Ensure scale never goes below 0
		var opacity = Math.max(1 - scroll / 500, 0); // Ensure opacity never goes below 0
	
		$(".home6-banner-section .banner-wrapper").css({
			transform: 'translate3d(0%, ' + translateYBanner + 'px, 0) scale(' + scale + ')',
			opacity: opacity > 0 ? opacity : 0, // Prevent negative opacity
		});
	
		// Dashboard effect: Move up and rotateX from 45deg to 0deg
		var translateYDashboard = Math.min(scroll / 2, 300); // Move up, limit to 300px
		var rotateXValue = Math.max(30 - (scroll / 10), 0); // Gradually reduce rotateX from 45deg to 0deg
	
		// Apply smooth transition of rotateX from 45deg to 0deg
		$(".dashboard-img-section .dashboard-img-wrap .dashboard-img").css({
			"transform": "translate3d(0, -" + translateYDashboard + "px, 0) rotateX(" + rotateXValue + "deg)",
		});
	});
	
	const celebrateBtn = document.getElementById('celebrateBtn');

	if (celebrateBtn) {
		celebrateBtn.addEventListener('mouseenter', () => {
			// trigger confetti
			confetti({
				particleCount: 100,
				spread: 70,
				origin: { y: 0.6 }
			});

			// button animation
			celebrateBtn.style.transform = 'scale(0.95)';
		});

		celebrateBtn.addEventListener('mouseleave', () => {
			celebrateBtn.style.transform = 'scale(1)';
		});
	}

	$(function () {
		function initializeThrowable() {
			$("#feature-wrap .throwable-item").each(function () {
				var xPos = Math.random() * 50;
				var yPos = Math.random() * 50;
				$(this).css({
					position: "absolute",
					left: xPos + "px",
					top: yPos + "px",
					cursor: "grab",
					opacity: 0,
					transform: "scale(0.5)",
				});
			});
	
			// Fix for passive event listener issue on mobile
			$(document).on("touchmove", function (event) {
				event.preventDefault();
			}, { passive: false });
	
			// Check if the throwable function is available before using it
			if ($.fn.throwable) {
				$(".throwable-item").throwable({
					gravity: { x: 0, y: 3 },
					damping: 0.9,
					containment: "parent",
					collisionDetection: true,
					bounce: 0.3,
				});
			} else {
				console.warn("Throwable plugin is not loaded.");
			}
		}
	
		// Intersection Observer to trigger animation when visible
		let observer = new IntersectionObserver(
			function (entries) {
				entries.forEach((entry) => {
					let target = $(entry.target);
					if (entry.isIntersecting) {
						// Reset position randomly before animation
						target.css({
							opacity: 0,
							transform: "scale(0.5)",
						});
	
						// Animate when in viewport
						target.animate({ opacity: 1, transform: "scale(1)" }, 500, function () {
							initializeThrowable(); // Reinitialize throwable
						});
					} else {
						// Reset when leaving viewport
						target.css({
							opacity: 0,
							transform: "scale(0.5)",
						});
					}
				});
			},
			{ threshold: 0.2 }
		);
	
		$(".throwable-item").each(function () {
			observer.observe(this);
		});
	});
	

	$(".award-table tbody tr").on("mouseenter", function (e) {
		// // Get the index of the hovered content list item
		var index = $(this).index();
		// Remove the 'active' class from all image list items
		$(".award-img-group li").removeClass("active");
		// Add the 'active' class to the corresponding image list item
		$(".award-img-group li:eq(" + index + ")").addClass("active");
	});
	
	//Project Info Flow
	const infoflow1TextItem = document.querySelectorAll(".portfolio-caption-card");
	function followImageCursor2(event, infoflow1TextItem) {
	const contentBox = infoflow1TextItem.getBoundingClientRect();
	const dx = event.clientX - contentBox.x;
	const dy = event.clientY - contentBox.y;
	infoflow1TextItem.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
	}

	infoflow1TextItem.forEach((item, i) => {
		item.addEventListener("mousemove", (event) => {
			setInterval(followImageCursor2(event, item), 100);
		});
	});

	
	//Scroll Down Button
	const scrollBtn = document.querySelector('#scroll-btn');
	if (scrollBtn) { 
		scrollBtn.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector('#scroll-section').scrollIntoView({
				behavior: 'smooth'
			});
		});
	}

	if ($("body").not(".is-mobile").hasClass("tt-magic-cursor")) {
		if ($(window).width() > 1024) {
		  gsap.config({
			nullTargetWarn: false,
			trialWarn: false,
		  });
		  $(".magnetic-item").wrap('<div class="magnetic-wrap"></div>');
	
		  if ($("a.magnetic-item").length) {
			$("a.magnetic-item").addClass("not-hide-cursor");
		  }
	
		  var $mouse = { x: 0, y: 0 }; // Cursor position
		  var $pos = { x: 0, y: 0 }; // Cursor position
		  var $ratio = 0.15; // delay follow cursor
		  var $active = false;
		  var $ball = $("#ball");
	
		  var $ballWidth = 20; // Ball default width
		  var $ballHeight = 20; // Ball default height
		  var $ballOpacity = 0.5; // Ball default opacity
		  var $ballBorderWidth = 2; // Ball default border width
	
		  gsap.set($ball, {
			// scale from middle and style ball
			xPercent: -50,
			yPercent: -50,
			width: $ballWidth,
			height: $ballHeight,
			borderWidth: $ballBorderWidth,
			opacity: $ballOpacity,
		  });
	
		  document.addEventListener("mousemove", mouseMove);
	
		  function mouseMove(e) {
			$mouse.x = e.clientX;
			$mouse.y = e.clientY;
		  }
	
		  gsap.ticker.add(updatePosition);
	
		  function updatePosition() {
			if (!$active) {
			  $pos.x += ($mouse.x - $pos.x) * $ratio;
			  $pos.y += ($mouse.y - $pos.y) * $ratio;
	
			  gsap.set($ball, { x: $pos.x, y: $pos.y });
			}
		  }
	
		  $(".magnetic-wrap").mousemove(function (e) {
			parallaxCursor(e, this, 2); // magnetic ball = low number is more attractive
			callParallax(e, this);
		  });
	
		  function callParallax(e, parent) {
			parallaxIt(e, parent, parent.querySelector(".magnetic-item"), 25); // magnetic area = higher number is more attractive
		  }
	
		  function parallaxIt(e, parent, target, movement) {
			var boundingRect = parent.getBoundingClientRect();
			var relX = e.clientX - boundingRect.left;
			var relY = e.clientY - boundingRect.top;
	
			gsap.to(target, {
			  duration: 0.3,
			  x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
			  y:
				((relY - boundingRect.height / 2) / boundingRect.height) * movement,
			  ease: Power2.easeOut,
			});
		  }
	
		  function parallaxCursor(e, parent, movement) {
			var rect = parent.getBoundingClientRect();
			var relX = e.clientX - rect.left;
			var relY = e.clientY - rect.top;
			$pos.x =
			  rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
			$pos.y =
			  rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
			gsap.to($ball, { duration: 0.3, x: $pos.x, y: $pos.y });
		  }
	
		  // Magic cursor behavior
		  // ======================
	
		  // Magnetic item hover.
		  $(".magnetic-wrap")
			.on("mouseenter mouseover", function (e) {
			  $ball.addClass("magnetic-active");
			  gsap.to($ball, { duration: 0.3, width: 70, height: 70, opacity: 1 });
			  $active = true;
			})
			.on("mouseleave", function (e) {
			  $ball.removeClass("magnetic-active");
			  gsap.to($ball, {
				duration: 0.3,
				width: $ballWidth,
				height: $ballHeight,
				opacity: $ballOpacity,
			  });
			  gsap.to(this.querySelector(".magnetic-item"), {
				duration: 0.3,
				x: 0,
				y: 0,
				clearProps: "all",
			  });
			  $active = false;
			});
	
		  // Alternative cursor style on hover.
		  $(
			".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a"
		  )
			.not(".magnetic-item") // omit from selection.
			.on("mouseenter", function () {
			  gsap.to($ball, {
				duration: 0.3,
				borderWidth: 0,
				opacity: 0.2,
				backgroundColor: "#CCC",
				width: "90px",
				height: "90px",
			  });
			})
			.on("mouseleave", function () {
			  gsap.to($ball, {
				duration: 0.3,
				borderWidth: $ballBorderWidth,
				opacity: $ballOpacity,
				backgroundColor: "transparent",
				width: $ballWidth,
				height: $ballHeight,
				clearProps: "backgroundColor",
			  });
			});	
		
		  // Cursor view on hover (data attribute "data-cursor="...").
		  $("[data-cursor]").each(function () {
			$(this)
			  .on("mouseenter", function () {
				$ball
				  .addClass("ball-view")
				  .append('<div class="ball-view-inner"></div>');
				$(".ball-view-inner").append($(this).attr("data-cursor"));
				gsap.to($ball, {
				  duration: 0.3,
				  yPercent: -75,
				  width: 82,
				  height: 82,
				  opacity: 1,
				  borderWidth: 0,
				});
				gsap.to(".ball-view-inner", {
				  duration: 0.3,
				  scale: 1,
				  autoAlpha: 1,
				});
			  })
			  .on("mouseleave", function () {
				gsap.to($ball, {
				  duration: 0.3,
				  yPercent: -50,
				  width: $ballWidth,
				  height: $ballHeight,
				  opacity: $ballOpacity,
				  borderWidth: $ballBorderWidth,
				});
				$ball.removeClass("ball-view").find(".ball-view-inner").remove();
			  });
			$(this).addClass("not-hide-cursor");
		  });
	
		  // Cursor drag on hover (class "cursor-drag"). For Swiper sliders.
		  $(".swiper").each(function () {
			if ($(this).parent().attr("data-simulate-touch") === "true") {
			  if ($(this).parent().hasClass("cursor-drag")) {
				$(this)
				  .on("mouseenter", function () {
					$ball.append('<div class="ball-drag"></div>');
					gsap.to($ball, {
					  duration: 0.3,
					  width: 60,
					  height: 60,
					  opacity: 1,
					});
				  })
				  .on("mouseleave", function () {
					$ball.find(".ball-drag").remove();
					gsap.to($ball, {
					  duration: 0.3,
					  width: $ballWidth,
					  height: $ballHeight,
					  opacity: $ballOpacity,
					});
				  });
				$(this).addClass("not-hide-cursor");
	
				// Ignore "data-cursor" on hover.
				$(this)
				  .find("[data-cursor]")
				  .on("mouseenter mouseover", function () {
					$ball.find(".ball-drag").remove();
					return false;
				  })
				  .on("mouseleave", function () {
					$ball.append('<div class="ball-drag"></div>');
					gsap.to($ball, {
					  duration: 0.3,
					  width: 60,
					  height: 60,
					  opacity: 1,
					});
				  });
			  }
			}
		  });
	
		  // Cursor drag on mouse down / click and hold effect (class "cursor-drag-mouse-down"). For Swiper sliders.
		  $(".swiper").each(function () {
			if ($(this).parent().attr("data-simulate-touch") === "true") {
			  if ($(this).parent().hasClass("cursor-drag-mouse-down")) {
				$(this)
				  .on("mousedown pointerdown", function (e) {
					if (e.which === 1) {
					  // Affects the left mouse button only!
					  gsap.to($ball, {
						duration: 0.2,
						width: 60,
						height: 60,
						opacity: 1,
					  });
					  $ball.append('<div class="ball-drag"></div>');
					}
				  })
				  .on("mouseup pointerup", function () {
					$ball.find(".ball-drag").remove();
					if ($(this).find("[data-cursor]:hover").length) {
					} else {
					  gsap.to($ball, {
						duration: 0.2,
						width: $ballWidth,
						height: $ballHeight,
						opacity: $ballOpacity,
					  });
					}
				  })
				  .on("mouseleave", function () {
					$ball.find(".ball-drag").remove();
					gsap.to($ball, {
					  duration: 0.2,
					  width: $ballWidth,
					  height: $ballHeight,
					  opacity: $ballOpacity,
					});
				  });
	
				// Ignore "data-cursor" on mousedown.
				$(this)
				  .find("[data-cursor]")
				  .on("mousedown pointerdown", function () {
					return false;
				  });
	
				// Ignore "data-cursor" on hover.
				$(this)
				  .find("[data-cursor]")
				  .on("mouseenter mouseover", function () {
					$ball.find(".ball-drag").remove();
					return false;
				  });
			  }
			}
		  });
	
		  // Cursor close on hover.
		  $(".cursor-close").each(function () {
			$(this).addClass("ball-close-enabled");
			$(this)
			  .on("mouseenter", function () {
				$ball.addClass("ball-close-enabled");
				$ball.append('<div class="ball-close">Close</div>');
				gsap.to($ball, {
				  duration: 0.3,
				  yPercent: -75,
				  width: 80,
				  height: 80,
				  opacity: 1,
				});
				gsap.from(".ball-close", { duration: 0.3, scale: 0, autoAlpha: 0 });
			  })
			  .on("mouseleave click", function () {
				$ball.removeClass("ball-close-enabled");
				gsap.to($ball, {
				  duration: 0.3,
				  yPercent: -50,
				  width: $ballWidth,
				  height: $ballHeight,
				  opacity: $ballOpacity,
				});
				$ball.find(".ball-close").remove();
			  });
	
			// Hover on "cursor-close" inner elements.
			$(
			  ".cursor-close a, .cursor-close button, .cursor-close .tt-btn, .cursor-close .hide-cursor"
			)
			  .not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
			  .on("mouseenter", function () {
				$ball.removeClass("ball-close-enabled");
			  })
			  .on("mouseleave", function () {
				$ball.addClass("ball-close-enabled");
			  });
		  });
	
		  // ================================================================
		  // Scroll between anchors
		  // ================================================================
	
		  $('a[href^="#"]')
			.not('[href$="#"]') // omit from selection
			.not('[href$="#0"]') // omit from selection
			.on("click", function () {
			  var target = this.hash;
	
			  // If fixed header position enabled.
			  if ($("#tt-header").hasClass("tt-header-fixed")) {
				var $offset = $("#tt-header").height();
			  } else {
				var $offset = 0;
			  }
	
			  // You can use data attribute (for example: data-offset="100") to set top offset in HTML markup if needed.
			  if ($(this).data("offset") != undefined)
				$offset = $(this).data("offset");
	
			  
			  return false;
			});
	
		 
		  // Show/hide magic cursor
		  // =======================
	
		  // Hide on hover.
		  $(
			"a, button, .tt-btn, .tt-form-control, .tt-form-radio, .tt-form-check, .hide-cursor"
		  ) // class "hide-cursor" is for global use.
			.not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
			.not(".cursor-alter") // omit from selection
			.not(".tt-main-menu-list > li > a") // omit from selection
			.not(".tt-main-menu-list > li > .tt-submenu-trigger > a") // omit from selection
			.on("mouseenter", function () {
			  gsap.to($ball, { duration: 0.3, scale: 0, opacity: 0 });
			})
			.on("mouseleave", function () {
			  gsap.to($ball, { duration: 0.3, scale: 1, opacity: $ballOpacity });
			});
	
		  // Hide on click.
		  $("a")
			.not('[target="_blank"]') // omit from selection.
			.not('[href^="#"]') // omit from selection.
			.not('[href^="mailto"]') // omit from selection.
			.not('[href^="tel"]') // omit from selection.
			.not(".lg-trigger") // omit from selection.
			.not(".video-player") // omit from selection.
			.not(".tt-btn-disabled") // omit from selection.
			.on("click", function () {
			  gsap.to($ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
			});

		  // Show/hide on document leave/enter.
		  $(document)
			.on("mouseleave", function () {
			  gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 0 });
			})
			.on("mouseenter", function () {
			  gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
			});
	
		  // Show as the mouse moves.
		  $(document).mousemove(function () {
			gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
	   	  });
		}
	}

	gsap.registerPlugin(ScrollTrigger);

	let drawLine = gsap.timeline();
  
	ScrollTrigger.create({
	  trigger: "#about-section",
	  animation: drawLine,
	  start: "-5% 0",
	  end: "120% 100%",
	  scrub: 4,
	});
	drawLine.fromTo(
	  "#route-1",
	  { drawSVG: "0%" },
	  { duration: 6, drawSVG: "100%" }
	);

	// Back To Top
	jQuery(function($) {
		"use strict";

		var progressPath = document.querySelector('.progress-wrap .progress-circle path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		};

		updateProgress();
		$(window).on('scroll', updateProgress);

		var offset = 50;
		var duration = 550;

		$(window).on('scroll', function() {
			if ($(this).scrollTop() > offset) {
				$('.progress-wrap').addClass('active-progress');
			} else {
				$('.progress-wrap').removeClass('active-progress');
			}
		});

		$('.progress-wrap').on('click', function() {
			window.scrollTo({ top: 0, behavior: "smooth" });
		});
	});


	$(".interactive-link").each(function () {
		$(this)
			.on("mouseover", function () {
				$(".interactive-item").removeClass("active");
				$(this).parent().addClass("active");
			})
	});

	// Dark Light
	const dayNight = document.querySelector(".tt-style-switch");

	const toggleDarkMode = () => {
	const body = document.body;
	const icon = dayNight.querySelector("i");
	body.classList.toggle("dark");
	
	icon.classList.toggle("bi-brightness-low-fill", body.classList.contains("dark"));
	icon.classList.toggle("bi-moon", !body.classList.contains("dark"));

	localStorage.setItem("mortar_theme", body.classList.contains("dark") ? "dark" : "");
	};

	dayNight.addEventListener("click", toggleDarkMode);

	window.addEventListener("load", () => {
	const savedTheme = localStorage.getItem("mortar_theme");
	if (savedTheme === "dark") {
		toggleDarkMode();
	}
	});

	if ($('.marquee_text').length) {
		$(".marquee_text").marquee({
            direction: "left",
            duration: 55000,
            gap: 50,
            delayBeforeStart: 0,
            duplicated: true,
            startVisible: true,
        });
	}
	if ($('.marquee_text2').length) {
		$(".marquee_text2").marquee({
            direction: "left",
            duration: 25000,
            gap: 50,
            delayBeforeStart: 0,
            duplicated: true,
            startVisible: true,
        });
	}
  
  function loadMenuItems() {
    const activeEl = window.location.pathname.split('/').pop().split('.')[0] || 'index';
    const activeElExt = window.location.pathname.split('/').pop().split('.')[1] || 'html';
    const menuList = document.querySelector('.menu-list');
    const isServicePage = activeEl === 'services' || activeEl === 'service-web' || activeEl === 'service-marketing' || activeEl === 'service-incubator' || activeEl === 'service-creator'; 
    
    menuList.innerHTML = '';

    const homeEl = document.createElement('li');
    homeEl.classList.add('single-menu-item', 'position-inherit', activeEl === 'index' ? 'active' : 'c');
    homeEl.innerHTML = '<a href="/' + language + '/">' + (language === 'en' ? 'Home' : 'Accueil') + '</a>';
    menuList.appendChild(homeEl);
    
    const ourServicesEl = document.createElement('li');
    ourServicesEl.classList.add('menu-item-has-children', isServicePage ? 'active' : 'c');
    ourServicesEl.innerHTML = `
      <a href="services.html" class="drop-down">` + (language === 'en' ? 'Our Services' : 'Nos Services') + `</a>
      <i class="bi bi-plus dropdown-icon"></i>
      `;
    const ourServicesElUl = document.createElement('ul');
    ourServicesElUl.classList.add('sub-menu');
    ourServicesEl.appendChild(ourServicesElUl);
    menuList.appendChild(ourServicesEl);
    
    const web = document.createElement('li');
    web.classList.add(activeEl === 'service-web' ? 'active' : 'c');
    web.innerHTML = '<a href="service-web.html">' + (language === 'en' ? 'Web Apps & Automation' : 'Applications Web & Automation') + '</a>';
    ourServicesElUl.appendChild(web);
    
    const marketing = document.createElement('li');
    marketing.classList.add(activeEl === 'service-marketing' ? 'active' : 'c');
    marketing.innerHTML = '<a href="service-marketing.html">' + (language === 'en' ? 'Digital Marketing' : 'Marketing Digital') + '</a>';
    ourServicesElUl.appendChild(marketing);
    
    const ai = document.createElement('li');
    ai.classList.add(activeEl === 'service-incubator' ? 'active' : 'c');
    ai.innerHTML = '<a href="service-incubator.html">' + (language === 'en' ? 'Tech Hub Incubator' : 'Incubateur Tech Hub') + '</a>';
    ourServicesElUl.appendChild(ai);
    
    const creator = document.createElement('li');
    creator.classList.add(activeEl === 'service-creator' ? 'active' : 'c');
    creator.innerHTML = '<a href="service-creator.html">' + (language === 'en' ? 'Creator Management' : 'Gestion du Créateur') + '</a>';
    ourServicesElUl.appendChild(creator);
    
    // const ourPortfolioEl = document.createElement('li');
    // ourPortfolioEl.classList.add('single-menu-item', 'position-inherit', activeEl === 'portfolio' ? 'active' : 'c');
    // ourPortfolioEl.innerHTML = '<a href="portfolio.html">Our Portfolio</a>';
    // menuList.appendChild(ourPortfolioEl);
    
    const aboutUsEl = document.createElement('li');
    aboutUsEl.classList.add('single-menu-item', 'position-inherit', activeEl === 'about' ? 'active' : 'c');
    aboutUsEl.innerHTML = '<a href="about.html">' + (language === 'en' ? 'About Us' : 'À Propos') + '</a>';
    menuList.appendChild(aboutUsEl);
    
    const languageEl = document.createElement('li');
    languageEl.classList.add('single-menu-item', 'position-inherit', activeEl === 'language' ? 'active' : 'c');
    menuList.appendChild(languageEl);
    const langSelect = document.createElement('select');
    langSelect.classList.add('language-select');
    langSelect.innerHTML = `
      <option value="en" `+ (language === 'en' ? 'selected' : '') +`>English</option>
      <option value="fr" `+ (language === 'fr' ? 'selected' : '') +`>Français</option>`;
    languageEl.appendChild(langSelect);
    const page = activeEl === 'index' ? '' : activeEl + '.' + activeElExt;
    langSelect.addEventListener('change', function() {
      const selectedLanguage = this.value;
      localStorage.setItem('language', selectedLanguage);
      window.location.href = `/${selectedLanguage}/${page}`;
    });
    
  }

  function getLastPartOfUrl(url) {
    const lastSlashIndex = url.lastIndexOf('/');
    if (lastSlashIndex === -1) {
      return null;
    }
    return url.substring(lastSlashIndex + 1);
  }

  function loadFooter() {
    const footer = document.querySelector('.footer-section');
    const footerTemplateEn = `
      <div class="container">
              <div class="footer-menu-wrap">
                  <div class="row">
                      <div class="col-lg-3">
                          <div class="company-logo-and-location-area">
                              <div class="company-logo-area">
                                  <img src="../assets/img/footer-logo3.svg" alt="">
                              </div>
                              <ul class="contact-list contact-list-left">
                                      <li class="single-contact">
                                          <div class="icon">
                                              <img src="../assets/img/home1/icon/contact-mail-icon.svg" alt="">
                                          </div>
                                          <div class="content">
                                              <span>Send Us Mail</span>
                                              <a href="mailto:contact@sihonestudio.com">contact@sihonestudio.com</a>
                                          </div>
                                      </li>
                                      <li class="single-contact">
                                          <div class="icon">
                                              <img src="../assets/img/home1/icon/contact-whatsapp-icon.svg" alt="">
                                          </div>
                                          <div class="content">
                                              <span>WhatsApp / Phone</span>
                                              <a href="tel:+16134248006">+1 (613) 424-8006</a><br>
                                              <a href="tel:+237696509794">+237 696 509 794</a>
                                          </div>
                                      </li>
                                  </ul>
                          </div>
                      </div>
                      <div class="col-lg-9">
                          <div class="footer-menu">
                              <div class="row gy-5">
                                  <div class="col-lg-3 col-md-3 col-sm-6">
                                      <div class="footer-widget">
                                          <div class="widget-title">
                                              <h3>Company</h3>
                                          </div>
                                          <ul class="widget-list">
                                              <li><a href="about.html">About us</a></li>
                                              <li><a href="services.html">Our Services</a></li>
                                              <li><a href="https://www.linkedin.com/company/sihonestudio/jobs/" target="_blank">Careers <span>Hiring</span></a></li>
                                              <li><a href="contact.html">Contact Us</a></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="col-lg-4 col-md-4 col-sm-6 d-flex justify-content-lg-center">
                                      <div class="footer-widget">
                                          <div class="widget-title">
                                              <h3>Sihone Family</h3>
                                          </div>
                                          <ul class="widget-list">
                                              <li><a>Primetec Academy</a></li>
                                              <li><a>Primetec Knowledge Hub</a></li>
                                              <li><a>Primetec Foundation</a></li>
                                              <li><a>La Chandele</a></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="col-lg-5 col-md-5 d-flex justify-content-lg-end">
                                      <div class="newsletter-area">
                                          <h3>Newsletter</h3>
                                          <form class="newsletter-form" action="https://magic.beehiiv.com/v1/cc23babf-cd19-4bae-8b61-c47a7c8397ec" method="GET" target="_blank">
                                              <input type="email" name="email" placeholder="Email">
                                              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                                  <path
                                                      d="M17.9597 0.771505C18.0006 0.669287 18.0107 0.557308 17.9885 0.449451C17.9664 0.341594 17.9131 0.242601 17.8353 0.164747C17.7574 0.0868923 17.6584 0.033599 17.5506 0.0114739C17.4427 -0.0106512 17.3307 -0.000635146 17.2285 0.0402804L0.863689 6.58643H0.862564L0.354081 6.78892C0.257774 6.82734 0.173959 6.89163 0.111895 6.97469C0.0498308 7.05775 0.0119333 7.15635 0.00238854 7.25959C-0.00715624 7.36284 0.0120231 7.46671 0.0578081 7.55974C0.103593 7.65278 0.174202 7.73134 0.261834 7.78676L0.723068 8.07925L0.724193 8.0815L6.34337 11.6566L9.9185 17.2758L9.92075 17.2781L10.2132 17.7393C10.2688 17.8266 10.3474 17.8968 10.4404 17.9423C10.5334 17.9878 10.6371 18.0068 10.7401 17.9972C10.8432 17.9875 10.9416 17.9496 11.0245 17.8876C11.1073 17.8257 11.1715 17.742 11.21 17.6459L17.9597 0.771505ZM15.8977 2.89768L7.46721 11.3281L7.22534 10.9479C7.18103 10.8781 7.12188 10.819 7.0521 10.7747L6.67186 10.5328L15.1023 2.10233L16.4275 1.57248L15.8988 2.89768H15.8977Z"/>
                                              </svg>
                                          </form>
                                          <div class="social-area">
                                              <h5>Let’s Connect</h5>
                                              <ul class="social-list">
                                                  <li><a href="https://www.facebook.com/SihoneStudio/" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                                                  <li><a href="https://x.com/sihonestudio" target="_blank"><i class="bi bi-twitter-x"></i></a></li>
                                                  <li><a href="https://www.linkedin.com/company/sihonestudio" target="_blank"><i class='bx bxl-linkedin'></i></a></li>
                                                  <li><a href="https://www.instagram.com/sihonestudio" target="_blank"><i class='bx bxl-instagram-alt'></i></a></li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="footer-bottom">
              <div class="container">
                  <div class="copyright-and-social-area">
                      <p>Copyright © 2025 <a href="https://sihonestudio.com/">Sihone Studio</a> | All Right Reserved.</p>
                      <div class="terms-condition">
                          <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M0 5.99981C0 5.83405 0.0632157 5.67508 0.17574 5.55787C0.288264 5.44066 0.44088 5.37481 0.600014 5.37481H8.7518L6.17534 2.69231C6.06267 2.57496 5.99938 2.41578 5.99938 2.24981C5.99938 2.08384 6.06267 1.92467 6.17534 1.80731C6.28801 1.68995 6.44081 1.62402 6.60015 1.62402C6.75948 1.62402 6.91229 1.68995 7.02496 1.80731L10.625 5.55731C10.6809 5.61537 10.7252 5.68434 10.7555 5.76027C10.7857 5.8362 10.8013 5.9176 10.8013 5.99981C10.8013 6.08202 10.7857 6.16342 10.7555 6.23935C10.7252 6.31529 10.6809 6.38426 10.625 6.44231L7.02496 10.1923C6.91229 10.3097 6.75948 10.3756 6.60015 10.3756C6.44081 10.3756 6.28801 10.3097 6.17534 10.1923C6.06267 10.075 5.99938 9.91578 5.99938 9.74981C5.99938 9.58384 6.06267 9.42467 6.17534 9.30731L8.7518 6.62481H0.600014C0.44088 6.62481 0.288264 6.55897 0.17574 6.44176C0.0632157 6.32455 0 6.16557 0 5.99981Z"/>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M11.3969 1C11.556 1 11.7086 1.06585 11.8212 1.18306C11.9337 1.30027 11.9969 1.45924 11.9969 1.625V10.375C11.9969 10.5408 11.9337 10.6997 11.8212 10.8169C11.7086 10.9342 11.556 11 11.3969 11C11.2378 11 11.0851 10.9342 10.9726 10.8169C10.8601 10.6997 10.7969 10.5408 10.7969 10.375V1.625C10.7969 1.45924 10.8601 1.30027 10.9726 1.18306C11.0851 1.06585 11.2378 1 11.3969 1Z"/>
                              </g>
                          </svg>
                          <p><a href="policy.html">Policy, Terms & Conditions</a></p>
                      </div>
                  </div>
              </div>
          </div>`;
    
    const footerTemplateFr = `
      <div class="container">
        <div class="footer-menu-wrap">
          <div class="row">
            <div class="col-lg-3">
              <div class="company-logo-and-location-area">
                <div class="company-logo-area">
                  <img src="../assets/img/footer-logo3.svg" alt="">
                </div>
                <ul class="contact-list contact-list-left">
                  <li class="single-contact">
                    <div class="icon">
                      <img src="../assets/img/home1/icon/contact-mail-icon.svg" alt="">
                    </div>
                    <div class="content">
                      <span>Envoyez-nous un e-mail</span>
                      <a href="mailto:contact@sihonestudio.com">contact@sihonestudio.com</a>
                    </div>
                  </li>
                  <li class="single-contact">
                    <div class="icon">
                      <img src="../assets/img/home1/icon/contact-whatsapp-icon.svg" alt="">
                    </div>
                    <div class="content">
                      <span>WhatsApp / Téléphone</span>
                      <a href="tel:+16134248006">+1 (613) 424-8006</a><br>
                      <a href="tel:+237696509794">+237 696 509 794</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="footer-menu">
                <div class="row gy-5">
                  <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="footer-widget">
                      <div class="widget-title">
                        <h3>Entreprise</h3>
                      </div>
                      <ul class="widget-list">
                        <li><a href="about.html">À propos de nous</a></li>
                        <li><a href="services.html">Nos Services</a></li>
                        <li><a href="https://www.linkedin.com/company/sihonestudio/jobs/" target="_blank">Carrières <span>Recrutement</span></a></li>
                        <li><a href="contact.html">Contactez-nous</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6 d-flex justify-content-lg-center">
                    <div class="footer-widget">
                      <div class="widget-title">
                        <h3>Famille Sihone</h3>
                      </div>
                      <ul class="widget-list">
                        <li><a>Primetec Académie</a></li>
                        <li><a>Primetec Knowledge Hub</a></li>
                        <li><a>Primetec Fondation</a></li>
                        <li><a>La Chandele</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-5 col-md-5 d-flex justify-content-lg-end">
                    <div class="newsletter-area">
                      <h3>Bulletin</h3>
                      <form class="newsletter-form" action="https://magic.beehiiv.com/v1/cc23babf-cd19-4bae-8b61-c47a7c8397ec" method="GET" target="_blank">
                        <input type="email" name="email" placeholder="Courriel">
                        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.9597 0.771505C18.0006 0.669287 18.0107 0.557308 17.9885 0.449451C17.9664 0.341594 17.9131 0.242601 17.8353 0.164747C17.7574 0.0868923 17.6584 0.033599 17.5506 0.0114739C17.4427 -0.0106512 17.3307 -0.000635146 17.2285 0.0402804L0.863689 6.58643H0.862564L0.354081 6.78892C0.257774 6.82734 0.173959 6.89163 0.111895 6.97469C0.0498308 7.05775 0.0119333 7.15635 0.00238854 7.25959C-0.00715624 7.36284 0.0120231 7.46671 0.0578081 7.55974C0.103593 7.65278 0.174202 7.73134 0.261834 7.78676L0.723068 8.07925L0.724193 8.0815L6.34337 11.6566L9.9185 17.2758L9.92075 17.2781L10.2132 17.7393C10.2688 17.8266 10.3474 17.8968 10.4404 17.9423C10.5334 17.9878 10.6371 18.0068 10.7401 17.9972C10.8432 17.9875 10.9416 17.9496 11.0245 17.8876C11.1073 17.8257 11.1715 17.742 11.21 17.6459L17.9597 0.771505ZM15.8977 2.89768L7.46721 11.3281L7.22534 10.9479C7.18103 10.8781 7.12188 10.819 7.0521 10.7747L6.67186 10.5328L15.1023 2.10233L16.4275 1.57248L15.8988 2.89768H15.8977Z"/>
                        </svg>
                      </form>
                      <div class="social-area">
                        <h5>Restons connectés</h5>
                        <ul class="social-list">
                          <li><a href="https://www.facebook.com/SihoneStudio/" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                          <li><a href="https://x.com/sihonestudio" target="_blank"><i class="bi bi-twitter-x"></i></a></li>
                          <li><a href="https://www.linkedin.com/company/sihonestudio" target="_blank"><i class='bx bxl-linkedin'></i></a></li>
                          <li><a href="https://www.instagram.com/sihonestudio" target="_blank"><i class='bx bxl-instagram-alt'></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <div class="copyright-and-social-area">
            <p>Copyright © 2025 <a href="https://sihonestudio.com/">Sihone Studio</a> | Tous droits réservés.</p>
            <div class="terms-condition">
              <p><a href="policy.html">Politique, Conditions générales</a></p>
            </div>
          </div>
        </div>
      </div>

    `;
    footer.innerHTML = language === 'fr' ? footerTemplateFr : footerTemplateEn;
  }

  loadMenuItems();
  loadFooter();
  
  document.querySelectorAll('img.inline-svg').forEach(img => {
    fetch(img.src)
      .then(res => res.text())
      .then(svg => {
        const parser = new DOMParser();
        const svgEl = parser.parseFromString(svg, 'image/svg+xml').querySelector('svg');
        const classes = img.getAttribute('class');
        if (classes) {
          svgEl.setAttribute('class', classes);
        }
        const width = img.getAttribute('width');
        if (width) {
          svgEl.setAttribute('width', width);
        }
        const height = img.getAttribute('height');
        if (height) {
          svgEl.setAttribute('height', height);
        }
        const fill = img.getAttribute('fill');
        if (fill) {
          svgEl.setAttribute('fill', fill);
        }
        const viewBox = img.getAttribute('viewBox');
        if (viewBox) {
          svgEl.setAttribute('viewBox', viewBox);
        }
        img.replaceWith(svgEl);
      });
  });

}(jQuery));
