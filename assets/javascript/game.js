$(document).ready(function() {

            var char_list = [{
                name: "Luke Skywalker",
                HP: 100,
                AP: 5,
                CAP: 5,
                image:"./assets/images/luke.jpg"
            }, {
                name: "Obi Wan Kenobi",
                HP: 120,
                AP: 8,
                CAP: 8,
                image:"./assets/images/obi.jpg"

            }, {
                name: "Darth Sidious",
                HP: 150,
                AP: 20,
                CAP: 20,
                image:"./assets/images/sidious.jpg"

            }, {
                name: "Darth Maul",
                HP: 180,
                AP: 25,
                CAP: 25,
                image:"./assets/images/maul.jpg"
                
                


            }]

            for(var i=0;i<char_list.length;i++){

               
                var charBtn = $("<button>");
                
                charBtn.addClass("char char-image ");

                
                charBtn.data("charname", char_list[i].name);
                charBtn.data("charHP",char_list[i].HP);
                charBtn.data("charAP",char_list[i].AP);
                charBtn.data("charCAP",char_list[i].CAP);

                
               
                charBtn.text(char_list[i].name);

               // charBtn.css('background-image',char_list[i].image);
                charBtn.css('background-image','url('+char_list[i].image +')');

               // $('myOjbect').css('background-image', 'url(' + imageUrl + ')');
              	                
                $("div").append(charBtn);
                console.log(char_list[i].name);
                
            }





        });