# Green Sock Animation Part 1

Today we will start animating some basic CSS properties using GSAP. Green Sock Animation Platform is a library of JavaScript tools to create scripted animations on your web pages. If we just need something to fade on hover, or hide/show based on a button click, CSS3 or jQuery more than cover our needs. However, if you want a complicated timeline of animations, GSAP offers us a much easier way to manage timing and animation of DOM elements. Let’s get started!

## Loading Scripts:

Just like some of our other external libraries, we can either download the source files, or link to the CDN cloud hosted version.

You can download or link to the files from  [GSAP’s homepage](https://greensock.com/). Click the download GSAP button below the main banner. Today we are going to link to the full (robust) cloud hosted version of the TweenMax library at the bottom of document, right before the closing `</body>` tag. Notice we are also linking to an external main.js file. We will write our animation scripts there. TweenMax contains all optional plugins and has a pretty beefy file size. In the future, you may want to only load the plugins you want to save on load time.

```html
<!DOCTYPE html>
<html>
<head>
 <title></title>
</head>
<body>

<!-- Link to GSAP HERE -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
<!-- This is where we will write our animation scripts -->
<script src="main.js"></script>
</body>
</html>
```

## Our First Tweens:

Our first method we are going to use in `TweenMax.to();`

the `.to()` method allows us to take the CSS initial properties of an element on the page, and change it to whatever we specify. We pass 3 parameters into our to method.

```
TweenMax.to(target element, duration, {variables});
```

Let’s go ahead and link to an image for us to animate in our HTML file:

```html
<img src="img/soccer-ball.png" id="sb" />
```
We can then animate it using JavaScript and TweenMax.to() in our main.js file:

```html
var sb = document.getElementById("sb");
TweenMax.to(sb, 2, {left: 800});
```

Hey! Nothing happened. What gives? If we are going to use the positioning properties, we need to make sure our soccer ball image has a position property set in our CSS. This can be either relative or absolute:

```css
#sb{
 position:relative;
 top:0;
 left:0;
 }
```

Now that we have the positioning property set, reload and watch our soccer ball move 800 pixels across the page!

### Live Code:

First, let’s do a git pull and make sure you have some images to animate.

In class today we will animate more CSS properties. Code will be posted here at the end of class. We will be using different eases in our animations. Check out this helpful [ease visualization tool here](https://greensock.com/get-started-js#easing).

Watch this video!