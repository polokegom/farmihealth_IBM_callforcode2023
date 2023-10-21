import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { GlobVarService } from '../glob-var.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private globVar: GlobVarService, private router:Router){
    
  }

  loggedinStatus() {
    return this.globVar.isLoggedIn
  }
  loginFunc():void{

    this.globVar.isLoggedIn = true
    this.router.navigate(['/login']);

  }

  regFunc():void{

    this.globVar.isLoggedIn = true
    this.router.navigate(['/register']);

  }
}
