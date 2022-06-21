export class YoutubeVideo {

  static youtubeVideos: YoutubeVideo[] = []

  constructor(
    private _thumbnail: string,
    private _title: string,
    private _description: string,
    private _link: string,
    private _category: string,
    private _numberOfviews: number,
    private _isLive: boolean
  ){
    YoutubeVideo.youtubeVideos.push(this)
  }

  public get category(): string {
    return this._category
  }
  public set category(value: string) {
    this._category = value
  }
  public get link(): string {
    return this._link
  }
  public set link(value: string) {
    this._link = value
  }
  public get description(): string {
    return this._description
  }
  public set description(value: string) {
    this._description = value
  }
  public get title(): string {
    return this._title
  }
  public set title(value: string) {
    this._title = value
  }
  public get thumbnail(): string {
    return this._thumbnail
  }
  public set thumbnail(value: string) {
    this._thumbnail = value
  }
  public get isLive(): boolean {
    return this._isLive
  }
  public set isLive(value: boolean) {
    this._isLive = value
  }
  public get numberOfviews(): number {
    return this._numberOfviews
  }
  public set numberOfviews(value: number) {
    this._numberOfviews = value
  }

};
