import { CrudMethodsService } from './../../service/crud-methods.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from './../../interfaces/user';
import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user!: User;
  showTable: boolean = false;
  modalComponent = new ModalComponent(this.modalService);

  constructor(
    private service: CrudMethodsService,
    private spinnerService: NgxSpinnerService,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getUserById();
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }

  getUserById() {
    const id = (Number(this.activatedRoute.snapshot.paramMap.get('id')));
    if (id) {
      this.spinnerService.show();
      this.service.getUser(id).subscribe(result => {
        if (result) {
          this.showTable = true;
          this.user = result;
          this.spinnerService.hide();
        }
      })
    }
  }

  deleteUser() {
    this.modalComponent.openDeleteModal(this.user);
  }
}
