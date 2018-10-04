$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger-input").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".devour").on("click", function (event) {
        var id = $(this).data("burgerid");

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".delete").on("click", function (event) {
        var id = $(this).data("burgerid");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                location.reload();
            }
        );
    });
});