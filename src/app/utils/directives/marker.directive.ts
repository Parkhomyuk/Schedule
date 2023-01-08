import { AfterViewInit, Directive, ElementRef, HostListener, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective implements OnInit , AfterViewInit{
  
 @HostListener('click',['$event'])
 onClick(event: any){
 console.log('click type', event.offsetY )
 console.log('click type el', this.el.nativeElement );

 const div=this.renderer.createElement('div');
 this.renderer.setStyle(div,'width', '80%')
 this.renderer.setStyle(div,'height', '400px')
 this.renderer.setStyle(div,'background-color', 'lightblue')
 this.renderer.setStyle(div,'position', 'absolute')
 this.renderer.setStyle(div,'border-radius', '4px');
 this.renderer.setStyle(div,'border', '0.5px solid white');
 this.renderer.setStyle(div,'top', event.offsetY+'px')
 //this.renderer.appendChild(this.el.nativeElement, div);
//   console.log('click', event.target.children)
  
//   this.renderer.setStyle(this.el.nativeElement.children[0],'display','block');
//   if(this.el.nativeElement.children.contains(event.target)){
// console.log('this.el.nativeElement.contains(event.target) if', this.el.nativeElement.contains(event.target))
//   }else{
//     console.log('this.el.nativeElement.contains(event.target) else', this.el.nativeElement.contains(event.target))
//     this.renderer.setStyle(this.el.nativeElement.children[0],'display','none');
//   }
 }
  constructor(private vc: ViewContainerRef, private el: ElementRef, private renderer: Renderer2, public _viewContainerRef: ViewContainerRef) { 
    
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
