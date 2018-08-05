import React from 'react';
import './Comment.css';

const Comment = (props) => {
    return (
        <div className="Comment">
            <strong>{props.comment.by}</strong>
            <div className="Comment-line" dangerouslySetInnerHTML={{ __html: unescape(props.comment.text) }} >
            </div>
            <div className="Comment-info">
                <span> {props.comment.timeFromNow}</span>
            </div>
        </div>
    );
}

export default Comment;