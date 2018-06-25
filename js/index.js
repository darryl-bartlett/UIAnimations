$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


function changeBackground()
{
   TweenMax.to("body", 3, {backgroundImage:"linear-gradient(to left, #646580, #212121)"});
   TweenMax.to(".anibutton", 3, {color:"#fff"});
   TweenMax.to(".anibutton", 3, {border:"2px solid #fff"});
}