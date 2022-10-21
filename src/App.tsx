import React, { useState } from "react";
import { Remarkable } from "remarkable";

function App() {
  const [input, setInput] = useState("");

  const markdown = () => {
    const md = new Remarkable("full");
    md.set({
      html: true,
      breaks: true,
    });
    return {
      __html: md.render(input),
    };
  };

  const handleChangeText = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();
    setInput(evt.currentTarget.value);
  };

  return (
    <div className="container flex justify-center">
      <div className="flex flex-col w-2/4 p-8 box-border">
        <label htmlFor="input" className="text-gray-300 text-4xl mb-4">
          Input
        </label>
        <div className="flex">
          <textarea
            id="input"
            name="input"
            value={input}
            onChange={handleChangeText}
            className="bg-[#222222] text-gray-300 resize-none min-h-[400px] w-full border-solid border-2 outline-none p-2 transition-colors focus:border-green-100"
          />
        </div>
      </div>
      <div className="flex flex-col w-2/4 p-8 box-border">
        <h1 className="text-gray-300 text-4xl mb-4">Markdown</h1>
        <div
          className="bg-gray-500 break-words w-full box-border min-h-[400px] rounded-sm p-2 [&_h1]:text-4xl [&_h1]:font-medium [&_h2]:text-3xl [&_h2]:font-medium [&_h3]:text-2xl [&_h3]:font-medium"
          dangerouslySetInnerHTML={markdown()}
        ></div>
      </div>
    </div>
  );
}

export default App;
