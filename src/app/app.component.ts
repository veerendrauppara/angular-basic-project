import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todaydemo';
  @Output() logoutText: string;
  viewsArray = [];
  noOfViews: number = 0;
  constructor(){
    localStorage.getItem('userCred') === 'null' ? this.logoutText = 'Manage' : this.logoutText = 'Logout'
    
  }
  viewsCout(e){
    this.viewsArray.push(e);
    this.noOfViews = this.viewsArray.length;
  }
}
