function readConfig(configJSON) {
  var iconCount = 8;
  var config = configJSON;
  localStorage.getItem("modules");

  var firstaid = config.firstaid;
  var video = config.video;
  var presc = config.presc;
  var hospital = config.hospital;
  var diary = config.diary;
  var nutrition = config.nutrition;
  var symptom = config.symptom;
  var emergency = config.emergency;

  if (firstaid == false) {
    document.getElementById("firstaid").style.display = "none";
    iconCount--;
  }

  if (video == false) {
    document.getElementById("video").style.display = "none";
    iconCount--;
  }

  if (presc == false) {
    document.getElementById("presc").style.display = "none";
    iconCount--;
  }

  if (hospital == false) {
    document.getElementById("hospital").style.display = "none";
    iconCount--;
  }

  if (diary == false) {
    document.getElementById("diary").style.display = "none";
    iconCount--;
  }

  if (nutrition == false) {
    document.getElementById("nutrition").style.display = "none";
    iconCount--;
  }

  if (symptom == false) {
    document.getElementById("symptom").style.display = "none";
    iconCount--;
  }

  if (emergency == false) {
    document.getElementById("emergency").style.display = "none";
    iconCount--;
  }

  if (iconCount > 4 && iconCount < 8) {
    $(".icons").css("width", "21%");
    $(".icons").css("margin-left", "1.3em");
    $(".icons").css("margin-right", "1em");
    $(".icons").css("margin-top", "1em");
  } else if (iconCount == 4) {
    $(".icons").css("width", "350px");
    $(".icons").css("margin-left", "100px");
    $(".icons").css("margin-right", "80px");
    $(".icons").css("padding-left", "40px");
    $(".icons").css("padding-right", "40px");
    $(".icons").css("padding-top", "7px");
    $(".icons").css("margin-top", "17px");
  } else if (iconCount == 3) {
    $(".icons").css("width", "25%");
    $(".icons").css("margin-left", "5%");
    $(".icons").css("margin-right", "1%");
    $(".icons").css("margin-top", "4%");
    $(".icons").css("margin-bottom", "10px");
    $(".icons").css("padding-top", "5%");
    $(".icons").css("padding-bottom", "5%");
  } else if (iconCount > 1 && iconCount < 3) {
    $(".icons").css("width", "400px");
    $(".icons").css("margin-left", "80px");
    $(".icons").css("margin-right", "80px");
    $(".icons").css("padding-left", "30px");
    $(".icons").css("padding-right", "30px");
    $(".icons").css("padding-top", "70px");
    $(".icons").css("padding-bottom", "40px");
    $(".icons").css("font-size", "20px");
    $("#iconscreen1").css("padding-top", "60px");
  } else if (iconCount == 1) {
    $(".icons").css("width", "400px");
    $(".icons").css("margin-left", "240px");
    $(".icons").css("margin-right", "180px");
    $(".icons").css("padding-left", "200px");
    $(".icons").css("padding-right", "200px");
    $(".icons").css("padding-top", "70px");
    $(".icons").css("padding-bottom", "40px");
    $(".icons").css("font-size", "20px");
    $("#iconscreen1").css("padding-top", "60px");
  }

  localStorage.setItem("modules", iconCount);
  var textsize = localStorage.getItem("fontsize");

  if (textsize > 21) {
    $(".icontext").css("margin-top", "0.1em");
  } else {
    $(".icontext").css("margin-top", "0.5em");
  }

  $("#mainscreen").css("font-size", textsize + "px");
  $(".icontext").css("font-size", textsize + "px");
}

function readJSON() {
  var my_json;
  $.getJSON("/localfiles/selectedmodules.json", function(json) {
    my_json = json;
    readConfig(my_json);
  });
}

function getFontsize() {
    $.getJSON("/localfiles/config.json", function(json) {
    var font = json.fontsize;
    return font;
    });
  }

function textSize() {
  var iconCount = localStorage.getItem("modules");
  var modal = document.querySelector(".modal");
  var trigger = document.querySelector(".trigger");

  function toggleModal() {
    modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
  }

  trigger.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);

  $("input").on("mousemove", function() {
    var textsize = $(this).val();

    if (textsize > 21) {
      $(".icontext").css("margin-top", "0.1em");
      $(".pickicons").css("margin-top", "0.1em");
      $("#moduleheader").css("margin-bottom", "5%");
      $(".pickicons").css("width", "22%");
      $(".pickicons").css("margin-left", "1.3em");
      $(".pickicons").css("margin-right", "0.1em");
    } else {
      $(".icontext").css("margin-top", "0.5em");
      $(".icontext").css("margin-top", "0.5em");
      $("#moduleheader").css("margin-bottom", "3%");
      $(".pickicons").css("width", "19%");
      $(".pickicons").css("margin-left", "2em");
      $(".pickicons").css("margin-right", "2em");
    }
    if (iconCount > 6) {
      $("#mainscreen").css("font-size", textsize + "px");
      $(".icontext").css("font-size", textsize + "px");
      if (textsize > 23) {
        $(".icons").css("margin-left", "1.3em");
        $(".icons").css("margin-right", "1em");

        $("#iconscreen1").css("padding-top", "0.3em");
      } else {
        $(".icons").css("width", "21%");
        $(".icons").css("margin-left", "1.3em");
        $(".icons").css("margin-right", "1em");
        $(".icons").css("margin-top", "1.5em");
        $("#iconscreen1").css("padding-top", "1em");
      }
    } else if (iconCount > 4 && iconCount < 7) {
      $("#mainscreen").css("font-size", textsize + "px");
      $(".icontext").css("font-size", textsize + "px");
      $(".icons").css("margin-top", "1.1em");
      if (textsize > 20) {
        $(".icons").css("margin-top", "0.6em");
      }
    } else {
      $("#mainscreen").css("font-size", textsize + "px");
      $(".icontext").css("font-size", textsize + "px");
    }
    if (textsize < 30) {
      localStorage.setItem("fontsize", textsize);
    }
  });
}

