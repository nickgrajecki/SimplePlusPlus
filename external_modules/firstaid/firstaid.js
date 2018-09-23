function firstAid() {
  //Retrieve details file
  $.getJSON("/../../localfiles/details.json", function(json) {
    if (json.age.length) {
      var name = json.name;
      var age = json.age;
      var weight = json.weight;
      var address = json.home;
      var phone = json.phone;
      var medication = json.medication;
      var allergies = json.allergies;
      //Add details to page view
      $("#details").append(
        "<div class='toptext'>Info</div><span class='highlight'>Age</span>" +
          age +
          "<span class='highlight'>Weight</span>" +
          weight +
          "<br><span class='highlight'>Home Address</span>" +
          address +
          "<br><span class='highlight'>Emergency phone number</span>" +
          phone +
          "<br><span class='highlight'>Medication</span>" +
          medication +
          "<br><span class='highlight'>Allergies</span>" +
          allergies
      );
      console.log(name + age + height + address + phone + medication + allergies);
    } else {
      $("#details").append("<h2>Please fill in your details</h2>");
    }
  });
}
