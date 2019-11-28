import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { user } from 'src/app/models/user';
import { activity } from 'src/app/models/activity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programme-create-coach',
  templateUrl: './programme-create-coach.component.html',
  styleUrls: ['./programme-create-coach.component.css']
})
export class ProgrammeCreateCoachComponent implements OnInit {

  user: user;
  activityData: activity[];
  errorMessage: string;
  successMessage: string;
  constructor(private activityService: ActivityService, private router: Router) { 
    this.checkUser();
    console.log(this.user.idUser);
  }

  ngOnInit() {
    this.findAllActivity();
  }

  findAllActivity() {
    this.activityService.findAllUserActivity(this.user.idUser)
    .pipe()
    .subscribe(data => {
        this.activityData = data;
        console.log(this.activityData);
    }, error => {
      console.log(error);
    });
  }

  checkUser(){
  
    if(localStorage.getItem('CurrentUser') === undefined || localStorage.getItem('CurrentUser') === null){
      this.router.navigate(['/login']);
     
      return;
    }
    this.user = JSON.parse(localStorage.getItem('CurrentUser'));
  }

  removeActivity(idActivity: number) {
    if(idActivity === undefined) {
      this.displayMessage("error pour supprimer le programme", 2);
      return;
    }
    if (confirm("supprimer le programme ?")) {
      this.activityService.deleteActivity(idActivity)
        .pipe()
        .subscribe(data => {
          this.findAllActivity();
          this.displayMessage("programme supprimer", 1);
        });
    }
  }

  displayMessage(msg: string, type: number) {
    if (type === 1) {
      this.successMessage = msg;
      setTimeout(()=> {this.successMessage = ""}, 1000);
    } else if (type === 2) {
      this.errorMessage = msg;
      setTimeout(()=> {this.errorMessage = ""}, 1000);
    }
  }

}
