function fetchGitHubInformation(event) {
    let username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter Github username</h2>`);
        return;
    }
    $("#gh-user-data").html(`<div id="loader">
<img src="assets/loader.gif" alt="loading..."/>
</div>`);

    $.when(
        $.getJSON(`https://api.github.com/users.${username}`)
    ).then(
        function (response) {
            let userData = response;
            $("#gh-user-data").html(userInformationHTML(userData));  
}, function(errorResponse) {
    if (errorResponse.status === 404) {
        $("#gh-user-data").html(`<h2>No info found for user ${username}</h2>`);
    }
    else {
        console.log(errorResponse);
        $("#gh-user-data").html
        (`<h2>error: ${errorResponse.responseJSON.message}</2h>`) 
        
    }
})
}