function resizeSupport() {
  var textsize = localStorage.getItem("fontsize");
  $("#mainscreen").css("font-size", textsize + "px");
  $(".icontext").css("font-size", textsize + "px");
  $(".icons").css("width", "21%");
  $(".icons").css("margin-left", "1em");
  $(".icons").css("margin-right", "1em");
  $(".icons").css("padding-top", "1em");
  $("#iconscreen1").css("padding-top", "0.3em");

  if (textsize > 21) {
    $(".icontext").css("margin-top", "0.1em");
  } else {
    $(".icontext").css("margin-top", "0.5em");
  }
}

function resizeSettings() {
  var textsize = localStorage.getItem("fontsize");
  $(".icontext").css("font-size", textsize + "px");
  $("#mainscreen").css("font-size", textsize + "px");
  // $('.settingoption').css('font-size', textsize + 'px');
  // $('.settingoption').css('width', '21%');
  // $('.settingoption').css('margin-left', '1em');
  // $('.settingoption').css('margin-right', '1em');
  // $('.settingoption').css('padding-top', '0.1em');
  // $('#settingscreen').css('padding-top', '0.3em');

  if (textsize > 21) {
    $(".icontext").css("margin-top", "0.1em");
  } else {
    $(".icontext").css("margin-top", "0.5em");
  }
}

function resizeModuleSelect() {
  var textsize = localStorage.getItem("fontsize");
  $(".icontext").css("font-size", textsize + "px");
  $("#mainscreen").css("font-size", textsize + "px");
  if (textsize > 20) {
    $(".pickicons").css("margin-top", "0.1em");
    $(".icontext").css("margin-top", "0.1em");
    $(".pickicons").css("width", "22%");
    $(".pickicons").css("margin-left", "1.3em");
    $(".pickicons").css("margin-right", "0.1em");
    $("#moduleheader").css("margin-bottom", "5%");
  } else {
    $(".icontext").css("margin-top", "0.5em");
    $("#moduleheader").css("margin-bottom", "3%");
    $(".pickicons").css("width", "19%");
    $(".pickicons").css("margin-left", "2em");
    $(".pickicons").css("margin-right", "2em");
  }
}

function resizeIndividualModule() {
  var textsize = localStorage.getItem("fontsize");
  $(".icontext").css("font-size", textsize + "px");
  $("#mainscreen").css("font-size", textsize + "px");
  if (textsize > 20) {
    $(".icontext").css("margin-top", "0.1em");
  } else {
    $(".icontext").css("margin-top", "0.5em");
  }
}

function pickModules() {
  if (document.getElementById("faC").checked) {
    localStorage.setItem("firstaidcheck", true);
  } else {
    localStorage.setItem("firstaidcheck", false);
  }

  if (document.getElementById("vC").checked) {
    localStorage.setItem("videocheck", true);
  } else {
    localStorage.setItem("videocheck", false);
  }

  if (document.getElementById("pC").checked) {
    localStorage.setItem("prescriptioncheck", true);
  } else {
    localStorage.setItem("prescriptioncheck", false);
  }

  if (document.getElementById("laC").checked) {
    localStorage.setItem("hospitalcheck", true);
  } else {
    localStorage.setItem("hospitalcheck", false);
  }

  if (document.getElementById("hdC").checked) {
    localStorage.setItem("healthdiarycheck", true);
  } else {
    localStorage.setItem("healthdiarycheck", false);
  }

  if (document.getElementById("nC").checked) {
    localStorage.setItem("nutritioncheck", true);
  } else {
    localStorage.setItem("nutritioncheck", false);
  }

  if (document.getElementById("scC").checked) {
    localStorage.setItem("symptomcheck", true);
  } else {
    localStorage.setItem("symptomcheck", false);
  }

  if (document.getElementById("eC").checked) {
    localStorage.setItem("emergencycheck", true);
  } else {
    localStorage.setItem("emergencycheck", false);
  }
  alert("Form submitted!");
}
