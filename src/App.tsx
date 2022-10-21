import React, { useState } from "react";
import { Remarkable } from 'remarkable';
var md = new Remarkable();

//queda configurar el md object

function App() {
  const [input, setInput] = useState("");

  const handleChangeText = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();
    console.log(evt.currentTarget.value);
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
            className="bg-[#222222] text-gray-300 resize-none min-h-[400px] border-solid border-2 outline-none p-2 transition-colors focus:border-green-100"
          />
        </div>
      </div>
      <div className="flex flex-col w-2/4 p-8 box-border">
        <h1 className="text-gray-300 text-4xl mb-4">Markdown</h1>
        <div className="bg-gray-500 ">
          <p className="break-words w-full box-border min-h-[400px] rounded-sm p-2">
            {md.render(input)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
