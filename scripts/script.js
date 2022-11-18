// base domain for image layers
var baseURL = 'https://raw.githubusercontent.com/thebadcc-eth/mfer-builder/main/images/';

// repositories
const projects = [
	["mfers", 1],
	["creyzies", 2],
	["eos", 3],
	["mfersAhead", 4],
	["mfersBehind", 5],
	["sketchyMfers", 6],
	["SOMFERS", 7],
];

const background = [
	["/background/blue.png", 1, 1, 1, 1, 1, 1, 1],
	["/background/yellow.png", 1, 1, 1, 1, 1, 1, 1],
	["/background/green.png", 1, 1, 1, 1, 1, 1, 1],
	["/background/orange.png", 1, 1, 1, 1, 1, 1, 1],
	["/background/red.png", 1, 1, 1, 1, 1, 1, 1],
	["/background/space.png", 1, 1, 1, 1, 1, 1, 1],
	["/background/tree.png", 1, 1, 1, 1, 1, 1, 1],
	["/background/graveyard.png", 1, 1, 1, 1, 1, 1, 1],
	["/background/prettycoolpurple.png", 1, 1, 1, 1, 1, 1, 0],
	["/background/TWU_negative.png", 1, 1, 1, 1, 1, 1, 0],
	["/background/TWU_bubblegum.png", 1, 1, 1, 1, 1, 1, 0],
	["/background/TWU_redLeopard2.png", 1, 1, 1, 1, 1, 1, 0],
	["/background/TWU_ice.png", 1, 1, 1, 1, 1, 1, 0],
	["/background/TWU_orangeCheetah.png", 1, 1, 1, 1, 1, 1, 0],
	["/background/heresmy_salmon.png", 1, 1, 1, 1, 1, 1, 0]
];

const type = [
	["/type/plainmfer.png", 1, 1, 1, 1, 1, 1, 1],
	["/type/charcoalmfer.png", 1, 1, 1, 1, 1, 1, 1],
	["/type/zombiemfer.png", 1, 1, 1, 1, 1, 1, 1],
	["/type/apemfer.png", 1, 1, 1, 1, 1, 1, 1],
	["/type/alienmfer.png", 1, 1, 1, 1, 1, 1, 1],
	["/type/robotmfer.png", 1, 0, 0, 0, 0, 0, 0],
	["/type/heresmy_brainMfer.png", 1, 0, 0, 0, 0, 0, 0]
];

const eyes = [
	["/eyes/3Dglasses.png", 1, 1, 1, 1, 1, 1, 1],
	["/eyes/alieneyes.png", 1, 1, 1, 1, 1, 1, 1],
	["/eyes/eyemask.png", 1, 1, 1, 1, 1, 1, 1],
	["/eyes/eyepatch.png", 1, 1, 1, 1, 1, 1, 0],
	["/eyes/nerdglasses.png", 1, 1, 1, 1, 1, 1, 1],
	["/eyes/purpleshades.png", 1, 1, 1, 1, 1, 1, 1],
	["/eyes/regulareyes.png", 1, 1, 1, 1, 1, 1, 1],
	["/eyes/shades.png", 1, 1, 1, 1, 1, 1, 1],
	["/eyes/vr.png", 1, 1, 1, 1, 1, 1, 1],
	["/eyes/zombieeyes.png", 1, 1, 1, 1, 1, 1, 1],
	["/eyes/mcxshades.png", 1, 1, 1, 1, 1, 0, 0],
	["/eyes/scanner.png", 1, 0, 0, 0, 0, 0, 0],
	["/eyes/heresmy_aviators.png", 1, 0, 0, 0, 0, 0, 0],
	["/eyes/heresmy_googlyEyes.png", 1, 0, 0, 0, 0, 0, 0]
	
];

const mouth = [
	["/mouth/flat.png", 1, 1, 1, 1, 1, 1, 1],
	["/mouth/smile.png", 1, 1, 1, 1, 1, 1, 1],
	["/mouth/voicebox.png", 1, 0, 0, 0, 0, 0, 0]
];

