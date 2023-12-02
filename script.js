// Function to make API requests using Promises
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// Function to fetch country flags
const fetchCountryFlags = () => {
    // Use fetch with promises
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => {
            // Logic to display country flags
            // Use proper class selectors and update HTML content
        })
        .catch(error => {
            console.error('Error fetching country flags:', error);
        });
};