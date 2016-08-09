import {Component} from '@angular/core';
import {Npc} from './model/npc';
import {Replica, Answer} from './model/replica';
import {NpcComponent} from './comp/npc.component';

@Component({
	selector: 'flow-q',
	templateUrl: './app/templates/app.html',
	directives: [NpcComponent]
})
export class AppComponent {
	selectedNpc: Npc;
	replicaText: string;

	//_tmp: Npc = {id: 1, name: "Limon"};

	selectNpc(e) {
		this.selectedNpc = {id: 1, name: "Limon"};	
		console.log(this.selectedNpc, e);
	}
	
	addReplica() {
		let ans: Answer[] = [{
			id: 1,
			order: 1,
			text: "Answer 1"
		},{
			id: 2,
			order: 2,
			text: "Answer 2"
		}];

		let newReplica: Replica = {
			parentNpc: this.selectedNpc,
			text: this.replicaText,
			answers: ans
		};
		console.log(newReplica);
	}
}