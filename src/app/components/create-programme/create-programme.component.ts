import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { activity } from 'src/app/models/activity';
import { user } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-programme',
  templateUrl: './create-programme.component.html',
  styleUrls: ['./create-programme.component.css']
})
export class CreateProgrammeComponent implements OnInit {
  //public Editor = ClassicEditor;

  activity: activity = new activity();
  user: user = new user();

  constructor( private router: Router, private activityService: ActivityService) { }

  ngOnInit() {
  }

  createProgramme(): void {
    console.log(this.activity);
    this.activityService.saveActivity(this.activity)
        .subscribe( data => {
          console.log(this.activity);
          alert("programme created successfully.");
        });

  };

}
