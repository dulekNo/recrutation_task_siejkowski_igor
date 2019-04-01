import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Video } from './../../interfaces/IVideo';


@Component({
  selector: 'result-list-element',
  templateUrl: './result-list-element.component.html',
  styleUrls: ['./result-list-element.component.scss']
})
export class ResultListElementComponent implements AfterViewInit {

  @Input() videoElement: Video = <any>{ id: '11' };
  lol = <any>{ id: '11' };
  @ViewChild('vid') videoplayer: ElementRef;

  private readyToPlay: boolean = false;
  private playing: boolean = false;
  private currentSpeed: string = `x 1.00`;
  private frameTime: number = 1 / 24;

  constructor() { }

  ngAfterViewInit() {
    if (this.videoplayer) {
      this.videoplayer.nativeElement.addEventListener('ended', () => {
        this.playing = false;
      });

      this.videoplayer.nativeElement.addEventListener('keypress', (event) => {
        if (event.keyCode === 37) {
          this.oneFrameBack();
        } else if (event.keyCode === 39) {
          this.oneFrameAhead();
        } else if (event.keyCode === 32) {
          this.play();
        }
      });
    }
  }

  public expandBox(): void {
    this.readyToPlay = !this.readyToPlay;
    if (this.videoplayer) {
      this.videoplayer.nativeElement.pause();
      this.playing = false;
    }
  }

  public play(): void {
    this.playing = !this.playing;
    if (this.videoplayer && this.videoplayer.nativeElement.paused) {
      this.videoplayer.nativeElement.play();
    } else {
      this.videoplayer.nativeElement.pause();
    }
  }

  public slowDown(): void {
    this.videoplayer.nativeElement.playbackRate = this.videoplayer.nativeElement.playbackRate - 0.25;
    this.currentSpeed = `x ${(this.videoplayer.nativeElement.playbackRate).toFixed(2)}`;
  }

  public speedUp(): void {
    this.videoplayer.nativeElement.playbackRate = this.videoplayer.nativeElement.playbackRate + 0.25;
    this.currentSpeed = `x ${(this.videoplayer.nativeElement.playbackRate).toFixed(2)}`;
  }

  public oneFrameAhead(): void {
    this.videoplayer.nativeElement.pause();
    this.playing = false;
    this.videoplayer.nativeElement.currentTime = Math.min(this.videoplayer.nativeElement.duration, this.videoplayer.nativeElement.currentTime + this.frameTime);
  }

  public oneFrameBack(): void {
    this.videoplayer.nativeElement.pause();
    this.playing = false;
    this.videoplayer.nativeElement.currentTime = Math.max(0, this.videoplayer.nativeElement.currentTime - this.frameTime);
  }
}
