const generateChunks = (input: string) => {
  return input
    .trim()
    .split(".")
    .filter((i) => i !== "");
};
