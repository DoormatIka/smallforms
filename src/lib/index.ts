// place files you want to import through the `$lib` alias in this folder.
import type { RecordModel } from "pocketbase";

export type Survey = RecordModel & {title: string, questions: string[], password: string};
export type Question = RecordModel & {answers: string[], question: string};
export type Answer = RecordModel & {answer: string};
