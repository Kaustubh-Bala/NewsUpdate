const API_KEY = 'e3976bb9c3e048e55d728100e06116df';
const URL = 'https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10';
fetch(`${URL}&apikey=${API_KEY}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    if (!data.articles) {
      throw new Error('No articles found in API response');
    }
    const articles = data.articles;
    const headlines = articles.map(article => article.title);
    const headlinesList = document.getElementById('headlines');
    headlines.forEach(headline => {
      const li = document.createElement('li');
      li.textContent = headline;
      headlinesList.appendChild(li);
    });
  })
  .catch(error => {
    console.error(error);
    // Handle the error appropriately
  });
