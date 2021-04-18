$(document).ready(function(){
  var random;
  var rq;
  var ra;
  getquote();
          function getquote() {
  var q=["“Don't cry because it's over, smile because it happened.”","“Be yourself; everyone else is already taken.” ","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ","“So many books, so little time.” "];
   var aut=["― Dr. Seuss","― Oscar Wilde","― Albert Einstein","― Frank Zappa"];
   random=Math.floor((Math.random()*q.length));
   rq=q[random];
  ra=aut[random];
  $(".quote").text(rq);
  $(".author").text(ra);
          } 
   $("#quote").on("click",function(){
     getquote();
     
     
   });         
      $("#tweet").on("click",function(){
     window.open("https://twitter.com/intent/tweet?text="+rq+""+ra);
     
     
   });         
                  
                  
                  });