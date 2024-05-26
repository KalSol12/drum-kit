numBerOfDrumButtons=document.querySelectorAll(".drum").length;

let random;

setInterval(10,makesound(random)) 
setInterval(() => {
    random=Math.floor(Math.random()*7)+1;
  /*   makesound(random); */
  
}, 500);

for(let i = 0; i < numBerOfDrumButtons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
       
        drumSound=this.innerText;
        makesound(drumSound)
    });
    document.querySelectorAll(".drum")[i].addEventListener("keypress",function (event) {
         
       
     makesound(event.key)
         
})
}

 function makesound(key) {
    
    switch (key) {
        case 'w':
         case 1:   
             let tom1=new Audio("sound/tom-1.mp3");
                tom1.play();
            break;
            case 'a':
            case 2:
             let tom2=new Audio("sound/tom-2.mp3");
                tom2.play();
            break;
             case 's':
             case 3:   
             let tom3=new Audio("sound/tom-3.mp3");
                tom3.play();
            break;
            case 'd':
            case 4:    
             let tom4=new Audio("sound/tom-4.mp3");
                tom4.play();
            break;
    
            case 'k':
            case 5:    
             let tom5=new Audio("sound/crash.mp3");
                tom5.play();
            break;
            case 'j':
             case 6:   
             let tom6=new Audio("sound/kick-bass.mp3");
                tom6.play();
            break;
            case 'l':
            case 7:    
             let tom7=new Audio("sound/snare.mp3");
                tom7.play();
            break;
        default:
            break;
    }
    
 }