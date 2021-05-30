import { Component, Input, OnInit } from '@angular/core';
import { Category, Entry } from 'src/app/services/CollectionService';

@Component({
  selector: 'EntryList',
  templateUrl: './EntryList.component.html',
  styleUrls: ['./EntryList.component.scss']
})
export class EntryListComponent implements OnInit {
  @Input() public entries?: Entry[] = undefined;
  @Input() public category?: Category = undefined;

  constructor() { }

  ngOnInit(): void {
    if(this.entries === undefined)
    {
      throw new Error("Invalid entries object given");
    }
  }

  ngOnChanges(){

  }
}
