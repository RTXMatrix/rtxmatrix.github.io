/* scripts.js */
document.addEventListener('DOMContentLoaded', () => {
    const devlogsUrl = 'devlogs.json';
  
    const loadDevlogs = async () => {
      const response = await fetch(devlogsUrl);
      const devlogs = await response.json();
  
      const container = document.getElementById('devlog-container');
      if (container) {
        devlogs.forEach((devlog, index) => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <img src="${devlog.image}" alt="${devlog.title}">
            <h2>${devlog.title}</h2>
            <p>${devlog.preview}</p>
          `;
          card.addEventListener('click', () => {
            localStorage.setItem('selectedDevlog', JSON.stringify(devlog));
            window.location.href = 'devlog.html';
          });
          container.appendChild(card);
        });
      }
  
      const content = document.getElementById('devlog-content');
      if (content) {
        const devlog = JSON.parse(localStorage.getItem('selectedDevlog'));
        content.innerHTML = `
          <h1>${devlog.title}</h1>
          <img src="${devlog.image}" alt="${devlog.title}">
          <p>${devlog.body}</p>
        `;
      }
    };
  
    loadDevlogs();
  });
  