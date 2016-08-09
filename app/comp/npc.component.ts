import {Component} from '@angular/core';

@Component({
	selector: 'npc',
	template: '<div>{{name}}</div>'
})
export class NpcComponent {
	id: number;
	name: string;
}