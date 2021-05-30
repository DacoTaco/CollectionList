import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Category 
{
    Id: number;
    Description: string;
}

export interface Entry 
{
    Name: string;
    BoxName?: string;
    InfoUrl?: string;
    Available?: string;
    Remarks?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CollectionService 
{
  constructor(private httpClient: HttpClient) { }

  getCategories()
  {
    return this.httpClient.get<Category[]>("./api/?categories");
  }

  getEntries(category: Category)
  {
    return this.httpClient.get<Entry[]>(`./api/?list=${category.Id}`);
  }
}