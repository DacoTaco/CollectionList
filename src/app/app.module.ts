import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { CategoryListComponent, EntryListComponent, HeaderComponent, FooterComponent, LineComponent, FlexContainerComponent, FlexItemComponent } from './components';

@NgModule({
  declarations: [
    CategoryListComponent,
    HeaderComponent,
    LineComponent,
    FlexContainerComponent,
    FlexItemComponent,
    EntryListComponent,
    FooterComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
