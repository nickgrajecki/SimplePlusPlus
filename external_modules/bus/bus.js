var formatted;
var selectedDate;
var selectedHour;
var selectedMinute;
var year;
var month;
var day;
var finalTime;
var navTime;

function getHome() {
  $.getJSON("/../../localfiles/details.json", function(json) {
    if (json.home.length) {
      var home = json.home;
      document.getElementById("origin-input").value = home;
      localStorage.setItem("user_selected_origin", home);
    }
  });
}
//Test time format conversion
var moonLanding = new Date("2018/09/05 12:00");

// milliseconds since Jan 1, 1970, 00:00:00.000 GMT
//console.log(moonLanding.getTime());

function initMap() {
  // Create map style
  var styles = [
    {
      featureType: "landscape.man_made",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#dbd6c7"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#bbcea4"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#ffffff"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#626468"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#5ac1ee"
        },
        {
          saturation: "-25"
        }
      ]
    }
  ];

  //Create markers for toggle tourist layer
  var markers = new Array();
  var iconSrc = {};

  iconSrc["historicMarkers"] = "images/cathedral.png";
  iconSrc["gardenMarkers"] = "images/garden.png";
  iconSrc["museumMarkers"] = "images/museum.png";
  iconSrc["restaurantsMarkers"] = "images/restaurants.png";
  iconSrc["theatreMarkers"] = "images/theatre.png";
  iconSrc["sportMarkers"] = "images/sport.png";
  iconSrc["shopMarkers"] = "images/shopping.png";
  iconSrc["hospitalMarkers"] = "images/hospital.png";

  var locations = [
    //Historical sites
    ["<h3>Norwich Cathedral</h3>", "historicMarkers", 52.6319, 1.3012],
    [
      "<h3>Catholic Cathedral of St John the Baptist</h3>",
      "historicMarkers",
      52.6291,
      1.284
    ],
    ["<h3>Norwich Castle</h3>", "historicMarkers", 52.6287, 1.2964],
    ["<h3>The Guildhall</h3>", "historicMarkers", 52.629, 1.2925],
    ["<h3>Cow Tower</h3>", "historicMarkers", 52.6343, 1.3083],
    ["<h3>The Great Hospital</h3>", "historicMarkers", 52.6334, 1.3056],
    ["<h3>St. Julian's Shrine</h3>", "historicMarkers", 52.6251, 1.3009],
    ["<h3>Elm Hill</h3>", "historicMarkers", 52.631659, 1.297005],

    //Gardens
    ["<h3>The Plantation Garden</h3>", "gardenMarkers", 52.629, 1.2821],
    [
      "<h3>East Ruston Old Vicarage Garden</h3>",
      "gardenMarkers",
      52.8057,
      1.5086
    ],
    ["<h3>Horsey Beach</h3>", "gardenMarkers", 52.7597, 1.6521],
    ["<h3>The Broads National Park</h3>", "gardenMarkers", 52.6049, 1.6089],
    ["<h3>Sheringham Park</h3>", "gardenMarkers", 52.9272, 1.175],
    ["<h3>Eaton Park</h3>", "gardenMarkers", 52.6195, 1.2548],
    ["<h3>Earlham Park</h3>", "gardenMarkers", 52.6255, 1.234],
    ["<h3>Chapelfield Gardens</h3>", "gardenMarkers", 52.626, 1.2895],
    ["<h3>Norfolk Showground</h3>", "gardenMarkers", 52.6467, 1.1776],
    ["<h3>Mousehold Heath</h3>", "gardenMarkers", 52.6422, 1.3223],

    //Museum
    [
      "<h3>Sainsbury Centre for Visual Arts</h3>",
      "museumMarkers",
      52.6203,
      1.2347
    ],
    [
      "<h3>Museum of Norwich at the Bridewell</h3>",
      "museumMarkers",
      52.6301,
      1.2951
    ],
    [
      "<h3>City of Norwich Aviation Museum</h3>",
      "museumMarkers",
      52.6803,
      1.277
    ],
    ["<h3>John Jarrold Printing Museum</h3>", "museumMarkers", 52.6352, 1.3015],
    ["<h3>Norwich Gallery</h3>", "museumMarkers", 52.6287, 1.2964],
    ["<h3>Strangers' Hall</h3>", "museumMarkers", 52.6307, 1.2925],
    ["<h3>Dragon Hall</h3>", "museumMarkers", 52.6255, 1.3016],

    //Restaurants
    ["<h3>Namaste Village</h3>", "restaurantsMarkers", 52.6217, 1.2961],
    ["<h3>Benedicts</h3>", "restaurantsMarkers", 52.6309, 1.2911],
    ["<h3>The Merchants of Spice</h3>", "restaurantsMarkers", 52.6331, 1.2948],
    ["<h3>Giggling Squid</h3>", "restaurantsMarkers", 52.631, 1.2994],
    ["<h3>Grosvenor Fish Bar</h3>", "restaurantsMarkers", 52.63, 1.2916],
    ["<h3>Brick Pizza</h3>", "restaurantsMarkers", 52.6282, 1.2927],
    ["<h3>Frankie & Benny's<h3>", "restaurantsMarkers", 52.6262, 1.305],
    ["<h3>Zizzi Italian</h3>", "restaurantsMarkers", 52.6307, 1.2994],
    ["<h3>Bella Italia</h3>", "restaurantsMarkers", 52.6262, 1.2942],
    ["<h3>YO! Sushi</h3>", "restaurantsMarkers", 52.6261, 1.2919],
    ["<h3>Wagamamas</h3>", "restaurantsMarkers", 52.6262, 1.2911],
    ["<h3>Giraffe</h3>", "restaurantsMarkers", 52.6262, 1.2912],
    ["<h3>The Assembly House</h3>", "restaurantsMarkers", 52.6267, 1.2906],
    ["<h3>The Waffle House</h3>", "restaurantsMarkers", 52.6293, 1.2896],
    ["<h3>Las Iguanas</h3>", "restaurantsMarkers", 52.6253, 1.3041],
    ["<h3>Nandos</h3>", "restaurantsMarkers", 52.6268, 1.2945],
    ["<h3>TGI Fridays</h3>", "restaurantsMarkers", 52.6258, 1.3039],
    ["<h3>Nandos</h3>", "restaurantsMarkers", 52.6253, 1.3042],

    //Theatre
    ["<h3>Norwich Playhouse</h3>", "theatreMarkers", 52.6253, 1.3042],
    ["<h3>Norwich Theatre Royal</h3>", "theatreMarkers", 52.6273, 1.2901],
    ["<h3>Norwich Puppet Theatre</h3>", "theatreMarkers", 52.636, 1.3001],
    ["<h3>Maddermarket Theatre</h3>", "theatreMarkers", 52.6302, 1.29262],
    ["<h3>Sewell Barn Theatre</h3>", "theatreMarkers", 52.6481, 1.2988],
    ["<h3>Norwich Arts Centre</h3>", "theatreMarkers", 52.6316, 1.2878],
    ["<h3>Odeon IMAX Cinema Norwich</h3>", "theatreMarkers", 52.6254, 1.3046],
    ["<h3>Cinema City</h3>", "theatreMarkers", 52.6305, 1.296],
    ["<h3>Vue Cinema</h3>", "theatreMarkers", 52.6268, 1.2964],
    ["<h3>Hollywood Screen Cinema</h3>", "theatreMarkers", 52.6362, 1.2956],
    [
      "<h3>Riverside Entertainment Centre</h3>",
      "theatreMarkers",
      52.6256,
      1.306
    ],
    ["<h3>The Waterfront</h3>", "theatreMarkers", 52.6246, 1.3026],

    //Sports and Leisure
    ["<h3>Riverside Leisure Centre</h3>", "sportMarkers", 52.6222, 1.3064],
    ["<h3>Sportspark</h3>", "sportMarkers", 52.6245, 1.2409],
    ["<h3>Norman Centre</h3>", "sportMarkers", 52.6511, 1.2733],
    ["<h3>David Lloyd</h3>", "sportMarkers", 52.6542, 1.2643],
    [
      "<h3>Nuffield Health Fitness & Wellbeing Gym</h3>",
      "sportMarkers",
      52.6348,
      1.3071
    ],
    [
      "<h3>Wentworth Private Swimming Pool</h3>",
      "sportMarkers",
      52.617,
      1.2749
    ],
    ["<h3>Wymondham Leisure Centre</h3>", "sportMarkers", 52.5737, 1.1183],
    ["<h3>24/7 Fitness Norwich Gym</h3>", "sportMarkers", 52.6265, 1.3049],
    ["<h3>The Gym Norwich City</h3>", "sportMarkers", 52.6293, 1.2942],
    ["<h3>Bannatyne Health Club</h3>", "sportMarkers", 52.63, 1.3683],
    ["<h3>Wensum Sports Centre</h3>", "sportMarkers", 52.6235, 1.3032],
    [
      "<h3>Health Central Fitness and Health</h3>",
      "sportMarkers",
      52.6685,
      1.2735
    ],
    ["<h3>Plumstead Pool</h3>", "sportMarkers", 52.6408, 1.3965],
    ["<h3>Phoenix Gym Norwich</h3>", "sportMarkers", 52.6341, 1.2904],

    //Shopping
    ["<h3>intu Chapelfield</h3>", "shopMarkers", 52.6258, 1.2898],
    ["<h3>Anglia Square Shopping Centre</h3>", "shopMarkers", 52.6363, 1.2952],
    ["<h3>Riverside Retail Park</h3>", "shopMarkers", 52.6237, 1.3065],
    ["<h3>Sweet Briar Retail Park</h3>", "shopMarkers", 52.6512, 1.2595],
    ["<h3>Longwater Retail Park</h3>", "shopMarkers", 52.6538, 1.1796],
    ["<h3>Castle Mall</h3>", "shopMarkers", 52.6271, 1.2958],
    ["<h3>Sprowston Retail Park</h3>", "shopMarkers", 52.6464, 1.3256],
    ["<h3>Sainsbury's</h3>", "shopMarkers", 52.622103, 1.293487],
    ["<h3>Sainsbury's</h3>", "shopMarkers", 52.630839, 1.36142],
    ["<h3>Sainsbury's Local</h3>", "shopMarkers", 52.6255, 1.2933],
    ["<h3>Asda Superstore</h3>", "shopMarkers", 52.653012, 1.262085],
    ["<h3>Asda Superstore</h3>", "shopMarkers", 52.60647, 1.28877],
    ["<h3>Tesco Superstore</h3>", "shopMarkers", 2.770791, 1.514752],
    ["<h3>Tesco Superstore</h3>", "shopMarkers", 52.791438, 1.252959],
    ["<h3>Tesco Superstore</h3>", "shopMarkers", 52.677363, 1.219303],
    ["<h3>Tesco Superstore</h3>", "shopMarkers", 52.595266, 1.276637],
    ["<h3>Tesco Express</h3>", "shopMarkers", 52.610169, 1.230218],
    ["<h3>Tesco Express</h3>", "shopMarkers", 52.629255, 1.247927],
    ["<h3>Tesco Express</h3>", "shopMarkers", 52.625155, 1.278643],
    ["<h3>Tesco Extra</h3>", "shopMarkers", 52.659965, 1.334731],
    ["<h3>Tesco Express</h3>", "shopMarkers", 52.629217, 1.301632],
    ["<h3>Tesco Metro</h3>", "shopMarkers", 52.62919, 1.292801],
    ["<h3>Tesco Express</h3>", "shopMarkers", 52.640255, 1.296122],
    ["<h3>Tesco Express</h3>", "shopMarkers", 52.649164, 1.281584],
    ["<h3>Tesco Express</h3>", "shopMarkers", 52.626095, 1.294404],
    ["<h3>Waitrose</h3>", "shopMarkers", 52.608195, 1.251517],
    ["<h3>Morrisons</h3>", "shopMarkers", 52.623789, 1.308317],
    ["<h3>Morrisons</h3>", "shopMarkers", 52.669431, 1.306922],
    ["<h3>Aldi</h3>", "shopMarkers", 52.637543, 1.24034],
    ["<h3>Aldi</h3>", "shopMarkers", 52.642414, 1.282182],
    ["<h3>Aldi</h3>", "shopMarkers", 52.636468, 1.327047],
    ["<h3>Aldi</h3>", "shopMarkers", 52.649639, 1.308515],
    ["<h3>Aldi</h3>", "shopMarkers", 52.609591, 1.290678],
    ["<h3>Lidl</h3>", "shopMarkers", 52.650293, 1.281354],
    ["<h3>Lidl</h3>", "shopMarkers", 52.644681, 1.276714],
    ["<h3>Co-op Food</h3>", "shopMarkers", 52.629099, 1.26927],
    [
      "<h3>East of England Co-op Foodstore</h3>",
      "shopMarkers",
      52.632848,
      1.28119
    ],
    [
      "<h3>East of England Co-op Foodstore</h3>",
      "shopMarkers",
      2.621804,
      1.25134
    ],
    [
      "<h3>East of England Co-op Foodstore</h3>",
      "shopMarkers",
      52.623035,
      1.276306
    ],
    [
      "<h3>East of England Co-op Foodstore</h3>",
      "shopMarkers",
      52.651235,
      1.291634
    ],
    [
      "<h3>East of England Co-op Foodstore</h3>",
      "shopMarkers",
      52.624646,
      1.260497
    ],
    [
      "<h3>East of England Co-op Foodstore</h3>",
      "shopMarkers",
      52.626765,
      1.306204
    ],
    [
      "<h3>East Of England Co-operative Convenience Store</h3>",
      "shopMarkers",
      52.629414,
      1.247536
    ],
    [
      "<h3>East of England Co-op Foodstore</h3>",
      "shopMarkers",
      52.665167,
      1.28879
    ],
    [
      "<h3>East of England Co-op Foodstore</h3>",
      "shopMarkers",
      52.618007,
      1.297319
    ],
    [
      "<h3>East of England Co-op Foodstore</h3>",
      "shopMarkers",
      52.647926,
      1.234749
    ],
    [
      "<h3>East of England Co-op Foodstore</h3>",
      "shopMarkers",
      52.653238,
      1.279458
    ],
    ["<h3>East of England Co-op Daily</h3>", "shopMarkers", 52.65795, 1.2767],
    [
      "<h3>East of England Co-op Daily Foodstore</h3>",
      "shopMarkers",
      52.6083,
      1.282647
    ],
    ["<h3>Co-op Food</h3>", "shopMarkers", 52.644863, 1.302335],
    [
      "<h3>East of England Co-operative Convenience Store</h3>",
      "shopMarkers",
      52.647926,
      1.234749
    ],
    [
      "<h3>East of England Co-op Daily Foodstore</h3>",
      "shopMarkers",
      52.6344,
      1.346503
    ],
    [
      "<h3>East of England Co-op Foodstore</h3>",
      "shopMarkers",
      52.641174,
      1.337174
    ],
    [
      "<h3>East of England Co-op Foodstore</h3>",
      "shopMarkers",
      52.665215,
      1.26336
    ],

    //Hosptials
    [
      "<h3>Norfolk and Norwich University Hospitals NHS Foundation Trust</h3>",
      "hospitalMarkers",
      52.6181,
      1.2211
    ],
    ["<h3>Spire Norwich Hospital</h3>", "hospitalMarkers", 52.6271, 1.2261],
    ["<h3>Hellesdon Hospital</h3>", "hospitalMarkers", 52.6598, 1.2517],
    ["<h3>Bupa Health Centre Norwich Watton Road</h3>", "hospitalMarkers", ,],
    [
      "<h3>Bupa Health Centre Norwich Watton Road</h3>",
      "hospitalMarkers",
      52.6271,
      1.2238
    ],
    ["<h3>NNUH</h3>", "hospitalMarkers", 52.6181, 1.2211],
    [
      "<h3>Norfolk Community Health and Care NHS Trust</h3>",
      "hospitalMarkers",
      52.6342,
      1.2624
    ],
    [
      "<h3>Newmarket House Health Care Ltd</h3>",
      "hospitalMarkers",
      52.6147,
      1.267
    ],
    ["<h3>Hammerton Court</h3>", "hospitalMarkers", 52.6323, 1.2622],
    [
      "<h3>Norfolk and Suffolk Hospital</h3>",
      "hospitalMarkers",
      52.6595,
      1.2507
    ],
    [
      "<h3>St Andrews Lodge, Julian Hospital</h3>",
      "hospitalMarkers",
      52.6331,
      1.2631
    ],
    ["<h3>Bowthorpe Health Centre</h3>", "hospitalMarkers", 52.6367, 1.2179],
    [
      "<h3>Norfolk Community Health & Care</h3>",
      "hospitalMarkers",
      52.6342,
      1.2624
    ],
    ["<h3>Julian Hospital</h3>", "hospitalMarkers", 52.633, 1.263]
  ];

  //Creates geocode object - attempting to use Google Geocoding API
  var geocoder = new google.maps.Geocoder();

  //Creates map
  var map = new google.maps.Map(document.getElementById("map"), {
    //mapTypeControl: false,
    center: { lat: 52.6309, lng: 1.2974 },
    zoom: 15,
    styles: styles //assigns the style created above
  });

  //Continued attempts to work Google Geocoding API - working
  // function to geocode an address and plot it on a map
  //BETTER CODE HERE: https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
  //CURRENT CODE IS: https://gist.github.com/marchawkins/9406464
  function codeAddress(address) {
    geocoder.geocode({ address: address }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location); // center the map on address
        var markerInput = new google.maps.Marker({
          // place a marker on the map at the address
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

  //google.maps.event.addDomListener(window, 'load', initialize);// setup initial map

  $(document).ready(function() {
    // get map button functionality
    $("#map-address-btn").click(function(event) {
      event.preventDefault();
      var address = $("#origin-input").val(); //#location-address	// grab the address from the input field
      codeAddress(address); // geocode the address
    });
  });

  //Creates info window that appears when hover on marker
  var infowindow = new google.maps.InfoWindow();
  for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][2], locations[i][3]),
      map: map,
      icon: iconSrc[locations[i][1]]
    });
    markers.push(marker);
    google.maps.event.addListener(
      marker,
      "mouseover",
      (function(marker, i) {
        if (typeof infowindow !== "undefined") infowindow.close();
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
        //                })(marker, i));
        //                google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
        //                    return function() {
        //                        infowindow.close(map, marker);
        //                    };
      })(marker, i)
    );
  }

  // shows all markers in a category (checkbox is checked)
  function show(category) {
    for (var i = 0; i < locations.length; i++) {
      if (locations[i][1] === category) {
        markers[i].setVisible(true);
      }
    }
  }

  // hides all markers in a category (checkbox is not checked)
  function hide(category) {
    for (var i = 0; i < locations.length; i++) {
      if (locations[i][1] === category) {
        markers[i].setVisible(false);
      }
    }
  }
  $(".checkbox").click(function() {
    var cat = $(this).attr("value");

    // If checked
    if ($(this).is(":checked")) {
      show(cat);
    } else {
      hide(cat);
    }
  });
  //};

  // Initially hides all the categories, check box to make them appear
  hide("historicMarkers");
  hide("gardenMarkers");
  hide("museumMarkers");
  hide("restaurantsMarkers");
  hide("theatreMarkers");
  hide("sportMarkers");
  hide("shopMarkers");
  hide("hospitalMarkers");

  //Calls the autocomplete api for the directions form
  new AutocompleteDirectionsHandler(map);
}

