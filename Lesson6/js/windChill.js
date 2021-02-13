
  function windChill(){
    let tempF = parseFloat(document.getElementById("tempF").value);
    let speed = parseFloat(document.getElementById("speed").value);

    if(tempF<=50 && speed>=3){
      let f = ( 35.74 + (0.6215 * tempF) - (35.75 * Math.pow (speed,0.16)) + (0.4275 * tempF * Math.pow(speed,0.16)) ) 
       
      document.getElementById("f").innerHTML=f.toFixed(2) + "&deg; " + "F";

    }

    else{
      f="Not Applicable";
      document.getElementById("f").innerHTML=f;
    }

  }