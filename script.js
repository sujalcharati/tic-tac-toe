
//  let boxes= document.querySelectorAll(".box");
//  let chance=true;

//  const cases=[
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
    
//  ];


// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//       console.log("box is clicked");
//       if (chance) {
        
//         box.innerText = "O";
//         chance = false;
//       } else {
        
//         box.innerText = "X";
//         chance = true;

//       }
//       box.disabled=true;
      
//        wingame();
//     })});
//     const btndisable=()=>{
//       for(let box of boxes){
//         box.disabled=true;
//       }
//     }

//     const wingame=()=>{
//       for(let pattern of cases){
//         let box1=boxes[pattern[1]].innerText;
//         let box2=boxes[pattern[2]].innerText;
//         let box3=boxes[pattern[3]].innerText; 


//         if(box1!=""&& box2!=""&& box3!=""){  
//         if(box1===box2&& box2===box3){
         
         
//          resgame(box1);
//          return true;
//         }
//       }} 

//     }
//     const resgame= (winner)=>{
//       clue.innerText = `Congratulations, Winner is ${winner}`;      
      
//        }
//        let resbtn=document.querySelector(".restart")
//        const restar=()=>{ 
//        resbtn.addEventListener("click", ()=>{
//         box.disabled=true;
//         console.log("game restarted");
//         resbtn.innerText=game;
//         restar();


//        })}
   
      const box =document.getElementById("box");






