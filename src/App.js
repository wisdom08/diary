import './App.css';
import DiaryEditor from "./component/DiaryEditor";
import DiaryList from "./component/DiaryList";

const dummyList = [
    {
        id: 1,
        author: '변지혜',
        content:'하이',
        emotion: 5,
        created_date: new Date().getTime(),
    },
    {
        id: 2,
        author: '아무개',
        content:'하이',
        emotion: 3,
        created_date: new Date().getTime(),
    },
    {
        id: 3,
        author: '호호',
        content:'바이',
        emotion: 5,
        created_date: new Date().getTime(),
    },
    {
        id: 4,
        author: '하하',
        content:'크크크',
        emotion: 1,
        created_date: new Date().getTime(),
    },
]

function App() {
  return (
    <div className="App">
        <DiaryEditor/>
        <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
