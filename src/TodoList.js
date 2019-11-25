import React,{Component,Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem';
//定义一个组件,
/*
import React {Component} from 'react';
  class 类名 extends Component(或者React.Component){
    render(){  负责这个组件要显示的内容
       return (   就是组件要显示的内容

       );
    }
  }
 */
class TodoList extends Component{
  /*  handleItemClick(index){   //用来删除的，index可以用来获取删除的id
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        });
    };*/
    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        });
    };
    constructor(props){  //当TodoList这个组件刚被创建时，constructor会被自动执行，
        super(props);   //super做一些初始化
        this.state= {  //一创建组件时，我们在TodoList中就创建了state这个数据项，state里面可以存放很多的数据内容
            list: [],
            inputValue: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    };
    handleBtnClick(){
      //this.state.list.push("x");这样是有错的，报错是找不到state，因为在下面button上的this是指的这个组件，但是handleBtnClick这个函数中的this指的是button按钮了，
        //解决方法是把下面button中的方法用bind函数指向组件的this,onClick={this.handleBtnClick.bind(this)
        //但是虽然不报错了，列表中的内容并没有变化，解决方法是需要调用react中的方法，this.setState去改变state中的数据，改变的是list数据，
        this.setState({
            list:[...this.state.list,this.state.inputValue],   //使用的是ES6中的展开运算符，来表示list的形式,数据发生变化，页面就发生变化
            inputValue:""
        });
       // 还是会有一个警告，警告的意思是每个标签上都应该有一个key值，如果不想要警告，可以在下面li中写一个key,map可以获取下标，{this.state.list.map((item,index)=>{
        //                     return <li key={index+1}>{item}</li>
        //                 })}
    };
    handleDelete(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        });
    };
    getToDoItems(){
        return (
            this.state.list.map((item,index)=>{
                return <ToDoItem key={index} items={item} index={index} handleDelete={this.handleDelete}/>
                //父组件向子组件传递一个方法handleDelete={this.handleDelete.bind(this)}
                //如果不加content，ToDoItem中的值不可以变化，让list中的item，以content参数的形式放到ToDoItem中，content不一定非要叫这个名字，随意，只是父子组件中的属性名相同就行
                // return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
                // map()是对数组做循环的函数
            })
        );
    }
    render(){
        return(
        <Fragment>
            <div>
           <input value={this.state.inputValue} onChange={this.handleInputChange} />
            <button onClick={this.handleBtnClick}>add</button>
            </div>
            <ul>{this.getToDoItems()}</ul>
        </Fragment>
        );
    }
}
//定义完之后，要导出
export default TodoList;
