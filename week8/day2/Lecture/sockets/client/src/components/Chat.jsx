import React, { useEffect, useState } from 'react';

const Chat = (props) => {
    const { socket } = props
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        socket.on('users_in_chat', (data) => {
            console.log('USERS IN CHAT: ', data);
            setUsers(data)
        })
        socket.on('messages', (data) => {
            setMessages(data)
        })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        socket.emit('new_message', message)
        setMessage('')
    }
    return (
        <div>
            <h1>Chat room</h1>
            {
                users.map((user) => (
                    <p>user: {user}</p>
                ))
            }
            <form onSubmit={submitHandler}>
                <div>
                    <label>Message: </label>
                    <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} />
                </div>
                <input type="submit" value="Send" />
            </form>
            {
                messages.map((message) => (
                    <p>{message}</p>
                ))
            }
        </div>
    )
}

export default Chat;