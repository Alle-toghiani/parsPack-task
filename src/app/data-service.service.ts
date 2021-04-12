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


  private userData: UserModel[] =[
    {"id":1,
      "title":"C4ca4238a0 B923820dcc",
      "description":"d3d94 6512bd c20ad4d c51ce410 9 c7 70e 6f49 1f0e3 5f93f9 698d51a 7f6ffaa6 5 2b c45 eb16 5ef05 07e1cd da4fb5c 4c56ff4c 2 c8 3de 0690 ec5de 76dc61 d1f491a 9b861925 6 9f 025 7f1d 42a0e 3988c7 013d407 e00da03b",
      "image":"https:\/\/hamed.ninja\/frontend_challenge\/avatar.php?i=CB"},
    {"id":2,
      "title":"C81e728d9d 4c2f636f06",
      "description":"98f13 3c59dc b6d767d 37693cfc 8 4e 02e 33e7 6ea9a 6f3ef7 eb16372 1534b76d c 3b 45f 63dc e96ed c0e190 ec8ce6a 060ad924 1 13 d1c 9cfd 705f2 74db12 57aeee3 6da9003b b e1 289 577e 01161 539fd5 ac1dd20 555d6702",
      "image":"https:\/\/hamed.ninja\/frontend_challenge\/avatar.php?i=C4"},
    {"id":3,
      "title":"Eccbc87e4b 5ce2fe2830",
      "description":"34173 c16a53 6364d3f 182be0c5 1 19 a5b a577 d67d8 06eb61 9dfcd5e 950a4152 7 ad 3fe 5b8a 432ac 8d3bba 3207225 caf1a3df b f2 89f a666 b83aa cd0069 6faa804 fe73f687 c 31 2f2 f9b9 68554 357a6f 819f46e 04025959",
      "image":"https:\/\/hamed.ninja\/frontend_challenge\/avatar.php?i=E5"},
    {"id":4,
      "title":"A87ff679a2 F3e71d9181",
      "description":"d6459 3416a7 a1d0c6e 17e62166 6 d9 67c 642e f457c 1068c6 17d63b1 b9228e09 6 42 8fe 41ae d1f25 7eacb5 b6f0479 e0c64119 f 3c 25b 6ecb 18997 8d7d8e 75fc093 f74909ac 2 01 a49 ddb3 2421f fccb60 1651cf0 eed5af6a",
      "image":"https:\/\/hamed.ninja\/frontend_challenge\/avatar.php?i=AF"},
    {"id":5,
      "title":"E4da3b7fbb Ce2345d777",
      "description":"c0c7c 283802 9a11581 d82c8d16 b 9f 72b 66f0 093f6 087408 a760880 10a7cdd9 5 2b f3f 3891 ebd96 63538f cf67355 07563a3f 2 ba 694 8542 13f32 f4be00 37f0e88 d64a340b 2 df c39 33e8 65658 5ea164 7bcdf75 57370345",
      "image":"https:\/\/hamed.ninja\/frontend_challenge\/avatar.php?i=EC"}
    ] ;



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
        console.log(userDetail);
      }
    )


  }

  getUserPortion(index: number){
    if ( index+10 <= this.userData.length ){
      this.getUser.next( this.userData.slice(index,index+10) );
    }
  }
}
