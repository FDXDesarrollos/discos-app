import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isLogged = false;
  usuario = '';

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.usuario = this.tokenService.getUser();
    } else {
      this.isLogged = false;
      this.usuario = '';
    }    
  }

}
