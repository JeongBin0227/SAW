// const id

const renderDetails = async (id) => {
  const res = await fetch('http://localhost:3000/posts/' + id);

  const post = await res.json();
  console.log(post);
};
