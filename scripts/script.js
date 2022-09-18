// base domain for image layers
var baseURL = 'https://raw.githubusercontent.com/thebadcc-eth/mfer-builder/main/images/';

// repositories
const projects = [];
projects[0] = "mfers";
projects[1] = "creyzies";
projects[2] = "eos";
projects[3] = "mfersAhead";
projects[4] = "mfersBehind";
projects[5] = "sketchyMfers";

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
type[0]= "/type/plainmfer.png";
type[1]= "/type/charcoalmfer.png";
type[2]= "/type/zombiemfer.png";
type[3]= "/type/apemfer.png";
type[4]= "/type/alienmfer.png";

const watch420 = [];
watch420[0]= "/watch/argoblack.png";
watch420[1]= "/watch/argowhite.png";
watch420[2]= "/watch/oystergold.png";
watch420[3]= "/watch/oystersilver.png";
watch420[4]= "/watch/subbatblueblack.png";
watch420[5]= "/watch/subblack.png";
watch420[6]= "/watch/subblue.png";
watch420[7]= "/watch/subcolabluered.png";
watch420[8]= "/watch/sublanterngreen.png";
watch420[9]= "/watch/subred.png";
watch420[10]= "/watch/subrose.png";
watch420[11]= "/watch/subturquoise.png";

const beard = [];
beard[0]= "/beard/fullbeard.png";
beard[1]= "/beard/shadowbeard.png";

const eyes = [];
eyes[0]= "/eyes/3Dglasses.png";
eyes[1]= "/eyes/alieneyes.png";
eyes[2]= "/eyes/eyemask.png";
eyes[3]= "/eyes/eyepatch.png";
eyes[4]= "/eyes/nerdglasses.png";
eyes[5]= "/eyes/purpleshades.png";
eyes[6]= "/eyes/regulareyes.png";
eyes[7]= "/eyes/shades.png";
eyes[8]= "/eyes/vr.png";
eyes[9]= "/eyes/zombieeyes.png";

const hoodies = [];
hoodies[0]= "/hatoverheadphones/hoodie.png";
hoodies[1]= "/hatoverheadphones/bearhoodie.png";
hoodies[2]= "/hatoverheadphones/bullhoodie.png";
hoodies[3]= "/hatoverheadphones/foxhoodie.png";
hoodies[4]= "/hatoverheadphones/trexhoodie.png";
hoodies[5]= "/hatoverheadphones/dragonhoodie.png";
hoodies[6]= "/hatoverheadphones/chickenhoodie.png";
hoodies[7]= "/hatoverheadphones/pepehoodie.png";
hoodies[8]= "/hatoverheadphones/sharkhoodie.png";
hoodies[9]= "/hatoverheadphones/axolotlhoodie.png";
hoodies[10]= "/hatoverheadphones/mleehoodie.png";
hoodies[11]= "/hatoverheadphones/kikihoodie.png";
hoodies[12]= "/hatoverheadphones/masterchanhoodie.png";
hoodies[13]= "/hatoverheadphones/sonichoodie.png";
hoodies[14]= "/hatoverheadphones/rabbithoodie.png";

const headphones = [];
headphones[0]= "/headphones/RCSheadphones.png";
headphones[1]= "/headphones/blackheadphones.png";
headphones[2]= "/headphones/blueheadphones.png";
headphones[3]= "/headphones/goldheadphones.png";
headphones[4]= "/headphones/greenheadphones.png";
headphones[5]= "/headphones/linedheadphones.png";
headphones[6]= "/headphones/pinkheadphones.png";
headphones[7]= "/headphones/redheadphones.png";
headphones[8]= "/headphones/whiteheadphones.png";

const hatsUnder = [];
hatsUnder[0]= "/hatunderheadphones/bandanablue.png";
hatsUnder[1]= "/hatunderheadphones/bandanadarkgray.png";
hatsUnder[2]= "/hatunderheadphones/bandanared.png";
hatsUnder[3]= "/hatunderheadphones/beaniemonochrome.png";
hatsUnder[4]= "/hatunderheadphones/beanie.png";
hatsUnder[5]= "/hatunderheadphones/capmonochrome.png";
hatsUnder[6]= "/hatunderheadphones/cappurple.png";
hatsUnder[7]= "/hatunderheadphones/headbandblue_green.png";
hatsUnder[8]= "/hatunderheadphones/headbandblue_red.png";
hatsUnder[9]= "/hatunderheadphones/headbandblue_white.png";
hatsUnder[10]= "/hatunderheadphones/headbandgreen_white.png";
hatsUnder[11]= "/hatunderheadphones/headbandpink_white.png";
hatsUnder[12]= "/hatunderheadphones/knitatlanta.png";
hatsUnder[13]= "/hatunderheadphones/knitbaltimore.png";
hatsUnder[14]= "/hatunderheadphones/knitbuffalo.png";
hatsUnder[15]= "/hatunderheadphones/knitchicago.png";
hatsUnder[16]= "/hatunderheadphones/knitcleveland.png";
hatsUnder[17]= "/hatunderheadphones/knitdallas.png";
hatsUnder[18]= "/hatunderheadphones/knitkc.png";
hatsUnder[19]= "/hatunderheadphones/knitlasvegas.png";
hatsUnder[20]= "/hatunderheadphones/knitmiami.png";
hatsUnder[21]= "/hatunderheadphones/knitnewyork.png";
hatsUnder[22]= "/hatunderheadphones/knitpittsburgh.png";
hatsUnder[23]= "/hatunderheadphones/knitsanfran.png";

