import { Component, Input, Output, EventEmitter,  OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @Input() chats;
  @Output() onActiveChat = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setActiveChat(chat) {
    this.onActiveChat.emit(chat);
  }


}
