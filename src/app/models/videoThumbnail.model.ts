export class YoutubeVideo {

  static youtubeVideos: YoutubeVideo[] = []

  constructor(
    private thumbnail: string,
    private title: string,
    private description: string,
    private link: string,
    private category: string,
  ){
    YoutubeVideo.youtubeVideos.push(this)
  }

};
