import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { ResultListElementComponent } from './components/result-list-element/result-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    ResultListComponent,
    ResultListElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
