"use client";

import { Tabs } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { Copy } from "lucide-react"; // Import copy icon for the button
import Prism from "prismjs";
import "prismjs/themes/prism-funky.css";

export function TabsDemo() {
  const tabs = [
    {
      title: "HTML",
      value: "HTML",
      content: (
        <div className="w-100% overflow-hidden relative h-full rounded-2xl p-10 text-lg md:text-lg sm:text-sm font-bold text-yellow-300 bg-gradient-to-br  from-black to-zinc-950">
          <p>HTML</p>
          <DummyContent code={htmlCode} language="html" />
        </div>
      ),
    },
    {
      title: "JAVASCRIPT",
      value: "JAVASCRIPT",
      content: (
        <div className="w-100% overflow-hidden relative h-full rounded-2xl p-10 text-sm md:text-sm font-bold text-yellow-300 bg-gradient-to-br from-black to-zinc-950">
          <p>JAVASCRIPT</p>
          <DummyContent code={javascriptCode} language="javascript" />
        </div>
      ),
    },
    {
      title: "REACT",
      value: "REACT",
      content: (
        <div className="w-100% overflow-hidden relative h-full rounded-2xl p-10 text-sm md:text-sm font-bold text-yellow-300 bg-gradient-to-br from-black to-zinc-950">
          <p>REACT</p>
          <DummyContent code={reactCode} language="jsx" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[30rem] md:h-[35rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  const [copied, setCopied] = useState(false);

  // Re-initialize Prism syntax highlighting on component mount or update
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting to all code blocks
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(code); // Copy code to clipboard
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
  };

  return (
    <div className="relative">
      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-xs md:text-sm font-mono text-gray-200">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-700 text-white p-1 rounded-md flex items-center space-x-1 text-xs hover:bg-yellow-500 transition-colors"
      >
        <Copy className="w-4 h-4" />
        <span>{copied ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  );
};

// Code examples for HTML, JavaScript, and React
const htmlCode = `
<form action="https://api-4forms.vercel.app/YOUR_API_KEY_HERE/forms/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>
  
  <button type="submit">Submit</button>
</form>
`;

const javascriptCode = `
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const data = new FormData(form);
  
  fetch('https://api-4forms.vercel.app/YOUR_API_KEY_HERE/forms/submit', {
    method: 'POST',
    body: data
  })
  .then(response => response.json())
  .then(data => {
    console.log('Form submitted successfully:', data);
  })
  .catch(error => {
    console.error('Error submitting form:', error);
  });
});
`;

const reactCode = `
import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('https://api-4forms.vercel.app/YOUR_API_KEY_HERE/forms/submit', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form submitted successfully:', data);
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}
`;
