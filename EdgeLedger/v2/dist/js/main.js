sal();
const nav = document.querySelector('#nav');
const form = document.querySelector('#form');

// opacity to nav
window.addEventListener('scroll', () => {
	if (window.scrollY > 150) {
		nav.style.opacity = 0.9;
	} else {
		nav.style.opacity = 1;
	}
});

// form validation
form.addEventListener('submit', (event) => {
	event.preventDefault();
});

//Google Map
function initMap() {
	// The location of Uluru
	let location = { lat: 40.756457, lng: -73.990184 };
	// The map, centered at Uluru
	let map = new google.maps.Map(document.querySelector('.map'), {
		zoom   : 14,
		center : location
	});
	// The marker, positioned at Uluru
	let marker = new google.maps.Marker({ position: location, map: map });
}
