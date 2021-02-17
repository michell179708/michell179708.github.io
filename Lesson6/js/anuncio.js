
  function toggleAnnouncement() {  
    let d = new Date();
    let q = d.getDay();
    console.log(q);
    if (q!=5) {
      document.getElementById("active").classList.toggle("hide");
    }
  }
