document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader-container").style.visibility = "visible";
          
          document.querySelector(
            "#loader").style.visibility = "visible";
        
    } else {
        document.querySelector(
          "#loader-container").style.display = "none";
        document.querySelector(
            "#loader-container").style.width = "0vh";
        document.querySelector(
            "#loader-container").style.height ="0vw";
          document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
  };