import React, {useRef, useState} from 'react';
import '../style/DiaryItem.css'

const DiaryItem = ({id, author, content, emotion, created_date, onDelete, onUpdate}) => {

    const [isEdit, setIsEdit] = useState(false);
    const [localContent, setLocalContent] = useState(content);

    const toggleIsEdit = () => setIsEdit(!isEdit);
    const localContentInput = useRef();

    const handleDelete = () => {
        if (window.confirm(`${id + 1}번째 일기를 정말 삭제하시겠습니까?`)) {
            onDelete(id);
        }
    }

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    }

    const handleUpdate = () => {

        if (localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }

        if (window.confirm(`${id + 1}번째 일기를 정말 수정하시겠습니까?`)) {
            onUpdate(id, localContent);
            toggleIsEdit(false);
        }

    }

    return (
        <div className="DiaryItem">
            <div className="info"
                 key={id}>
                <span>작성자: {author} | 감정 점수: {emotion} </span>
                <br/>
                <span className="date"> 작성시간: {new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">
                {isEdit ?
                    <textarea ref={localContentInput} value={localContent}
                              onChange={(e) => setLocalContent(e.target.value)}/> : <>{content}</>}
            </div>

            {
                isEdit ? <>
                    <button onClick={handleQuitEdit}>수정 취소</button>
                    <button onClick={handleUpdate}>수정 완료</button>
                </> : <>
                    <button onClick={handleDelete}>삭제</button>
                    <button onClick={toggleIsEdit}>수정</button>
                </>
            }
        </div>
    )
};

export default DiaryItem;