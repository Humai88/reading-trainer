import { v4 } from "uuid";

export type CellsType = {
  id: string;
  content: string;
};

export const cells: CellsType[] = [];
for (let i = 0; i <= 35; i++) {
  cells.push({
    id: v4(),
    content: "",
  });
}
export const vowels = ["А", "Е", "Ё", "И", "О", "У", "Ы", "Э", "Ю", "Я"];
export const vowelsCells: CellsType[] = [];
for (let i = 0; i <= vowels.length - 1; i++) {
  vowelsCells.push({
    id: v4(),
    content: vowels[i],
  });
}

export const consonants = [
  "Б",
  "В",
  "Г",
  "Д",
  "Ж",
  "З",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "П",
  "Р",
  "С",
  "Т",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
];
export const consonantsCells: CellsType[] = [];
for (let i = 0; i <= consonants.length - 1; i++) {
  consonantsCells.push({
    id: v4(),
    content: consonants[i],
  });
}
export const marks = ["Ь", "Ъ"];
export const marksCells: CellsType[] = [];
for (let i = 0; i <= marks.length - 1; i++) {
  marksCells.push({
    id: v4(),
    content: marks[i],
  });
}

export const letters = [...vowelsCells, ...consonantsCells, ...marksCells];
