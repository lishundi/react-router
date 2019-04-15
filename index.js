import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,HashRouter} from 'react-router-dom';

// import ClickCounter from './ClickCounter';
// import Ref from './ref';
// import PracticeState from './practiceState';
// import Controlcomponent from './controlComponent';
// import Animation from './lifeCycle';
// import TestDiff from './TestDiff';
// import State from './state';
// ReactDOM.render(<App />, document.getElementById('root'));
// 渲染虚拟DOM对象,将真实DOM对象插入页面
// ReactDOM.render(<App />,document.getElementById('root'));
// ReactDOM.render(<Ref />,document.getElementById('root'));
// ReactDOM.render(<PracticeState />,document.getElementById('root'));
// ReactDOM.render(<Controlcomponent />,document.getElementById('root'));
// ReactDOM.render(<Animation />,document.getElementById('root'));
// ReactDOM.render(<TestDiff />,document.getElementById('root'));
// ReactDOM.render(<State />,document.getElementById('root'));
// ReactDOM.render(<ClickCounter username={person.username} sex={person.sex} age={person.age}/>, document.getElementById('root'));
//请发表对react的评论的项目
// import App from './components/App/App';
// ReactDOM.render(<App />, document.getElementById('root'));
//计数器的项目
// import ControlPanel from './ControlPanel.jsx';
// ReactDOM.render(<ControlPanel/>,document.getElementById('root'));
//github的项目
// import App from './App';
// ReactDOM.render(<App />,document.getElementById('root'));
//react-router的项目
import App from './App';
ReactDOM.render((
<BrowserRouter>
    <App/>
    </BrowserRouter>
    ),
    document.getElementById("root"));
//调试代码
// let initValues = [ 0, 10, 20];
// const initSum = reduce((a, b) => a+b, 0);
// var items = [
//     {"login":"liyabin","html_url":"dsdddddd","avatar_url":"rrrr","name":"yu"},
    // {"login":"liya","html_url":"dsdwwwd","avatar_url":"sss","name":"hu"},
    // {"login":"li","html_url":"ds","avatar_url":"ddd","name":"jia"},
    // {"login":"ya","html_url":"dwww","avatar_url":"www","name":"lu"},
    // {"login":"a","html_url":"daaawd","avatar_url":"aaa","name":"rt"}
// ]
// const users = items.map(item => {
//     console.log ({
//         login:item.login,
//         html_url:item.html_url
//     })
// })
