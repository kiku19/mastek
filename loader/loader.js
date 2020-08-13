var loader =document.querySelector(".loader")

window.addEventListener("load",()=>{
window.setTimeout(function()
     { 
loader.classList.add("afterload")
},4000)})


var animate = anime.timeline({
	duration :2000,
	loop :true,
	direction : "alternate"
})


animate.add({
	targets : ".circle1",
	scale : [0,1],
	translateY : [-50,0,],
	// direction : "alternate",
	// rotate :180
	delay : anime.stagger (200 , {grid : [1,3],from :"center"}),
	duration :2000
})

animate.add({
            targets: '#orange path',
          strokeDashoffset:[anime.setDashoffset,0],
          scale : [0.9,1],
          easing : "linear",
          fill : ["#FFFFFF","#f47a27"],
          stroke : "#f47a27",
          duration :1000,
          delay: function(el, i) { return i * 250 }
},"-=2000")

//brown

animate.add({
            targets: '#brown path',
          strokeDashoffset:[anime.setDashoffset,0],
          scale : [0.9,1],
          easing : "linear",
          fill : ["#FFFFFF","#552402"],
          stroke :"#552402",
          duration :1000,
          delay: function(el, i) { return i * 250 }
},"-=2000")

// animate.add({
//      targets : "#logo",
//      scale :[0.8,1],
//      duration :2000,
//      easing :"linear"
// },"-=2500")
// animate.add({
// 	targets : ".grid-item",
// 	scale : [1,0],
// 	translateY : [0,-50,],
// 	// direction : "alternate",
// 	// rotate :180,
// 	elasticity : 10,
// 	delay : anime.stagger (200 , {grid : [1,3],from :"center"}),
// 	duration :1000
// },1400)


// animate.add({
// 	targets : ".grid-item",
// 	scale : [1,0,1,0,1],
// 	easing :"linear",
// 	delay : anime.stagger (200 , {grid : [1,5],from :"last"}),
// 	duration:2000
// },1600)