/**
 * Suggests places to go based on what typed, select it to get directions
 * @constructor
 */
function AutocompleteDirectionsHandler(map) {
  this.map = map;
  this.originPlaceId = null;
  this.destinationPlaceId = null;
  this.travelMode = "TRANSIT";
  this.departureTime = navTime;
  var originInput = document.getElementById("origin-input");
  var destinationInput = document.getElementById("destination-input");
  var modeGroup = document.getElementById("mode-group");

  this.directionsService = new google.maps.DirectionsService();
  this.directionsDisplay = new google.maps.DirectionsRenderer();
  this.directionsDisplay.setMap(map);
  console.log(this.directionsDisplay);
  this.directionsDisplay.setPanel(document.getElementById("route-narrative"));

  var originAutocomplete = new google.maps.places.Autocomplete(originInput, {
    placeIdOnly: true
  });
  var destinationAutocomplete = new google.maps.places.Autocomplete(
    destinationInput,
    { placeIdOnly: true }
  );

  //Event lister for change in transport mode radio button
  this.setupClickListener("changemode-walking", "WALKING");
  this.setupClickListener("changemode-transit", "TRANSIT");

  this.setupPlaceChangedListener(originAutocomplete, "ORIG");
  this.setupPlaceChangedListener(destinationAutocomplete, "DEST");

  this.setupDateListener(navTime);

  this.map.controls.push(originInput);
  this.map.controls.push(destinationInput);
  //this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
}

