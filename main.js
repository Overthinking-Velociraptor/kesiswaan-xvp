const clock = () => {
    var date    = new Date();
    var hours   = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var midday;
  
    hours     = updateTime(hours);
    minutes   = updateTime(minutes);
    seconds   = updateTime(seconds);
    var name  = "Bapak ibu guru piket";
  
    // if else condition
  
    midday = (hours >= 12) ? "PM" : "AM";
  
    document.getElementById("clock").innerHTML =
      ""+hours+"" + ":" + ""+minutes+"" + ":" + ""+seconds+"" + ""+midday+"";
  
    var time = setTimeout(function () {
      clock();
    }, 1000);
  
    //   Good Morning and Good Night Conditions
  
    if (hours < 12) {
      var greeting = "Selamat Pagi " + name + " semangat dan sehat selalu!";
    }
  
    if (hours >= 12 && hours <= 15) {
      var greeting = "Selamat Siang " + name + " yuk semangat masih kuat! Jangan lupa minum sama disambi bakso ngeyel";
    }
  
    if (hours >= 15 && hours <= 17) {
      var greeting = "Selamat Sore " + name + " yuk dikit lagi mau pulang kok";
    }

    if (hours >= 17 && hours <= 24) {
        var greeting = "" + name + " Pulang geh udah jam segini, besok lagi";
      }
  
    document.getElementById("greetings").innerHTML = greeting;
  }
  
  const updateTime = (k) => {
    if (k < 10) {
      return "0" + k;
    } else {
      return k;
    }
  }
  
  // call clock function 
  clock();