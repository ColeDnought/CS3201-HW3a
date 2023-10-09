import React from "react";
import emojipedia from "../emojipedia";
import createEmojiCard from "./Emoji";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmojiCard)}</dl>
    </div>
  );
}

export default App;
