function firstAid() {
    $.getJSON('/../../localfiles/details.json', function (json) {
        if (json.age.length) {
            var name = json.name;
            var age = json.age;
            var height = json.height;
            $("#details").append("<h2>Hello, " + name + "<br>Your age is: <span class='highlight'>" + age + "</span><br>Your height is:<span class='highlight'>" + height + "</span></h2>");
            console.log(name + age + height);
        } else {
            $("#details").append("<h2>Please fill in your details</h2>");
        }
    });
    $.getJSON('/../../localfiles/food.json', function (json) {
        async: false;
        if (json !== null) {
            var loop = $("#food").append("<h3>Yesterday you ate:<br><span class='highlight'>");
            for (var i = 0; i < json.food.length; i++) {
                var obj = json.food[i];
                $("#food").append(obj + ", ");
            }
            ($("#food").append("</span></h3>"));
        }
    });
}