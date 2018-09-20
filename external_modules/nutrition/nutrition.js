function food() {
    $.getJSON('/../../localfiles/details.json', function (json) {
        if (json.age.length) {
            var name = json.name;
            var age = json.age;
            var weight = json.weight;
            $("#detailsdiv").append("As you are <span class='highlight'>" + age + " years old</span></i> and your weight is <span class='highlight'>" + weight + ",</span> you should probably eat something better. That's too many carbs!</h3>");
            console.log(name + age + height);
        }
    });
}