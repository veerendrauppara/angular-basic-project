
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthguardService } from '../authguard.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  dataFrom;
  loginForm: FormGroup;
  submitted: boolean;
  constructor(private toastr: ToastrService, private spinner:NgxSpinnerService,
     public router:Router,private AuthguardService: AuthguardService,
     private fb: FormBuilder) { }

  ngOnInit() {
    debugger
    this.AuthguardService.userActivated.subscribe((res)=>{
      console.log(res);
      this.dataFrom = res;
      console.log(this.dataFrom);
    });
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    debugger
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else if(
      this.loginForm.value.email === JSON.parse(localStorage.getItem('userCred')).email && 
      this.loginForm.value.password === JSON.parse(localStorage.getItem('userCred')).password){
      this.toastr.success('Login Success!');
      this.router.navigate(['/dashboard']);  
    }else{
      this.toastr.error('Login Failed!');
    }
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }

}
