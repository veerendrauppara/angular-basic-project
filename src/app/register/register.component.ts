import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs/subscription';
import { AuthguardService } from '../authguard.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/observable';
import 'rxjs/RX';
import { Observer } from 'rxjs/observer';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  // noObs: Subscription;
  // textObs: Subscription;
  userFromRoute;
  registerForm: FormGroup;
  submitted: boolean = false;
  // viewingPage: any;
  viewingPageCount: any;
  // exObservable: any;
  viewObs: Subscription;
  exObs: Subscription;
  toggle: boolean = false;
  constructor(private route: ActivatedRoute, private AuthguardService: AuthguardService,
    private toastr: ToastrService, private spinner: NgxSpinnerService, public router: Router,
    private fb: FormBuilder, private service: HttpService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.userFromRoute = params['name'];
      console.log(this.userFromRoute);
    })
    this.registerForm = this.fb.group({
      title: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      acceptTerms: [false, Validators.requiredTrue]
    });
    this.observablesPractice();
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      localStorage.setItem('userCred', JSON.stringify(this.registerForm.value));
      this.toastr.success('Registered Successfully!');
    }
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  observablesPractice(): any{
    
    this.viewObs = this.service.observableSer().subscribe((n: number) => {
      this.viewingPageCount = n + ' ' + 'sec';
      console.log(n);
    })
    
    this.exObs = this.service.observableSer2().subscribe(
      (e) => {
        console.log(e);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('compleated');
      }
    )
  }
  // activate() {
  //   this.AuthguardService.userActivated.next(this.userFromRoute);
  //   this.router.navigate(['login']);
  // }
  ngOnDestroy() {
    this.viewObs.unsubscribe();
    this.exObs.unsubscribe();
    // this.noObs.unsubscribe();
    // this.textObs.unsubscribe();
  }
  // observables practice
  // const myNo = Observable.interval(1000);
  // this.noObs = myNo.subscribe((number: number) => {
  // });

  // const myObs = Observable.create((observar: Observer<string>) => {
  //   setTimeout(() => {
  //     observar.next('first one');
  //   }, 3000);
  //   setTimeout(() => {
  //     observar.complete();
  //   }, 3000);
  //   setTimeout(() => {
  //     observar.next('second one');
  //   }, 3000);
  //   setTimeout(() => {
  //     observar.error('not compleated');
  //   }, 3000);
  // });
  // this.textObs = myObs.subscribe(
  //   (data: string) => { console.log(data) },
  //   (error: string) => { console.log(error) },
  //   () => { console.log('compleated') }

  // );

}

