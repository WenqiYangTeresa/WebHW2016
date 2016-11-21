//this is where we will write our animation js
var sb = document.getElementById('sb');
console.log("here");
//grab our soccer ball. it could be any object on the page
//tweenmax object library TO methos to animate over three second and change its position
//(target, time, what to do, delay)
//TweenMax.to(sb, 3, {left:800, top:300});
TweenMax.to(sb, 3, 
	{
		x:800, 
		y:-500,
		rotation:720,
		scale:0.5,
		ease: Elastic.easeOut},
	0.5);

//1 sec delay between each one falling
TweenMax.staggerTo('.bball', 1, 
	{y:500, 
	 rotation: 360,
	 delay:0,
	 ease: Bounce.easeOut
	}, 0.5)
TweenMax.to('.bball, #sb', 1, 
	{
		opacity:0,
		delay: 8,
		onComplete: imDone



	});

function imDone(){
	alert("i m done!")
}