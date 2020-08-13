var secondary = document.getElementById("secondary");
var secondaryheads = document.querySelector("#secondaryheads")
var services = document.getElementById("services");
var tcontainer = document.getElementById("tcontainer");
var i=0;
var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var slider3 = document.getElementById("slider3");
var mainlogo = document.getElementById("mainlogo");
services.addEventListener("click",clickfunc);

function clickfunc()
{
	if (i==0)
	{
		secondary.style.display = "flex";
		services.classList.add("afterclick")
		// services.style.color ="white";
		// services.style.backgroundColor = "orange";
		i=1;
		anime({
			targets :secondary,
			width : 700,
			opacity :1,
			duration :1000
		})
	}
	else
	{
		// secondary.style.display ="none";
		i=0;
		// services.style.color ="black";
		// services.style.backgroundColor = "white";
		services.classList.remove("afterclick")
		anime({
			targets :secondary,
			width : 0,
			opacity:0,
			duration :1000
		})
	}
}

//mobile view

// var hamburglar = document.getElementById("hamburglar");
var container = document.getElementById("container");
var bg = document.getElementById("bg");
var x = window.matchMedia("(min-width:1300px)")
function resize(x)
{
	if(x.matches)
	{
		console.log("jfbjef");
		hamburglar.style.display="none";
		container.style.display = "flex";
		tcontainer.style.display ="none";
		bg.style.display = "none"
	}
	else
	{
		console.log("not");
		hamburglar.style.display="flex";
		container.style.display = "none";
		tcontainer.style.display ="inline";
		bg.style.display = "inline"
	}
}

resize(x);
x.addListener(resize);

var y = window.matchMedia("(min-width:900px)")
function resize1(y)
{
	if(y.matches)
	{
		tcontainer.style.width ="50%";
		slider1.style.width ="50%";
		slider2.style.width ="50%";
		slider3.style.width ="50%";
		mainlogo.style.zIndex = "1";
	}
	else
	{
		tcontainer.style.width ="75%";
		slider1.style.width ="75%";
		slider2.style.width ="75%";
		slider3.style.width ="75%";
		mainlogo.style.zIndex = "1";

	}
}
resize1(y);
y.addListener(resize1);
//first expand
var tservices = document.getElementById("tservices");
var yesexpand = document.getElementsByClassName("yesexpand");
tservices.addEventListener("click",expand1);
var noexpand = document.getElementsByClassName("noexpand")
var k=0
function expand1()
{
	if(k==0)
	{	
		for(var t = 0;t<3;t++)
		{
			yesexpand[t].style.display ="grid"
			anime({
				targets : yesexpand,
				// scale : [0,1],
				opacity : [0,1],
				delay : anime.stagger(100,{from:"first"}),
				duration:500,

			})
		}
		k=1;
	}
	else
	{
		for(var t = 0;t<3;t++)
		{
			yesexpand[t].style.display ="none"
			anime({
				targets : yesexpand,
				// scale : [1,0],
				opacity : [1,0],
				// translateY : []
				delay : anime.stagger(100,{from:"first"}),
				duration:500,

			})
		}
		k=0;		
	}
}

//second expand
var tengineering = document.getElementById("tengineering");
var tconstructions = document.getElementById("tconstructions");
var tmanagement = document.getElementById("tmanagement");
var back = document.getElementById("back");
tengineering.addEventListener("click",expand2);
tconstructions.addEventListener("click",expand3);
tmanagement.addEventListener("click",expand4);
back.addEventListener("click",remove);
function expand2()
{

	tcontainer.style.display ="none";
	slider1.style.display ="inline";
	hamburglar.style.display = "none"
	back.style.width = "25px";
	back.style.display = "inline"
	anime({
		targets :slider1,
		translateX : ["100%","0%"],
		opacity : [0,1],
		duration :200,
		easing : "linear"
	})

}

function expand3()
{

	tcontainer.style.display ="none";
	slider2.style.display ="inline";
	hamburglar.style.display = "none"
	back.style.width = "25px";
	back.style.display = "inline"
	anime({
		targets :slider2,
		translateX : ["100%","0%"],
		opacity : [0,1],
		duration :200,
		easing : "linear"
	})
}

function expand4()
{

	tcontainer.style.display ="none";
	hamburglar.style.display = "none"
	slider3.style.display ="inline";
	back.style.width = "25px";
	back.style.display = "inline"
	anime({
		targets :slider3,
		translateX : ["100%","0%"],
		opacity : [0,1],
		duration :200,
		easing : "linear"
	})
}

function remove()
{
	tcontainer.style.display ="inline";
	anime({
		targets :tcontainer,
		translateX : ["100%","0%"],
		opacity :[0,1],
		// scale : [0,1],
		duration :200,
		easing : "linear"
	})
	slider3.style.display ="none"
	slider2.style.display ="none"
	slider1.style.display ="none"
	back.style.width = "0px";
	back.style.display = "none"
	hamburglar.style.display = "flex"

}
