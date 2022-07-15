// base domain for image layers
var baseURL = 'https://github.com/thebadcc-eth/mfer-builder/blob/main/images/';

// mfer traits and layers
const background = [];
background[0]= "/background/blue.png";
background[1]= "/background/yellow.png";
background[2]= "/background/green.png";
background[3]= "/background/orange.png";
background[4]= "/background/red.png";
background[5]= "/background/space.png";
background[6]= "/background/tree.png";
background[7]= "/background/graveyard.png";

const type = [];
type[0]= "/type/plain mfer.png";
type[1]= "/type/charcoal mfer.png";
type[2]= "/type/zombie mfer.png";
type[3]= "/type/ape mfer.png";
type[4]= "/type/alien mfer.png";

const watch420 = [];
watch420[0]= "/watch/argo black.png";
watch420[1]= "/watch/argo white.png";
watch420[2]= "/watch/oyster gold.png";
watch420[3]= "/watch/oyster silver.png";
watch420[4]= "/watch/sub bat (black_blue).png";
watch420[5]= "/watch/sub black.png";
watch420[6]= "/watch/sub blue.png";
watch420[7]= "/watch/sub cola (blue_red).png";
watch420[8]= "/watch/sub lantern (green).png";
watch420[9]= "/watch/sub red.png";
watch420[10]= "/watch/sub rose.png";
watch420[11]= "/watch/sub turquoise.png";

const beard = [];
beard[0]= "/beard/full beard.png";
beard[1]= "/beard/shadow beard.png";

const eyes = [];
eyes[0]= "/eyes/3d glasses.png";
eyes[1]= "/eyes/alien eyes.png";
eyes[2]= "/eyes/eye mask.png";
eyes[3]= "/eyes/eye patch.png";
eyes[4]= "/eyes/nerd glasses.png";
eyes[5]= "/eyes/purple shades.png";
eyes[6]= "/eyes/regular eyes.png";
eyes[7]= "/eyes/shades.png";
eyes[8]= "/eyes/vr.png";
eyes[9]= "/eyes/zombie eyes.png";

const hoodies = [];
hoodies[0]= "/hatoverheadphones/hoodie.png";

const headphones = [];
headphones[0]= "/headphones/rcs headphones.png";
headphones[1]= "/headphones/black headphones.png";
headphones[2]= "/headphones/blue headphones.png";
headphones[3]= "/headphones/gold headphones.png";
headphones[4]= "/headphones/green headphones.png";
headphones[5]= "/headphones/lined headphones.png";
headphones[6]= "/headphones/pink headphones.png";
headphones[7]= "/headphones/red headphones.png";
headphones[8]= "/headphones/white headphones.png";

const hatsUnder = [];
hatsUnder[0]= "/hat under headphones/bandana blue.png";
hatsUnder[1]= "/hat under headphones/bandana darkgray.png";
hatsUnder[2]= "/hat under headphones/bandana red.png";
hatsUnder[3]= "/hat under headphones/beanie monochrome.png";
hatsUnder[4]= "/hat under headphones/beanie.png";
hatsUnder[5]= "/hat under headphones/cap monochrome.png";
hatsUnder[6]= "/hat under headphones/cap purple.png";
hatsUnder[7]= "/hat under headphones/headband blue_green.png";
hatsUnder[8]= "/hat under headphones/headband blue_red.png";
hatsUnder[9]= "/hat under headphones/headband blue_white.png";
hatsUnder[10]= "/hat under headphones/headband green_white.png";
hatsUnder[11]= "/hat under headphones/headband pink_white.png";
hatsUnder[12]= "/hat under headphones/knit atlanta.png";
hatsUnder[13]= "/hat under headphones/knit baltimore.png";
hatsUnder[14]= "/hat under headphones/knit buffalo.png";
hatsUnder[15]= "/hat under headphones/knit chicago.png";
hatsUnder[16]= "/hat under headphones/knit cleveland.png";
hatsUnder[17]= "/hat under headphones/knit dallas.png";
hatsUnder[18]= "/hat under headphones/knit kc.png";
hatsUnder[19]= "/hat under headphones/knit las vegas.png";
hatsUnder[20]= "/hat under headphones/knit miami.png";
hatsUnder[21]= "/hat under headphones/knit new york.png";
hatsUnder[22]= "/hat under headphones/knit pittsburgh.png";
hatsUnder[23]= "/hat under headphones/knit san fran.png";

