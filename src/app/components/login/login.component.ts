import { Component, OnInit } from '@angular/core';
import { metalerosService } from 'src/app/metaleros.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios: Array<any>;
  constructor(private users: metalerosService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.users.getUser().subscribe((value) => {
      this.usuarios = value;
      console.log(this.usuarios);
    })
  }
}
