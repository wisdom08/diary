import React, {useState} from 'react';
import '../style/DiaryEditor.css';

const DiaryEditor = () => {
    let [author, setAuthor] = useState('변지혜');
    let [content, setContent] = useState('');
    let [score, setScore] = useState(5);

    console.log(author, content, score);

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <div>
                    <input placeholder="writer" type="text" value={author}
                           onChange={(e) => setAuthor(e.target.value)}/>
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="contents" value={content}
                              onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="">오늘의 감정 점수: </label>
                    <input type="number"
                           placeholder="score"
                           value={score}
                           onChange={(e) => setScore(e.target.value)}
                    />
                </div>
                <button>일기 저장하기</button>
            </div>
        </div>
    )
};

export default DiaryEditor;