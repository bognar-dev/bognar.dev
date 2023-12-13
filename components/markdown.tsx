"use client"

import React, { Fragment } from 'react';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeReact, { Options } from 'rehype-react';
import { unified } from 'unified';

import { reporter } from 'vfile-reporter'
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
