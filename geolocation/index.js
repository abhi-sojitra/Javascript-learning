// Check if geolocation is supported by the browser
if ('geolocation' in navigator) {
    // Call the geolocation API
    navigator.geolocation.getCurrentPosition(
        function (position) {
            // Success callback
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log('Latitude:', latitude);
            console.log('Longitude:', longitude);
        },
        function (error) {
            // Error callback
            console.log('Error:', error.message);
        }
    );
} else {
    console.log('Geolocation is not supported by your browser');
}
