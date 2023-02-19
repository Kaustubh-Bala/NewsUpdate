const API_KEY = '133fee506f4441b092965bebce29ada9';
const URL = 'https://newsapi.org/v2/top-headlines?country=in';

fetch(`${URL}&apiKey=${API_KEY}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
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
  });
