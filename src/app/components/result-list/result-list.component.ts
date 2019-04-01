import { Component, Input } from '@angular/core';
import { Video } from './../../interfaces/IVideo';

@Component({
  selector: 'result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent {

  @Input() resultListInput: Array<Video>=[];
  constructor() { }

}
