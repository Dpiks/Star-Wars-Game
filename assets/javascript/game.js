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


function loadCharacters() {
    for (var i = 0; i < char_list.length; i++) {


        var charDiv = $("<div>");

        charDiv.addClass("col-md-2 char char-image ");



        charDiv.data("charname", char_list[i].name);
        charDiv.data("charHP", char_list[i].HP);
        charDiv.data("charAP", char_list[i].AP);
        charDiv.data("charCAP", char_list[i].CAP);

        $(".choose_char_list").append(charDiv);

        
        charDiv.append("<p>" + char_list[i].name + "</p>");

        

        
        
     
        
        charDiv.css('background-image','url('+char_list[i].image +')');

        
       

        charDiv.append("<p>" + char_list[i].HP + "</p>");




       

    }

}

function loadEnemyCharacters() {

    $(".enemy-char-list").css("visibility", "visible");


    for (var i = 0; i < enemy_list.length; i++) {


        var charDiv = $("<div>");

        charDiv.addClass("col-md-2 enemy");



        charDiv.data("charname", enemy_list[i].name);
        charDiv.data("charHP", enemy_list[i].HP);
        charDiv.data("charAP", enemy_list[i].AP);
        charDiv.data("charCAP", enemy_list[i].CAP);

        $(".enemy-char-list").append(charDiv);

        
        charDiv.append("<p>" + enemy_list[i].name + "</p>");

        charDiv.css('background-image','url('+char_list[i].image +')');

        charDiv.append("<p>" + enemy_list[i].HP + "</p>");
    }
}




var your_char;
var enemy_list = [];
var defender_char;






$(document).ready(function() {

    loadCharacters(char_list);



    $(".char").on("click", function() {


        var your_char = $(this).data("charname");
        $(".choose_char_list").css("display", "none");


        for (var i = 0; i < char_list.length; i++) {
            if (char_list[i].name === your_char) {
                your_char = char_list[i];
                var charDiv = $("<div>");

                charDiv.addClass("your_char_class");



                charDiv.data("charname", char_list[i].name);
                charDiv.data("charHP", char_list[i].HP);
                charDiv.data("charAP", char_list[i].AP);
                charDiv.data("charCAP", char_list[i].CAP);

                $(".player1").append(charDiv);
                $(".player1").css("visibility", "visible");


                charDiv.append("<p>" + char_list[i].name + "</p>");

                charDiv.css('background-image','url('+char_list[i].image +')');
                charDiv.append("<p>" + char_list[i].HP + "</p>");




            } else {
                enemy_list.push(char_list[i]);
                console.log(enemy_list);




            }
        }
        loadEnemyCharacters();

        $(".enemy").click(function() {

            defender_char = $(this).data("charname");


            for (var i = 0; i < enemy_list.length; i++) {
                if (enemy_list[i].name === defender_char) {
                    defender_char = enemy_list[i];
                    var charDiv = $("<div>");

                    charDiv.addClass("defender_char_class");



                    charDiv.data("charname", enemy_list[i].name);
                    charDiv.data("charHP", enemy_list[i].HP);
                    charDiv.data("charAP", enemy_list[i].AP);
                    charDiv.data("charCAP", enemy_list[i].CAP);

                    $(".player2").append(charDiv);
                    $(".player2").css("visibility", "visible");

                    charDiv.append("<p>" + enemy_list[i].name + "</p>");

                     charDiv.css('background-image','url('+char_list[i].image +')');
                    charDiv.append("<p>" + enemy_list[i].HP + "</p>");
                }
            }
            var new_btn = $("<button>");
            new_btn.addClass("attack_btn");
            new_btn.text("Attack");
            $(".attack").append(new_btn);

            $(".attack_btn").on("click",function(){
            	console.log("attack button works");




            });

        });

    });



});
