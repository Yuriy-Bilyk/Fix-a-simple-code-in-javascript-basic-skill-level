document.getElementById("redirectForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the selected option from the dropdown
    const selectedOption = document.getElementById("fruit").value;

    // Define the URL based on the selected option
    let redirectUrl = "";
    switch (selectedOption) {
        case "apple":
            redirectUrl = "http://localhost:63342/Task%20Yuriy%20Bilyk/apple.html?_ijt=3l2m9v4nmhfhvnpi9p40vpj8sc";
            break;
        case "banana":
            redirectUrl = "http://localhost:63342/Task%20Yuriy%20Bilyk/banana.html?_ijt=a6l0abl3prg9sds20i7msrlmnh";
            break;
        case "cherry":
            redirectUrl = "http://localhost:63342/Task%20Yuriy%20Bilyk/cherry.html?_ijt=3l2m9v4nmhfhvnpi9p40vpj8sc";
            break;
        default:
            // Handle the default case (if needed)
            break;
    }

    // Redirect the user to the selected URL
    if (redirectUrl) {
        window.location.href = redirectUrl;
    }
});