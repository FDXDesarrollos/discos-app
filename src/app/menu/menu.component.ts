import { Router } from '@angular/router';
import { TokenService } from './../service/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    //window.location.reload();
    this.router.navigate(['/']);
  }

}
