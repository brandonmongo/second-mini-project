function fetchGitHubInformation(event) {
    let username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter Github username</h2>`);
        return;
    }
    $("#gh-user-data").html(`<div id="loader">
<img src="assets/loader.gif" alt="loading..."/>
</div>`);
}