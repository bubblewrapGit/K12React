import React, {Component} from "react";

class Buttons extends Component{
    render(){
        return(
            /*
                React에서 style을 지정할때는 중괄호를 중첩해서 사용한다.
            */
            <ul>
                <li style={{listStyleType:"none"}}>
                {/* 뭐가 좋을까 */}
                    <input type="button" value="create"
                        onClick={
                            (e)=>{
                                e.preventDefault();
                                this.props.onChangeMode('create')
                            }
                        }></input>
                {/* 뭐가 좋을까 */}
                    <input type="button" value="update"
                        onClick={
                            (e)=>{
                                e.preventDefault(); 
                                this.props.onChangeMode('update')
                            }
                        }
                    ></input>
                {/* 뭐가 좋을까 */}
                    <input type="button" value="delete" onClick={
                        (e)=>{e.preventDefault(); this.props.onChangeMode('delete')}
                    }></input>
                </li>
            </ul>
        )
    }
}
export default Buttons;