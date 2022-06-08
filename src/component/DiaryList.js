import React from 'react';
import '../style/DiaryList.css';
import DiaryItem from "./DiaryItem";

const DiaryList = ({diaryList = [], onDelete}) => {
    
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>

            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <hr/>

            <div>
                {diaryList.map((diary) => (<DiaryItem onDelete={onDelete} key={diary.id} {...diary}/>))}
            </div>
        </div>
    )
};

// DiaryList.defaultProps = {
//     diaryList: [],
// }

export default DiaryList;