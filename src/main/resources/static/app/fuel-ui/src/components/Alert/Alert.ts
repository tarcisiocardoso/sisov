import {Component, ElementRef, Input, Output, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'alert',
    styleUrls: ['/app/fuel-ui/src/components/Alert/Alert.css'],
    templateUrl: '/app/fuel-ui/src/components/Alert/Alert.html',
    directives: [CORE_DIRECTIVES]
})
export class Alert {
    private _el:HTMLElement;
    @Input() displayed: boolean = false;
    @Input() closeButton: boolean = true;
    @Input() type: string = 'success';
    @Output() displayedChange = new EventEmitter<any>();

    constructor(el: ElementRef){
        this._el = el.nativeElement;
    }

    getElement(): HTMLElement{
        return this._el;
    }

    close():void{
        this.displayed = false;
        this.displayedChange.next(null);
    }
}

export var ALERT_PROVIDERS = [
    Alert
];