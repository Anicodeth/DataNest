import React, { useState } from 'react';
import {FaX} from "react-icons/fa6";

const Popup = ({ isOpen, onClose, title, content }) => {
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedContent, setEditedContent] = useState(content);
    const [isEditing, setIsEditing] = useState(true);
    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        // You can add logic here to save the edited title and content
        // For simplicity, we'll just update the component state
        title = editedTitle;
        content = editedContent;
        setIsEditing(false);
    };

    const handleDeleteClick = () => {
        onClose();
    };

    return (
        <div
            className={`${
                isOpen ? 'block' : 'hidden'
            } fixed overflow-y-auto bg-gray-900 z-50 flex shadow shadow-gray-600 rounded top-20`}
        >
            <div className="bg-gray-800 px-10 py-12 rounded-lg max-w-md w-full">
                <button
                    className="absolute top-3 right-5 text-gray-100 hover:text-red-500"
                    onClick={onClose}
                >
                    <FaX />
                </button>
                {(
                    <div>
                        <input
                            type="text"
                            className="rounded w-full mb-2 p-2 bg-gray-700 outline-none"
                            value={isEditing?editedTitle:title}
                            onChange={(e) => setEditedTitle(e.target.value)}
                        />
                        <textarea
                            className="rounded w-full p-2 bg-gray-700 h-60 outline-none"
                            value={isEditing?editedContent:content}
                            onChange={(e) => setEditedContent(e.target.value)}
                        />
                        <div className="mt-2">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                                onClick={handleSaveClick}
                            >
                                Save
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                                onClick={handleDeleteClick}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Popup;
