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

    return (
        <div className="App">
            <DiaryEditor onCreate={onCreate}/>
            <DiaryList diaryList={data} onDelete={onDelete}/>
        </div>
    );
}

export default App;
