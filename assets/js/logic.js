function saveBlogPost(blogPost) {
    const posts = getBlogPosts();
    posts.push(blogPost);
    localStorage.setItem('posts', JSON.stringify(posts));
  }
  
  function getBlogPosts() {
    return JSON.parse(localStorage.getItem('posts')) || [];
  }
  
  function toggleLightDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  