const headphones = [
	["/headphones/RCSheadphones.png", 1, 1, 1, 1, 1, 1, 0],
	["/headphones/blackheadphones.png", 1, 1, 1, 1, 1, 1, 1],
	["/headphones/blueheadphones.png", 1, 1, 1, 1, 1, 1, 0],
	["/headphones/goldheadphones.png", 1, 1, 1, 1, 1, 1, 1],
	["/headphones/greenheadphones.png", 1, 1, 1, 1, 1, 1, 1],
	["/headphones/linedheadphones.png", 1, 1, 1, 1, 1, 1, 1],
	["/headphones/pinkheadphones.png", 1, 1, 1, 1, 1, 1, 1],
	["/headphones/redheadphones.png", 1, 1, 1, 1, 1, 1, 1],
	["/headphones/whiteheadphones.png", 1, 1, 1, 1, 1, 1, 1],
	["/headphones/heresmy_powerheadphones.png", 1, 1, 1, 1, 1, 1, 1],
	["/headphones/linedheadphonesBlackBlue.png", 1, 0, 0, 0, 0, 0, 0],
	["/headphones/linedheadphonesBlackGold.png", 1, 0, 0, 0, 0, 0, 0],
	["/headphones/linedheadphonesBlackGreen.png", 1, 0, 0, 0, 0, 0, 0],
	["/headphones/linedheadphonesBlackPink.png", 1, 0, 0, 0, 0, 0, 0],
	["/headphones/linedheadphonesBlackRed.png", 1, 0, 0, 0, 0, 0, 0],
	["/headphones/linedheadphonesWhiteBlack.png", 1, 0, 0, 0, 0, 0, 0],
	["/headphones/linedheadphonesWhiteBlue.png", 1, 0, 0, 0, 0, 0, 0],
	["/headphones/linedheadphonesWhiteGold.png", 1, 0, 0, 0, 0, 0, 0],
	["/headphones/linedheadphonesWhiteGreen.png", 1, 0, 0, 0, 0, 0, 0],
	["/headphones/linedheadphonesWhitePink.png", 1, 0, 0, 0, 0, 0, 0],
	["/headphones/linedheadphonesWhiteRed.png", 1, 0, 0, 0, 0, 0, 0],
];

const smoke = [
	["/smoke/cigblack.png", 1, 1, 1, 1, 1, 1, 1], 
	["/smoke/cigwhite.png", 1, 1, 1, 1, 1, 1,, 1], 
	["/smoke/pipe.png", 1, 1, 1, 1, 1, 1, 1],
	["/smoke/heresmy_cigar.png", 1, 0, 0, 0, 0, 0, 0],
];

const watch420 = [
	["/watch/argoblack.png", 1, 1, 1, 1, 1, 1, 1],
	["/watch/argowhite.png", 1, 1, 1, 1, 1, 1, 1],
	["/watch/oystergold.png", 1, 1, 1, 1, 1, 1, 1],
	["/watch/oystersilver.png", 1, 1, 1, 1, 1, 1, 1],
	["/watch/subbatblueblack.png", 1, 1, 1, 1, 1, 1, 1],
	["/watch/subblack.png", 1, 1, 1, 1, 1, 1, 1],
	["/watch/subblue.png", 1, 1, 1, 1, 1, 1, 1],
	["/watch/subcolabluered.png", 1, 1, 1, 1, 1, 1, 1],
	["/watch/sublanterngreen.png", 1, 1, 1, 1, 1, 1, 1],
	["/watch/subred.png", 1, 1, 1, 1, 1, 1, 1],
	["/watch/subrose.png", 1, 1, 1, 1, 1, 1, 1],
	["/watch/subturquoise.png", 1, 1, 1, 1, 1, 1, 1],
	["/watch/heresmy_catchersWatch.png", 1, 0, 0, 0, 0, 0, 0],
];

const beard = [
	["/beard/fullbeard.png", 1, 1, 1, 1, 1, 1, 1],
	["/beard/shadowbeard.png", 1, 1, 1, 1, 1, 1, 0]
];

