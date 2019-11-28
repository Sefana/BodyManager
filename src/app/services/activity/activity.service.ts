import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/settings/app.settings';
import { activity } from 'src/app/models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http:HttpClient) { }

  findAllActivity(){
    return this.http.get<activity>(AppSettings.APP_URL + "/activitys/");
  }
 
  findAllUserActivity(idUser: number){
    return this.http.get<activity[]>(AppSettings.APP_URL + "/activitys/all/"+ idUser);
  }

  findActivityById(idActivity: number){
    return this.http.get<activity>(AppSettings.APP_URL + "/activitys/one/" + idActivity);
  }

  saveActivity(activity: activity){
    return this.http.post<activity>(AppSettings.APP_URL + "/activitys/create/", activity);
  }
 
  deleteActivity(idActivity: number) {
    return this.http.delete<activity>(AppSettings.APP_URL + "/activitys/delet/" + idActivity);
  }
}
