function loadBars() {
  $("#bottombar").show();
  $("#topbar").show();
}

function clickSound() {
  setTimeout(function() {
    zounds.playURL("click.mp3");
  }, 100);
}

function clickAnimation() {
  setTimeout(function() {
    $("#mainscreen")
      .css("background-color", "white")
      .fadeIn(100);
    setTimeout(function() {
      $("#mainscreen")
        .css("background-color", "#cfcac4")
        .fadeIn(100);
    }, 500);
  }, 100);
}

//Using a JSON file/object, adjust layout
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

  //Based on amount of icons on screen, adapt layout

  if (iconCount > 6) {
    if (window.innerWidth > window.innerHeight) {
      $(".icons").css("width", "21%");
      $(".icons").css("margin-left", "2.4%");
      $(".icons").css("margin-right", "1%");
      $(".icons").css("margin-top", "1.2%");
    } else {
      $(".icons").css("width", "40%");
      $(".icons").css("margin-left", "6%");
      $(".icons").css("margin-right", "1%");
      $(".icons").css("margin-top", "5%");
      $(".icons").css("height", "18vh");
      $(".icons").css("padding-top", "9%");
      $(".bottomicons").css("height", "7vh");
      $(".bottomicons").css("margin-top", "1%");
      $(".bottomicons").css("padding-top", "2%");
    }
  }

  if (iconCount == 6) {
    $(".icons").css("width", "25%");
    $(".icons").css("margin-left", "5%");
    $(".icons").css("margin-right", "2%");
    $(".icons").css("margin-top", "1em");
  }
  if (iconCount == 5) {
    $(".icons").css("width", "25%");
    $(".icons").css("margin-left", "5%");
    $(".icons").css("margin-right", "2%");
    $(".icons").css("margin-top", "1.2%");
  } else if (iconCount == 4) {
    $(".icons").css("width", "30%");
    $(".icons").css("margin-left", "11%");
    $(".icons").css("margin-right", "5%");
    $(".icons").css("margin-top", "1.5%");
  } else if (iconCount == 3) {
    $(".icons").css("width", "25%");
    $(".icons").css("height", "22vw");
    $(".icons").css("margin-left", "5%");
    $(".icons").css("margin-right", "1%");
    $(".icons").css("padding-top", "3%");
    $(".icons").css("margin-top", "6%");
  } else if (iconCount == 2) {
    $(".icons").css("width", "41%");
    $(".icons").css("height", "22vw");
    $(".icons").css("margin-left", "5.5%");
    $(".icons").css("padding-top", "4%");
    $(".icons").css("margin-top", "5%");
    $("#iconscreen1").css("padding-top", "7%");
  } else if (iconCount == 1) {
    $(".icons").css("width", "50%");
    $(".icons").css("height", "25vw");
    $(".icons").css("margin-top", "5%");
    $(".icons").css("margin-left", "25%");
    $(".icons").css("margin-right", "5%");
    $(".icons").css("padding-top", "5%");
    $(".icons").css("padding-bottom", "5%");
    $(".icons").css("font-size", "1vw");
    $("#iconscreen1").css("padding-top", "5%");
  }

  localStorage.setItem("modules", iconCount);
  var textsize = localStorage.getItem("fontsize");
  var bottombar = localStorage.getItem("bottombar");
  var iconscreen = localStorage.getItem("iconscreen");
  var paddingtop = localStorage.getItem("paddingtop");
  var margintop = localStorage.getItem("margintop");

  $("#mainscreen").css("font-size", textsize + "vw");
  $(".icontext").css("font-size", textsize + "vw");
  $(".bottomtext").css("font-size", textsize + "vw");
  $("#iconscreen1").css("height", iconscreen);
  $("#bottombar").css("height", bottombar);
  $("#iconscreen1").css("padding-top", paddingtop);
  $(".icontext").css("margin-top", margintop);

  $.getJSON("/localfiles/config.json", function(json) {
    var soundOn = json.sound;
    var animationOn = json.animation;
    localStorage.setItem("sound", soundOn);
    localStorage.setItem("animation", animationOn);

    if (soundOn == true) {
      $("#iconscreen1").on("click", clickSound);
    }

    if (animationOn == true) {
      $("#iconscreen1").on("click", clickAnimation);
      $(function() {
        $("#iconscreen1")
          .fadeIn(300)
          .show();
      });
    } else {
      $("#iconscreen1").show();
    }
  });
}

