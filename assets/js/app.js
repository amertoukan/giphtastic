$(document).ready(function(){ 

$('button').on('click', function() {
    var soccer = $(this).data('name');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + soccer + "&api_key=VMgfqZGc1OvEMyTRfp9f9iJVgsJ5WwBy";

$.ajax({ 
    url: queryURL, 
    method: 'GET'
    })
        .done(function(response) {


    console.log(response)

    var results = response.data;

for (var i = 0; i < results.length; i++) {

    var soccerDiv = $('<div/>');
    console.log (soccerDiv);

    var p =$('<p/>');

    p.text(results[i].rating);

    var soccerImage = $('<img/>');

    soccerImage.addClass('anImg')

    soccerImage.attr('src', results[i].images.fixed_height.url);

    soccerImage.attr('data-still', results[i].images.fixed_height_still.url)

    soccerImage.attr('data-animate', results[i].images.fixed_height.url)

    .attr('data-state', 'still');

    soccerDiv.append(p);

    soccerDiv.append(soccerImage);

    soccerDiv.prependTo($('#gifs'));
    }

    $('.anImg').on('click', function() {
            
        var state = $(this).attr('data-state'); 
        console.log(this);

        if (state == 'still') {
                
        $(this).attr('src', $(this).data('animate'));
                
        $(this).attr('data-state', 'animate');

        } else {
                        
             $(this).attr('src', $(this).data('still'));
                
            $(this).attr('data-state', 'still');
            }      
        });
    });
});
var soccer = [''];

    
       

        // adds and handles event clicked
        $('#theButton').on('click', function(){
            var soccerButton = $("#gif-input").val();
            
            var newButton = $("<button/>").addClass( "btn btn-info soccer").attr('data-name',soccerButton).html(soccerButton).css({'margin': '5px'});
            
            $("#soccerbuttons").append(newButton);
                console.log("IT WORKS");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + soccerButton + "&api_key=VMgfqZGc1OvEMyTRfp9f9iJVgsJ5WwBy";
                console.log(soccerButton);

        $.ajax({
            url: queryURL,
            method: 'GET'
        })

        .done(function(response) {

          var results = response.data;

            for (var i = 0; i < results.length; i++) {

            var soccerDiv = $('<div/>');
                
            var p = $('<p/>');

            p.text(results[i].rating);

            var soccerImage = $('<img/>');

            soccerImage.addClass('anImg')

            soccerImage.attr('src', results[i].images.fixed_height_still.url);

            soccerImage.attr('data-still', results[i].images.fixed_height_still.url)

            soccerImage.attr('data-animate', results[i].images.fixed_height.url)

             .attr('data-state', 'still');

            soccerDiv.append(p);

            soccerDiv.append(soccerImage);

            soccerDiv.prependTo($('#gifs'));
        }

            $('.anImg').on('click', function() {
            
                var state = $(this).attr('data-state'); 
                console.log(this);

                if (state == 'still') {
                    
                $(this).attr('src', $(this).data('animate'));
                    
                $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

           $("#gif-input").val("");
           return false;
        })
        });