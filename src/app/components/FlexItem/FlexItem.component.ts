import { Component, HostBinding, Input, OnInit } from '@angular/core';

export type selfAlignment = undefined | 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline';

@Component({
  selector: 'FlexItem',
  templateUrl: './FlexItem.component.html',
  styleUrls: ['./FlexItem.component.scss']
})
export class FlexItemComponent implements OnInit 
{
  @Input() public selfAlign: selfAlignment = undefined;
  @Input() public grow?: string = undefined;

  @HostBinding('style.align-self') private selfAlignment = this.selfAlign;
  @HostBinding('style.flex-grow') private flexGrow = (this.grow !== undefined ? this.grow : "");
  
  constructor() { }

  ngOnInit(): void {
    this.selfAlignment = this.selfAlign;
    this.flexGrow = (this.grow !== undefined ? this.grow : "");
  }

}
