function saveBlogPost(blogPost) {
    const posts = getBlogPosts();
    posts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }
  
  function getBlogPosts() {
    return JSON.parse(localStorage.getItem('blogPosts')) || [];
  }
  
  function toggleLightDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  