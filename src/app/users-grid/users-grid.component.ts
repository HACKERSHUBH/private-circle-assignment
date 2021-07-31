import { Component, OnInit } from '@angular/core';
import { ClrDatagridSortOrder } from '@clr/angular';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.scss']
})
export class UsersGridComponent implements OnInit {

  userListFromAPI=[];
  searchKey='';
  detailsData:any;
  descSort: number = ClrDatagridSortOrder.DESC;
  userList = [
    {id: 1969, date: "01/07/2021", name: "desafio pratico teste", entities: "0",details:[
      "Hector Beverages Pvt Ltd",
      "Puma Sports India",
      "Dewan Housing Finance corp",
      "Infosys Ltd",
      "Think and learn pvt ltd",
      "Delhivery Private ltd",
      "LendingKart technologies"
    ]},
    {id: 1990, date: "02/07/2021", name: "krishnaj5m579tbz6p@gmail.com", entities: "0",details:[
      "Hector Beverages Pvt Ltd",
      "Puma Sports India",
      "Dewan Housing Finance corp",
      "Infosys Ltd"
    ]},
    {id: 1994, date: "04/07/2021", name: "tu671@gmail.com", entities: "0", details:[]},
    {id: 2003, date: "09/07/2021", name: "lVWzmBSTtI@gmail.com", entities: "23",details:[]},
    {id: 1938, date: "07/07/2021", name: "allasani.peddana.test@15ce.com", entities: "26", details:[]},
    {id: 2024, date: "16/07/2021", name: "YJeWfRdcpJ@gmail.com.ec", entities: "12", details:[]},
    {id: 1989, date: "08/07/2021", name: "al88888.peddana@15ce.com", entities: "06", details:[]},
    {id: 2031, date: "05/07/2021", name: "QrsXbTjppp@gmail.com.ec", entities: "11", details:[]},
    {id: 2033, date: "14/05/2021", name: "gOPoyjIKBZ@gmail.com.ec", entities: "15",details:[]},
    {id: 2044, date: "24/07/2021", name: "mauri123@asd.com", entities: "19", details:[]},
    {id: 1966, date: "27/07/2021", name: "dawson @mmail.com", entities: "21", details:[]},
    {id: 32, date: "29/08/2021", name: "navin_shah@macejkovic.co", entities: "67",details:[]},
    {id: 36, date: "21/08/2021", name: "Karianne_Davis60@hotmail.com", entities: "16", details:[]},
    {id: 52, date: "19/07/2021", name: "Adrain_Harber25@hotmail.com", entities: "07", details:[]}

  ];
  clonedUserList = [];

  constructor(
    private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe(res => {
      console.log(res.data);
      this.userListFromAPI = res.data;
    });
    this.clonedUserList = this.userList;
  }

  onClickDetails(row){
    console.log(row);
    this.detailsData = row;
  }

  filterChangeHandler(item){
    console.log(item);
    this.userList = this.userList.filter(obj=>obj.name.includes(item));
    //console.log(foundValue);
    if(item == ''){
      this.userList = this.clonedUserList;
    }
  }

}
