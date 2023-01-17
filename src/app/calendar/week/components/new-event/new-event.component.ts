import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { singleData } from '../content/grid-columns/grid-columns.component';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit, singleData, AfterViewInit {

  constructor(private rendere: Renderer2, private el: ElementRef) { }
  data: any;
  
  @Input()date!: moment.Moment;
  @Input()bc!: string;
  @Input()top!: number;

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.rendere.setStyle(this.el.nativeElement.children[0], 'background-color',this.bc)
    this.rendere.setStyle(this.el.nativeElement.children[0], 'top',this.top+'px')
    console.log('data', this.el.nativeElement)
    }
    public removeMe(){
      this.rendere.removeChild(this.el.nativeElement.parentElement, this.el.nativeElement)
    }
  }

 