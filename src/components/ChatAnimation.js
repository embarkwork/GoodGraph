'use client';

import { useState, useEffect, useRef } from 'react';

const messages = [
  {
    sender: 'GG',
    content: `Good morning Francis! I've been connecting some interesting dots overnight that I think you'll want to see.

Excellent news from our food security portfolio:
- Our portfolio is reaching 45,000 families (15% above target)
- Alameda Food Bank's innovations are driving exceptional results

But there's also an emerging situation we should discuss. Would you like the good news or the strategic opportunity first?`,
    delay: 0,
  },
  {
    sender: 'Francis',
    content: "What about the strategic opportunity you mentioned?",
    delay: 2000,
  },
  {
    sender: 'GG',
    content: `Yes, this needs attention. I've been analyzing recent census data alongside our coverage maps and noticed something concerning in East Oakland:
- 15% increase in food insecurity
- Only one grantee operating in the area
- 3,000 eligible families currently underserved

But here's the opportunity I've identified:
1. A new USDA matching grant program launching next month
2. Potential for technology sharing with Alameda Food Bank

I noticed this aligns perfectly with the board's interest in tech-enabled solutions. Would you like me to prepare a brief for next week's board meeting?`,
    delay: 4000,
  },
  {
    sender: 'Francis',
    content: "Yes, please prepare a brief for next week's board meeting.",
    delay: 2000
  },
  {
    sender: 'GG',
    content: "I've prepared a draft for you. I'll send it over shortly.",
    delay: 2000
  },
  {
    sender: 'GG',
    content: "Here's that draft for you to review.",
    delay: 2000,
    has_artifact: true,
    artifact: {
      title: "William H. Grant Q4 2024 - Board Brief",
      preview: `EXECUTIVE SUMMARY

Food Security Initiative - East Oakland Expansion
Prepared by GoodGraph AI for WHG Board Review

...
    `
    }
  }
];

export default function ChatAnimation() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    let currentIndex = -1;

    const showNextMessage = () => {
      if (currentIndex < messages.length) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages(prev => [...prev, messages[currentIndex]]);
          currentIndex++;
          if (currentIndex !== messages.length - 1) {
            setTimeout(showNextMessage, messages[currentIndex].delay);
          }
        }, 1000);
      }
    };

    showNextMessage();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [visibleMessages, isTyping]);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-4 bg-gradient-to-r from-primary/30 via-primary-light/30 to-accent/30 dark:from-primary/30 dark:via-primary-light/30 dark:to-accent/30 border-b border-gray-200 dark:border-gray-700 relative backdrop-blur-sm">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce-gentle" />
            <div className="w-3 h-3 bg-primary-light rounded-full animate-bounce-gentle" style={{ animationDelay: '-0.2s' }} />
            <div className="w-3 h-3 bg-accent rounded-full animate-bounce-gentle" style={{ animationDelay: '-0.4s' }} />
          </div>
          <div className="text-sm pl-3 font-medium font-mono text-gray-700 dark:text-gray-200">
            GoodGraph AI
          </div>
        </div>
      </div>
      <div ref={chatContainerRef} className="p-4 h-[500px] overflow-y-auto space-y-4 scroll-smooth">
        {visibleMessages?.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'Francis' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.sender === 'Francis'
                  ? 'bg-gray-100/60 dark:bg-gray-700/60'
                  : 'bg-gray-100 dark:bg-gray-700'
              } shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="font-semibold mb-1 flex items-center gap-2">
                {message.sender === 'GG' && (
                  <div className="w-2 h-2 rounded-full bg-quirky-yellow animate-pulse" />
                )}
                {message.sender}
              </div>
              <div className="whitespace-pre-wrap">{message.content}</div>
              {message.has_artifact && message.artifact && (
                <div className="mt-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="p-3 bg-gradient-to-r from-quirky-purple/5 via-primary/5 to-accent/5 dark:from-quirky-purple/10 dark:via-primary/10 dark:to-accent/10 border-b border-gray-200 dark:border-gray-600 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-quirky-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {message.artifact.title}
                      </span>
                    </div>
                    <button 
                      className="ml-4 p-1 text-quirky-purple hover:text-quirky-pink dark:text-quirky-pink dark:hover:text-quirky-purple rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                      title="Download"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-3 text-sm text-gray-600 dark:text-gray-400 font-mono whitespace-pre-wrap">
                    {message.artifact.preview}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl shadow-sm">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-primary-grey rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-primary-grey rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-primary-grey rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 