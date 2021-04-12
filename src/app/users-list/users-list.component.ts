import { Component, OnInit, OnDestroy } from '@angular/core';
import {DataServiceService} from "../data-service.service";
import {UserModel} from "../user.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {

  dataSet: UserModel[];

  totalCountSub : Subscription;
  dataSetSub: Subscription;

  totalCount: number = 0;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {

    this.dataSetSub = this.dataService.getUser.subscribe(dataset => {
      this.dataSet = dataset;
    })

    this.totalCountSub = this.dataService.getTotalCount.subscribe(
      count => {
        if ( typeof count === "number") {
          this.totalCount = count
        } else {
          throw Error("Invalid type of array size");
        }
      })
    this.dataService.initialFetch();
  }

  onPageIndexChange(event : number){
    this.dataService.getUserPortion((event-1)* 10);
  }
  onUserSelection(id:number){
    this.dataService.getUserDetail(id);
  }


  ngOnDestroy (){
    this.totalCountSub.unsubscribe();
    this.dataSetSub.unsubscribe();
  }

}
