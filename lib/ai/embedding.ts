import { embedMany } from "ai";
import { google } from "@ai-sdk/google";

const generateChunks = (input: string) => {
  return input
    .trim()
    .split(".")
    .filter((i) => i !== "");
};

export const generateEmbeddings = async (value: string) => {
  const chunks = generateChunks(value);
  const { embeddings } = await embedMany({
    model: google.textEmbeddingModel("text-embedding-004"),
    values: chunks,
  });

  return embeddings.map((e, i) => ({ content: chunks[i], embedding: e }));
};
