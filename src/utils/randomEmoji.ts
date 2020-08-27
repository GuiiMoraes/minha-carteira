const emojis = ['🤑', '😆', '😉', '😍', '😎', '🤩'];

const randomEmoji = (): string => {
  const index = Math.floor(Math.random() * emojis.length);

  return emojis[index];
};

export default randomEmoji;
