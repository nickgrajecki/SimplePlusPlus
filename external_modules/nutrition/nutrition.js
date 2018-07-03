function food() {
    $.getJSON('/../../localfiles/details.json', function (json) {
        if (json.age.length) {
            var name = json.name;
            var age = json.age;
            var height = json.height;
            $("#detailsdiv").append("<h3>" + name + ", as you are <span class='highlight'>" + age + "</span></i> years old and your height is <span class='highlight'>" + height + "</span>, you should probably eat something better</h3>");
            console.log(name + age + height);
        }
    });
}