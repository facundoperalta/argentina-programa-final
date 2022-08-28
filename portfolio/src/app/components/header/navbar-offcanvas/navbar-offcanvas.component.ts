import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar-offcanvas',
  templateUrl: './navbar-offcanvas.component.html',
  styleUrls: ['./navbar-offcanvas.component.css']
})
export class NavbarOffcanvasComponent implements OnInit {

  isLogged = false;

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/index']);
//    window.location.reload();
  }

}
