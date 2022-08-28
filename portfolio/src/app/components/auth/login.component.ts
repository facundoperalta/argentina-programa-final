import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUser } from 'src/app/models/login-user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  isLogged = false;
  isLoginFail = false;
  loginUser: LoginUser;
  userName: string;
  password: string;
  roles: string[] = [];
  errMsj: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder ) {
    this.form=this.formBuilder.group(
      {
        userName:['',[Validators.required, Validators.minLength(4)]],
        password:['',[Validators.required, Validators.minLength(4)]]

      }
    )
   }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUser = new LoginUser(this.userName, this.password);
    this.authService.login(this.loginUser).subscribe(
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.userName);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.toastr.success('Bienvenid@ ' + data.userName, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['portfolio']);
      },
      err => {
        this.isLogged = false;

        this.errMsj = err.error.message;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });

      }
    );
  }

  get UserName(){
    return this.form.get('userName');
  }

  get Password(){
    return this.form.get('password');
  }



}