//Read JSON file with selected modules
function readJSON() {
  var my_json;
  $.getJSON("/localfiles/selectedmodules.json", function(json) {
    my_json = json;
    readConfig(my_json);
  });
}

function readSettingsAnimation() {
  var settingsJSON;
  $.getJSON("/localfiles/config.json", function(json) {
    settingsJSON = json;
    return settingsJSON.animation;
  });
}

//Retrieve saved fontsize
function getFontsize() {
  $.getJSON("/localfiles/config.json", function(json) {
    var font = json.fontsize;
    return font;
  });
}

//Popup box for textsize
function textSize() {
  var iconCount = localStorage.getItem("modules");
  var modal = document.querySelector(".modalslider");
  var trigger = document.querySelector(".trigger");

  function toggleModal() {
    modal.classList.toggle("show-modalslider");
  }

  function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
  }

  trigger.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);

  $("#modalslider-content").on("mouseup", function() {
    toggleModal();
  });

  $("#fontslider").on("touchend", function() {
    toggleModal();
  });

  $("#fontslider").on("mousemove touchmove", function() {
    var textsize = $(this).val();
    var bottombar = "13.5%";
    var iconscreen = "83.5%";
    var settingscreen = "83.5%";
    var modulesscreen = "83.5%";
    var individualmodule = "83.5%";
    var supportscreen = "83.5%";
    var optionsscreen = "83.5%";
    var paddingtop = "2%";
    var margintop = "1%";

    $("#iconscreen1").css("height", "83.5%");
    $(".icontext").css("margin-top", "1%");
    $("#bottombar").css("height", "13.5%");

    if (textsize > 1.2) {
      $("#bottombar").css("height", "14.5%");
      $("#iconscreen1").css("height", "82.5%");
      $("#settingscreen").css("height", "82.5%");
      $("#modulescreen").css("height", "82.5%");
      $("#supportscreen").css("height", "82.5%");
      $(".extmodulescreen").css("height", "82.5%");
      $("#optionsscreen").css("height", "82.5%");

      bottombar = "14.5%";
      iconscreen = "82.5%";
      settingscreen = "82.5%";
      modulesscreen = "82.5%";
      individualmodule = "82.5%";
      supportscreen = "82.5%";
      optionsscreen = "82.5%";
    }

    if (textsize > 1.7) {
      $("#iconscreen1").css("height", "79.5%");
      $("#bottombar").css("height", "17.5%");
      $("#settingscreen").css("height", "79.5%");
      $("#modulescreen").css("height", "79.5%");
      $("#supportscreen").css("height", "79.5%");
      $(".extmodulescreen").css("height", "79.5%");
      $("#optionsscreen").css("height", "79.5%");
      bottombar = "17.5%";
      iconscreen = "79.5%";
      settingscreen = "79.5%";
      modulesscreen = "79.5%";
      supportscreen = "79.5%";
      individualmodule = "79.5%";
      optionsscreen = "79.5%";
    }

    if (textsize > 2) {
      $("#iconscreen1").css("height", "79%");
      $("#settingscreen").css("height", "79%");
      $("#modulescreen").css("height", "79%");
      $("#supportscreen").css("height", "79%");
      $(".extmodulescreen").css("height", "79.5%");
      $("#bottombar").css("height", "18%");
      $(".icontext").css("margin-top", "0.2%");
      $(".mselect").css("margin-top", "0.1%");
      $("#optionsscreen").css("height", "79%");
      bottombar = "18%";
      iconscreen = "79%";
      settingscreen = "79%";
      modulesscreen = "79%";
      supportscreen = "79%";
      paddingtop = "1%";
      margintop = "0.1%";
      individualmodule = "79.5%";
      optionsscreen = "79%";
    }

    if (iconCount > 6) {
      $("#mainscreen").css("font-size", textsize + "vw");
      $(".icontext").css("font-size", textsize + "vw");
      $(".bottomtext").css("font-size", textsize + "vw");
    } else if (iconCount > 4 && iconCount < 7) {
      $("#mainscreen").css("font-size", textsize + "vw");
      $(".icontext").css("font-size", textsize + "vw");
      $(".bottomtext").css("font-size", textsize + "vw");
      $(".icons").css("margin-top", "1.1%");
    } else if (iconCount == 4) {
      $("#mainscreen").css("font-size", textsize + "vw");
      $(".icontext").css("font-size", textsize + "vw");
      $(".bottomtext").css("font-size", textsize + "vw");
      $(".icons").css("margin-top", "1.1%");
    } else {
      $("#mainscreen").css("font-size", textsize + "vw");
      $(".icontext").css("font-size", textsize + "vw");
      $(".bottomtext").css("font-size", textsize + "vw");
      $(".icons").css("margin-top", "5%");
      $(".icons").css("margin-bottom", "5%");
      $(".icons").css("padding-top", "5%");
      $(".icons").css("padding-bottom", "3%");
    }
    localStorage.setItem("fontsize", textsize);
    localStorage.setItem("iconscreen", iconscreen);
    localStorage.setItem("settingscreen", settingscreen);
    localStorage.setItem("modulesscreen", modulesscreen);
    localStorage.setItem("individualmodule", individualmodule);
    localStorage.setItem("supportscreen", supportscreen);
    localStorage.setItem("bottombar", bottombar);
    localStorage.setItem("margintop", margintop);
    localStorage.setItem("paddingtop", paddingtop);
    localStorage.setItem("optionsscreen", optionsscreen);
  });
}

