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
  if (iconCount == 6) {
    $(".icons").css("width", "25%");
    $(".icons").css("margin-left", "5%");
    $(".icons").css("margin-right", "1em");
    $(".icons").css("margin-top", "1em");
  }
  if (iconCount == 5) {
    $(".icons").css("width", "25%");
    $(".icons").css("margin-left", "5%");
    $(".icons").css("margin-right", "2%");
    $(".icons").css("margin-top", "1%");
  } else if (iconCount == 4) {
    $(".icons").css("width", "30%");
    $(".icons").css("margin-left", "10%");
    $(".icons").css("margin-right", "5%");
    $(".icons").css("margin-top", "1%");
  } else if (iconCount == 3) {
    $(".icons").css("width", "25%");
    $(".icons").css("height", "22vw");
    $(".icons").css("margin-left", "5%");
    $(".icons").css("margin-right", "1%");
    $(".icons").css("padding-top", "3%");
    $(".icons").css("margin-top", "2%");
  } else if (iconCount == 2) {
    $(".icons").css("width", "41%");
    $(".icons").css("height", "22vw");
    $(".icons").css("margin-left", "5%");
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
  var topbar = localStorage.getItem("topbar");
  var bottombar = localStorage.getItem("bottombar");
  var iconscreen = localStorage.getItem("iconscreen");
  var paddingtop = localStorage.getItem("paddingtop");
  var margintop = localStorage.getItem("margintop");

  $("#mainscreen").css("font-size", textsize + "vw");
  $(".icontext").css("font-size", textsize + "vw");
  $(".bottomtext").css("font-size", textsize + "vw");
  $("#topbar").css("height", topbar);
  $("#iconscreen1").css("height", iconscreen);
  $("#bottombar").css("height", bottombar);
  $("#iconscreen1").css("padding-top", paddingtop);
  $(".icontext").css("margin-top", margintop);
}

//Read JSON file with selected modules
function readJSON() {
  var my_json;
  $.getJSON("/localfiles/selectedmodules.json", function(json) {
    my_json = json;
    readConfig(my_json);
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

  $("#fontslider").on("mousemove" || "touchmove", function() {
    var textsize = $(this).val();
    var topbar = "3%";
    var bottombar = "13.5%";
    var iconscreen = "83.5%";
    var settingscreen = "83.5%";
    var modulesscreen = "83.5%";
    var individualmodule = "83.5%";
    var paddingtop = "2%";
    var margintop = "1%";

    $("#topbar").css("height", "3%");
    $("#iconscreen1").css("height", "83.5%");
    $(".icontext").css("margin-top", "1%");
    $("#bottombar").css("height", "13.5%");

    if (textsize > 1.2) {
      $("#topbar").css("height", "4%");
      $("#bottombar").css("height", "14.5%");
      $("#iconscreen1").css("height", "81.5%");
      $("#settingscreen").css("height", "81.5%");
      $("#modulescreen").css("height", "81.5%");
      $(".extmodulescreen").css("height", "81.5%");

      topbar = "4%";
      bottombar = "14%";
      iconscreen = "81.5%";
      settingscreen = "81.5%";
      modulesscreen = "81.5%";
      individualmodule = "81.5%";
    }

    if (textsize > 1.7) {
      $("#topbar").css("height", "5%");
      $("#iconscreen1").css("height", "79.5%");
      $("#bottombar").css("height", "15.5%");
      $("#settingscreen").css("height", "79.5%");
      $("#modulescreen").css("height", "79.5%");
      $(".extmodulescreen").css("height", "79.5%");
      topbar = "5%";
      bottombar = "15.5%";
      iconscreen = "79.5%";
      settingscreen = "79.5%";
      modulesscreen = "79.5%";
      individualmodule = "79.5%";
    }

    if (textsize > 2) {
      $("#topbar").css("height", "7%");
      $("#iconscreen1").css("height", "76.5%");
      $("#settingscreen").css("height", "76.5%");
      $("#modulescreen").css("height", "76.5%");
      $(".extmodulescreen").css("height", "76.5%");
      $("#iconscreen1").css("padding-top", "1%");
      $("#bottombar").css("height", "16.5%");
      $(".icontext").css("margin-top", "0.1%");
      $(".mselect").css("margin-top", "0.1%");
      topbar = "7%";
      bottombar = "16.5%";
      iconscreen = "76.5%";
      settingscreen = "76.5%";
      modulesscreen = "76.5%";
      paddingtop = "1%";
      margintop = "0.1%";
      individualmodule = "76.5%";
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
      if (textsize > 20) {
        $(".icons").css("margin-top", "0.6%");
      }
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
    localStorage.setItem("topbar", topbar);
    localStorage.setItem("iconscreen", iconscreen);
    localStorage.setItem("settingscreen", settingscreen);
    localStorage.setItem("modulesscreen", modulesscreen);
    localStorage.setItem("individualmodule", individualmodule);
    localStorage.setItem("bottombar", bottombar);
    localStorage.setItem("margintop", margintop);
    localStorage.setItem("paddingtop", paddingtop);
  });
}

//Individual page layout resize - Support page
function resizeSupport() {
  var textsize = localStorage.getItem("fontsize");
  $("#mainscreen").css("font-size", textsize + "vw");
  $(".icontext").css("font-size", textsize + "vw");
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

//Individual page layout resize - Settings page
function resizeSettings() {
  var textsize = localStorage.getItem("fontsize");
  var topbar = localStorage.getItem("topbar");
  var bottombar = localStorage.getItem("bottombar");
  var settingscreen = localStorage.getItem("settingscreen")

  $("#settingscreen").css("height", settingscreen);
  $("#mainscreen").css("font-size", textsize + "vw");
  $(".icontext").css("font-size", textsize + "vw");
  $(".bottomtext").css("font-size", textsize + "vw");
  $("#topbar").css("height", topbar);
  $("#bottombar").css("height", bottombar);
}

//Individual page layout resize - Module Select page
function resizeModuleSelect() {
  var textsize = localStorage.getItem("fontsize");
  var topbar = localStorage.getItem("topbar");
  var bottombar = localStorage.getItem("bottombar");
  var modulesscreen = localStorage.getItem("modulesscreen")

  $("#modulescreen").css("height", modulesscreen);
  $("#mainscreen").css("font-size", textsize + "vw");
  $(".icontext").css("font-size", textsize + "vw");
  $(".bottomtext").css("font-size", textsize + "vw");
  $("#topbar").css("height", topbar);
  $("#bottombar").css("height", bottombar);
}

//Individual page layout resize - external modules
function resizeIndividualModule() {
  var textsize = localStorage.getItem("fontsize");
  var topbar = localStorage.getItem("topbar");
  var bottombar = localStorage.getItem("bottombar");
  var individualmodule = localStorage.getItem("individualmodule")

  $(".extmodulescreen").css("height", individualmodule);
  $("#mainscreen").css("font-size", textsize + "vw");
  $(".bottomtext").css("font-size", textsize + "vw");
  $("#topbar").css("height", topbar);
  $("#bottombar").css("height", bottombar);  
}
