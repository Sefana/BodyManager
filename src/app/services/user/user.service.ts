import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/settings/app.settings';
import { user } from 'src/app/models/user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findAllUsers() {
    return this.http.get<user>(AppSettings.APP_URL + "/users/");
  }

  findUserById(idUser: number) {
    return this.http.get<user>(AppSettings.APP_URL + "/users/" + idUser);
  }

  findAllCoach(): Observable<any>{
    return this.http.get<user>(AppSettings.APP_URL + "/users/coach/");
  }

  saveUser(user:user) {
    return this.http.post<user>(AppSettings.APP_URL + "/users/create/", user);
  }

  login(mail: string, password: string) {
    return this.http.post<user>(AppSettings.APP_URL + "/users/login?mail=" + mail + "&password=" + password, null);
  }
}
