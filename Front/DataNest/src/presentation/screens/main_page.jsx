import KnowledgeSideBar from "../components/main_page_components/knowledge_side_bar";
import SettingsSideBar from "../components/main_page_components/settings_side_bar";
import React, {useRef} from "react";
import PromptMessage from "../components/main_page_components/chat_message";
import ChatMessages from "../components/main_page_components/messages_history";
import {unmountComponentAtNode} from "react-dom";
import Popup from "../components/main_page_components/popup_box";

export default function MainPage(){
    const [isCondensed, setIsCondensed] = React.useState(true);
    const [condensedMessages, setCondensedMessages ] = React.useState([{"message":"Should I invest in bitcoin?","isUser":true},{"message":"You should not.","isUser":false}]);
    const [realTimeMessages, setRealTimeMessages ] = React.useState([{"message":"Should I get a girlfriend? Use your knowledge.","isUser":true},{"message":"You should not.","isUser":false}]);
    const inputMessageRef = useRef(null);
    const [userInfo, setUserInfo] = React.useState(null);

    const addMessage = (message)=>{
        if(isCondensed){
            setCondensedMessages(messages=> [...condensedMessages,message]);
        }
        else{
            setRealTimeMessages(messages=> [...realTimeMessages,message]);
        }
        inputMessageRef.current.value = "";
    }

    return(
         <div className="main-page h-screen bg-gray-700 text-white flex justify-between">
            <KnowledgeSideBar knowledgeList={[{"title":"I have one million dollars","content":"Some content"}]}/>

            <div className="main-page__center h-full relative flex flex-col w-full items-center justify-between py-8">
                <div className="absolute bg-gray-800 top-0"><div className="title text-xl font-semibold text-gray-100 flex gap-1 justify-center py-2 px-4">
                    <div onClick={()=>{
                        setIsCondensed(true);
                    }}
                        className={`py-1 cursor-pointer px-2  transition delay-50 ${
                            isCondensed ? "bg-gray-400 text-gray-100" : ""
                        }`}
                    >
                        Condensed
                    </div>{" "}
                    <div onClick={()=> {
                        setIsCondensed(false);
                    }
                    }
                        className={`py-1 cursor-pointer px-2  transition delay-50 ${
                            !isCondensed ? "bg-gray-400 text-gray-100" : ""
                        }`}
                    >
                        Real Time
                    </div>
                </div></div>
                    <ChatMessages messages={isCondensed?condensedMessages:realTimeMessages} />
                    <div className="main-page__center__chat-area__text-input flex gap-5">
                        <input ref={inputMessageRef}
                            type={"text"}
                            className="md:w-96 focus:outline-none focus:border-none px-5 py-2 text-xl border-none outline-none text-gray-700"
                             placeholder="Type your message here"
                             onKeyDown={(event)=>{
                                   if(event.code === "Enter"){
                                       addMessage({"message":inputMessageRef.current.value,"isUser":true});
                                   }
                             }}
                        />
                        <button className="font-medium text-xl" onClick={()=>{
                            addMessage({"message":inputMessageRef.current.value,"isUser":true});

                        }}>Send</button>
                    </div>
            </div>
            {/*<SettingsSideBar/>*/}
        </div>

    );
}