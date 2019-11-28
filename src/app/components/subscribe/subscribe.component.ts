import { Component, OnInit, ɵConsole } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  user: user = new user();

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  createUser(): void {
    console.log(this.user);
    this.userService.saveUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
