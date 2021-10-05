const comForm = document.querySelector('#commentForm');
const commentSect = document.querySelector('#commentSection');
comForm.addEventListener('submit', function(e){
    e.preventDefault();
    // const usernameIn = document.querySelector('#username');
    // const commentIn = document.querySelector('#comment');
    const username = comForm.elements.username;
    const comment = comForm.elements.comment;
    addComment(username.value, comment.value);
    username.value = '';
    comment.value = '';
});

const addComment = function (username, comment) {
    const newComment = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newComment.append(bTag);
    newComment.append(`: ${comment}`);
    commentSect.append(newComment);
};

commentSect.addEventListener('click', function(e) {
    e.target.remove();
})