import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'

@Component({
  selector: 'app-header-in',
  templateUrl: './header-in.component.html',
  styleUrls: ['./header-in.component.css']
})
export class HeaderInComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

}
