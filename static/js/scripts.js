function main() {
	$('.icon-menu').on('click', function () {
		var loc = window.location.pathname;
		var dir = loc.substring(0, loc.lastIndexOf('/'));
		var onBlog = false;
		if (dir.indexOf("blog") >= 0) {
			onBlog = true;
		}

		if ($(this).attr('data-click-state') == 1) {
			$(this).attr('data-click-state', 0);
			$('body').css("overflow", "visible");
			$('.menu').animate({
				right: "-270px"
			}, 400);
			$('.oldNavWrapper').animate({
				right: "0px"
			}, 400);
			var thisObject = this;
			setTimeout(function () {
				$("body > :not(.oldNavWrapper, .menu)").animate({
					opacity: '1'
				}, 400);
				myFunction(thisObject);
			// 	if (onBlog == false) {
			// 	document.getElementById('intercom-container').style.display = 'block';
			// }
			}, 800);
		} else {
			// if (onBlog == false) {
			// document.getElementById('intercom-container').style.display = 'none';
			// }
			$('body').css("background", "black");
			var bgWidth = $(window).width();
			$('body').css("max-width", bgWidth);
			myFunction(this);
			$(this).attr('data-click-state', 1);
			$("body > :not(.oldNavWrapper, .menu)").animate({
				opacity: '0.15'
			}, 400);
			setTimeout(function () {
				$('.oldNavWrapper').animate({
					right: "270px"
				}, 400);
				$('.menu').animate({
					right: "0px"
				}, 400);
				$('body').css("overflow", "hidden");
			}, 600);
		}
	});

	$('.icon-menuBottom').on('click', function () {
		var loc = window.location.pathname;
		var dir = loc.substring(0, loc.lastIndexOf('/'));
		var onBlog = false;
		if (dir.indexOf("blog") >= 0) {
			onBlog = true;
		}

		if ($(this).attr('data-click-state') == 1) {
			$(this).attr('data-click-state', 0);
			$('body').css("overflow", "visible");
			$('.menu').animate({
				right: "-270px"
			}, 400);
			$('.newNavWrapper').animate({
				right: "0px"
			}, 400);

			var thisObject = this;
			setTimeout(function () {
				$('.newNavWrapper').animate({
					backgroundColor: 'rgba(255,255,255,0.95)'
				}, 400);
				$("body > :not(.newNavWrapper, .menu)").animate({
					opacity: '1'
				}, 400);
				$('.newNavWrapper img').attr("src", "/images/fivestarlogo.svg");
				$('.bar1, .bar2, .bar3').css("background-color", "black");
				myFunction(thisObject);
				// if (onBlog == false) {
				// document.getElementById('intercom-container').style.display = 'block';
				// }
			}, 800);
		} else {
			// if (onBlog == false) {
			// document.getElementById('intercom-container').style.display = 'none';
			// }
			$('body').css("background", "black");
			$('.bar1, .bar2, .bar3').css("background-color", "white");
			myFunction(this);
			var bggWidth = $(window).width();
			$('body').css("max-width", bggWidth);
			$(this).attr('data-click-state', 1);
			$('.newNavWrapper').animate({
				backgroundColor: 'rgba(255,255,255,0)'
			}, 400);
			$('.newNavWrapper img').attr("src", "/images/fivestarlogobefore.svg");
			$("body > :not(.newNavWrapper, .menu)").animate({
				opacity: '0.15'
			}, 400);

			setTimeout(function () {
				$('body').css("overflow", "hidden");
				$('.newNavWrapper').animate({
					right: "270px"
				}, 400);
				$('.menu').animate({
					right: "0px"
				}, 400);
			}, 600);
		}
	});
};

function initMap() {
	var uluru = {
		lat: 43.6629213,
		lng: -79.7277730
	};
	var uluruSecond = {
		lat: 43.7596190,
		lng: -79.4099279
	};
	var center_pos = {
		lat: 43.72,
		lng: -79.55
	};

	var contentString = "<h4>Fivestar Media Brampton</h4><div class='mapBox'><img src='/images/brampton.jpg'><p><span>2 County Court Blvd., Suite 400</span><span>Brampton, ON</span><span>L6W 3W8</span><span>Canada</span><span>+1-416-464-6573</span></p></div>";
	var contentStringSecond = "<h4>Fivestar Media Toronto</h4><div class='mapBox'><img src='/images/sheppard.jpg'><p><span>4711 Yonge Street, 10th Floor</span><span>Toronto, ON</span><span>M2N 6K8</span><span>Canada</span><span>+1-416-464-6573</span></p></div>";
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: center_pos
	});
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	var infowindowSecond = new google.maps.InfoWindow({
		content: contentStringSecond
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
	});
	var markerSecond = new google.maps.Marker({
		position: uluruSecond,
		map: map,
	});
	marker.addListener('click', function () {
		infowindowSecond.close();
		infowindow.open(map, marker);
	});
	markerSecond.addListener('click', function () {
		infowindow.close();
		infowindowSecond.open(map, markerSecond);
	});
}

$(document).ready(function () {
	main();
	if ($(document).scrollTop() >= 100) {
		$('.oldNav').css("display", "none");
		$('.newNavWrapper').addClass("slideNewNavDown");
		$('.bar1, .bar2, .bar3').css("background-color", "black");
	} else {
		$('.oldNav').css("display", "flex");
		$('.newNavWrapper').removeClass("slideNewNavDown");;
	};
	$(window).resize(function () {
		var wWidth = $(window).width();
		$('body').css("max-width", wWidth);
		// $('body').css("background", "white");
	});
	$(window).scroll(function () {
		if ($(document).scrollTop() >= 100) {

			$('.oldNav').css("display", "none");
			$('.newNavWrapper').addClass("slideNewNavDown");
			$('.bar1, .bar2, .bar3').css("background-color", "black"); //problem here with arrow color
		} else {
			$('.newNavWrapper').removeClass("slideNewNavDown");
			$('.oldNav').css("display", "flex");
			$('.bar1, .bar2, .bar3').css("background-color", "white");
		}
	});
});

function myFunction(x) {
	x.classList.toggle("change");
}