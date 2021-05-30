import { Component, HostListener, OnInit } from '@angular/core';
import { Category, CollectionService, Entry } from './services/CollectionService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public entries: Entry[] = [];
  public categories: Category[] = [];
  public selectedCategory?: Category;
  public isMobile: boolean = true;
  public width: number = 0;
  name = 'Angular';
  events: string[] = [];
  opened: boolean = true;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor(private collectionService: CollectionService) { }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    let width = event.target.innerWidth;
    this.isMobile = (width <= 600);
    this.width = width;
  }
  
  ngOnInit()
  {
    this.width = window.innerWidth;//window.screen.width;
    this.isMobile = (window.innerWidth <= 600);
    this.collectionService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  ngOnChange()
  {
  }

  onSelectionChanged(category: Category)
  {
    this.collectionService.getEntries(category).subscribe((response) => {
      this.selectedCategory = category;
      this.entries = response;
    })
  }
}
