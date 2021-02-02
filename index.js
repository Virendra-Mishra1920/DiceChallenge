var randomNo1=Math.floor(Math.random()*6)+1;
var randomImage1="dice"+randomNo1+".png"
var randomImageSource1="images/"+randomImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);



var randomNo2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNo2+".png"
var randomImageSource2="images/"+randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNo1>randomNo2)
{
    document.querySelector('h1').innerHTML="Player1  Won"
}

else if(randomNo2>randomNo1)
{
    document.querySelector('h1').innerHTML="Player2 Won"
}

else
{
    document.querySelector('h1').innerHTML="Mathch Draw"

}