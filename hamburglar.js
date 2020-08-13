var tcontainer = document.getElementById("tcontainer")
var slider1 = document.getElementById("slider1")
var slider2 = document.getElementById("slider2")
var slider3 = document.getElementById("slider3")
var j=0;
var hamburglar = document.getElementById('hamburglar')
var move = document.querySelectorAll("#move")
var span1 = document.querySelectorAll("#hamburglar span:nth-child(1)");
var span2 = document.querySelectorAll("#hamburglar span:nth-child(2)");
console.log(span2)
function func(){
	function close(){	
		let close = anime.timeline({duration:200,easing:"linear"})
	//45deg
		close.add({
		targets:span1,
		rotate:-45,
		top:'51.3',
		// scale : 2,
		})
	//45deg
		close.add({
		targets:span2,
		rotate:45,
		top:'51.3',

		},'-=200')
	//removemid
		close.add({
		targets:move,
		translateX:'20',
		scaleX:0,
		},'-=200')
	//tcontainer
		close.add({
			targets : tcontainer,
			translateX : ["100%",'0%'] ,
			opacity : [0,1],
			// scale : [0,1],
		},'-=200')
		close.add({
			targets : slider1,
			translateX : ["100%",'0%'] ,
			opacity : [0,1],
			// scale : [0,1],
		},'-=200')
		close.add({
			targets : slider2,
			translateX : ["100%",'0%'] ,
			opacity : [0,1],
			// scale : [0,1],
		},'-=200')
		close.add({
			targets : slider3,
			translateX : ["100%",'0%'] ,
			opacity : [0,1],
			// scale : [0,1],
		},'-=200')
	
	j=1
	}
	function open(){
		let open = anime.timeline({duration:200,easing :"linear"})
	//45deg
		open.add({
		targets:span1,
		rotate:0,
		top:'59.5',
		})
	//45deg
		open.add({
		targets:span2,
		rotate:0,
		top:'42.5',
		},'-=200')
	//mid
		open.add({
		targets:move,
		translateX:0,
		scaleX:1,
		},'-=200')
	//tcontainer
		open.add({
		targets : tcontainer,
		translateX : ["0%",'100%'] ,
		opacity : [1,0],
		// scale : [1,0],
		},'-=200')
		open.add({
		targets : slider1,
		translateX : ["0%",'100%'] ,
		opacity : [1,0],
		// scale : [1,0],
		},'-=200')
		open.add({
		targets : slider2,
		translateX : ["0%",'100%'] ,
		opacity : [1,0],
		// scale : [1,0],
		},'-=200')
		open.add({
		targets : slider3,
		translateX : ["0%",'100%'] ,
		opacity : [1,0],
		// scale : [1,0],
		},'-=200')
	j=0
	}
if(j==0){
close();}
else{
open();}
}


hamburglar.addEventListener('click',func)

