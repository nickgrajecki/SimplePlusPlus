function firstAid() {
    $.getJSON('/../../localfiles/details.json', function (json) {
        if (json.age.length) {
            var name = json.name;
            var age = json.age;
            var height = json.height;
            $("#details").append("<h2>Hello, " + name + "<br>Your age is: " + age + "<br>Your height is:"+height+"</h2>");
            console.log(name + age + height);
        } else {
            $("#details").append("<h2>Please fill in your details</h2>");
        }
    });
    $.getJSON('/../../localfiles/food.json', function (json) {
        if (json.food.length){
            var food = json.food;
            $("#food").append("<h2>Yesterday you ate: " + food + "</h2>");
        }
    });
}