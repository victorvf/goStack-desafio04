import React from 'react';

function Comment({ comment }){
    return (
        <div class="comment">
            <img src={ comment.author.avatar } alt="avatar"/>
            <span><strong>{ comment.author.name}:</strong> {comment.content}</span>
        </div>
    );
};

export default Comment;