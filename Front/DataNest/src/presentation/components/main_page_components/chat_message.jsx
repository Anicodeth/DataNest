
export default function ChatMessage(props){
    return(
        <div className={`prompt-message py-5 w-full flex justify-center  ${props.isUser?"bg-gray-600":""}`}>
            <div className="prompt-message__message w-5/12 flex items-center gap-4">
                <div className="avatar">
                    <img src={props.isUser?"https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg":"./images/ai.png"} alt={props.isUser?"User":"AI"} className="avatar__image w-10"/>
                </div>
                <p>{props.message}</p>
            </div>
        </div>
    );
}