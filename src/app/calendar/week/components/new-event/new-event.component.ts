import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { singleData } from '../content/grid-columns/grid-columns.component';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit, singleData, AfterViewInit {

  constructor(private rendere: Renderer2, private el: ElementRef) { }
  
  @Input() data!: string;

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  this.rendere.setStyle(this.el.nativeElement.children[0], 'background-color',this.data)
  console.log('data', this.el.nativeElement)
  }

}
