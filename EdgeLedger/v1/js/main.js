let map;
function initMap() {
	map = new google.maps.Map(document.querySelector('.map'), {
		center : { lat: 40.71294, lng: -74.01345 },
		zoom   : 14
	});
	let marker = new google.maps.Marker({
		position : { lat: 40.71294, lng: -74.01345 },
		map      : map
	});
}

// Navbar background
window.addEventListener('scroll', () => {
	if (window.scrollY > 150) {
		document.querySelector('#navbar').style.opacity = 0.9;
	} else {
		document.querySelector('#navbar').style.opacity = 1;
	}
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
	if (this.hash !== '') {
		event.preventDefault();

		const hash = this.hash;

		$('html,body').animate(
			{
				scrollTop : $(hash).offset().top - 100
			},
			800
		);
	}
});
