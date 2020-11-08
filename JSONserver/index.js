const container = document.querySelector('main');

const renderPosts = async () => {
  let uri = 'http://localhost:3000/posts';

  const res = await fetch(uri);
  const posts = await res.json();

  let postTemplate = '';
  posts.forEach((post) => {
    postTemplate += `
    <div class="post">
        <div class="post_row">
            <span>Title : ${post.title}  by ${post.author} </span>
            <button>X</button>
        </div>
        <img
            src="${post.image}"
        />
        <div class="post_row">
            <span> 좋아요 : ${post.like}</span>
            <span> 댓글 : ${post.comment}</span>
        </div>
    </div>
    `;
  });
  container.innerHTML = postTemplate;
  console.log(posts);
};

renderPosts();
