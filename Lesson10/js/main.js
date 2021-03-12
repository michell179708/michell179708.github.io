window.onload = function(){
    document.getElementById("date").textContent = fulldate;
    document.getElementById("windChill").innerHTML= windChill(48,9);
    document.getElementById("active").classList.toggle("hide");
}