//Individual page layout resize - Support page
function resizeSupport() {
  var textsize = localStorage.getItem("fontsize");
  var bottombar = localStorage.getItem("bottombar");
  var supportscreen = localStorage.getItem("supportscreen");
  var animationOn = localStorage.getItem("animation");

  $("#supportscreen").css("height", supportscreen);
  $(".icontext").css("font-size", textsize + "vw");
  $(".bottomtext").css("font-size", textsize + "vw");
  $("#bottombar").css("height", bottombar);

  if (animationOn == "true") {
    $("#supportscreen").on("click", clickAnimation);
    $("#supportscreen")
      .fadeIn(500)
      .show();
  } else {
    $("#supportscreen").show();
  }
  console.log(animationOn);
}

//Individual page layout resize - Settings page
function resizeSettings() {
  var textsize = localStorage.getItem("fontsize");
  var bottombar = localStorage.getItem("bottombar");
  var settingscreen = localStorage.getItem("settingscreen");
  var optionsscreen = localStorage.getItem("optionsscreen");
  var animationOn = localStorage.getItem("animation");

  $("#settingscreen").css("height", settingscreen);
  $("#optionsscreen").css("height", optionsscreen);
  $(".icontext").css("font-size", textsize + "vw");
  $(".bottomtext").css("font-size", textsize + "vw");
  $("#bottombar").css("height", bottombar);

  if (animationOn == "true") {
    $("#settingscreen").on("click", clickAnimation);
    $(function() {
      $("#settingscreen")
        .fadeIn(500)
        .show();
      $("#optionsscreen")
        .fadeIn(500)
        .show();
    });
  } else {
    $("#settingscreen").show();
    $("#optionsscreen").show();
  }
}

//Individual page layout resize - Module Select page
function resizeModuleSelect() {
  var textsize = localStorage.getItem("fontsize");
  var bottombar = localStorage.getItem("bottombar");
  var modulesscreen = localStorage.getItem("modulesscreen");
  var animationOn = localStorage.getItem("animation");

  $("#modulescreen").css("height", modulesscreen);
  $(".icontext").css("font-size", textsize + "vw");
  $(".bottomtext").css("font-size", textsize + "vw");
  $("#bottombar").css("height", bottombar);

  if (animationOn == "true") {
    $("#modulescreen")
      .fadeIn(500)
      .show();
  } else {
    $("#modulescreen").show();
  }
}

//Individual page layout resize - external modules
function resizeIndividualModule() {
  var textsize = localStorage.getItem("fontsize");
  var bottombar = localStorage.getItem("bottombar");
  var individualmodule = localStorage.getItem("individualmodule");

  $(".extmodulescreen").css("height", individualmodule);
  $("#mainscreen").css("font-size", textsize + "vw");
  $(".bottomtext").css("font-size", textsize + "vw");
  $("#bottombar").css("height", bottombar);
}
