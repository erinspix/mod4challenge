document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('postsContainer')) {
      loadPostsPage();
    }
  });
  
  function loadPostsPage() {
    const toggleModeButton = document.getElementById('toggleMode');
    const backButton = document.getElementById('backButton');
    const postsContainer = document.getElementById('postsContainer');
  
    toggleModeButton.addEventListener('click', toggleLightDarkMode);
    backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  
    const posts = getBlogPosts();
    if (posts.length > 0) {
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.content}</p>
          <p><em>Posted by: ${post.username}</em></p>
        `;
        postsContainer.appendChild(postElement);
      });
    } else {
      postsContainer.innerHTML = '<p>No posts available.</p>';
    }
  }
  