const hoodies = [
	["/hatoverheadphones/hoodie.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatoverheadphones/bearhoodie.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/bullhoodie.png", 1, 0, 0, 0, 0, 0, 0],	
	["/hatoverheadphones/foxhoodie.png", 1, 0, 0, 0, 0, 0, 0],	
	["/hatoverheadphones/trexhoodie.png", 1, 0, 0, 0, 0, 0, 0],	
	["/hatoverheadphones/dragonhoodie.png", 1, 0, 0, 0, 0, 0, 0],	
	["/hatoverheadphones/chickenhoodie.png", 1, 0, 0, 0, 0, 0, 0],	
	["/hatoverheadphones/pepehoodie.png", 1, 0, 0, 0, 0, 0, 0],	
	["/hatoverheadphones/sharkhoodie.png", 1, 0, 0, 0, 0, 0, 0],	
	["/hatoverheadphones/axolotlhoodie.png", 1, 0, 0, 0, 0, 0, 0],	
	["/hatoverheadphones/mleehoodie.png", 1, 0, 0, 0, 0, 0, 0],	
	["/hatoverheadphones/kikihoodie.png", 1, 0, 0, 0, 0, 0, 0],	
	["/hatoverheadphones/masterchanhoodie.png", 1, 0, 0, 0, 0, 0, 0],	
	["/hatoverheadphones/sonichoodie.png", 1, 0, 0, 0, 0, 0, 0],	
	["/hatoverheadphones/rabbithoodie.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_scream.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_royal.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_sheepBlack.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_wickedWitch.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_amongUs_blue.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_amongUs_green.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_amongUs_pink.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_breakingBad.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_death.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_grandmaWolf.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_human.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_lobster.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_pickleRick.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_plagueDoctor.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_sheepWhite.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_snowWhite.png", 1, 0, 0, 0, 0, 0, 0],
	["/hatoverheadphones/am_stimpy.png", 1, 0, 0, 0, 0, 0, 0]
];

const shirt = [
	["/shirt/collaredshirtblue.png", 1, 1, 1, 1, 1, 1, 1],
	["/shirt/collaredshirtgreen.png", 1, 1, 1, 1, 1, 1, 1],
	["/shirt/collaredshirtpink.png", 1, 1, 1, 1, 1, 1, 1],
	["/shirt/collaredshirtturquoise.png", 1, 1, 1, 1, 1, 1, 1],
	["/shirt/collaredshirtwhite.png", 1, 1, 1, 1, 1, 1, 1],
	["/shirt/collaredshirtyellow.png", 1, 1, 1, 1, 1, 1, 1],
	["/shirt/hoodiedownblue.png", 1, 1, 1, 1, 1, 1, 1],
	["/shirt/hoodiedowngray.png", 1, 1, 1, 1, 1, 1, 1],
	["/shirt/hoodiedowngreen.png", 1, 1, 1, 1, 1, 1, 1],
	["/shirt/hoodiedownpink.png", 1, 1, 1, 1, 1, 1, 1],
	["/shirt/hoodiedownred.png", 1, 1, 1, 1, 1, 1, 1],
	["/shirt/hoodiedownwhite.png", 1, 1, 1, 1, 1, 1, 1],
	["/shirt/goldchain.png", 1, 1, 1, 1, 1, 1, 1],
	["/shirt/silverchain.png", 1, 1, 1, 1, 1, 1, 1]
];

const longHair = [
	["/longhair/longhairblack.png", 1, 1, 1, 1, 1, 1, 1],
	["/longhair/longhairyellow.png", 1, 1, 1, 1, 1, 1, 1],
	["/longhair/prettycoolhair.png", 1, 1, 1, 1, 1, 1, 0],
];

const hatsUnder = [
	["/hatunderheadphones/bandanablue.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/bandanadarkgray.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/bandanared.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/beaniemonochrome.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/beanie.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/capmonochrome.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/cappurple.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/headbandblue_green.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/headbandblue_red.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/headbandblue_white.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/headbandgreen_white.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/headbandpink_white.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/knitatlanta.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/knitbaltimore.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/knitbuffalo.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/knitchicago.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/knitcleveland.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/knitdallas.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/knitkc.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/knitlasvegas.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/knitmiami.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/knitnewyork.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/knitpittsburgh.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/knitsanfran.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatunderheadphones/heresmy_pirateBandana.png", 1, 0, 0, 0, 0, 0, 0]
];

