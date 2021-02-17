
  
    let tempF =parseFloat(document.getElementById("tempF").innerHTML);
    let speed =parseFloat(document.getElementById("speed").innerHTML);

    if(tempF<=50 && speed>=4.8){
      let f = ( 35.74 + (0.6215 * tempF) - (35.75 * Math.pow (speed,0.16)) + (0.4275 * tempF * Math.pow(speed,0.16)) ) 
       
      document.getElementById("f").innerHTML=f.toFixed(2) + "&deg; " + "F";

    }

    else{
      f="Not Applicable";
      document.getElementById("f").innerHTML=f;
    }



 