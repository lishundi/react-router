import React, {Component} from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import MessageDetail from './message-detail'

export default class Message extends Component {

    state = {
        messages: []
    }

    componentDidMount () {
        // 模拟发ajax请求获取messages
        setTimeout(() => {
            const messages = [
                {id: 1, title: 'Message01'},
                {id: 3, title: 'Message03'},
                {id: 5, title: 'Message05'},
            ]

            // 更新状态
            this.setState({
                messages
            })
        }, 1000)
    }

    pushShow = (id) => {
        this.props.history.push(`/home/message/messagedetail/${id}`)
    }

    replaceShow = (id) => {
        this.props.history.replace(`/home/message/messagedetail/${id}`)
    }

    back = () => {
    this.props.history.goBack();
    }

    forward = () => {
    this.props.history.goForward();
    }

    reqPage = () => {
        window.location = 'http://www.baidu.com'
    }

    render () {
        const {messages} = this.state
        return (
            <div>
                <ul>
                    {
                        messages.map((m, index) => (
                            <li key={index}>
                                <Link to={`/home/message/messagedetail/${m.id}`}>{m.title}</Link>
                                <button onClick={() => this.pushShow(m.id)}>push查看</button>
                                <button onClick={() => this.replaceShow(m.id)}>replace查看</button>
                            </li>
                        ))
                    }
                </ul>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                {/*<button onClick={() => this.props.history.goForward()}>前进</button>*/}
                <button onClick={this.reqPage}>页面跳转</button>
                <hr/>
                <Route path='/home/message/messagedetail/:id' component={MessageDetail}/>
            </div>

        )
    }
}