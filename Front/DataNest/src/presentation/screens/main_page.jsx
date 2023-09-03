import KnowledgeSideBar from "../components/main_page_components/knowledge_side_bar";
import SettingsSideBar from "../components/main_page_components/settings_side_bar";
import React, {useRef} from "react";
import PromptMessage from "../components/main_page_components/chat_message";
import ChatMessages from "../components/main_page_components/messages_history";
import {unmountComponentAtNode} from "react-dom";
import Popup from "../components/main_page_components/popup_box";
import useUser from "../../services/hooks/useUser";
import knowledgeService, {getKnowledgeBasedInformation} from "../../services/dataNestService";
import { useGetKnowledge } from "../../services/hooks/useGetKnowledge";
import LoadingRipples from "../components/ui/loading_ripples/loading_ripples";

export default function MainPage(){
    const [isCondensed, setIsCondensed] = React.useState(true);
    const [condensedMessages, setCondensedMessages ] = React.useState([]);
    const [realTimeMessages, setRealTimeMessages ] = React.useState([]);
    const inputMessageRef = useRef(null);
    const [userInfo, setUserInfo] = React.useState(null);
    const { isLoading, getKnowledgeBased, getFiltered } = useGetKnowledge();

    const user = useUser();
    const addMessage = (message)=>{
        if(!isCondensed){
            setRealTimeMessages(messages=> [...realTimeMessages,message]);
            const knowledgeService = require("../../services/dataNestService");
            getKnowledgeBased(message.message).then((response)=>{
                    const newMessage = {"message":response,"isUser":false};
                    setRealTimeMessages(messages=> [...realTimeMessages,message,newMessage]);
                }
            ).catch((error)=>{
                console.log(error);
            }
            );
        }
        else{
            setCondensedMessages(messages=> [...condensedMessages,message]);
            const knowledgeService = require("../../services/dataNestService");
            getFiltered(message.message).then((response)=>{
                    const newMessage = {"message":response,"isUser":false};
                    setCondensedMessages(messages=> [...condensedMessages,message,newMessage]);
                }
            ).catch((error)=>{
                    console.log(error);
                }
            );
        }
        inputMessageRef.current.value = "";
    }

    return(
         <div className="main-page h-screen bg-gray-700 text-white flex justify-between">
            <KnowledgeSideBar knowledgeList={user.knowledge}/>

            <div className="main-page__center h-full relative flex flex-col w-full items-center justify-between py-8 pt-20">
                <div className="absolute bg-gray-800 top-0 rounded-full my-2"><div className="title text-xl font-semibold text-gray-100 flex gap-1 justify-center py-2 px-4">
                    <div onClick={()=>{
                        setIsCondensed(true);
                    }}
                        className={`py-1 cursor-pointer px-4  transition delay-50 ${
                            isCondensed ? "bg-gray-200 text-gray-800 rounded-full" : ""
                        }`}
                    >
                        Condensed
                    </div>{" "}
                    <div onClick={()=> {
                        setIsCondensed(false);
                    }
                    }
                        className={`py-1 cursor-pointer px-4  transition delay-50 ${
                            !isCondensed ? "bg-gray-200 text-gray-800 rounded-full" : ""
                        }`}
                    >
                        Real Time
                    </div>
                </div></div>
                    <ChatMessages messages={isCondensed?condensedMessages:realTimeMessages} />
                    <div className="main-page__center__chat-area__text-input flex flex-row rounded-full overflow-hidden mx-10">
                        <input ref={inputMessageRef}
                            type={"text"}
                            className="flex-grow focus:outline-transparent focus:border-none px-5 py-2 text-xl border-none outline-none text-gray-700"
                             placeholder="Type your message here"
                             onKeyDown={(event)=>{
                                   if(event.code === "Enter"){
                                       addMessage({"message":inputMessageRef.current.value,"isUser":true});
                                   }
                             }}
            disabled={isLoading}
                        />
                        <button className="font-medium text-xl bg-gray-800 px-5 flex flex-col items-center justify-center" onClick={()=>{
                            addMessage({"message":inputMessageRef.current.value,"isUser":true});
                        }} disabled={isLoading}>
            { isLoading ? "Sending..." : "Send" }
          </button>
                    </div>
            </div>
            {/*<SettingsSideBar/>*/}
        </div>

    );
}
