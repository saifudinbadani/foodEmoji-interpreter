import { useState } from "react";
import "./styles.css";

export default function App() {
  const foodEmojiDictionary = {
    "🥘": "Shallow Pan of Food",
    "🫕": "Fondue",
    "🥗": "Green Salad",
    "🍝": "Spaghetti",
    "🍥": "Fish Cake with Swirl",
    "🧆": "Falafel",
    "🥯": "Bagel",
    "🌯": "Burrito",
    "🍔": "Hamburger",
    "🥚": "Egg",
    "🍭": "Lollipop"
  };

  const foodEmojiArray = Object.keys(foodEmojiDictionary);

  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = foodEmojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this one in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = foodEmojiDictionary[emoji];
    if (meaning === undefined) {
      meaning = "We don't have this one in our database.";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>fOOd emoji interpreter</h1>
      <div className="description">
        {" "}
        input food emoji from the list manually or just tap on icon{" "}
      </div>
      <hr />
      <input onChange={emojiInputHandler} />

      <div>
        {foodEmojiArray.map(function (emoji) {
          return (
            <span
              className="emojiList"
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
            >
              {" "}
              {emoji}
            </span>
          );
        })}
      </div>

      <div className="emojiOutput"> {meaning} </div>
    </div>
  );
}
