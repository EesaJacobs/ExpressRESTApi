function getLocation() {
    $.get("/api/location", function(res) {
        $("div#getLocationApi > label").text(res);
    });
}

function putLocation() {
    var latitude = $("#putLocationApi input#lat").val();
    var longitude = $("#putLocationApi input#long").val();
    $.ajax({
        type: "POST",
        url: "/api/location",
        data: {
            latitude: latitude,
            longitude: longitude
        },
        success: function(res) {
            $("div#putLocationApi > label").text(res);
        }
    });
}