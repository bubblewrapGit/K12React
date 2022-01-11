import React, { Component } from "react";

/*
CDN방식에서는 React.Component를 상속했지만,
웹팩(WebPack) 방식에서는 Component 만 상속하면 된다.
컴포넌트를 만들깨에는 항상 하나의 최상위 태그만 있어야 한다.
*/
class Content extends Component{
    render(){
      return(
        <article>
          <h2>{this.props.title}</h2>
          { this.props.desc }
        </article>
      );
    }
}

export default Content;