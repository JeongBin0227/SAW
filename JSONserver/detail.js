const id = new URLSearchParams(window.location.search).get('id')

const renderDetails = async (id) => {
  const res = await fetch('http://localhost:3000/posts/' + id);

  const post = await res.json();
  console.log(post);
};
