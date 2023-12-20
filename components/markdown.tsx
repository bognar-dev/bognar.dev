"use client"


import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
interface MarkdownProps {
    content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {


    return (
        <article className='self-center prose dark:prose-invert'>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
};

export default Markdown;
