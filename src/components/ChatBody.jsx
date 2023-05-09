import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

function ChatBody({ chat }) {
  const aiStyle =
    "bg-white bg-opacity-20 backdrop-blur-lg dropshadow-md mr-auto";

  const parent = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  //for scrolling bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);
  return (
    <div>
      <div className="flex flex-col gap-4" ref={parent}>
        {chat.map((message, i) => {
          return (
            <div
              key={i}
              className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 max-w-[80%] py-3 ${
                message.sender === "ai" && aiStyle
              }`}
            >
              <pre className="whitespace-pre-wrap">
                <span>{message.message}</span>
              </pre>
            </div>
          );
        })}

        <div ref={bottomRef} className="h-3"></div>
      </div>
    </div>
  );
}

export default ChatBody;
