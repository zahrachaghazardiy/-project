let objScore , scoreValue, para ;
objScore=document.getElementById("score");
para=document.getElementById("para");
function ok(){
    debugger
    scoreValue=Number(objScore.value) ;

    if(scoreValue>=90 && scoreValue<=100){
        para.innerText="your grade is A";
    }
    else if(scoreValue>=80 && scoreValue<90){
        para.innerText="your grade is B";
    }
    else if(scoreValue>=50 && scoreValue<80){
        para.innerText="your grade is C";
    }
    else if(scoreValue>=0 && scoreValue<50){
        para.innerText="your grade is F";
        
    }
    else{
        para.innerText="error";
    }

}