const hatsOver = [];
hatsOver[0]= "/hatoverheadphones/cowboyhat.png";
hatsOver[1]= "/hatoverheadphones/pilothelmet.png";
hatsOver[2]= "/hatoverheadphones/tophat.png";

const shortHair = [];
shortHair[0]= "/shorthair/messyblack.png";
shortHair[1]= "/shorthair/messypurple.png";
shortHair[2]= "/shorthair/messyred.png";
shortHair[3]= "/shorthair/messyyellow.png";
shortHair[4]= "/shorthair/mohawkblack.png";
shortHair[5]= "/shorthair/mohawkblue.png";
shortHair[6]= "/shorthair/mohawkgreen.png";
shortHair[7]= "/shorthair/mohawkpink.png";
shortHair[8]= "/shorthair/mohawkpurple.png";
shortHair[9]= "/shorthair/mohawkred.png";
shortHair[10]= "/shorthair/mohawkyellow.png";

const longHair = [];
longHair[0]= "/longhair/longhairblack.png";
longHair[1]= "/longhair/longhairyellow.png";

const mouth = [];
mouth[0]= "/mouth/flat.png";
mouth[1]= "/mouth/smile.png";

const shirt = [];
shirt[0]= "/shirt/collaredshirtblue.png";
shirt[1]= "/shirt/collaredshirtgreen.png";
shirt[2]= "/shirt/collaredshirtpink.png";
shirt[3]= "/shirt/collaredshirtturquoise.png";
shirt[4]= "/shirt/collaredshirtwhite.png";
shirt[5]= "/shirt/collaredshirtyellow.png";
shirt[6]= "/shirt/hoodiedownblue.png";
shirt[7]= "/shirt/hoodiedowngray.png";
shirt[8]= "/shirt/hoodiedowngreen.png";
shirt[9]= "/shirt/hoodiedownpink.png";
shirt[10]= "/shirt/hoodiedownred.png";
shirt[11]= "/shirt/hoodiedownwhite.png";
shirt[12]= "/chain/goldchain.png";
shirt[13]= "/chain/silverchain.png";

const smoke = [];
smoke[0]= "/smoke/cigblack.png";
smoke[1]= "/smoke/cigwhite.png";
smoke[2]= "/smoke/pipe.png";

