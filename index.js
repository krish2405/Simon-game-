// alert("kishlay")
var gamepattern=[];
var userclickedpattern=[];

var buttoncolors=["red","blue","green","red"];

var level=0;
var started=false;

$(document).keypress(function()
{   if(!started)
      {$("#level-title").text("Level "+level);
       nextsequence();
       started=true;
     }
    
})

$(".btn").click(function() {

     //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
     var userChosenColour = $(this).attr("id");
   
     //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
     userclickedpattern.push(userChosenColour);
   
     // alert(userclickedpattern);
     playsound(userChosenColour);
     animatepress(userChosenColour)
     checkanswer(userclickedpattern.length-1)
     
   
   });


function checkanswer(currentLevel){
     if (gamepattern[currentLevel] === userclickedpattern[currentLevel]) {

          console.log("success");
    
          //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
          if (userclickedpattern.length === gamepattern.length){
    
            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextsequence();
            }, 1000);
    
          }
    
        } else {
    
          console.log("wrong");
          $("body").addClass("game-over");
          
          setTimeout(function () {
               $("body").removeClass("game-over");
             }, 200)
          $("#level-title").text( "Game Over, Press Any Key to Restart");
           startover();     
     }
       
     
     }

       


function nextsequence(){

     userclickedpattern=[];
     level++;
     $("#level-title").text("Level "+level);


     let randomvariable = Math.floor(Math.random() * 4);
     let choosenbutton = buttoncolors[randomvariable];

     gamepattern.push(choosenbutton);

     $("#" + choosenbutton).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(choosenbutton)

    

    
}

function playsound(name)
{
     var audio = new Audio("sounds/" + name + ".mp3");
     audio.play();
}

function animatepress(currentcolor){
     $("#"+currentcolor).addClass("pressed");

     setTimeout(function () {
          $("#" + currentcolor).removeClass("pressed");
        }, 100)
}

function startover(){
     level=0;
     gamepattern=[];
     started=false;
}