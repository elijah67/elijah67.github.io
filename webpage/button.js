const backButton = document.getElementById('backbuttontrack');
function linkToIndex () {
    localStorage.setItem('lastPage', window.location.href);
window.location.href = '../'
} 
backButton.addEventListener('click', linkToIndex);
