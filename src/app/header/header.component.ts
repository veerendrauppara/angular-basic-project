import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() logoutText: string;
@Output() views = new EventEmitter<any>();

  constructor(private service: HttpService) {
   }

  ngOnInit() {
  }
  
  logout(){
    this.service.logout();
  }
}
