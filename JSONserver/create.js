const createBtn = document.querySelector('.create-post');

createBtn.addEventListener('click', async () => {
  const doc = {
    id: 7,
    title: 'aaa',
    author: 'fdsfsd',
    likes: 312,
    comments: 2,
  };

  await fetch('http://localhost:3000/posts', {
    method: 'post',
    body: JSON.stringify(doc),
    headers: { 'Contnt-Type': 'application/json' },
  });
});

renderPosts();
