 
import { ContentChild, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {
@ContentChild('grabberEl') grabberEl: ElementRef= {} as ElementRef;
  height = 0;
  y = 0;
  oldY = 0;
  private draggingStart: number=0
  private draggingEnd: number=0
  private grabber: boolean = false;
  private dragger: boolean=false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
     
    if (!this.grabber) {
        return;
    }
    else if(this.el.nativeElement.clientHeight>=10){
      this.resizer(event.clientY - this.oldY);
      this.oldY = event.clientY;
    } else{
      this.renderer.setStyle(this.el.nativeElement, 'height', '10px')
    }
    
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
   // console.log('up event.offsetY', event.clientY)
    this.grabber = false;
    this.dragger=false;
    
     
  }

  resizer(offsetY: number) {
     
    this.renderer.setStyle(this.el.nativeElement, 'height',this.height + offsetY+'px')
    this.height += offsetY;
  }


  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {    
   
    if(this.grabberEl.nativeElement.contains(event.target)){
      this.grabber = true;
      this.height=this.el.nativeElement.clientHeight;
      this.oldY = event.clientY;
      this.renderer.setAttribute(this.el.nativeElement, 'draggable','false')
    }else if(this.el.nativeElement.contains(event.target)){
      this.dragger=true;
      this.renderer.setAttribute(this.el.nativeElement, 'draggable','true')
     this.draggingStart=event.offsetY
    }
    
    this.draggingStart=event.clientY
    
  }
  @HostListener('dragend',['$event'])
  onMouseDragEnd(item: MouseEvent){
    item.preventDefault();
    this.grabber=false;     
   // console.log('item parent', item)
    this.renderer.setStyle(this.el.nativeElement, 'top',Number(this.el.nativeElement.style.top.slice(0,-2))-(this.draggingStart- item.clientY)+'px');
    if(this.dragger==true){
       
       
    this.renderer.setStyle(this.el.nativeElement, 'top',this.el.nativeElement.offsetTop  +'px');      
    }
    this.dragger=false;  
      
    
     
    
    
  }
  @HostListener('document: dragstart', ['$event'])
  onMouseDrag(event: MouseEvent){
    this.draggingStart=event.clientY;
   // console.log('start event.offsetY', event.clientY)
  }  

  // @HostListener('drop',['$event'])
  // onMouseDragDrop(item: any){
  //   item.preventDefault();
  //   this.grabber=false;
    
    
  //   if(!this.dragger){
  //     this.renderer.setStyle(this.el.nativeElement, 'top',item.clientY+'px');
      
  //   }
  //   this.dragger=false;
     
     
  // }
  @HostListener('dragover',['$event'])
  onMouseDragOver(item: MouseEvent){
    
     //console.log('dragover', item.clientY);
     
  }
  
  constructor(public el: ElementRef, private renderer: Renderer2) { }

 

}
