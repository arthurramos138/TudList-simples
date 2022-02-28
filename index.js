import React,  {Component } from "react";

class TodoItems extends Component{
        constructor(props){
            super(props);
            this.state={}

                this.apagar = this.apagar.bind(this)  
        }

    apagar(key){
        this.props.apagar(key);

    }


    render(){
        return(
            <div>
                <ul>    
                    {this.props.lista.map((item)=>{
                        return(
                            <li onClick={ ()=> this.apagar(item.key)} key={item.key}> {item.text}</li>
                        )
                    })}


                </ul>
                   

            </div>
        )
    }
}

export default TodoItems;