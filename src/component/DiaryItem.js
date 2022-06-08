import React from 'react';
import '../style/DiaryItem.css'

const DiaryItem = ({id, author, content, emotion, created_date, onDelete}) => {

    return (
        <div className="DiaryItem">
            <div className="info"
                 key={id}>
                <span>작성자: {author} | 감정 점수: {emotion} </span>
                <br/>
                <span className="date"> 작성시간: {new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">{content}</div>
            <button onClick={() => {
                if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
                    onDelete(id);
                }

            }}>삭제
            </button>
        </div>
    )
};

export default DiaryItem;