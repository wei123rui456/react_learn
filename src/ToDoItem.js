import React from "react";
//ToDoItem要接收传过来的content的内容，通过this.props.content来接收，通过属性接收到父组件传递过来的内容了
class ToDoItem extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    };
    handleDelete(){
        const {handleDelete,index} =this.props;
        handleDelete(index);
    };
    render(){
        const {items}=this.props;
        return (
            <div onClick={this.handleDelete}>{items}</div>
        );
    }
}
export default ToDoItem;
