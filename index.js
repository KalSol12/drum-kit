 numBerOfDrumButtons=document.querySelectorAll(".drum").length;
 let keyBoard,key;
for(let i = 0; i < numBerOfDrumButtons; i++) {
    
    
    document.querySelectorAll(".drum")[i].addEventListener("keypress",function (event) {
        this.style.color="white";
        key=event.key;
         this.innerText=key;
         drumSound=this.innerText;
         
         
       

        switch (drumSound) {
            case 'w':
                 let tom1=new Audio("sound/tom-1.mp3");
                    tom1.play();
                break;
                case 'a':
                 let tom2=new Audio("sound/tom-2.mp3");
                    tom2.play();
                break;
                case 's':
                 let tom3=new Audio("sound/tom-3.mp3");
                    tom3.play();
                break;
                case 'd':
                 let tom4=new Audio("sound/tom-4.mp3");
                    tom4.play();
                break;
        
                case 'k':
                 let tom5=new Audio("sound/crash.mp3");
                    tom5.play();
                break;
                case 'j':
                 let tom6=new Audio("sound/kick-bass.mp3");
                    tom6.play();
                break;
                case 'l':
                 let tom7=new Audio("sound/snare.mp3");
                    tom7.play();
                break;
            default:
                break;
        }
   
    });
    

}
 /* document.addEventListener('keypress',function (event) {
    console.log(typeof event.key)
    
}) 

 */