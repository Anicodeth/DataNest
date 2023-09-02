import PromptMessage from "./chat_message";
import React from "react";
import ChatMessage from "./chat_message";

export default function ChatMessages(props){
    return (
        <div className="main-page__center__chat-area__chat-history w-full overflow-y-scroll">
            <ul>
                {props.messages.map((curMessage)=>{
                    return <ChatMessage message={curMessage.message} isUser={curMessage.isUser}/>
                })}
            </ul>

        </div>
    );
}