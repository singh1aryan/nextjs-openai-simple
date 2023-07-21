import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const blogOptimizer = `
Act as an expert copywriter. 
I am going to give you a sentence in next message.
Change that to something professional
`;

export default function Home() {

  const [content, setContent] = useState('');
  // const [maal, setMaal] = useState('');

  async function createBlog(prompt, newContent) {
    console.log("calling chat gpt");

    // https://api.openai.com/v1/chat/completions
    // setLoading(true);
    try {
      const response = await fetch(process.env.chatGpt, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{
            "role": "user",
            "content": prompt
          }, {
            "role": "user",
            "content": newContent
          }]

        })
      });

      const data = await response.json();
      const maal = data.choices[0].message.content;

      // setLoading(false);
      console.log('success')
      setContent(maal);

    } catch (error) {
      console.error(error.message);
      // setLoading(false);
      setContent("ERROR while generating, check something.");
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Hello
      </div>

      <button onClick={async () => { await createBlog(blogOptimizer, "My name is aryan, help me with next js"); }}>

        Click me for API

      </button>

      {content}
    </main>
  )
}
