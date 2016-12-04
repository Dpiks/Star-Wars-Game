var char_list = [{
    name: "Luke Skywalker",
    HP: 100,
    AP: 5,
    CAP: 5,
    image: "./assets/images/luke.jpg"
}, {
    name: "Obi Wan Kenobi",
    HP: 120,
    AP: 8,
    CAP: 8,
    image: "./assets/images/obi.jpg"

}, {
    name: "Darth Sidious",
    HP: 150,
    AP: 20,
    CAP: 20,
    image: "./assets/images/sidious.jpg"

}, {
    name: "Darth Maul",
    HP: 180,
    AP: 25,
    CAP: 25,
    image: "./assets/images/maul.jpg"




}]

$(document).ready(function() {
	


for (var i = 0; i < char_list.length; i++) {


    var charDiv = $("<div>");

    charDiv.addClass("col-md-2 char char-image ");
    


    charDiv.data("charname", char_list[i].name);
    charDiv.data("charHP", char_list[i].HP);
    charDiv.data("charAP", char_list[i].AP);
    charDiv.data("charCAP", char_list[i].CAP);

    $(".choose-char-list").append(charDiv);

    //var charName=$("<p>");
    //charName.addClass();
    //charName.text(char_list[i].name);
    //charDiv.append(charName);
    charDiv.append("<p>" + char_list[i].name +"</p>");

    var charImage=$("<img>");
    charImage.addClass("img_size");
    //charImage.css({src:"char_list[i].image"});
    charImage.css('src',"'"+char_list[i].image+"'");
//charBtn.css('background-image','url('+char_list[i].image +')');

    charDiv.append(charImage);
    console.log(char_list[i].image);

    //var charHP=$("<p>");
    //charHP.addClass();
    //charHP.text(char_list[i].HP);
    //charDiv.append(charHP);

    charDiv.append("<p>" + char_list[i].HP +"</p>");



    
    //charDiv.append("<img src=" +char_list[i].image+ ">");
    



   

    
   
}





});
