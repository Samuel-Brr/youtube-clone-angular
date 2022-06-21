import { Component, Input, OnInit } from '@angular/core';
import { YoutubeVideo } from '../models/videoThumbnail.model';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent implements OnInit {

  @Input()
  video!: YoutubeVideo

  constructor() { }

  ngOnInit(): void {
  }

}
