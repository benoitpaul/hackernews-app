import React from 'react';
import './Story.css';
import Comment from './Comment';

const Story = (props) => {
    return (
        <div className="Story">
            <div className="Story-line">
                <a href={props.story.url} target="_blank">{props.story.title}</a>
                <span> ({props.story.hostName})</span>
            </div>
            <div className="Story-info">
                <span>{props.story.score} points</span>
                <span> by: {props.story.by}</span>
                <span> {props.story.timeFromNow}</span>
            </div>
            { props.story.isLoadingComments 
                ? <div>loading comments...<button onClick={() => props.getComments(props.story)}>load</button></div> 
                : <div className="Story-comments">
                    {props.story.comments.map(c => <Comment key={c.id} {...props} comment={c}></Comment>)}
                </div> 
            }
        </div>
    );
}

export default Story;