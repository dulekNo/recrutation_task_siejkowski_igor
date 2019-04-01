import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { VideoService } from './services/video-service/video.service'
import { Video } from './interfaces/IVideo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('searchingBackground', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
    ]),
    trigger('searchingInput', [
      state('open', style({
        height: '100vh',
      })),
      state('closed', style({
        height: 'auto',
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
    ]),
  ]
})
export class AppComponent {
  private title: string = 'recruitment-project';
  public isOpen: boolean = true;
  public searchValue: string;
  public resultList: Array<Video> = [];

  constructor(private videoService: VideoService) { }

  handler(value): void {
    this.isOpen = false;
    this.searchValue = value;
    this.videoService.getVideo(this.searchValue).subscribe(data => {
      this.resultList.push(...data);
    });
  }
}
