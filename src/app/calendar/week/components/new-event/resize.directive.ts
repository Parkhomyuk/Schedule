import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {

  height = 0;
  y = 0;
  oldY = 0;
  grabber = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.grabber) {
        return;
    }
    this.resizer(event.clientY - this.oldY);
    this.oldY = event.clientY;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.grabber = false;
  }

  resizer(offsetY: number) {
    this.renderer.setStyle(this.el.nativeElement.parentElement, 'height',this.height + offsetY+'px')
    this.height += offsetY;
  }


  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if(this.el.nativeElement.contains(event.target)){
      this.grabber = true;
      this.height=this.el.nativeElement.parentElement.clientHeight;
      this.oldY = event.clientY;
    }
   
  }
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  onResize(){}

}
