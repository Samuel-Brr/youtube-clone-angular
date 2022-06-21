import { Component, OnInit } from '@angular/core';
import { YoutubeVideo } from '../models/videoThumbnail.model';
import { dataset } from '../data/youtubeVideos.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  youtubeVideos: YoutubeVideo[] = dataset

  constructor() { }

  ngOnInit(): void {
    console.log('MES VIDEOS',this.youtubeVideos)
  }

  onUsersSearch($event: string){
    this.searchVideo($event)
  }

  searchVideo(userInput: string){
    this.youtubeVideos = this.youtubeVideos.filter((video: YoutubeVideo) => video.title.toLowerCase().includes(userInput.toLowerCase()))
    console.log('LISTE APRES FILTRE',this.youtubeVideos)
  }

}
