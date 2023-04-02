import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
    ConversationHeader,
    Avatar
} from '@chatscope/chat-ui-kit-react';

const ChatComponent = () => {
    const [messages, setMessages] = useState([
        {
            message: "Hello, I am DIANA!",
            sender: "DIANA"
        },
        {
            message: "How can I help you?",
            sender: "DIANA"
        },
        {
            message: "Hello, nice to meet you...",
            sender: "user",
            direction: "outgoing"
        },
        {
            message: "I want a pizza!",
            sender: "user",
            direction: "outgoing"
        }
    ]);

    // const handleSend = async (message) => {
    //     const newMessage = {
    //         message: message,
    //         sender: "user",
    //         direction: "outgoing"
    //     };

    //     setMessages([...messages, newMessage]);
    // };

    return (
        <div className="Chat-component">
            <div style={{ position: "relative", height: "650px", width: "700px" }}>
                <MainContainer>
                    <ChatContainer>
                        <ConversationHeader>
                            <ConversationHeader.Content userName="Dialer History" />
                        </ConversationHeader>
                        <MessageList>
                            {messages.map((message, i) => {
                                return (
                                    (message.sender === "DIANA" && messages[i + 1].message.sender !== "DIANA") ?
                                        <div align='left'>
                                            <div style={{ display: 'inline-flex' }}>
                                                <Avatar src='src/assets/bot.png' name='DIANA' />
                                                <Message key={i} model={message} />
                                            </div>
                                        </div> :
                                        <div align='right'>
                                            <div style={{ display: 'inline-flex' }}>
                                                <Message key={i} model={message} />
                                                <Avatar src='src/assets/user.png' name='user' style={{ padding: '4px' }} />
                                            </div>
                                        </div>
                                );
                            })}
                        </MessageList>
                        {/* <MessageInput placeholder='Type your message' onSend={handleSend} /> */}
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    );
};

export default ChatComponent;