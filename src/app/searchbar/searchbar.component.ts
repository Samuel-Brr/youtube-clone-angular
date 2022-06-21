import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  @Output()
  usersSearch: EventEmitter<string> = new EventEmitter()

  inputData!: string

  constructor() { }

  ngOnInit(): void {
  }

  sendUsersSearch(){
    this.usersSearch.emit(this.inputData)
  }

}
