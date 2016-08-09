import {Npc} from './npc';

export class Replica {
	parentNpc: Npc;
	text: string;
	answers: Answer[];
}

export class Answer {
	id: number;
	order: number;
	text: string;
}