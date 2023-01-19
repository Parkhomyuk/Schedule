import { AfterViewInit, Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import * as moment from 'moment'; 
@Directive({
  selector: '[timeDetector]'
})
export class TimeDetectorDirective implements OnInit,AfterViewInit ,OnDestroy {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
     
  }
  
  interval: any=0;
  ngOnInit(): void {}
    
  ngAfterViewInit(): void {
    this.detectTime()
     this.interval=setInterval(()=>{
      this.detectTime()
     }, 60000)
  }
  detectTime(){
    
    let minute=this.el.nativeElement.offsetParent.clientHeight/1440;
    const nowMinutes=moment().hour()*60+moment().minute();
     
    this.renderer.setStyle(this.el.nativeElement,'top', nowMinutes*minute+'px');
  }

  ngOnDestroy(): void {
   if(this.interval>0){
    clearInterval(this.interval)
   }
  }

}
