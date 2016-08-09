import {Component, Input} from '@angular/core';
import {Npc} from '../model/npc';


@Component({
	selector: 'npc',
	template: '<div *ngIf="npc">{{npc.name}}</div>'
})
export class NpcComponent {
	@Input()
	npc: Npc;
}