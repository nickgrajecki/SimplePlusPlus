function food() {
    $.getJSON('/../../localfiles/food.json', function (json) {
        if (json !== null) {
            $("#foodlist").append("<h3>Food log:<br><span class='highlight'>");
            for (var i = 0; i < json.food.length; i++){
                var obj = json.food[i];
                $("#foodlist").append(obj + ", ");
            }
            $("#foodlist").append("</span></h3>");
        }
    });
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