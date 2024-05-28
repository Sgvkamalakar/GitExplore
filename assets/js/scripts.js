document.getElementById('repo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const language = document.getElementById('language').value;
    const topic = document.getElementById('topic-text').value.trim();
    const sort = document.getElementById('sort').value;

    fetchRepos(language,topic,sort);
  });
  
  async function fetchRepos(language,topic='',sort) {
    const GITHUB_TOKEN = 'GITHUB_PA_TOKEN';
    const headers = { 'Authorization': `token ${GITHUB_TOKEN}` };
    let query = `language:${language}+stars:>0`;

    if (topic.trim() !== '') {
        query += `+topic:${topic}`;
    }

    const url = `https://api.github.com/search/repositories?q=${query}&sort=${sort}&order=desc&per_page=30`;

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayRepos(data.items);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

  
  function displayRepos(repos) {
    fetch('https://api.github.com/events')
  .then(response => response.json())
  .then(data => {
    console.log('Open Source Events:', data);
  })
  .catch(error => console.error('Error fetching open-source events:', error));

    const reposContainer = document.getElementById('repos');
    reposContainer.innerHTML = ``;

    if (repos.length === 0) {
      const noReposMessage = document.createElement('div');
      noReposMessage.className = 'no-repos';
      noReposMessage.textContent = 'No repositories found.';
      reposContainer.appendChild(noReposMessage);
      return;
  }

    repos.forEach(repo => {
      const repoCard = document.createElement('div');
      repoCard.className = 'flip-card';
        
      repoCard.innerHTML = `
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${repo.owner.avatar_url}" alt="${repo.name}" class="card-image">
            <div class="card-content">
              <div class="card-title">${repo.name}</div>
              <div class="icon-container">
                <img src="assets/img/star.png" alt="Stars">
                <span>${repo.stargazers_count}</span>
             
                <img src="assets/img/fork.png" alt="Forks">
                <span>${repo.forks_count}</span>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
          <div class="card-content">
            <div class="card-title">${repo.name}</div>
            <div class="card-description">${repo.description || 'No description available'}</div>
            <div class="card-topics">
              ${repo.topics.map(topic => `<span class="topic">${topic}</span>`).join('')}
            </div>
            
            <a href="${repo.html_url}" target="_blank" style="color: white;">View on GitHub</a>
          </div>
        </div>

        </div>
      `;
  
      reposContainer.appendChild(repoCard);
    });
  }
  