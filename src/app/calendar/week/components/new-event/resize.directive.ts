 
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
    else if(this.el.nativeElement.clientHeight>=10 ){
      if ((this.el.nativeElement.clientHeight+this.el.nativeElement.offsetTop)<=this.el.nativeElement.offsetParent.parentElement.clientHeight){
        
        this.resizer(event.clientY - this.oldY);
      this.oldY = event.clientY;
      }
      
      
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

  @HostListener('touchend', ['$event'])
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
     //this.draggingStart=event.offsetY
    }
    
    this.draggingStart=event.pageY
    
  }
  @HostListener('touchmove', ['$event'])
  @HostListener('dragend',['$event'])
  onMouseDragEnd(item: MouseEvent){
   // item.preventDefault();
    this.grabber=false;     
   // console.log('item parent', item)
    this.renderer.setStyle(this.el.nativeElement, 'top',Number(this.el.nativeElement.style.top.slice(0,-2))-(this.draggingStart- item.pageY)+'px');
    if(this.dragger==true){
       
       
    this.renderer.setStyle(this.el.nativeElement, 'top',this.el.nativeElement.offsetTop  +'px');      
    }
    this.dragger=false;  
      
    
     
    
    
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('document: dragstart', ['$event'])
  onMouseDrag(event: MouseEvent){
    this.draggingStart=event.clientY;
   // console.log('start event.offsetY', event.clientY)
  }  

  @HostListener('dragenter',['$event'])
  onMouseDragDrop(item: any){
   
    console.log('drag enter', item)
    
     
  }
  @HostListener('dragover',['$event'])
  onMouseDragOver(item: MouseEvent){
    
     //console.log('dragover', item.clientY);
     
  }
  
  constructor(public el: ElementRef, private renderer: Renderer2) { }

 

}
