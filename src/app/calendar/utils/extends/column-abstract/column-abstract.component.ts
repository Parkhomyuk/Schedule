import { Component, ComponentFactoryResolver, HostListener, OnInit, QueryList, Renderer2, ViewChildren, ViewContainerRef } from '@angular/core';

import * as moment from 'moment';
import { singleData } from 'src/app/calendar/week/components/content/grid-columns/grid-columns.component';
import { NewEventComponent } from 'src/app/calendar/week/components/new-event/new-event.component';
import { UnsubComponent } from 'src/app/utils/components/unsub/unsub.component';
import { MarkerDirective } from 'src/app/utils/directives/marker.directive';

@Component({
  selector: 'app-column-abstract',
  templateUrl: './column-abstract.component.html',
  styleUrls: ['./column-abstract.component.scss']
})
export class ColumnAbstractComponent extends UnsubComponent implements OnInit {
  public childComponentRef: any=null;
  @ViewChildren(MarkerDirective, { read: ViewContainerRef }) appMarker!: QueryList<ViewContainerRef>;
  @ViewChildren('viewContainerRef', { read: ViewContainerRef })  VCR!: QueryList<ViewContainerRef>;
  @HostListener('mousedown',['$event'])
  mousedown(event:any): void{
     
    let arr=this.appMarker?.toArray();
     
    if(this.childComponentRef==null){
      for(let i=0;i<this.appMarker.length;i++){
        if(arr[i].element.nativeElement===event.target){
          
          let componentFactory=this.factory.resolveComponentFactory(NewEventComponent)
          this.childComponentRef = this.VCR.toArray()[i].createComponent<singleData>(componentFactory);
          
            this.childComponentRef.instance.bc='green'
            this.childComponentRef.instance.date=moment();
          
            this.childComponentRef.instance.top=this.roundUpHour(event.offsetY,window.innerHeight,40)
            
          
        }
      
      }
     
      
    }else{           
      if(!this.childComponentRef.location.nativeElement.contains(event.target)){
        this.renderer.removeChild(this.childComponentRef.location.nativeElement.parentElement, this.childComponentRef.location.nativeElement)
        this.childComponentRef=null;
      }       
    }
    }
  constructor(public renderer: Renderer2, public factory: ComponentFactoryResolver ) { 
    super();
  }

  ngOnInit(): void {
    
  }
  public roundUpHour(pointY: number, parentHeigh: number, step: number){
    let hour=Math.floor(pointY/step);
    return hour*step+hour*0.5;
  }

}
