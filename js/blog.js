document.addEventListener('DOMContentLoaded', function() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsContainer = document.getElementById('posts');
  
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post'; // Ensure the class is 'post' for styling
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <small>by ${post.username}</small>
        `;
        postsContainer.appendChild(postElement);
    });
  
    document.getElementById('toggleMode').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
  
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
