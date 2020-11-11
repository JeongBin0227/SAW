const createBtn = document.querySelector('.create-post');

createBtn.addEventListener('click', async () => {
  const doc = {
    title: 'aaa',
    author: 'fdsfsd',
    likes: 0,
    comments: 0,
  };

  console.log(doc)
  await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers:{'Content-Type' : 'application/json'}
  });
});

renderPosts();
