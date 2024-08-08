(function() {
    var ip = prompt("Enter IP address:", "");
    if (!ip) return;
    var url = "https://ipinfo.io/" + ip + "/json";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Error: " + data.error + " - " + data.message);
            } else {
                var locationInfo = "City: " + (data.city || "Unknown") +
                                   "\nRegion: " + (data.region || "Unknown") +
                                   "\nCountry: " + (data.country || "Unknown");
                alert(locationInfo);
            }
        })
        .catch(error => alert("Failed to retrieve data: " + error.message));
})();
