import { FaBeer, FaTrash } from "react-icons/fa";
import Popup from "./popup_box";
import React from "react";


export default function KnowledgeBox(props){

    const [isPopupOpen, setPopupOpen] = React.useState(false);
    const [popupTitle, setPopupTitle] = React.useState(props.newKnowledge);
    const [popupContent, setPopupContent] = React.useState(props.content);

    const handleButtonClick = (newKnowledge) => {
        setPopupTitle(newKnowledge);
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className="knowledge-side-bar__content w-10/12 py-2 bg-gray-600 px-4 rounded my-2 cursor-pointer hover:bg-gray-500 transition delay-100 flex justify-between items-center" onClick={()=>{
            handleButtonClick(props.newKnowledge);
        }}>
            <Popup
                isOpen={isPopupOpen}
                onClose={handleClosePopup}
                title={popupTitle}
                content={""}
            />
            {popupTitle}
            <div className="hover:text-red-700 transition">
                <FaTrash/>
            </div>
        </div>)
}