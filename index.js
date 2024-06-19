document.getElementById('search-icon').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        // You can change the URL to where you want to handle the search query
        window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search term.');
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
    document.getElementById('menu-bar').addEventListener('click', function() {
        document.querySelector('nav.menu').classList.toggle('active');
    });
    
});