const hatsOver = [
	["/hatoverheadphones/cowboyhat.png", 1, 1, 1, 1, 1, 1, 1], 
	["/hatoverheadphones/pilothelmet.png", 1, 1, 1, 1, 1, 1, 1], 
	["/hatoverheadphones/tophat.png", 1, 1, 1, 1, 1, 1, 1],
	["/hatoverheadphones/heresmy_pirateHat.png", 1, 0, 0, 0, 0, 0, 0],
];

const shortHair = [
	["/shorthair/messyblack.png", 1, 1, 1, 1, 1, 1, 1],
	["/shorthair/messypurple.png", 1, 1, 1, 1, 1, 1, 1],
	["/shorthair/messyred.png", 1, 1, 1, 1, 1, 1, 1],
	["/shorthair/messyyellow.png", 1, 1, 1, 1, 1, 1, 1],
	["/shorthair/mohawkblack.png", 1, 1, 1, 1, 1, 1, 1],
	["/shorthair/mohawkblue.png", 1, 1, 1, 1, 1, 1, 1],
	["/shorthair/mohawkgreen.png", 1, 1, 1, 1, 1, 1, 1],
	["/shorthair/mohawkpink.png", 1, 1, 1, 1, 1, 1, 1],
	["/shorthair/mohawkpurple.png", 1, 1, 1, 1, 1, 1, 1],
	["/shorthair/mohawkred.png", 1, 1, 1, 1, 1, 1, 1],
	["/shorthair/mohawkyellow.png", 1, 1, 1, 1, 1, 1, 1],
	["/shorthair/messyblack.png", 1, 1, 1, 1, 1, 1, 1]
];