const hatsOver = [];
hatsOver[0]= "/hat over headphones/cowboy hat.png";
hatsOver[1]= "/hat over headphones/pilot helmet.png";
hatsOver[2]= "/hat over headphones/top hat.png";

const shortHair = [];
shortHair[0]= "/short hair/messy black.png";
shortHair[1]= "/short hair/messy purple.png";
shortHair[2]= "/short hair/messy red.png";
shortHair[3]= "/short hair/messy yellow.png";
shortHair[4]= "/short hair/mohawk black.png";
shortHair[5]= "/short hair/mohawk blue.png";
shortHair[6]= "/short hair/mohawk green.png";
shortHair[7]= "/short hair/mohawk pink.png";
shortHair[8]= "/short hair/mohawk purple.png";
shortHair[9]= "/short hair/mohawk red.png";
shortHair[10]= "/short hair/mohawk yellow.png";

const longHair = [];
longHair[0]= "/long hair/long hair black.png";
longHair[1]= "/long hair/long hair yellow.png";

const mouth = [];
mouth[0]= "/mouth/flat.png";
mouth[1]= "/mouth/smile.png";

const shirt = [];
shirt[0]= "/shirt/collared shirt blue.png";
shirt[1]= "/shirt/collared shirt green.png";
shirt[2]= "/shirt/collared shirt pink.png";
shirt[3]= "/shirt/collared shirt turquoise.png";
shirt[4]= "/shirt/collared shirt white.png";
shirt[5]= "/shirt/collared shirt yellow.png";
shirt[6]= "/shirt/hoodie down blue.png";
shirt[7]= "/shirt/hoodie down gray.png";
shirt[8]= "/shirt/hoodie down green.png";
shirt[9]= "/shirt/hoodie down pink.png";
shirt[10]= "/shirt/hoodie down red.png";
shirt[11]= "/shirt/hoodie down white.png";
shirt[12]= "/chain/gold chain.png";
shirt[13]= "/chain/silver chain.png";

const smoke = [];
smoke[0]= "/smoke/cig black.png";
smoke[1]= "/smoke/cig white.png";
smoke[2]= "/smoke/pipe.png";


