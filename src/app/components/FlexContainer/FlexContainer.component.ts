import { Component, HostBinding, Input, OnInit } from '@angular/core';

export type flexDirection = undefined | 'row' | 'column';
export type flexJustification = undefined | 'flex-start' | 'flex-end' | 'center' | 'space-between';
export type flexItemAlignment = undefined | 'flex-start' | 'flex-end' | 'center' | 'stretch';
export type flexContentAlignment = undefined | 'normal' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'stretch';
export type flexWrap = undefined | 'nowrap' | 'wrap' | 'wrap-reverse';

@Component({
  selector: 'FlexContainer',
  templateUrl: './FlexContainer.component.html',
  styleUrls: ['./FlexContainer.component.scss']
})

export class FlexContainerComponent implements OnInit {
  @Input() public direction: flexDirection = undefined;
  @Input() public justify: flexJustification = undefined;
  @Input() public alignItems: flexItemAlignment = undefined;
  @Input() public alignContent: flexContentAlignment = undefined;
  @Input() public wrap: flexWrap = undefined;
  @HostBinding('style.flex-direction') private flexDirection = this.direction;
  @HostBinding('style.justify-content') private justification = this.justify;
  @HostBinding('style.align-items') private itemsAlignment = this.alignItems;
  @HostBinding('style.align-content') private contentAlignment = this.alignContent;
  @HostBinding('style.flex-wrap') private wrapContent = this.wrap;

  ngOnInit(): void {
    this.flexDirection = this.direction;
    this.justification = this.justify;
    this.itemsAlignment = this.alignItems;
    this.contentAlignment = this.alignContent;
    this.wrapContent = this.wrap;
  }
}
