import React, { useState } from "react";
import Input from "./components/Input";
import Markdown from "./components/Markdown";

interface AppState {
  input: string
}

function App() {
  const [input, setInput] = useState<AppState["input"]>("# Welcome to Marksite :)\n## Try to write something.\n### Come on, don't think so much. Try it.");

  const handleChangeText = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    setInput(evt.currentTarget.value);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-center md:container">
      <Input input={input} handleChangeText={handleChangeText} />
      <Markdown input={input} />
    </div>
  );
}

export default App;