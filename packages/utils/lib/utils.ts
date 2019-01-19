const withEmoji = (myString: string) => {
	const emojis = [ '😂', '💪', '💩', '🐦' ];
	return `${emojis[Math.floor(Math.random() * (emojis.length - 1))]}: ${myString}`;
};

export { withEmoji };
