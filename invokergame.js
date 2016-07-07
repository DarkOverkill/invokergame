//http://www.invokergame.com/ ---> SURVIVAL ---> START GAME ---> Enter script in browser console

var id = setInterval(bar, 10);
var flag = 0;
var elements = $(".speechboxTR .ActiveSpell"); 
function bar(){
	var l = parseInt($("#ProgressBar")[0].style.width);
	//elements = $(".speechboxTR .ActiveSpell"); 
	//console.log(l)
	if (l < 50){
elements = $(".speechboxTR .ActiveSpell"); 
for (var i = 0; i < elements.length; i++) 
{
	
	var spell = elements[i].children[0].src.slice(41,-4);
	switch(spell){
		case "cold_snap":
			PressKey(Config.keyQuash);
			PressKey(Config.keyQuash);
			PressKey(Config.keyQuash);
			break;
		case "ghost_walk":
			PressKey(Config.keyQuash);
			PressKey(Config.keyQuash);
			//PressKey(Config.keyQuash);
			PressKey(Config.keyWex);
			break;
		case "ice_wall":
			PressKey(Config.keyQuash);
			PressKey(Config.keyQuash);
			//PressKey(Config.keyQuash);
			PressKey(Config.keyExort);
			break;
		case "emp":
			PressKey(Config.keyWex);
			PressKey(Config.keyWex);
			PressKey(Config.keyWex);
			break;
		case "tornado":
			PressKey(Config.keyWex);
			PressKey(Config.keyWex);
			//PressKey(Config.keyWex);
			PressKey(Config.keyQuash);
			break;
		case "alacrity":
			PressKey(Config.keyWex);
			PressKey(Config.keyWex);
			//PressKey(Config.keyWex);
			PressKey(Config.keyExort);
			break;
		case "sun_strike":
			PressKey(Config.keyExort);
			PressKey(Config.keyExort);
			PressKey(Config.keyExort);
			break;
		case "forge_spirit":
			PressKey(Config.keyExort);
			PressKey(Config.keyExort);
			//PressKey(Config.keyExort);
			PressKey(Config.keyQuash);
			break;
		case "chaos_meteor":
			PressKey(Config.keyExort);
			PressKey(Config.keyExort);
			//PressKey(Config.keyExort);
			PressKey(Config.keyWex);
			break;
		case "deafening_blast":
			PressKey(Config.keyExort);
			PressKey(Config.keyWex);
			PressKey(Config.keyQuash);
			break;		
	}
	PressKey(Config.keyInvoke);
	PressKey(Config.keySpell1);
	flag++;
}
}
if (flag > 5000){
	clearInterval(id);
}
}