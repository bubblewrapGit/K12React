import React, { Component } from "react";

/*
CDN방식에서는 React.Component를 상속했지만,
웹팩(WebPack) 방식에서는 Component 만 상속하면 된다.
컴포넌트를 만들깨에는 항상 하나의 최상위 태그만 있어야 한다.
*/
class Navi extends Component{
    render(){
      return(
        <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">Javascript</a></li>
        </ul>
    </nav>
    );
    }
}

export default Navi;