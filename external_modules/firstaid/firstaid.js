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
}