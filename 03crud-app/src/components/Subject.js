import React, { Component } from "react";

/*
CDN방식에서는 React.Component를 상속했지만,
웹팩(WebPack) 방식에서는 Component 만 상속하면 된다.
컴포넌트를 만들깨에는 항상 하나의 최상위 태그만 있어야 한다.
*/
class Subject extends Component{
    render(){
        return(
            <header>
                <h1>
                    <a href="/" onClick={(e)=>{
                        e.preventDefault(); // 화면의 새로고침 차단
                        this.props.onChangePage(); // 부모가 props를 통해 보내준 함수를 호출
                        }}
                    >
                    {this.props.title}
                    </a>
                </h1>
            {this.props.sub}
            </header>
        );
    }
}

export default Subject;