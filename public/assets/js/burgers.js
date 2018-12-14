$(function () {
    $(".change-devoured").on("click", function (event) {
        let id = $(this).data("id");

        let newDevouredState = {
            devoured: true
        };

        //Send the PUT request
        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", true);
                location.reload();
            });
    });
});