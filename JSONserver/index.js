const container = document.querySelector('main');

const renderPosts = async () => {
  let uri = 'http://localhost:3000/posts';

  const res = await fetch(uri);
  const posts = await res.json();

  let postTemplate = '';
  posts.forEach((post) => {
    postTemplate += `
    <div class="post" id="${post.id}">
        <div class="post_row">
            <span>Title : ${post.title}  by ${post.author} </span>
            <button class="delete-post">X</button>
        </div>
        <img
            src="${post.image}"
        />
        <div class="post_row">
            <span> 좋아요 : ${post.likes}</span>
            <span> 댓글 : ${post.comments}</span>
        </div>
    </div>
    `;
  });
  container.innerHTML = postTemplate;
  console.log(postTemplate);
  console.log(posts);
};

renderPosts();
