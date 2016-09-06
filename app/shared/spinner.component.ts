import { Component, Input } from '@angular/core';

@Component({
    selector: 'spinner',
    template: `
        <i *ngIf="visible" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    `
})
export class SpinnerComponent {
    @Input('visible') visible = true;
}