import React, {useRef, useState} from 'react';
import '../style/DiaryEditor.css';

const DiaryEditor = ({onCreate}) => {

    let [state, setState] = useState({
        author: '',
        content: '',
        emotion: 5
    });

    const authorInput = useRef();
    const contentInput = useRef();

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        if (state.author.length < 1) {
            authorInput.current.focus();
            return;
        }

        if (state.content.length < 5) {
            contentInput.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emotion);
        alert('저장 성공입니다.');
        setState({
            author: "",
            content: "",
            emotion:5,
        })

    }

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <div>
                    <input name="author"
                           placeholder="writer" type="text" value={state.author}
                           ref = {authorInput}
                           onChange={handleChangeState}/>
                </div>
                <div>
                    <textarea name="content" id="" cols="30" rows="10" placeholder="contents" value={state.content}
                              ref={contentInput}
                              onChange={handleChangeState}></textarea>
                </div>
                <div>
                    <span>오늘의 감정 정수: </span>
                    <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div>
                    <button onClick={handleSubmit}>일기 저장하기</button>
                </div>
            </div>
        </div>
    )
};

export default DiaryEditor;