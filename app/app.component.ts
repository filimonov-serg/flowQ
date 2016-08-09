import {Component} from '@angular/core';
import {NpcComponent} from './comp/npc.component';

@Component({
	selector: 'flow-q',
	templateUrl: './app/templates/app.html',
	directives: [NpcComponent]
})
export class AppComponent {
	npc: NpcComponent = {
		id: 1,
		name: "Test npc"
	};
}