// function to generate mfers
function generateMfers(mfers, seedinput) {
	
	document.getElementsByClassName("html-content-holder")[0].style.display = "inherit";
	
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

	const elements = document.getElementsByClassName('mferImg');
	var div = document.createElement("div");
	div.setAttribute('class', 'mferImg');
	document.getElementsByClassName('mferWrapper')[0].appendChild(div);
	elements[0].parentNode.removeChild(elements[0]);
	for (let i = 0; i < mfers; i++){
		var baseID = document.getElementsByClassName('base')[0].value;	
		var backgroundRNG = background[Math.floor(Math.random() * 8)];
		var typeRNG = type[Math.floor(Math.random() * 5)];
		var eyesRNG = eyes[Math.floor(Math.random() * 10)];
		var mouthRNG = mouth[Math.floor(Math.random() * 2)];
		var headphonesRNG = headphones[Math.floor(Math.random() * 9)];
		var smokeRNG = smoke[Math.floor(Math.random() * 3)];
		var watchRNG = watch420[Math.floor(Math.random() * 12)];
		var beardRNG = beard[Math.floor(Math.random() * 2)];
		var hoodiesRNG = hoodies[Math.floor(Math.random() * 15)];
		var shirtRNG = shirt[Math.floor(Math.random() * 14)];
		var hatsUnderRNG = hatsUnder[Math.floor(Math.random() * 24)];
		var hatsOverRNG = hatsOver[Math.floor(Math.random() * 3)];
		var longHairRNG = longHair[Math.floor(Math.random() * 2)];
		var shortHairRNG = shortHair[Math.floor(Math.random() * 12)];
		
		if (baseID == "random") {
			var base = projects[Math.floor(Math.random() * 5)];
		} else {
			var base = document.getElementsByClassName('base')[0].value;
		}
		if (t1 == 1) {
			var _background = "url()"
		} else if (t1 == 0) {
			var _background = "url(" + baseURL + base + backgroundRNG + ")";
		} else if (t1 > 1) {
			var _background = "url(" + baseURL + base + background[t1 - 2] + ")";
		}
		if (t2 == 1) {
			var _type = "";
		} else if (t2 == 0) {
			var _type = "url(" + baseURL + base + typeRNG + "), ";
		} else if (t2 > 1) {
			var _type = "url(" + baseURL + base + type[t2 - 2] + "), ";
		}
		if (t3 == 1) {
			var _eyes = "";
		} else if (t3 == 0) {
			var _eyes = "url(" + baseURL + base + eyesRNG + "), ";
			if (base == projects[5]) {
			var _eyesMod = "url(" + baseURL + base + "/modifiers" + eyesRNG + "), ";
			} else {
			}
		} else if (t3 > 1) {
			var _eyes = "url(" + baseURL + base + eyes[t3 - 2] + "), ";
			if (base == projects[5]) {
			var _eyesMod = "url(" + baseURL + base + "/modifiers" + eyes[t3 - 2] + "), ";
			} else {
			}
		}
		if (t4 == 1) {
			var _mouth = "";
		} else if (t4 == 0) {
			var _mouth = "url(" + baseURL + base + mouthRNG + "), ";
		} else if (t4 > 1) {
			var _mouth = "url(" + baseURL + base + mouth[t4 - 2] + "), ";
		}
		if (t5 == 1) {
			var _headphones = "";
		} else if (t5 == 0) {
			var _headphones = "url(" + baseURL + base + headphonesRNG + "), ";
		} else if (t5 > 1) {
			var _headphones = "url(" + baseURL + base + headphones[t5 - 2] + "), ";
		}
		if (t6 == 1) {
			var _smoke = ""
		} else if (t6 == 0) {
			var rollSmoke = Math.floor(Math.random() * 10);
			if (rollSmoke <= 7) {
				var _smoke = "url(" + baseURL + base + smokeRNG + "), ";
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
				var _watch420 = "url(" + baseURL + base + watchRNG + "), ";
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
				var _beard = "url(" + baseURL + base + beardRNG + "), ";
			} else {
				var _beard = "";
			}
		} else if (t8 > 1) {
			var _beard = "url(" + baseURL + base + beard[t8 - 2] + "), ";
		}
		if (t9 == 1) {
			var _hoodies = "";
		} else if (t9 == 0) {
			var _hoodies = "url(" + baseURL + base + hoodiesRNG + "), ";
		} else if (t9 > 1) {
			var _hoodies = "url(" + baseURL + base + hoodies[t9 - 2] + "), ";
		}
		if (t10 == 1) {
			var _shirt = "";
		} else if (t10 == 0) {
			var _shirt = "url(" + baseURL + base + shirtRNG + "), ";
		} else if (t10 > 1) {
			var _shirt = "url(" + baseURL + base + shirt[t10 - 2] + "), ";
		}
		if (t11 == 1) {
			var _longHair = "";
		} else if (t11 == 0) {
			var _longHair = "url(" + baseURL + base + longHairRNG + "), ";
		} else if (t11 > 1) {
			var _longHair = "url(" + baseURL + base + longHair[t11 - 2] + "), ";
		}
		if (t12 == 1) {
			var _hatsUnder = "";           
		} else if (t12 == 0) {
			var _hatsUnder = "url(" + baseURL + base + hatsUnderRNG + "), ";           
		} else if (t12 > 1) {
			var _hatsUnder = "url(" + baseURL + base + hatsUnder[t12 - 2] + "), ";           
		}
		if (t13 == 1) {
			var _hatsOver = "";  
		} else if (t13 == 0) {
			var _hatsOver = "url(" + baseURL + base + hatsOverRNG + "), ";  
		} else if (t13 > 1) {
			var _hatsOver = "url(" + baseURL + base + hatsOver[t13 - 2] + "), "; 
		}
		if (t14 == 1) {
			var _shortHair = "";
		} else if (t14 == 0) {
			var _shortHair = "url(" + baseURL + base + shortHairRNG + "), ";
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
	
	window.scrollTo(0,0);	
	if (base == "mfers" || base == "creyzies" || base == "eos") {
	var seed = _hoodies + _watch420 + _smoke + _hatsOver + _headphones + _hatsUnder + _longHair + _shortHair + _shirt + _eyes + _mouth + _beard + _type + _background;
	} else if (base == "mfersBehind") {
	var seed = _hoodies + _watch420  + _hatsOver + _shortHair + _headphones + _hatsUnder + _longHair + _smoke + _shirt + _eyes + _mouth + _beard + _type + _background;
	} else if (base == "mfersAhead") {
	var seed = _smoke + _hoodies + _watch420  + _hatsOver + _shortHair + _headphones + _hatsUnder + _longHair + _shirt + _eyes + _mouth + _beard + _type + _background;
	} else if (base == "sketchyMfers") {
		if (_hatsUnder == ("url(" + baseURL + base + hatsUnder[3] + "), ") || _hatsUnder == ("url(" + baseURL + base + hatsUnder[4] + "), ") || _hatsUnder == ("url(" + baseURL + base + hatsUnder[5] + "), ") || _hatsUnder == ("url(" + baseURL + base + hatsUnder[6] + "), ")) {
			if (_longHair == ("url(" + baseURL + base + longHair[0] + "), ")) {
			var seed = _hoodies + _watch420 + _smoke + _hatsOver + _eyesMod + _hatsUnder + _headphones + "url(https://raw.githubusercontent.com/thebadcc-eth/mfer-builder/main/images/sketchyMfers/longhair/longhairblackmod.png), " + _shirt + _longHair + _shortHair + _eyes + _mouth + _beard + _type + _background;
			} else if (_longHair == ("url(" + baseURL + base + longHair[1] + "), ")) {
			var seed = _hoodies + _watch420 + _smoke + _hatsOver + _eyesMod + _hatsUnder + _headphones + "url(https://raw.githubusercontent.com/thebadcc-eth/mfer-builder/main/images/sketchyMfers/longhair/longhairyellowmod.png), " + _shirt + _longHair + _shortHair + _eyes + _mouth + _beard + _type + _background;
			} else  {
			var seed = _hoodies + _watch420 + _smoke + _hatsOver + _eyesMod + _hatsUnder + _headphones + _shirt + _longHair + _shortHair + _eyes + _mouth + _beard + _type + _background;
			}
		} else {
			if (_longHair == ("url(" + baseURL + base + longHair[0] + "), ")) {
			var seed = _hoodies + _watch420 + _smoke + _hatsOver + _eyesMod + _headphones + _hatsUnder  + "url(https://raw.githubusercontent.com/thebadcc-eth/mfer-builder/main/images/sketchyMfers/longhair/longhairblackmod.png), " + _shirt + _longHair + _shortHair + _eyes + _mouth + _beard + _type + _background;
			} else if (_longHair == ("url(" + baseURL + base + longHair[1] + "), ")) {
			var seed = _hoodies + _watch420 + _smoke + _hatsOver + _eyesMod + _headphones + _hatsUnder + "url(https://raw.githubusercontent.com/thebadcc-eth/mfer-builder/main/images/sketchyMfers/longhair/longhairyellowmod.png), " + _shirt + _longHair + _shortHair + _eyes + _mouth + _beard + _type + _background;
			} else {
			var seed = _hoodies + _watch420 + _smoke + _hatsOver + _eyesMod + _headphones + _hatsUnder + _shirt + _longHair + _shortHair + _eyes + _mouth + _beard + _type + _background;
			
			}
		}
	}
		
	var dimension = document.getElementsByClassName("pixels")[0].value;
	document.getElementsByClassName("html-content-holder")[0].style.backgroundImage = seed;
	document.getElementsByClassName("html-content-holder")[0].style.width = dimension;
	document.getElementsByClassName("html-content-holder")[0].style.height = dimension;
	
	console.log(seed);
	html2canvas(document.getElementsByClassName("html-content-holder")[0],{allowTaint: true,useCORS: true}).then(function (canvas) {
		var pngUrl = canvas.toDataURL("image/png");
		var mferImg = document.createElement("img");
		mferImg.src = pngUrl;
		mferImg.style.width = dimension;
		mferImg.style.height = dimension;
		mferImg.className = 'mfers';
		document.getElementsByClassName("mferImg")[0].appendChild(mferImg);
	});
	document.getElementsByClassName("html-content-holder")[0].style.backgroundImage = 'URL(https://raw.githubusercontent.com/thebadcc-eth/mfer-builder/main/images/eos/endofsartoshi.jpg)';
	
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

function dropdown() {
  var x = document.getElementsByClassName("dropdown")[0];
  var y = document.getElementsByClassName("fa-arrow-down-wide-short")[0];
  var z = document.getElementsByClassName("fa-xmark")[0];
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "block";	 
  } else {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";	 
  }
}
