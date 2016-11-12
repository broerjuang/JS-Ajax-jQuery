function colorReceiver() {
    $.ajax({
        url: `http://localhost:3000/api/colors`,
        method: "get",
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            colorPicker(data)
        }
    })
}

function colorPicker(data) {
    var x = Math.floor((Math.random() * 9) + 1);
    $("div").find(`#box${x}`).addClass(data)
}
