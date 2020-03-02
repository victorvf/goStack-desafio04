import React from 'react';

import Comment from './Comment';

function Publication({ post }){
    return (
        <li>
            <div class="user">
                <img src={ post.author.avatar } alt="avatar"/>
                <div class="user-info">
                    <span>{ post.author.name }</span>
                    <span>{ post.date }</span>
                </div>
            </div>
            <div class="content">
                <p>
                    {post.content}
                </p>
            </div>
            { 
                post.comments.map(comment => (
                    <Comment key={comment.id} comment={comment}/>
                )) 
            }
        </li>
    );
};

export default Publication;