import React from 'react';
import '../style/DiaryItem.css'

const DiaryItem = ({id, author, content, emotion, created_date}) => {
    return (
        <div className="DiaryItem">
            <div className="info"
                 key={id}>
                <span>작성자: {author} | 감정 점수: {emotion} </span>
                <br/>
                <span className="date"> 작성시간: {new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">{content}</div>
        </div>
    )
};

export default DiaryItem;