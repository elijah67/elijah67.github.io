const lastVisited = localStorage.getItem('lastPage');

if (lastVisited) {
  document.getElementById('last-visited').textContent =
    `You came from:${lastVisited}`;
} else {
  document.getElementById('last-visited').textContent =
    `No previous page detected.`;
}