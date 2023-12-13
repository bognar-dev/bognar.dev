"use client"


import ReactMarkdown from 'react-markdown';
interface MarkdownProps {
    content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {


    return (
        <article className='self-center prose dark:prose-invert'>
            <ReactMarkdown
            >
                {content}
            </ReactMarkdown>
        </article>
    );
};

export default Markdown;