// Sets a listener on a radio button to change the filter type on Places
// Autocomplete.
AutocompleteDirectionsHandler.prototype.setupClickListener = function(
  id,
  mode
) {
  var radioButton = document.getElementById(id);
  var me = this;
  radioButton.addEventListener("click", function() {
    me.travelMode = mode;

    //            if (travelMode === 'TRANSIT') {
    //                transitOptions: {
    //                    modes: ['BUS'];
    //                    departureTime: navTime;
    //                }
    //            }

    me.route();
  });
};

//Set up listener for date and time changes
AutocompleteDirectionsHandler.prototype.setupDateListener = function(navTime) {
  var dateButton = document.getElementById("datepicker");
  var hourButton = document.getElementById("hour");
  var minuteButton = document.getElementById("minute");
  var me = this;
  dateButton.addEventListener("change", function() {
    me.departureTime = navTime;
    me.route();
  });
  hourButton.addEventListener("change", function() {
    me.departureTime = navTime;
    me.route();
  });
  minuteButton.addEventListener("change", function() {
    me.departureTime = navTime;
    me.route();
  });
};

AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(
  autocomplete,
  mode
) {
  var me = this;
  autocomplete.bindTo("bounds", this.map);
  autocomplete.addListener("place_changed", function() {
    var place = autocomplete.getPlace();
    if (!place.place_id) {
      window.alert("Please select an option from the dropdown list.");
      return;
    }
    if (mode === "ORIG") {
      me.originPlaceId = place.place_id;
    } else {
      me.destinationPlaceId = place.place_id;
    }
    me.route();
  });
};

