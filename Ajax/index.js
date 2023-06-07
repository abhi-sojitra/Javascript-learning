// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure the request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

// Set up a callback function to handle the response
xhr.onload = function () {
    if (xhr.status === 200) {
        // Request was successful
        var responseData = JSON.parse(xhr.responseText);
        // Handle the data
        console.log(responseData, 'Method : AJAX');
    } else {
        // Request failed
        console.log('Error: ' + xhr.status);
    }
};  

// Send the request
xhr.send();
