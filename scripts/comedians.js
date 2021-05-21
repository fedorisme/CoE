var comedian = new Array(); 

comedian[0] = {
	name: "André De Freitas",
	picture: "pr-andre.jpg",
	country: "Portugal",
	page: "xxx.html"
};
comedian[1] = {
	name: "Kristýna Haklová",
	picture: "pr-kristyna.jpg",
	country: "Czech Republic",
	page: "xxx.html"
};
comedian[2] = {
	name: "Luca Cupani",
	picture: "pr-luca.jpg",
	country: "Italy",
	page: "pr-luca.html"
};
comedian[3] = {
	name: "Harri Soinila",
	picture: "pr-harri.jpg",
	country: "Finland",
	page: "xxx.html"
};
comedian[4] = {
	name: "Tamer Kattan",
	picture: "pr-tamer.jpg",
	country: "United States",
	page: "xxx.html"
};
comedian[5] = {
	name: "Victor Pãtrãşcan",
	picture: "pr-victor.jpg",
	country: "Romania",
	page: "xxx.html"
};
comedian[6] = {
	name: "Pedja Bajovic",
	picture: "pr-pedja.jpg",
	country: "Croatia",
	page: "xxx.html"
};
comedian[7] = {
	name: "Paco Erhard",
	picture: "pr-paco.jpg",
	country: "Germany",
	page: "xxx.html"
};
comedian[8] = {
	name: "Fedor Ikelaar",
	picture: "pr-fedor.jpg",
	country: "The Netherlands",
	page: "pr-fedor.html"
};
comedian[9] = {
	name: "Steve Hili",
	picture: "pr-steve.jpg",
	country: "Malta",
	page: "pr-steve.html"
};
comedian[10] = {
	name: "Malinda Perera",
	picture: "pr-malinda.jpg",
	country: "Sri Lanka",
	page: "pr-malinda.html"
};

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

if( document.body.contains( document.getElementById('artiestVoorpagina1') ) ) {
	for (i = 1; i < 9; i++) {
		var link = '#'
		var randomI = Math.floor(Math.random() * comedian.length);

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