// function to generate mfers
function generateMfers(count, seedinput) {
	
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
	for (let i = 0; i < count; i++){
		var baseID = parseFloat(document.getElementsByClassName('base')[0].value);	
		if (baseID == 0) {
			var baseRNG = Math.floor(Math.random() * 7);
			var base = projects[baseRNG][0];
			var baseCheck = projects[baseRNG][1];
		} else {
			var base = projects[baseID - 1][0];
			var baseCheck = projects[baseID - 1][1];
		}
		var backgroundRNG = Math.floor(Math.random() * 15);
		var typeRNG = Math.floor(Math.random() * 7);
		var eyesRNG = Math.floor(Math.random() * 14);
		var mouthRNG = Math.floor(Math.random() * 3);
		var headphonesRNG = Math.floor(Math.random() * 21);
		var smokeRNG = Math.floor(Math.random() * 4);
		var watchRNG = Math.floor(Math.random() * 13);
		var beardRNG = Math.floor(Math.random() * 2);
		var hoodiesRNG = Math.floor(Math.random() * 32);
		var shirtRNG = Math.floor(Math.random() * 14);
		var hatsUnderRNG = Math.floor(Math.random() * 25);
		var hatsOverRNG = Math.floor(Math.random() * 4);
		var longHairRNG = Math.floor(Math.random() * 3);
		var shortHairRNG = Math.floor(Math.random() * 12);

		if (t1 == 1) {
			var _background = "url()"
		} else if (t1 == 0) {
			if(background[backgroundRNG][baseCheck] == 1) {
			var _background = "url(" + baseURL + base + background[backgroundRNG][0] + ")";
			} else {
			var _background = "url(" + baseURL + base + background[0][0] + ")";
			}
		} else if (t1 > 1) {
			if (background[t1 - 2][baseCheck] == 1) {
			var _background = "url(" + baseURL + base + background[t1 - 2][0] + ")";
			} else {
			var _background = "url(" + baseURL + base + background[0][0] + ")";
			}
		}
		if (t2 == 1) {
			var _type = "";
		} else if (t2 == 0) {
			if (type[typeRNG][baseCheck] == 1) {
			var _type = "url(" + baseURL + base + type[typeRNG][0] + "), ";
			} else {
			var _type = "url(" + baseURL + base + type[0][0] + "), ";
			}
		} else if (t2 > 1) {
			if (type[t2 - 2][baseCheck] == 1) {
			var _type = "url(" + baseURL + base + type[t2 - 2][0] + "), ";
			} else {
			var _type = "url(" + baseURL + base + type[0][0] + "), ";
			}
		}
		if (t3 == 1) {
			var _eyes = "";
		} else if (t3 == 0) {
			if (eyes[eyesRNG][baseCheck] == 1) {
            			var _eyes = "url(" + baseURL + base + eyes[eyesRNG][0] + "), ";
				if (base == projects[5][0]) {
					var _eyesMod = "url(" + baseURL + base + "/modifiers" + eyes[eyesRNG][0] + "), ";
				} else {
				}
			} else {
				var _eyes = "url(" + baseURL + base + eyes[6][0] + "), ";
				if (base == projects[5][0]) {
					var _eyesMod = "url(" + baseURL + base + "/modifiers" + eyes[6][0] + "), ";
				} else {
				}
			}
		} else if (t3 > 1) {
			if (eyes[t3 - 2][baseCheck] == 1) {
            			var _eyes = "url(" + baseURL + base + eyes[t3 - 2][0] + "), ";
				if (base == projects[5][0]) {
					var _eyesMod = "url(" + baseURL + base + "/modifiers" + eyes[t3 - 2][0] + "), ";
				} else {
				}	
			} else {
				var _eyes = "url(" + baseURL + base + eyes[6][0] + "), ";
				if (base == projects[5][0]) {
					var _eyesMod = "url(" + baseURL + base + "/modifiers" + eyes[6][0] + "), ";
				} else {
				}
			}
		}
		if (t4 == 1) {
			var _mouth = "";
		} else if (t4 == 0) {
			if (mouth[mouthRNG][baseCheck] == 1) {
				var _mouth = "url(" + baseURL + base + mouth[mouthRNG][0] + "), ";
			} else {
				var _mouth = "url(" + baseURL + base + mouth[0][0] + "), ";
			}
		} else if (t4 > 1) {
			if (mouth[t4 - 2][baseCheck] == 1) {
				var _mouth = "url(" + baseURL + base + mouth[t4 - 2][0] + "), ";
			} else {
				var _mouth = "url(" + baseURL + base + mouth[0][0] + "), ";
			}
		}
		if (t5 == 1) {
			var _headphones = "";
		} else if (t5 == 0) {
			if (headphones[headphonesRNG][baseCheck] == 1) {
				var _headphones = "url(" + baseURL + base + headphones[headphonesRNG][0] + "), ";
			} else {
				var _headphones = "url(" + baseURL + base + headphones[1][0] + "), ";
			}
		} else if (t5 > 1) {
			if (headphones[t5 - 2][baseCheck] == 1) {
				var _headphones = "url(" + baseURL + base + headphones[t5 - 2][0] + "), ";
			} else {
				var _headphones = "url(" + baseURL + base + headphones[1][0] + "), ";
			}
		}
		if (t6 == 1) {
			var _smoke = ""
		} else if (t6 == 0) {
			var rollSmoke = Math.floor(Math.random() * 10);
			if (rollSmoke <= 7) {
				if (smoke[smokeRNG][baseCheck] == 1) {
					var _smoke = "url(" + baseURL + base + smoke[smokeRNG][0] + "), ";
				} else {
					var _smoke = "url(" + baseURL + base + smoke[0][0] + "), ";
				}
			} else {
				var _smoke = ""
   			}
		} else if (t6 > 1) {
			if (smoke[t6 - 2][baseCheck] == 1) {
				var _smoke = "url(" + baseURL + base + smoke[t6 - 2][0] + "), ";
			} else {
				var _smoke = "url(" + baseURL + base + smoke[0][0] + "), ";
			}
		}
		if (t7 == 1) {
			var _watch420 = ""
		} else if (t7 == 0) {
			var rollWatch = Math.floor(Math.random() * 10);
			if (rollWatch <= 5) {
				if (watch420[watchRNG][baseCheck] == 1) {
					var _watch420 = "url(" + baseURL + base + watch420[watchRNG][0] + "), ";
				} else {
					var _watch420 = "url(" + baseURL + base + watch420[0][0] + "), ";
				}
			} else {
				var _watch420 = ""
			}
		} else if (t7 > 1) {
				if (watch420[t7 - 2][baseCheck] == 1) {
					var _watch420 = "url(" + baseURL + base + watch420[t7 - 2][0] + "), ";
				} else {
					var _watch420 = "url(" + baseURL + base + watch420[0][0] + "), ";
				}
		}
		if (t8 == 1) {
			var _beard = "";
		} else if (t8 == 0) {
			var rollBeard = Math.floor(Math.random() * 10);
			if (rollBeard <= 3) {
				if (beard[beardRNG][baseCheck] == 1) {
					var _beard = "url(" + baseURL + base + beard[beardRNG][0] + "), ";
				} else {
					var _beard = "url(" + baseURL + base + beard[0][0] + "), ";
				}
			} else {
				var _beard = "";
			}
		} else if (t8 > 1) {
			if (beard[t8 - 2][baseCheck] == 1) {
				var _beard = "url(" + baseURL + base + beard[t8 - 2][0] + "), ";
			} else {
				var _beard = "url(" + baseURL + base + beard[0][0] + "), ";
			}
		}
		if (t9 == 1) {
			var _hoodies = "";
		} else if (t9 == 0) {
			if (hoodies[hoodiesRNG][baseCheck] == 1) {
				var _hoodies = "url(" + baseURL + base + hoodies[hoodiesRNG][0] + "), ";
			} else {
				var _hoodies = "url(" + baseURL + base + hoodies[0][0] + "), ";
			}
		} else if (t9 > 1) {
			if (hoodies[t9 - 2][baseCheck] == 1) {
				var _hoodies = "url(" + baseURL + base + hoodies[t9 - 2][0] + "), ";
			} else {
				var _hoodies = "url(" + baseURL + base + hoodies[0][0] + "), ";
			}
		}
		if (t10 == 1) {
			var _shirt = "";
		} else if (t10 == 0) {
			if (shirt[shirtRNG][baseCheck] == 1) {
				var _shirt = "url(" + baseURL + base + shirt[shirtRNG][0] + "), ";
			} else {
				var _shirt = "url(" + baseURL + base + shirt[4][0] + "), ";
			}
		} else if (t10 > 1) {
			if (shirt[t10 - 2][baseCheck] == 1) {
				var _shirt = "url(" + baseURL + base + shirt[t10 - 2][0] + "), ";
			} else {
				var _shirt = "url(" + baseURL + base + shirt[4][0] + "), ";
			}
		}
		if (t11 == 1) {
			var _longHair = "";
		} else if (t11 == 0) {
			if (longHair[longHairRNG][baseCheck] == 1) {
				var _longHair = "url(" + baseURL + base + longHair[longHairRNG][0] + "), ";
			} else {
				var _longHair = "url(" + baseURL + base + longHair[0][0] + "), ";
			}
		} else if (t11 > 1) {
			if (longHair[t11 - 2][baseCheck] == 1) {
				var _longHair = "url(" + baseURL + base + longHair[t11 - 2][0] + "), ";
			} else {
				var _longHair = "url(" + baseURL + base + longHair[0][0] + "), ";
			}
		}
		if (t12 == 1) {
			var _hatsUnder = "";     
		} else if (t12 == 0) {
			if (hatsUnder[hatsUnderRNG][baseCheck] == 1) {
				var _hatsUnder = "url(" + baseURL + base + hatsUnder[hatsUnderRNG][0] + "), ";
			} else {
				var _hatsUnder = "url(" + baseURL + base + hatsUnder[19][0] + "), ";
			}        
		} else if (t12 > 1) {
			if (hatsUnder[t12 - 2][baseCheck] == 1) {
				var _hatsUnder = "url(" + baseURL + base + hatsUnder[t12 - 2][0] + "), ";
			} else {
				var _hatsUnder = "url(" + baseURL + base + hatsUnder[19][0] + "), ";
			}          
		}
		if (t13 == 1) {
			var _hatsOver = "";  
		} else if (t13 == 0) {
			if (hatsOver[hatsOverRNG][baseCheck] == 1) {
				var _hatsOver = "url(" + baseURL + base + hatsOver[hatsOverRNG][0] + "), ";
				if (base == projects[5][0]) {
				var _hatsOverMod = "url(" + baseURL + base + "/modifiers" + hatsOver[hatsOverRNG][0] + "), ";
				} else {
				}
			} else {
				var _hatsOver = "url(" + baseURL + base + hatsOver[0][0] + "), ";
				if (base == projects[5][0]) {
				var _hatsOverMod = "url(" + baseURL + base + "/modifiers" + hatsOver[0][0] + "), ";
				} else {
				}
			}   
		} else if (t13 > 1) {
			if (hatsOver[t13 - 2][baseCheck] == 1) {
				var _hatsOver = "url(" + baseURL + base + hatsOver[t13 - 2][0] + "), ";
				if (base == projects[5][0]) {
				var _hatsOverMod = "url(" + baseURL + base + "/modifiers" + hatsOver[t13 - 2][0] + "), ";
				} else {
				}
			} else {
				var _hatsOver = "url(" + baseURL + base + hatsOver[0][0] + "), ";
				if (base == projects[5][0]) {
				var _hatsOverMod = "url(" + baseURL + base + "/modifiers" + hatsOver[0][0] + "), ";
				} else {
				}
			}   
		}
		if (t14 == 1) {
			var _shortHair = "";
		} else if (t14 == 0) {
			if (shortHair[shortHairRNG][baseCheck] == 1) {
				var _shortHair = "url(" + baseURL + base + shortHair[shortHairRNG][0] + "), ";
			} else {
				var _shortHair = "url(" + baseURL + base + shortHair[0][0] + "), ";
			}   
		} else if (t14 > 1) {
			if (shortHair[t14 - 2][baseCheck] == 1) {
				var _shortHair = "url(" + baseURL + base + shortHair[t14 - 2][0] + "), ";
			} else {
				var _shortHair = "url(" + baseURL + base + shortHair[0][0] + "), ";
			}   
		}
		var rollHoodies = Math.floor(Math.random() * 10);
		if (rollHoodies <= 1 && t9 == 0) {
			var _hatsOver = "";
			var _hatsOverMod = "";
			var _hatsUnder = "";
			var _shortHair = "";
			var _longHair = "";
			var _shirt = "";    
		} else if (t9 > 1) {
			var _hatsOver = "";
			var _hatsOverMod = "";
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
			var _hatsOverMod = "";
			var _shortHair = ""
			var rollLongHair = Math.floor(Math.random() * 10);
			if (rollLongHair <= 3 && t11 == 0) {
    		} else if (t11 > 1) {
    		} else {
				var _longHair = ""
      		}
    	} else if (t12 > 1) {
			var _hatsOver = ""
			var _hatsOverMod = "";
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
			var _hatsOverMod = "";
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
		var _hatsOverMod = "";
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
			var _hatsOverMod = "";
			var _longHair = "";
    	} else if (t14 >= 1) {
			var _hatsUnder = "";
			var _hatsOver = "";
			var _hatsOverMod = "";
			var _longHair = "";
    	}
	}
	
	window.scrollTo(0,0);	
	if (base == "mfers" || base == "creyzies" || base == "eos" || base == "SOMFERS") {
	var seed = _hoodies + _watch420 + _smoke + _hatsOver + _headphones + _hatsUnder + _longHair + _shortHair + _shirt + _eyes + _mouth + _beard + _type + _background;
	} else if (base == "mfersBehind") {
	var seed = _hoodies + _watch420  + _hatsOver + _shortHair + _headphones + _hatsUnder + _longHair + _smoke + _shirt + _eyes + _mouth + _beard + _type + _background;
	} else if (base == "mfersAhead") {
	var seed = _smoke + _hoodies + _watch420 + _eyes + _hatsOver + _shortHair + _headphones + _hatsUnder + _longHair + _shirt + _mouth + _beard + _type + _background;
	} else if (base == "sketchyMfers") {
		if (_hatsUnder == ("url(" + baseURL + base + hatsUnder[3][0] + "), ") || _hatsUnder == ("url(" + baseURL + base + hatsUnder[4][0] + "), ") || _hatsUnder == ("url(" + baseURL + base + hatsUnder[5][0] + "), ") || _hatsUnder == ("url(" + baseURL + base + hatsUnder[6][0] + "), ")) {
			if (_longHair == ("url(" + baseURL + base + longHair[0] + "), ")) {
			var seed = _eyesMod + _hoodies + _watch420 + _smoke + _hatsOver + _hatsUnder + _headphones + "url(https://raw.githubusercontent.com/thebadcc-eth/mfer-builder/main/images/sketchyMfers/longhair/longhairblackmod.png), " + _shirt + _longHair + _shortHair + _eyes + _mouth + _beard + _type + _hatsOverMod + _background;
			} else if (_longHair == ("url(" + baseURL + base + longHair[1][0] + "), ")) {
			var seed = _eyesMod + _hoodies + _watch420 + _smoke + _hatsOver + _eyesMod + _hatsUnder + _headphones + "url(https://raw.githubusercontent.com/thebadcc-eth/mfer-builder/main/images/sketchyMfers/longhair/longhairyellowmod.png), " + _shirt + _longHair + _shortHair + _eyes + _mouth + _beard + _type + _hatsOverMod + _background;
			} else  {
			var seed = _eyesMod + _hoodies + _watch420 + _smoke + _hatsOver + _eyesMod + _hatsUnder + _headphones + _shirt + _longHair + _shortHair + _eyes + _mouth + _beard + _type + _hatsOverMod + _background;
			}
		} else {
			if (_longHair == ("url(" + baseURL + base + longHair[0][0] + "), ")) {
			var seed = _eyesMod + _hoodies + _watch420 + _smoke + _hatsOver + _eyesMod + _headphones + _hatsUnder  + "url(https://raw.githubusercontent.com/thebadcc-eth/mfer-builder/main/images/sketchyMfers/longhair/longhairblackmod.png), " + _shirt + _longHair + _shortHair + _eyes + _mouth + _beard + _type + _hatsOverMod + _background;
			} else if (_longHair == ("url(" + baseURL + base + longHair[1][0] + "), ")) {
			var seed = _eyesMod + _hoodies + _watch420 + _smoke + _hatsOver + _eyesMod + _headphones + _hatsUnder + "url(https://raw.githubusercontent.com/thebadcc-eth/mfer-builder/main/images/sketchyMfers/longhair/longhairyellowmod.png), " + _shirt + _longHair + _shortHair + _eyes + _mouth + _beard + _type + _hatsOverMod + _background;
			} else {
			var seed = _eyesMod + _hoodies + _watch420 + _smoke + _hatsOver + _eyesMod + _headphones + _hatsUnder + _shirt + _longHair + _shortHair + _eyes + _mouth + _beard + _type + _hatsOverMod + _background;	
			}
		}
	}
		
	var dimension = document.getElementsByClassName("pixels")[0].value;
	document.getElementsByClassName("html-content-holder")[0].style.backgroundImage = seed;
	document.getElementsByClassName("html-content-holder")[0].style.width = dimension;
	document.getElementsByClassName("html-content-holder")[0].style.height = dimension;
	
	console.log(seed);
	html2canvas(document.getElementsByClassName("html-content-holder")[0],{backgroundColor: null,allowTaint: true,useCORS: true}).then(function (canvas) {
		var pngUrl = canvas.toDataURL("image/png");
		var mferImg = document.createElement("img");
		mferImg.src = pngUrl;
		mferImg.style.width = dimension;
		mferImg.style.height = dimension;
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

const toggle = () => {
    const nav = document.getElementById("topnav");
    nav.className === "topnav" ? nav.className += " responsive" : nav.className = "topnav";
};
