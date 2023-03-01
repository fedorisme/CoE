var comedian = new Array(); 

comedian[0] = {
	name: "André De Freitas",
	picture: "pr-andre.jpg",
	country: "Portugal",
	page: "pr-andre.html",
	gender: "m"
};
comedian[1] = {
	name: "Kristýna Haklová",
	picture: "pr-kristyna.jpg",
	country: "Czech Republic",
	page: "pr-kristyna.html",
	gender: "f"
};
comedian[2] = {
	name: "Luca Cupani",
	picture: "pr-luca.jpg",
	country: "Italy",
	page: "pr-luca.html",
	gender: "m"
};
comedian[3] = {
	name: "Harri Soinila",
	picture: "pr-harri.jpg",
	country: "Finland",
	page: "pr-harri.html",
	gender: "m"
};
comedian[4] = {
	name: "Victor Pãtrãşcan",
	picture: "pr-victor.jpg",
	country: "Romania",
	page: "pr-victor.html",
	gender: "m"
};
comedian[5] = {
	name: "Pedja Bajovic",
	picture: "pr-pedja.jpg",
	country: "Croatia",
	page: "pr-pedja.html",
	gender: "m"
};
comedian[6] = {
	name: "Paco Erhard",
	picture: "pr-paco.jpg",
	country: "Germany",
	page: "pr-paco.html",
	gender: "m"
};
comedian[7] = {
	name: "Fedor Ikelaar",
	picture: "pr-fedor.jpg",
	country: "The Netherlands",
	page: "pr-fedor.html",
	gender: "m"
};
comedian[8] = {
	name: "Steve Hili",
	picture: "pr-steve.jpg",
	country: "Malta",
	page: "pr-steve.html",
	gender: "m"
};
comedian[9] = {
	name: "Malinda Perera",
	picture: "pr-malinda.jpg",
	country: "Ireland /Sri Lanka",
	page: "pr-malinda.html",
	gender: "m"
};
comedian[10] = {
	name: "George Zacharopoulos",
	picture: "pr-george.jpg",
	country: "Greece",
	page: "pr-george.html",
	gender: "m"
};
comedian[11] = {
	name: "Filippo Spreafico",
	picture: "pr-filippo.jpg",
	country: "Italy",
	page: "pr-filippo.html",
	gender: "m"
};
// comedian[12] = {
// 	name: "Tamer Kattan",
// 	picture: "pr-tamer.jpg",
// 	country: "United States",
// 	page: "pr-tamer.html",
// 	gender: "m"
// };

function compare( a, b ) {
	if ( a.name < b.name ){
		return -1;
	}
	if ( a.name > b.name ){
		return 1;
	}
	return 0;
}

comedian.sort(compare);

var femCheck = 0;

if( document.body.contains( document.getElementById('artiestVoorpagina1') ) ) {
	for (i = 1; i < 9; i++) {
		var link = '#'
		var randomI = Math.floor(Math.random() * comedian.length);

		if (comedian[randomI].gender == "f" && i < 4){
			femCheck++;
		}

		if (femCheck == 0 && i == 4) {
			while (comedian[randomI].gender != "f") {
				randomI = Math.floor(Math.random() * comedian.length);
			};
		}

		if (femCheck == 2 && i == 3) {
			while (comedian[randomI].gender != "m") {
				randomI = Math.floor(Math.random() * comedian.length);
			};
		}

		if (comedian[randomI].page != "xxx.html") {
			link = comedian[randomI].page;
		};

		document.getElementById('artiestVoorpagina' + i).innerHTML = '<a href="' + link + '"><div class="artiesttekst"><h4>' + comedian[randomI].name + '</h4><p>' + comedian[randomI].country + '</p></div></a>';
		document.getElementById('artiestVoorpagina' + i).style.backgroundImage = "url('images/comedians/" + comedian[randomI].picture + "')"

		comedian.splice(randomI,1);
	};
};

if( document.body.contains( document.getElementById('artistGallery') ) ) {
	var galleryInnerHtml = "";
	
	for (i = 0; i < comedian.length; i++) {
		var link = '#'
		if (comedian[i].page != "xxx.html") {
			link = comedian[i].page;
		};

		galleryInnerHtml = galleryInnerHtml + '<div class="gallery-item comedianSquare" id="artiest' + (i+1) + '"><a href="' + link + '"><div class="artiesttekst"><h4>' + comedian[i].name + '</h4><p>' + comedian[i].country + '</p></div></a></div>';
	};

	document.getElementById('artistGallery').innerHTML = galleryInnerHtml;

	for (i = 0; i < comedian.length; i++) {
		document.getElementById('artiest' + (i + 1)).style.backgroundImage = "url('images/comedians/" + comedian[i].picture + "')"
	};
};