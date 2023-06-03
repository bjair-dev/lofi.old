import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from 'src/service/youtube.service';

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.scss'],
})
export class PageIndexComponent implements OnInit {
  public videoId = 'ID_DEL_VIDEO';
  public videoInfo: any;

  constructor(private youtubeApiService: YoutubeApiService) {}

  ngOnInit() {
    this.youtubeApiService
      .getVideoInfo(this.videoId)
      .then((data) => {
        this.videoInfo = data;
        console.log(this.videoInfo);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
