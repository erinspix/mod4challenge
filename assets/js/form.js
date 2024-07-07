document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('blogForm')) {
      loadHomePage();
    }
  });
  
  function loadHomePage() {
    const form = document.getElementById('blogForm');
    const message = document.getElementById('message');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
  
      if (!username || !title || !content) {
        message.textContent = 'All fields are required!';
        return;
      }
  
      const blogPost = { username, title, content };
      saveBlogPost(blogPost);
      window.location.href = 'blog.html';
    });
  }
  