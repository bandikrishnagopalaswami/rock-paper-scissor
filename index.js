      //index.js      
      let comMove='';
      let score={wins:0,loses:0,ties:0}
      function resetScore(){
        score.wins=0;
        score.loses=0;
        score.ties=0;
        let updateScore=document.querySelector(".res");
         updateScore.innerHTML=`Wins:${score.wins}  Loses:${score.loses}  Ties:${score.ties}`;
      }
      function result(user){
        let p=Math.random();
        if(p>=0 && p<=1/3){
          comMove='rock';
        }
        else if(p>1/3 && p<=2/3){
          comMove='paper';
        }
        else{
          comMove='scissor';
        }
        console.log(user,comMove);
        if(comMove===user){
          score.ties++;
          let decide=document.querySelector(".p4");
          decide.innerHTML="Draw";
          let updateScore=document.querySelector(".res");
          updateScore.innerHTML=`Wins:${score.wins}  Loses:${score.loses}  Ties:${score.ties}`;
        }
        else if((comMove==='paper'&&user==='scissor')||(comMove==='rock'&&user==='paper')||(comMove==='scissor'&&user==='rock')){
          score.wins++;
          let decide=document.querySelector(".p4");
          decide.innerHTML="You win";
          let updateScore=document.querySelector(".res");
          updateScore.innerHTML=`Wins:${score.wins}  Loses:${score.loses}  Ties:${score.ties}`;
        }
        else{
          score.loses++;
          let decide=document.querySelector(".p4");
          decide.innerHTML="You Lose";
          let updateScore=document.querySelector(".res");
         updateScore.innerHTML=`Wins:${score.wins}  Loses:${score.loses}  Ties:${score.ties}`;
        }
        displayMoves(comMove,user);
      }
    
      function displayMoves(comMove,user){
        let displayUserMove=document.querySelector(".displayusermove");
      if(user==='rock'){
        displayUserMove.innerHTML=`Your move`+`<img class="img1"src="rock-emoji.png">`
      }
      else if(user==='paper'){
        displayUserMove.innerHTML=`Your move`+`<img class="img1" src="paper-emoji.png">`
      }
      else{
        displayUserMove.innerHTML=`Your move`+`<img class="img1" src="scissors-emoji.png">`
      }
      let displayComMove=document.querySelector(".displaycommove");
      if(comMove==='rock'){
        displayComMove.innerHTML=`Computer move`+`<img class="img1"src="rock-emoji.png">`
      }
      else if(comMove==='paper'){
        displayComMove.innerHTML=`Computer move`+`<img class="img1" src="paper-emoji.png">`
      }
      else{
        displayComMove.innerHTML=`Computer move`+`<img class="img1" src="scissors-emoji.png">`
      }
    }