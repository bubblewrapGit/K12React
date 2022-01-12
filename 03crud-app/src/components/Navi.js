import React, { Component } from "react";

/*
CDN방식에서는 React.Component를 상속했지만,
웹팩(WebPack) 방식에서는 Component 만 상속하면 된다.
컴포넌트를 만들깨에는 항상 하나의 최상위 태그만 있어야 한다.
*/
class Navi extends Component{
    render(){
        let lists = [];
        let data = this.props.data;
        let i = 0;
        /*
        state에서 정의한 contents를 props로 받아서
        배열의 크기만큼 반복하여 li태그를 출력한다.
        이때, warning이 뜨게 되는데, 중복되지 않는 key props을 추가해야한다는 내용이다.
        리액트의 요청사항임으로 li태그에 key속성을 추가하여 중복되지 않는 값을 가지도록 처리해준다.

        자식은 부모쪽으로 데이터를 전달할때 event를 이용한다.
        data-id라는 속성은 event를 통해 전달될때
        "이벤트객체.target.dataset.id"를 통해
        그 값을 얻어올 수 있다.
        */
        while(i<data.length){
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/"+data[i].id}
                        data-id={data[i].id}
                        onClick={function(event){
                            //console.log(event);
                            //debugger; //실행을 멈추고 디버깅모드 진입.
                            event.preventDefault();
                            // 부모가 props로 전달해준 함수를 호출할때 매개변수로
                            // data-id 속성으로 지정한 값을 얻어와서 전달한다.
                            this.props.onChangePage(event.target.dataset.id);
                        }.bind(this)}>
                        {data[i].title}
                    </a>
                </li>
            );
            i++;
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default Navi;