// function to generate mfers
function generateMfers(mfers, seedinput) {
	
	var t1 = parseFloat(seedinput.slice(0, 2));
	var t2 = parseFloat(seedinput.slice(2, 4));
	var t3 = parseFloat(seedinput.slice(4, 6));
	var t4 = parseFloat(seedinput.slice(6, 8));
	var t5 = parseFloat(seedinput.slice(8, 10));
	var t6 = parseFloat(seedinput.slice(10, 12));
	var t7 = parseFloat(seedinput.slice(12, 14));
	var t8 = parseFloat(seedinput.slice(14, 16));
	var t9 = parseFloat(seedinput.slice(16, 18));
	var t10 = parseFloat(seedinput.slice(18, 20));
	var t11 = parseFloat(seedinput.slice(20, 22));
	var t12 = parseFloat(seedinput.slice(22, 24));
	var t13 = parseFloat(seedinput.slice(24, 26));
	var t14 = parseFloat(seedinput.slice(26, 28));
	var base = document.getElementsByClassName('base')[0].value;
	
	document.getElementsByClassName("html-content-holder")[0].style.display = "inherit";
	const elements = document.getElementsByClassName('mferImg');
	var div = document.createElement("div");
	div.setAttribute('class', 'mferImg');
	document.getElementsByClassName('mferWrapper')[0].appendChild(div);
	elements[0].parentNode.removeChild(elements[0]);
	for (let i = 0; i < mfers; i++){
		if (t1 == 1) {
			var _background = "url()"
		} else if (t1 == 0) {
			var _background = "url(" + baseURL + base + background[Math.floor(Math.random() * 8)] + ")";
		} else if (t1 > 1) {
			var _background = "url(" + baseURL + base + background[t1 - 2] + ")";
		}
		if (t2 == 1) {
			var _type = "";
		} else if (t2 == 0) {
			var _type = "url(" + baseURL + base + type[Math.floor(Math.random() * 5)] + "), ";
		} else if (t2 > 1) {
			var _type = "url(" + baseURL + base + type[t2 - 2] + "), ";
		}
		if (t3 == 1) {
			var _eyes = "";
		} else if (t3 == 0) {
			var _eyes = "url(" + baseURL + base + eyes[Math.floor(Math.random() * 10)] + "), ";
		} else if (t3 > 1) {
			var _eyes = "url(" + baseURL + base + eyes[t3 - 2] + "), ";
		}
		if (t4 == 1) {
			var _mouth = "";
		} else if (t4 == 0) {
			var _mouth = "url(" + baseURL + base + mouth[Math.floor(Math.random() * 2)] + "), ";
		} else if (t4 > 1) {
			var _mouth = "url(" + baseURL + base + mouth[t4 - 2] + "), ";
		}
		if (t5 == 1) {
			var _headphones = "";
		} else if (t5 == 0) {
			var _headphones = "url(" + baseURL + base + headphones[Math.floor(Math.random() * 9)] + "), ";
		} else if (t5 > 1) {
			var _headphones = "url(" + baseURL + base + headphones[t5 - 2] + "), ";
		}
		if (t6 == 1) {
			var _smoke = ""
		} else if (t6 == 0) {
			var rollSmoke = Math.floor(Math.random() * 10);
			if (rollSmoke <= 7) {
				var _smoke = "url(" + baseURL + base + smoke[Math.floor(Math.random() * 3)] + "), ";
			} else {
				var _smoke = ""
   			}
		} else if (t6 > 1) {
			var _smoke = "url(" + baseURL + base + smoke[t6 - 2] + "), ";
		}
		if (t7 == 1) {
			var _watch420 = ""
		} else if (t7 == 0) {
			var rollWatch = Math.floor(Math.random() * 10);
			if (rollWatch <= 5) {
				var _watch420 = "url(" + baseURL + base + watch420[Math.floor(Math.random() * 12)] + "), ";
			} else {
				var _watch420 = ""
			}
		} else if (t7 > 1) {
			var _watch420 = "url(" + baseURL + base + watch420[t7 - 2] + "), ";
		}
		if (t8 == 1) {
			var _beard = "";
		} else if (t8 == 0) {
			var rollBeard = Math.floor(Math.random() * 10);
			if (rollBeard <= 3) {
				var _beard = "url(" + baseURL + base + beard[Math.floor(Math.random() * 2)] + "), ";
			} else {
				var _beard = "";
			}
		} else if (t8 > 1) {
			var _beard = "url(" + baseURL + base + beard[t8 - 2] + "), ";
		}
		if (t9 == 1) {
			var _hoodies = "";
		} else if (t9 == 0) {
			var _hoodies = "url(" + baseURL + base + hoodies[0] + "), ";
		} else if (t9 > 1) {
			var _hoodies = "url(" + baseURL + base + hoodies[t9 - 2] + "), ";
		}
		if (t10 == 1) {
			var _shirt = "";
		} else if (t10 == 0) {
			var _shirt = "url(" + baseURL + base + shirt[Math.floor(Math.random() * 14)] + "), ";
		} else if (t10 > 1) {
			var _shirt = "url(" + baseURL + base + shirt[t10 - 2] + "), ";
		}
		if (t11 == 1) {
			var _longHair = "";
		} else if (t11 == 0) {
			var _longHair = "url(" + baseURL + base + longHair[Math.floor(Math.random() * 2)] + "), ";
		} else if (t11 > 1) {
			var _longHair = "url(" + baseURL + base + longHair[t11 - 2] + "), ";
		}
		if (t12 == 1) {
			var _hatsUnder = "";           
		} else if (t12 == 0) {
			var _hatsUnder = "url(" + baseURL + base + hatsUnder[Math.floor(Math.random() * 24)] + "), ";           
		} else if (t12 > 1) {
			var _hatsUnder = "url(" + baseURL + base + hatsUnder[t12 - 2] + "), ";           
		}
		if (t13 == 1) {
			var _hatsOver = "";  
		} else if (t13 == 0) {
			var _hatsOver = "url(" + baseURL + base + hatsOver[Math.floor(Math.random() * 3)] + "), ";  
		} else if (t13 > 1) {
			var _hatsOver = "url(" + baseURL + base + hatsOver[t13 - 2] + "), "; 
		}
		if (t14 == 1) {
			var _shortHair = "";
		} else if (t14 == 0) {
			var _shortHair = "url(" + baseURL + base + shortHair[Math.floor(Math.random() * 12)] + "), ";
		} else if (t14 > 1) {
			var _shortHair = "url(" + baseURL + base + shortHair[t14 - 2] + "), ";
		}
		var rollHoodies = Math.floor(Math.random() * 10);
		if (rollHoodies <= 1 && t9 == 0) {
			var _hatsOver = "";
			var _hatsUnder = "";
			var _shortHair = "";
			var _longHair = "";
			var _shirt = "";    
		} else if (t9 > 1) {
			var _hatsOver = "";
			var _hatsUnder = "";
			var _shortHair = "";
			var _longHair = "";
			var _shirt = "";  
		} else {
			var _hoodies = "";
			var rollShirts = Math.floor(Math.random() * 10);
    		if (rollShirts <= 5 && t10 == 0) {
    		} else if (t10 > 1) {
    		} else {
    			var _shirt = "";
    	}
    	var rollOverUnder = Math.floor(Math.random() * 10);
    	if (rollOverUnder <= 2 && t12 == 0) { 
			var _hatsOver = ""
			var _shortHair = ""
			var rollLongHair = Math.floor(Math.random() * 10);
			if (rollLongHair <= 3 && t11 == 0) {
    		} else if (t11 > 1) {
    		} else {
				var _longHair = ""
      		}
    	} else if (t12 > 1) {
			var _hatsOver = ""
			var _shortHair = ""
			var rollLongHair = Math.floor(Math.random() * 10);
    		if (rollLongHair <= 3 && t11 == 0) {
    		} else if (t11 > 1) {
    		} else {
				var _longHair = ""
			}
    	} else if (rollOverUnder >= 2 && rollOverUnder < 4 && t13 == 0){
			var _hatsUnder = ""
			var _shortHair = ""
			var rollLongHair = Math.floor(Math.random() * 10);
      		if (rollLongHair <= 3 && t11 == 0) {
       		} else if (t11 > 1) {
        	} else {
        		var _longHair = ""
        	}
    	} else if (t13 > 1){
			var _hatsUnder = ""
			var _shortHair = ""
			var rollLongHair = Math.floor(Math.random() * 10);
      		if (rollLongHair <= 3 && t11 == 0) {
       		} else if (t11 > 1) {
        	} else {
        		var _longHair = ""
        	}
    	} else if (rollOverUnder >= 4 && rollOverUnder < 6 && t11 == 0){
			var _hatsUnder = "";
			var _hatsOver = "";
			var _shortHair = "";
			var rollLongHair = Math.floor(Math.random() * 10);
      		if (rollLongHair <= 3 && t11 == 0) {
       		} else if (t11 > 1) {
        	} else {
        		var _longHair = ""
        	}
    	} else if (t11 > 1){
    		var _hatsUnder = "";
    		var _hatsOver = "";
    		var _shortHair = "";
    		var rollLongHair = Math.floor(Math.random() * 10);
      		if (rollLongHair <= 3 && t11 == 0) {
       		} else if (t11 > 1) {
       		} else {
        		var _longHair = ""
        	}
    	} else if (rollOverUnder >= 6 && t14 == 0) {
			var _hatsUnder = "";
			var _hatsOver = "";
			var _longHair = "";
    	} else if (t14 > 1) {
			var _hatsUnder = "";
			var _hatsOver = "";
			var _longHair = "";
    	}
	}
	var seed = _hoodies + _smoke + _watch420 + _mouth + _hatsOver + _headphones + _hatsUnder + _longHair + _shortHair + _shirt + _eyes + _beard + _type + _background;
	document.getElementsByClassName("html-content-holder")[0].style.backgroundImage = seed;
	window.scrollTo(0,0);	
	html2canvas(document.getElementsByClassName("html-content-holder")[0],{allowTaint: true,useCORS: true}).then(function (canvas) {
	var pngUrl = canvas.toDataURL("image/png");
	var mferImg = document.createElement("img");
	mferImg.src = pngUrl;
	mferImg.className = 'mfers';
	document.getElementsByClassName("mferImg")[0].appendChild(mferImg);
	});
}

document.getElementsByClassName("html-content-holder")[0].style.display = "none";

}

