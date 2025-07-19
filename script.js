// Function to update city information
function updateCityInfo(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('cityDescription').textContent = data.description;
    document.getElementById('cityImage').src = data.imageUrl;
    
    // Update activities list
    const activitiesList = document.getElementById('activitiesList');
    activitiesList.innerHTML = data.activities
        .map(activity => `<li>${activity}</li>`)
        .join('');
}

// Add click handler for reservation button
document.querySelector('.reservation-btn').addEventListener('click', function() {
    alert('Reservation system coming soon!');
});

// Initialize the page with sample data
document.addEventListener('DOMContentLoaded', function() {
    updateCityInfo(cityData);
}); 