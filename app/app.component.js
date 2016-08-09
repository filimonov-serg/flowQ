"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var npc_component_1 = require('./comp/npc.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    //_tmp: Npc = {id: 1, name: "Limon"};
    AppComponent.prototype.selectNpc = function (e) {
        this.selectedNpc = { id: 1, name: "Limon" };
        console.log(this.selectedNpc, e);
    };
    AppComponent.prototype.addReplica = function () {
        var ans = [{
                id: 1,
                order: 1,
                text: "Answer 1"
            }, {
                id: 2,
                order: 2,
                text: "Answer 2"
            }];
        var newReplica = {
            parentNpc: this.selectedNpc,
            text: this.replicaText,
            answers: ans
        };
        console.log(newReplica);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'flow-q',
            templateUrl: './app/templates/app.html',
            directives: [npc_component_1.NpcComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map