function buildMfers() {
	var quant = document.getElementsByClassName("quantity")[0].value;
	var _seed = document.getElementsByClassName("seed")[0].value.toString();
	if (_seed == '') {
		var seed = '0000000000000000000000000000';
	} else {
		var seed = _seed;
	}
	generateMfers(quant, seed);
	if (seed == '0000000000000000000000000000') {
		document.getElementsByClassName("seed")[0].value = '';
	} else {
		document.getElementsByClassName("seed")[0].value = seed;
	}
}

function updateSeed() {

	var _t1 = document.getElementsByClassName("background")[0].value;
	var _t2 = document.getElementsByClassName("type")[0].value;
	var _t3 = document.getElementsByClassName("eyes")[0].value;
	var _t4 = document.getElementsByClassName("mouth")[0].value;
	var _t5 = document.getElementsByClassName("headphones")[0].value;
	var _t6 = document.getElementsByClassName("smoke")[0].value;
	var _t7 = document.getElementsByClassName("watch")[0].value;
	var _t8 = document.getElementsByClassName("beard")[0].value;
	var _t9 = document.getElementsByClassName("hoodies")[0].value;
	var _t10 = document.getElementsByClassName("shirt")[0].value;
	var _t11 = document.getElementsByClassName("longHair")[0].value;
	var _t12 = document.getElementsByClassName("hatsUnder")[0].value;
	var _t13 = document.getElementsByClassName("hatsOver")[0].value;
	var _t14 = document.getElementsByClassName("shortHair")[0].value;
	var _seed = _t1 + _t2 + _t3 + _t4 + _t5 + _t6 + _t7 + _t8 + _t9 + _t10 + _t11 + _t12 + _t13 + _t14;
	document.getElementsByClassName("seed")[0].value = _seed;
	buildMfers();
}

function wtf() { 
	const filters = [];
	filters[0]= "none";
	filters[1]= "invert(.8)";
	filters[2]= "grayscale(100%)";
	filters[3]= "saturate(10)";
	filters[4]= "sepia(1)";
	filters[5]= "contrast(5)";
	filters[6]= "hue-rotate(3.142rad)";
	var currentFilter = document.getElementsByClassName("wtfButton")[0].value;
	console.log(currentFilter);
	var imgLength = document.getElementsByClassName("mfers").length;
	console.log(imgLength);
	var newFilter = parseFloat(currentFilter) + 1;
	console.log(newFilter);
	for (var i = 0; i < imgLength; i++) {	
		document.getElementsByClassName("mfers")[i].style.filter = filters[newFilter];
	}
	if (currentFilter >= 5) {
	document.getElementsByClassName("wtfButton")[0].value = "-1";
	} else {
	document.getElementsByClassName("wtfButton")[0].value = newFilter;
	}
	
}
