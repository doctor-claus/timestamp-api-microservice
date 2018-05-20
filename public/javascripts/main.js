$(document).ready(function(){
    $("button").click(function(){
        $(".result").empty();
        var value = $(".form-control").val();
        $.getJSON(value, (result) => {
            $(".result").append(JSON.stringify(result));
        });
    });
});