

const test = () => {
  const deleteBtn = document.querySelector('.delete-post');

  console.log(deleteBtn);
  deleteBtn.addEventListener('click', async (id) => {
    console.log('s')
    const res = await fetch('http://localhost:3000/posts/' + 1, {
      method: 'DELETE',
    });
  });
}
