function food() {
    //Retrieve local details to render inside a div
    $.getJSON('/../../localfiles/details.json', function (json) {
        if (json.age.length) {
            var age = json.age;
            var weight = json.weight;
            $("#detailsdiv").append("As you are <span id='highlightdiet'>" + age + " years old</span></i> and weigh <span id='highlightdiet'>" + weight + "</span>, you should probably eat something better.<br> That's too many carbs!</h3>");
            console.log(age + weight);
        }
    });
}