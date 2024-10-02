document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;

    if (!query) {
        alert('Please enter a search query!');
        return;
    }

    // Call the server-side endpoint instead of the OpenAI API directly
    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.result) {
            displayResults(data.result);
        } else {
            document.getElementById('searchResults').innerHTML = 'Something went wrong. Please try again.';
        }
    })
    .catch(error => {
        console.error('Error fetching AI results:', error);
        document.getElementById('searchResults').innerHTML = 'Something went wrong. Please try again.';
    });
});
