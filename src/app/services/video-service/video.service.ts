import { Injectable } from '@angular/core';
import { Video } from './../../interfaces/IVideo';
import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
// import 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private videos: Array<Video> = [];
  private regex: RegExp;
  public results: Array<Video> = [];

  constructor(private http: HttpClient) {
    this.getVideos().subscribe(data => {
      this.videos = data.movie.filter((video) => {
        return !!video;
      });
    });
  }

  private getVideos(): Observable<any> {
    return this.http.get('./assets/mockData.json');
  }

  /*
  return array of uniqe obj with matching title or description to search value
  */
  public getVideo(arg: string): Observable<any> {
    this.regex = RegExp(`${arg}`);
    const set = new Set();

    this.videos.forEach((video) => {
      if (this.regex.test(video.title)) {
        if(!set.has(video.id)){
          set.add(video.id);
          this.results.push(video);
        }
      } else {
        if (this.regex.test(video.description)) {
          if(!set.has(video.id)){
            set.add(video.id);
            this.results.push(video);
          }
        }
      }
    });

    return of(this.results);
  }
}
