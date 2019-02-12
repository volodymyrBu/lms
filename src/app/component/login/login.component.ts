import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  fb: FormBuilder;

  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      userName: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    if (this.form.value.userName === 'admin' && this.form.value.password === '123') {
      sessionStorage.setItem('isLogin', 'true');
      this.router.navigate(['/learnerProfile']);
    }
  }

}
