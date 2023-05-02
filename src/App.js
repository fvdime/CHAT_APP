import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'; 
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
    //if no username, not logged in, return login page
    if(!localStorage.getItem('username')) return <LoginForm />


    return(
        <ChatEngine
            height= '100vh'
            projectID='78e0caf4-aec6-4bd2-af13-90255c9b55c9'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps}/>}
        />
    )
}

export default App;