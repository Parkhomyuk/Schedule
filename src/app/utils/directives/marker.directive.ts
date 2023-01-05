import { AfterViewInit, Directive, ElementRef, HostListener, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective implements OnInit , AfterViewInit{
  
 @HostListener('click',['$event'])
 onClick(event: any){
//   console.log('click type', typeof event )
//   console.log('click', event.target.children)
  
//   this.renderer.setStyle(this.el.nativeElement.children[0],'display','block');
//   if(this.el.nativeElement.children.contains(event.target)){
// console.log('this.el.nativeElement.contains(event.target) if', this.el.nativeElement.contains(event.target))
//   }else{
//     console.log('this.el.nativeElement.contains(event.target) else', this.el.nativeElement.contains(event.target))
//     this.renderer.setStyle(this.el.nativeElement.children[0],'display','none');
//   }
 }
  constructor(private vc: ViewContainerRef, private el: ElementRef, private renderer: Renderer2) { 
    
  }
 
  ngOnInit(): void {
    // this.el.nativeElement
    // console.log('xxccx',this.el.nativeElement);
    // const text=this.renderer.createText('new container')
    // this.renderer.appendChild(this.el.nativeElement,text)
    // this.renderer.setStyle(this.el.nativeElement.children[0],'display','block')
  }
  ngAfterViewInit(): void {
      
  }

}
