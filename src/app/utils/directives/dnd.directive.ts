 
import { ContentChild, Directive, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { ResizeDirective } from 'src/app/calendar/week/components/new-event/resize.directive';
 


@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
 
@ContentChild(ResizeDirective) grabber: ResizeDirective= {} as ResizeDirective;
@HostListener('document: mousedown', ['$event'])
onMouseDown(event: MouseEvent){
  
if(event.target!=document.getElementById('grabber')){
  
  this.draggFlag=true;
 
} 
 


  
}
@HostListener('document: mousemove', ['$event'])
onMouseMove(event: MouseEvent){
  if(this.draggFlag===true){
    //this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.5')
    this.renderer.setAttribute(this.el.nativeElement, 'draggable', 'true');
    
  }else{
    this.renderer.setAttribute(this.el.nativeElement, 'draggable', 'false');
  
  }
  console.log('drageble mouse move', this.draggFlag)
}
@HostListener('document: mouseup', ['$event'])
onMouseUp(event: MouseEvent){
  this.draggFlag=false;
  //this.renderer.setAttribute(this.el.nativeElement, 'draggable', 'false');
  console.log('drageble mouse up', this.draggFlag)
}

@HostListener('dragover',['$event'])
  onMouseDragOver(item: any){
     
     item.preventDefault();
    this.draggFlag=true;
   
   
  }


@HostListener('drop',['$event'])
  onMouseDragDrop(item: any){
    this.draggFlag=false;
  }
  
private draggFlag:boolean= false;
constructor(private renderer: Renderer2, private el:ElementRef) { }

}
