import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface';
@Component({
  selector: 'ngr-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  updateRecord : boolean = true
 
  emptyUsers: User[]=[];
  usersUpdated: User[] = [
    {
      name: 'Anuj Thareja', username: 'anuj', email: 'anuj@gmail.com'
    },
    {
      name: 'Anup Vasudeva', username: 'anup', email: 'anup@gmail.com'
    },
    {
      name: 'Elon Musk', username: 'elon', email: 'elon@gmail.com'
    },
    {
      name: 'John Doe', username: 'john', email: 'john@gmail.com'
    },
    {
      name: 'Jane Doe', username: 'jane', email: 'jane@gmail.com'
    },
      
  ];
  users: User[] = this.usersUpdated;
  
  isYellow = {
    'has-background-warning': false,
  };
  
  tableUpdated(){
    
    if(this.updateRecord == true){
      this.users = this.emptyUsers;
    }
    else{
      this.users = this.usersUpdated;
    }
    this.updateRecord = !this.updateRecord
   
  }
  constructor() {
   
    
  }

  ngOnInit(): void { }
}



