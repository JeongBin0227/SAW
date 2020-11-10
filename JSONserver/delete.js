const deleteBtn = document.querySelector('.delete-post');
console.log(deleteBtn);
if (deleteBtn) {
  deleteBtn.addEventListener('click', async (id) => {
    const res = await fetch('http://localhost:3000/posts/' + id, {
      method: 'DELETE',
    });
  });
}
