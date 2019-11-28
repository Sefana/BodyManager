import { Component } from '@angular/core';
import { user } from 'src/app/models/user';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bodyManager';

  user: user;
 
  constructor(private activityService: ActivityService, private router: Router) {
    this.checkUser();
    
   }

  ngOnInit() {
    this.openNav();
    this.closeNav();
  }



  checkUser(){
  
    if(localStorage.getItem('CurrentUser') === undefined || localStorage.getItem('CurrentUser') === null){
      this.router.navigate(['/login']);
     
      return;
    }
    this.user = JSON.parse(localStorage.getItem('CurrentUser'));
  }

   openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
   closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
}
