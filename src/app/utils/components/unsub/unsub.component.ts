import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-unsub',
  templateUrl: './unsub.component.html',
  styleUrls: ['./unsub.component.scss']
})
export class UnsubComponent implements OnInit, OnDestroy {
  public subscriber: Subscription[]=[]
  constructor() { }
  

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log('unsubscibe', this.subscriber)
    this.subscriber.forEach(item=>item.unsubscribe())
  }

}
