import React from 'react';   //引入react的意义是让浏览器能够理解下面的组件语法，
import ReactDOM from 'react-dom';  //意义是可以让我们把一个组件挂载到页面的一个DOM节点上，它会把App这个组件渲染到HTML的ID=root的标签里面去
import './index.css';
// App就是最外层的一个组件,在react中以大写字母开头的内容都是一个组件
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
