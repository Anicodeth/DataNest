
export default function ChatMessage(props){
    return(
        <div className={`prompt-message py-5 w-full flex justify-center ${props.isUser?"isUser":""}`}>
            <div className="prompt-message__message w-5/12 flex gap-4 relative">
                <div className="avatar absolute -top-2">
                    <img src={props.isUser?"https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg":"./images/ai2.png"} alt={props.isUser?"User":"AI"} className="avatar__image w-10 rounded-full"/>
                </div>
                <p className="ml-20">{props.message}</p>
            </div>
        </div>
    );
}
