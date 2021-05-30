import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'Footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.scss']
})
export class FooterComponent implements OnInit {

  public copyrightYear = formatDate(new Date(), 'yyyy', 'en');
  constructor() { }

  ngOnInit(): void {
    if(this.copyrightYear !== "2021")
      this.copyrightYear = `2021 - ${this.copyrightYear}`
  }

}
