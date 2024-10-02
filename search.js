document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;

    if (!query) {
        alert('Please enter a search query!');
        return;
    }

    // Call the AI search API
    fetchAIResults(query);
});

function fetchAIResults(query) { // Replace with your OpenAI API key
    const apiURL = 'https://www.google.com/';

    // API request payload
    const data = {
        model: "text-davinci-003", // You can also use GPT-4 model
        prompt: query,
        max_tokens: 100, // Limit the response size
    };

    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`, // Auth with your API key
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        const resultText = data.choices[0].text; // Access the AI-generated response
        displayResults(resultText);
    })
    .catch(error => {
        console.error('Error fetching AI results:', error);
        document.getElementById('searchResults').innerHTML = 'Something went wrong. Please try again.';
    });
}

function displayResults(result) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';  // Clear previous results

    // Display the AI-generated result
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result-item');
    resultDiv.innerHTML = `<p>${result}</p>`;
    resultsContainer.appendChild(resultDiv);
}

