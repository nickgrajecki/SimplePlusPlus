function firstAid() {
    var name;
    var age;
    var height;
    $.getJSON('/../../localfiles/details.json', function (json) {
        if (json !== null){
        name = json.name;
        age = json.age;
        height = json.height;
        $("#username").replaceWith("<h2>" + name + "</h2>");
        $("#age").replaceWith("<h2>" + age + "</h2>");
        $("#userheight").replaceWith("<h2>" + height + "</h2>");
        $("#toptext").replaceWith("<h2>These are your details:</h2>");
        $("#submit").remove();
        console.log(name + age + height);
        } 
    });
}