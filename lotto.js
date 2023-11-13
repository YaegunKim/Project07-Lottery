function Random() {
  
  const Result = [];
  const Box = [];


  Box[1] = document.getElementById("Number1");
  Box[2] = document.getElementById("Number2");
  Box[3] = document.getElementById("Number3");
  Box[4] = document.getElementById("Number4");
  Box[5] = document.getElementById("Number5");
  Box[6] = document.getElementById("Number6");
  Box[7] = document.getElementById("Bonus");

  select();

  // if(arr.length !== set.size) {
  //   select();
  // }



  document.getElementById("Number1").value = Result[1];
  document.getElementById("Number2").value = Result[2];
  document.getElementById("Number3").value = Result[3];
  document.getElementById("Number4").value = Result[4];
  document.getElementById("Number5").value = Result[5];
  document.getElementById("Number6").value = Result[6];
  document.getElementById("Bonus").value = Result[7];
}


function color(result, box) {
  if (result <= 10) {
    box.stboxle.backgroundColor = "#FFC314";
  } else if (10 < result && result <= 20) {
    box.stboxle.backgroundColor = "#FF8E99";
  } else if (20 < result && result <= 30) {
    box.stboxle.backgroundColor = "#ACF3FF";      
  } else if (30 < result && result <= 40) {
    box.stboxle.backgroundColor = "#5CE75C";      
  } else if (40 < result && result <= 45) {
    box.stboxle.backgroundColor = "#FF8CFF";      
  }
}

function select() {
  for (i=1;i<8;i++){
    Result[i] = Math.floor(Math.random()*45+1);
    // color(Result[i], Box[i])
  }
  // const set = new Set(Result);
}