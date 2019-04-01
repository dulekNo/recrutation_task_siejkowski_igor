import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  value: string = '';

  @Output() searchValue = new EventEmitter<string>();


  constructor() { }

  onEnter(value: string): void {
    this.searchValue.emit(value);
  }

}
