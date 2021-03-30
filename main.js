// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

// nadefinujeme globální proměnné
// ty jsou pak použitelné kdekoliv v programu
let panacek, panacekX, panacekY, panacekSirka, panacekVyska;
let mince, minceX, minceY, minceSirka, minceVyska;

panacek = document.querySelector("#panacek");
mince = document.querySelector("#mince");


let oknoSirka, oknoVyska
let okno = document.querySelector(".js-body");

oknoSirka = okno.offsetWidth;
console.log ("sirka " + oknoSirka);
	
oknoVyska = okno.offsetHeight;
console.log ("vyska " + oknoVyska);

console.log ("nahodne cislo " + Math.random());


// tato funkce se spustí při načtení stránky
// tj. ve chvíli, kdy je načtené komplet HTML, CSS a všechny obrázky a zvuky
function priNacteniStranky() {

	// do globálních proměnných si uložíme odkaz na objekty panáčka a mince,
	// abychom je nemuseli při každém použití znovu na stránce hledat pomocí document.querySelector


	// zjistíme šířku a výšku panáčka
	panacekSirka = panacek.offsetWidth;
	console.log ("panacekSirka " + panacekSirka);

	panacekVyska = panacek.offsetHeight;
	console.log ("panacekVyska " + panacekVyska);

	// a umístíme panáčka do středu okna
	
	panacekX = (oknoSirka/2)-(panacekSirka/2);
	panacek.style.left = panacekX + 'px';
	
	panacekY =  (oknoVyska/2)-(panacekVyska/2);
	panacek.style.top = panacekY + 'px';
	
	//panacek.style.top = (oknoVyska/2)-(panacekVyska/2) + 'px';


	// umístíme panáčka na startovní pozici (MT: to je do středu okna, ne?)

	// zjistíme šířku a výšku mince
	minceSirka = mince.offsetWidth;
	console.log ("minceSirka " + minceSirka);

	minceVyska = mince.offsetHeight;
	console.log ("minceVyska " + minceVyska);

	// a vygenerujeme první minci na náhodné pozici

	minceX = Math.floor((Math.random())*(oknoSirka-minceSirka));
	
	console.log (minceX);

	mince.style.left = minceX + 'px';

	minceY = Math.floor((Math.random())*(oknoVyska-minceVyska));
	
	console.log (minceY);

	mince.style.top = minceY + 'px';

}

// funkce, která umístí panáčka na jeho souřadnice
// tj. nastaví jeho style.left a style.top na hodnoty panacekX, panacekY
function umistiPanacka() {
	// musíme to napsat :)
	
}


// funkce pro nahodné vygenerování nové pozice mince
// a umístění mince na tyto souřadnice
function novaMince() {
	// musíme to napsat :)
}

// tato funkce se zavolá při stisku klávesy
// do proměnné "udalost" se vloží objekt s parametry události¨
// kde lze najít např. i vlastnost "key",
// která obsahuje znak stisknuté klávesy
function priStiskuKlavesy(udalost) {

	// šipka vlevo


	// šipka vpravo


	// šipka nahoru


	// šipka dolů


	// panáčka umistíme na nově vypočítanou pozici


	// otestujeme kolizi panáčka s mincí


}

// fuknce pro otestování kolize panáčka s mincí
function otestujKolizi() {
	// musíme to napsat :)
}





/*

let panacek, panacekX, panacekY, panacekSirka, panacekVyska;
let mince, minceX, minceY, minceSirka, minceVyska;

panacek = document.querySelector("#panacek");
mince = document.querySelector("#mince");

/*function test (elementSelector, positionChange){
let element = document.querySelector(elementSelector);
let currentTop = parseInt(element.style.top)
element.style.top = (currentTop + positionChange) + "px";
}*/



// POHYB PANÁČKA




//let souradniceTop = 250;
//let souradniceLeft = 550;

/*
let souradniceTop = parseInt(panacek.style.top, 10);
let souradniceLeft = parseInt(panacek.style.left, 10);

console.log(souradniceTop)*/

/*panacek.style.top = souradniceTop + 'px';
panacek.style.left = souradniceLeft + 'px';*/
/*
function otestujKlavesu(udalost){
	let klavesa = udalost.key;
	
	if (klavesa == "ArrowDown") {
		
		souradniceTop = (souradniceTop + 5);
		//panacek.style.top = souradniceTop + 5 + "px";
		
	}

	else if (klavesa === "ArrowUp") {
		console.log("nahoru")
		panacek.style.top = souradniceTop + -5 + "px";
	}

	else if (klavesa === "ArrowLeft") {
		console.log("dolu")
		panacek.style.left = souradniceTop + -5 + "px";
	}

	else if (klavesa === "ArrowRight") {
		console.log("pravo")
		panacek.style.left = souradniceTop + 5 + "px";
	}

	else{
		console.log("jiná klávesa");
	}

}
*/

/*
// zjistím výšku a šířku okna
let sirkaOkna = window.innerWidth;
let vyskaOkna = window.innerHeight
console.log (sirkaOkna, vyskaOkna);
//definování náhodné pozice top/left, generování náhodných čísel od 0 (min) do výšky/šířky okna (max)
    let nahodnaPoziceTop;
    let nahodnaPoziceLeft;
    nahodnaPoziceTop = getRandomNumber(0, vyskaOkna)
    nahodnaPoziceLeft = getRandomNumber(0, sirkaOkna)
    console.log(nahodnaPoziceTop, nahodnaPoziceLeft);
    //generování náhodné pozice
    mince.style.top = nahodnaPoziceTop + 'px'
    mince.style.left = nahodnaPoziceLeft + 'px'
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
*/