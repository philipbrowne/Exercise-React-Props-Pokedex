const choice = (items) => {
  const idx = Math.floor(Math.random() * items.length);
  return items[idx];
};

export default choice;
