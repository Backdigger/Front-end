(function( $ ) {
    $.fn.editableText = function (div) {

        input = $("<input type='text' id='dest_input' placeholder='Type location name' required=''>");
        button = $("<button type='submit' value='Submit' id='dest_submit'>Submit</button>");
        edit = $(div).html();
        divClone = $('div').clone();

        pencil = $('span').html();
        value = $("input:text").val();

        //getting user's location via IP

        $.get("http://ipinfo.io", function (response) {
            $('a').text(response.city);
        }, "jsonp");

        $('span').show();

        //edit location
        $('a').click(function (e) {

            $('a').after(input, button);
            $(input).show();
            $(button).show();
            $('a').hide();



            //Loctaion city autocomplete
            $('input').autocomplete({

                source: function (request, response) {
                    $.getJSON(
                        "http://gd.geobytes.com/AutoCompleteCity?callback=?&template=<geobytes%20city>&q="+request.term,
                        function (data) {
                            response(data);
                        }
                    );
                },
                minLength: 3,
                select: function (event, ui) {
                    var selectedObj = ui.item;
                    jQuery('input').val(selectedObj.value);

                    return false;
                },
                open: function () {
                    $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
                },
                close: function () {
                    $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
                }
            });
            $('input').autocomplete("option", "delay", 100);

            $( 'input' ).focus();
            $('span').slideToggle();


            // Submit your location
            $("#dest_submit").click(function () {
                    var value = $("input:text").val();
                    $(this).value = value;
                    var fired = true;




                    if (value.length !== 0) {
                        $(input).hide();
                        $(button).hide();
                        $('span').show();
                        $('a').show().text(value);
                        $(value).show();
                        $('#valid').hide();


                    } else if ((value.length === 0) && fired) {

                            $(input).css("border", "solid 1px red");
                            // $(button).after("<p id='valid'>This field is required</p>");
                            fired = false;


                    }

                });

        });

    }
})(jQuery);