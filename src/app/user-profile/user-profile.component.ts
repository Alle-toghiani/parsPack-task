import { Component, OnInit, OnDestroy } from '@angular/core';
import {UserModel} from "../user.model";
import {Subscription} from "rxjs";
import {DataServiceService} from "../data-service.service";
import {DetailedUserModel} from "../detailedUser.model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  userData: DetailedUserModel = null;

  userDetailSub : Subscription;

  effect = 'scrollx';



  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.userDetailSub = this.dataService.getCurrentUser.subscribe( currentUser => {
      this.userData = currentUser;
    })
  }

  ngOnDestroy() {
    this.userDetailSub.unsubscribe();
  }

}
