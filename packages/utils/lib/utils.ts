const withEmoji = (myString: string) => {
  const emojis = ["😂", "💪", "💩", "🐦"];
  return `${
    emojis[Math.floor(Math.random() * (emojis.length - 1))]
  }: ${myString}`;
};

const withWord = (myString: string) => {
  const words = ["Hello", "World", "Foo", "Bar"];
  return `${
    words[Math.floor(Math.random() * (words.length - 1))]
  }: ${myString}`;
};

export { withEmoji, withWord };
