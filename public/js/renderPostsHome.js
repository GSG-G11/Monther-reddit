const postsContainer = document.querySelector('.posts-container');
const userName = document.querySelector('#cookie');


fetch('/renderhome')
    .then((res) => res.json())
    .then((posts) => {
      posts.forEach((postData) => {
        const post = document.createElement('div');
        const topDown = document.createElement('div');
        const upButton = document.createElement('button');
        const upImg = document.createElement('img');
        const vote = document.createElement('p');
        const downButton = document.createElement('button');
        const downImg = document.createElement('img');
        const mainPost = document.createElement('div');
        const postInfo = document.createElement('div');
        const infoImg = document.createElement('img');
        const userName = document.createElement('h5');
        const joinButton = document.createElement('button');
        const postBody = document.createElement('div');
        const postFooter = document.createElement('div');
        const postText = document.createElement('p');
        const comments = document.createElement('button');
        const share = document.createElement('button');
        const save = document.createElement('button');

        postsContainer.appendChild(post);
        post.appendChild(topDown);
        topDown.appendChild(upButton);
        upButton.appendChild(upImg);
        topDown.appendChild(vote);
        topDown.appendChild(downButton);
        downButton.appendChild(downImg);
        post.appendChild(mainPost);
        mainPost.appendChild(postInfo);
        mainPost.appendChild(postBody);
        mainPost.appendChild(postFooter);
        postInfo.appendChild(infoImg);
        postInfo.appendChild(userName);
        postInfo.appendChild(joinButton);
        postBody.appendChild(postText);
        postFooter.appendChild(comments);
        postFooter.appendChild(share);
        postFooter.appendChild(save);

        post.setAttribute('class', 'post');
        topDown.setAttribute('class', 'top-down');
        upButton.setAttribute('id', 'up-vote');
        upImg.setAttribute('alt', 'Top');
        downImg.setAttribute('alt', 'down');
        downImg.setAttribute('class', 'rotate');
        mainPost.setAttribute('class', 'main-post');
        postInfo.setAttribute('class', 'post-info');
        infoImg.setAttribute('alt', 'Info Image');
        postBody.setAttribute('class', 'post-body');
        postFooter.setAttribute('class', 'post-footer');
        comments.setAttribute('class', 'comments');
        share.setAttribute('class', 'share');
        save.setAttribute('class', 'save');
        joinButton.setAttribute('id', 'deletePost');

        upImg.src = '../assets/top.png';
        downImg.src = '../assets/top.png';
        infoImg.src = '../assets/user-img.png';

        vote.textContent = postData.vote;
        userName.textContent = postData.name;
        joinButton.textContent = 'Delete';
        const deletePostId = postData.id;
        joinButton.addEventListener('click', () => {
          deletePost(deletePostId);
        });
        postText.textContent = postData.text;
        comments.textContent = 'Comments';
        share.textContent = 'share';
        save.textContent = 'save';
      });
    })
    .catch((err) => console.log(err));

const getCookie = () => {
  const partTow = document.cookie.split('name');
  const NameAndUsername = partTow[1].split(';');
  const name = NameAndUsername[0].split('=');
  return name[1];
};
userName.textContent = getCookie();
