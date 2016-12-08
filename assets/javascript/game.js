var char_list = [{
    name: "Luke Skywalker",
    HP: 100,
    AP: 5,
    CAP: 5,
    image: "./assets/images/luke.gif"
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
    image: "./assets/images/maul1.jpeg"
}]


function loadCharacters() {
    $(".game_rules").css("display", "none");
    $(".start_game_btn").css("display", "none");
    $(".choose_char_list").css("display", "block");
    for (var i = 0; i < char_list.length; i++) {

        var charDiv = $("<div>");

        charDiv.addClass("col-md-2 char");

        charDiv.data("charname", char_list[i].name);
        charDiv.data("charHP", char_list[i].HP);
        charDiv.data("charAP", char_list[i].AP);
        charDiv.data("charCAP", char_list[i].CAP);

        $(".choose_char_list").append(charDiv);


        charDiv.append("<p>" + char_list[i].name + "</p>");
        charDiv.css('background-image', 'url(' + char_list[i].image + ')');
        charDiv.append("<p>" + char_list[i].HP + "</p>");
    }

}







var your_char;
var enemy_list = [];
var defender_char = {};

var loadEnemyCharacters = function() {


    $(".enemy-char-list").css("visibility", "visible");
    //$(".enemy").remove();


    for (var i = 0; i < enemy_list.length; i++) {


        var charDiv = $("<div>");

        charDiv.addClass("col-md-2 enemy");



        charDiv.data("charname", enemy_list[i].name);
        charDiv.data("charHP", enemy_list[i].HP);
        charDiv.data("charAP", enemy_list[i].AP);
        charDiv.data("charCAP", enemy_list[i].CAP);

        $(".enemy-char-list").append(charDiv);


        charDiv.append("<p>" + enemy_list[i].name + "</p>");

        charDiv.css('background-image', 'url(' + enemy_list[i].image + ')');

        charDiv.append("<p>" + enemy_list[i].HP + "</p>");

    }
}


$(document).ready(function() {

    $(".start_game_btn").on("click", function() {
        loadCharacters();


        $(".char").on("click", function() {


            your_char = $(this).data("charname");
            $(".choose_char_list").css("display", "none");
            $(".fight_field").css("visibility", "visible");


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

                    charDiv.css('background-image', 'url(' + char_list[i].image + ')');
                    var your_p_HP = $("<p>");
                    your_p_HP.addClass("your_HP");
                    your_p_HP.html(char_list[i].HP);
                    charDiv.append(your_p_HP);
                    //charDiv.append("<p>" + char_list[i].HP + "</p>");




                } else {
                    enemy_list.push(char_list[i]);


                }
            }

            loadEnemyCharacters();

            $(".enemy").click(function() {
                defender_char = {};
                $(".message").html("");
                $(".attack").css("visibility", "visible");


                if (Object.getOwnPropertyNames(defender_char).length === 0) {

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
                            $(".defender_char_class").css("visibility", "visible");

                            $(".player2").append(charDiv);
                            $(".player2").css("visibility", "visible");


                            charDiv.append("<p>" + enemy_list[i].name + "</p>");

                            charDiv.css('background-image', 'url(' + enemy_list[i].image + ')');

                            var def_p_HP = $("<p>");
                            def_p_HP.addClass("def_HP");
                            def_p_HP.html(enemy_list[i].HP);
                            charDiv.append(def_p_HP);
                            enemy_list.splice(i, 1);
                            $(this).remove();
                        }
                    }



                }

                $(".attack_btn").unbind("click").on("click", function() {

                    //if(defender_char==={}){
                    //		$(".message").html("There is no defender. First choose an enemy and then start attacking");
                    console.log("your CAP is " + your_char.CAP);
                    console.log("defender CAP is " + defender_char.CAP);


                    if ((your_char.HP > 0) && (defender_char.HP > 0)) {
                        defender_char.HP = (defender_char.HP) - (your_char.CAP);
                        if (defender_char.HP > 0) {
                            your_char.HP = (your_char.HP) - (defender_char.CAP)
                        };
                        your_char.CAP = (your_char.CAP) + (your_char.AP);



                        $(".def_HP").html(defender_char.HP);
                        $(".your_HP").html(your_char.HP);
                        if (defender_char.HP <= 0) {
                            if (enemy_list.length <= 0) {
                                $(".message").html("You defeated all your enemies. Press restart to play a new game.");
                                $(".restart_btn").css("visibility", "visible");
                                $(".attack").css("visibility", "hidden");
                                $(".defender_char_class").detach();

                            } else {

                                $(".message").html(defender_char.name + " lost to you!! Choose a new enemy to fight!!");
                                $(".attack").css("visibility", "hidden");
                                if (enemy_list.length >= 0) {
                                    defender_char = {};
                                    $(".defender_char_class").detach();

                                }
                            }
                        }
                        if (your_char.HP <= 0) {
                            $(".message").html("You lost!! Press restart to play a new game.");
                            $(".restart_btn").css("visibility", "visible");
                            $(".attack").css("visibility", "hidden");
                            defender_char = {};
                            $(".fight_field").css("visibility", "hidden");


                        }

                    }
                    $(".restart_btn").on("click", function() {
                        location.reload();

                    });

                });

            });
        });




    });


});
