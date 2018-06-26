function food() {
    $.getJSON('/../../localfiles/food.json', function (json) {
        if (json !== null) {
            var food = json.food;
            $("#foodlist").replaceWith("<h2>" + food + "</h2>");
            console.log(food);
        }
    });
    $.getJSON('/../../localfiles/details.json', function (json) {
        if (json.age.length) {
            var name = json.name;
            var age = json.age;
            var height = json.height;
            $("#detailsdiv").append("<h2>" + name + ", as you are <i>" + age + "</i> years old and your height is <i>" + height + "</i>, you should probably eat something better</h2>");
            console.log(name + age + height);
        }
    });
}