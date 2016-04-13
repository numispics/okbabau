// JavaScript Document
var myImage=document.getElementById("imageone");
var imageArray=["images/1a.jpg","images/1b.jpg","images/1c.jpg","images/1d.jpg","images/1e.jpg"];
var imageIndex=0;
function changeImage() {
	imageone.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length)
	{imageIndex=0;}
}
var IntervalHandle=setInterval(changeImage,2000);



