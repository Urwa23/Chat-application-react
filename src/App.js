import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed.jsx'

import './App.css'
import LoginForm from './LoginForm.jsx'

const App = ()=>{
    // if(!localStorage.getItem('username')) return <LoginForm/>
    if (!localStorage.getItem('username')) return <LoginForm />;
    return(
        <ChatEngine
        height="100vh"
        projectID="ac726a7a-007c-457c-922f-8fcea1c1d7f8"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
         onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        >
        </ChatEngine>
    )
}
export default App;