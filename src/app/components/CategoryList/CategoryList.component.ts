import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/services/CollectionService';

@Component({
  selector: 'CategoryList',
  templateUrl: './CategoryList.component.html',
  styleUrls: ['./CategoryList.component.scss']
})
export class CategoryListComponent implements OnInit 
{
  @Input() public categories: Category[] = [];
  @Output() onSelectedCategory: EventEmitter<Category> = new EventEmitter<Category>();

  ngOnInit()
  {
    
  }

  onSelectionChanged(category: Category)
  {
    this.onSelectedCategory.emit(category);
  }
}
