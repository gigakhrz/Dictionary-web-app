export interface types {
  word: string;
  phonetic: string;
  phonetics: { audio: string; text: string }[];
  meanings: {
    synonyms: string[];
    partOfSpeech: string;
    definitions: { definition: string; example: string }[];
  }[];
  sourceUrls: string[];
}
