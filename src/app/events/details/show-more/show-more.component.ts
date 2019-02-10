import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss']
})
export class ShowMoreComponent implements OnInit {
  show: boolean;
  @Input() text: string;
  @ViewChild('scheduler') scheduler: ElementRef;

  constructor() {
    this.show = true;
  }

  ngOnInit() {
    this.scheduler.nativeElement.style.height = '11vw';
  }

  onToggleShow() {
    this.show = !this.show;
    this.scheduler.nativeElement.style.height = this.scheduler.nativeElement.style.height === '11vw' ? 'auto' : '11vw';
  }
}
