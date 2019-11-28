import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-coachs',
  templateUrl: './coachs.component.html',
  styleUrls: ['./coachs.component.css']
})
export class CoachsComponent implements OnInit {
  user: user;
  userData: Array<any>;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.userService.findAllCoach()
    .subscribe(data => {
        this.userData = data;
  });

  }

  

}
