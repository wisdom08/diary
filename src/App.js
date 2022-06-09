import './App.css';
import DiaryEditor from "./component/DiaryEditor";
import DiaryList from "./component/DiaryList";
import {useRef, useState} from "react";

function App() {
    let [data, setData] = useState([]);

    const dataId = useRef(0);

    const onCreate = (author, content, emotion) => {

        const created_date = new Date().getTime();

        const newItem = {
            author,
            content,
            emotion,
            created_date,
            id: dataId.current
        }

        dataId.current += 1;
        setData([newItem, ...data]);
    };

    const onDelete = (targetId) => {
        const newItem = data.filter((v) => {
            return v.id !== targetId
        });
        setData(newItem);
    }

    const onUpdate = (targetId, newContent) => {
        setData(
            data.map((v) => v.id === targetId ? {...v, content: newContent} : v )
        )
    }

    return (
        <div className="App">
            <DiaryEditor onCreate={onCreate}/>
            <DiaryList diaryList={data} onDelete={onDelete} onUpdate={onUpdate}/>
        </div>
    );
}

export default App;
