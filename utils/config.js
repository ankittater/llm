/**
 * Configuration constants for the resume-qa application
 */

// Local embedding model (Xenova/transformers.js implementation)
export const EMBEDDING_MODEL = "Xenova/all-MiniLM-L6-v2";

// OpenAI models
export const OPENAI_CHAT_MODEL = "gpt-3.5-turbo-instruct";

// Vectorization constants
export const CHUNK_SIZE = 1000;
export const CHUNK_OVERLAP = 200;

// Search parameters
export const DEFAULT_TOP_K = 15;
export const MIN_SIMILARITY_SCORE = 0.1;

// Text similarity specific
export const TEXT_MIN_SIMILARITY_SCORE = 0.1;

// Resume data path
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const RESUME_DATA_PATH = path.join(__dirname, "..", "config", "resume-data.json");

// Other configuration constants can be added here
