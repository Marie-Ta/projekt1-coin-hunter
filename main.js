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
	panacekX = Math.floor((oknoSirka/2)-(panacekSirka/2));
	panacek.style.left = panacekX + 'px';
	
	panacekY = Math.floor((oknoVyska/2)-(panacekVyska/2));
	panacek.style.top = panacekY + 'px';
	
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
	minceX = Math.floor((Math.random())*(oknoSirka-minceSirka));
	
	console.log (minceX);

	mince.style.left = minceX + 'px';

	minceY = Math.floor((Math.random())*(oknoVyska-minceVyska));
	
	console.log ("nova mince");

	mince.style.top = minceY + 'px';
}

// tato funkce se zavolá při stisku klávesy
// do proměnné "udalost" se vloží objekt s parametry události
// kde lze najít např. i vlastnost "key",
// která obsahuje znak stisknuté klávesy
function priStiskuKlavesy(udalost) {

	let klavesa = udalost.key;

	// šipka vlevo
	if(klavesa === "ArrowLeft" && panacekX > 0){
		panacekX= panacekX - 10;
		panacek.style.left = panacekX + 'px';
		console.log("doleva " +panacekX);
	}

	// šipka vpravo
	if(klavesa === "ArrowRight" && panacekX < (window.innerWidth - panacekSirka)){
		panacekX= panacekX + 10;
		panacek.style.left = panacekX + 'px';
		console.log("doprava " +panacekX);
	}

	// šipka nahoru
	else if (klavesa == "ArrowUp" && panacekY > 0){
		panacekY= panacekY - 10;
		panacek.style.top = panacekY + 'px';
		console.log("nahoru "+panacekY);
	}

	// šipka dolů
	else if (klavesa == "ArrowDown" && panacekY < (window.innerHeight - panacekVyska)){
		panacekY= panacekY + 10;
		panacek.style.top = panacekY + 'px';
		console.log("dolu "+panacekY);
	}
	
	// panáčka umistíme na nově vypočítanou pozici


	// otestujeme kolizi panáčka s mincí
	otestujKolizi();
}

// funkce pro otestování kolize panáčka s mincí - Koliduje okraj panáčka s mincí?
function otestujKolizi() {
	let pravyOkrajPanackaSeNedotyka = panacekX + panacekSirka < minceX;
	let levyOkrajPanackaSeNedotyka = minceX + minceSirka < panacekX;
	let dolniOkrajPanackaSeNedotyka = panacekY + panacekVyska < minceY;
	let horniOkrajPanackaSeNedotyka = minceY + minceVyska < panacekY;

	// jednotlivé podmínky (proměnné výše si můžu přepsat do podmínky níže. Otazník na začátku znamená negaci )

	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		// panacek a mince se prekryvaji
		console.log("mince v kapse!");
		novaMince();
		prehrajSebraniMince();
		prictiBod();
	} 
}

// Přehrávání hudby během hry

let hudba = document.querySelector('#hudba');

function prvniStiskKlavesy(){
	hudba.play();
}

let sebraniMince = document.querySelector('#zvukmince');

function prehrajSebraniMince(){
	sebraniMince.play();
}

//Počítání skóre

let aktualniSkore = 0;
let zobrazeniSkore = document.querySelector('#score');

// Musím měnit text v HTML
console.log("aktualni skore " + aktualniSkore);

function prictiBod(){
	aktualniSkore=aktualniSkore+1;
	console.log("aktualni skore " + aktualniSkore);
	zobrazeniSkore.innerHTML=aktualniSkore;
}

