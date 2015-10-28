import {Component, View, NgFor, FORM_DIRECTIVES} from "angular2/angular2";

@Component({
    selector: 'letter-select'
})
@View({
    directives: [NgFor, FORM_DIRECTIVES],
    template: `
        <select [(ng-model)]="selectedLetter">
            <option *ng-for="#letter of letters">{{letter}}</option>
        </select>
    `
})
export class LetterSelect {
    letters: string[] = ["e", "c", "s"];
    selectedLetter: string = "e";

    constructor() {}
}
