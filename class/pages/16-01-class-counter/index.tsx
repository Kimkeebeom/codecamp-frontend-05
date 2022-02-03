import { Component } from 'react'

interface Istate {
    count: number;
}

export default class ClassCounterPage extends Component{
    state = {
        count: 0
    }

    onClickCounter = () => {
        console.log(this.state.count)
        this.setState((prev: Istate) => ({ //component 안에는 setState라는 기능이 포함되어 있어서 class 함수안에 setState가 없어도 사용이 가능하다.
            count: prev.count + 1,
        })) 
        console.log('카운터를 클릭하셨습니다!!')
    }

    render(){
        return(
            <div>
                <div>현재카운트: {this.state.count}</div>
                <button onClick={this.onClickCounter}>카운트 올리기!!</button>
            </div>
        )
    }
}