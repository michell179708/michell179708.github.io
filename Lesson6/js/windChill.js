  function windChill (tempF, speed) {
   let f;
   
  if(tempF<=50 && speed>3 ){
    f=( 35.74 + (0.6215 * tempF) - (35.75 * Math.pow (speed,0.16)) + (0.4275 * tempF * Math.pow(speed,0.16)) ) 
   
  }
  else{
    f="N/A";
  
  
  }
  document.getElementById("windChill").innerHTML= windChill(48,9);

  
  }



 