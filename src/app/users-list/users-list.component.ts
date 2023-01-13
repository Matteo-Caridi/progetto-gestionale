import { NgxSpinnerService } from 'ngx-spinner';
import { User } from './../../interfaces/user';
import { CrudMethodsService } from '../../service/crud-methods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

  constructor(private service: CrudMethodsService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.spinner.show();
    this.service.getUsers().subscribe(result => {
      if (result) {
        this.users = result;
      }
      this.spinner.hide();

    }, (error) => {
      console.log(error);
      this.spinner.hide();
    });

  }

}