AutocompleteDirectionsHandler.prototype.route = function() {
  if (!this.originPlaceId || !this.destinationPlaceId) {
    return;
  }
  var me = this;

  if (this.travelMode === "TRANSIT") {
    this.directionsService.route(
      {
        origin: { placeId: this.originPlaceId },
        destination: { placeId: this.destinationPlaceId },
        travelMode: "TRANSIT",
        transitOptions: {
          modes: ["BUS"],
          departureTime: navTime
        }
      },
      function(response, status) {
        if (status === "OK") {
          me.directionsDisplay.setDirections(response);
          console.log(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
        //console.log(departureTime);
      }
    );
    //Empties the directions array to the word directions and the printing
    //symbol don't appear repeatedly if renavigate
    $("#directions").empty();
    $("#directions").append("<h2>Directions</h2>");
    $("#print").empty();
    $("#print").append(
      '<a href="javascript:window.print()"><img src="images/print.png" alt="print this page" id="print-button" />&nbsp;<span class="printText">Print<span></a>'
    );
  } else {
    this.directionsService.route(
      {
        origin: { placeId: this.originPlaceId },
        destination: { placeId: this.destinationPlaceId },
        travelMode: "WALKING"
      },
      function(response, status) {
        if (status === "OK") {
          me.directionsDisplay.setDirections(response);
          console.log(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
        //console.log(departureTime);
      }
    );
    //Empties the directions array to the word directions and the printing
    //symbol don't appear repeatedly if renavigate
    $("#directions").empty();
    $("#directions").append("<h2>Directions</h2>");
    $("#print").empty();
    $("#print").append(
      '<a href="javascript:window.print()"><img src="images/print.png" alt="print this page" id="print-button" />&nbsp;<span class="printText">Print<span></a>'
    );
  }
};
