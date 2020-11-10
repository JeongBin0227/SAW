const sortPosts = async () => {
  let url = 'http://localhost:3000/posts?_sort=likes&_order=desc';

  const res = await fetch(url);
  const posts = await res.json();
};
