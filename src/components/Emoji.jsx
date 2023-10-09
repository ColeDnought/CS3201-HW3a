import React from "react";

function createEmojiCard(entry) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={entry.name}>
          {entry.emoji}
        </span>
        <span>{entry.name}</span>
      </dt>
      <dd>{entry.meaning}</dd>
    </div>
  );
}

export default createEmojiCard;
