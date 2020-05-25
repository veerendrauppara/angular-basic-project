import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
email:any;
newpassword:any;
  constructor(private toastr: ToastrService, private spinner:NgxSpinnerService,public router:Router) { }

  ngOnInit() {
    this.email="";
    this.newpassword="";
  }
  ok(){
    if( this.email==localStorage.getItem('email') && this.newpassword!=""){
      localStorage.setItem('password', this.newpassword);
      
    this.spinner.show();
      setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();
   }, 2000);

   this.toastr.success('password changed Successfully!');
      this.router.navigate(['/login']);
    }else{
      this.toastr.error('Enter valid details!');
    }}
    yes(){
      if(this.email!=""){
      alert("sms send to ********80");
      }else{
        alert("failed");
      }
    }
  
}
