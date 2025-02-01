import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-firstcomp',
    templateUrl: './firstcomp.component.html',
    styleUrls: ['./firstcomp.component.css'],
    standalone: true,
    imports: [NgbCarouselModule , NgIf]
})
export class FirstcompComponent 
{
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
