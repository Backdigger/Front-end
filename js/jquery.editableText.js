(function( $ ) {
    $.fn.editableText = function (div) {


        var $locationInput = $("<input type='text' id='dest_input' placeholder='Type location name' required=''>"),
        $submitButton = $("<button type='submit' value='Submit' id='dest_submit'>Submit</button>"),
        $locationLink = $("<a>Loading... </a>"),
        $editIcon = $("<span> <img id='icon' src='https://maxcdn.icons8.com/office/PNG/40/Editing/pencil-40.png'/> </span>");

        $(this).append($locationLink, $editIcon);

        //getting user's location via IP

        $.get("http://ipinfo.io", function (response) {
            $('a').text(response.city);
        }, "jsonp");

        $('span').show();

        //edit location
        $($(this).children('a')).click(function (e) {

            $(this).after($locationInput, $submitButton);
            $(this).show();
            $($submitButton).show();
            $($locationInput).show();
            $(this).hide();

            //Loctaion city autocomplete
            $(this).next().autocomplete({

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
            $(this).next().autocomplete("option", "delay", 100);

            $(this).next().focus();
            $('span').slideToggle();

            // Submit your location
            $(this).nextAll('button').click(function () {
                var value = $("input:text").val();
                $(this).prevAll('a').value = value;
                var fired = true;

                    if (value.length !== 0) {
                        $(this).prev().hide();
                        $(this).hide();
                        $(this).nextAll('span').show();
                        $(this).prevAll('a').show().text(value);
                        $(value).show();
                        // $('#valid').hide();

                    } else if ((value.length === 0) && fired) {

                            $(this).prev().css("border", "solid 1px red");
                            // $(button).after("<p id='valid'>This field is required</p>");
                            fired = false;
                    }
                });
        });
    }
})(jQuery);