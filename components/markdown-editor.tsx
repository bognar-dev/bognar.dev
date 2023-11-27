"use client"
import { useState } from "react";
import React from 'react';
import MarkdownView from "react-showdown";

interface MarkdownEditorProps {
    content?: string;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ content }) => {
    const [textareaValue, setTextareaValue] = useState("");

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(event.target.value);
    };

    return (
        <div>
            <textarea value={textareaValue} onChange={handleTextareaChange} />
            <div className="prose">
            <MarkdownView markdown={textareaValue} />
            </div>
        </div>
    );
};


export default MarkdownEditor;


