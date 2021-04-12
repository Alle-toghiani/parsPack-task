import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { UserModel } from "./user.model";
import { DetailedUserModel } from "./detailedUser.model";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private apiUrl = 'https://hamed.ninja/frontend_challenge/?o=list';
  private apiDetailUrl = 'https://hamed.ninja/frontend_challenge/?o=detail&id=';
  currentUser: UserModel;

  getUser = new Subject<UserModel[]>();
  getTotalCount = new Subject<number>();
  getCurrentUser = new Subject<DetailedUserModel>();


  private userData: UserModel[] =[] ;

  constructor(private http: HttpClient) {

  }

  initialFetch(){
    this.http.get<UserModel[]>(this.apiUrl).subscribe( data => {
      this.userData = data;
    this.getTotalCount.next(data.length);
    this.getUserPortion(0);
    });
  }
  getUserDetail(id:number){
    this.http.get<DetailedUserModel>(this.apiDetailUrl+id).subscribe(
      userDetail => {
        this.getCurrentUser.next(userDetail);
      }
    )


  }

  getUserPortion(index: number){
    if ( index+10 <= this.userData.length ){
      this.getUser.next( this.userData.slice(index,index+10) );
    }
  }
}
