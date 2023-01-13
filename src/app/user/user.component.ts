import { Observable, of } from 'rxjs';
import { ModalComponent } from './../modal/modal.component';
import { User } from './../../interfaces/user';
import { CrudMethodsService } from '../../service/crud-methods.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { TypeModal } from '../../enum/enum';

@Component({
  selector: 'app-user-page',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserPageComponent implements OnInit {

  id?: number;
  showTable: boolean = false;
  showForm: boolean = false;
  user!: User;
  userForm = new FormGroup({});
  disableButton = true;
  modalComponent = new ModalComponent(this.modalService);
  unSaved: boolean = true;

  constructor(private service: CrudMethodsService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
    private route: Router,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getUserById();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  getUserById() {
    this.id = (Number(this.activatedRoute.snapshot.paramMap.get('id')));
    if (this.id) {
      this.spinner.show();
      this.showTable = true;

      this.service.getUser(this.id).subscribe(result => {
        if (result) {
          this.user = result;
          this.spinner.hide();
        }
      })
    } else {
      this.showForm = true;
    }
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      address: [''],
      phone: [""],
      username: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(5)]]
    })
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get address() {
    return this.userForm.get('address');
  }

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }

  updateUser() {
    this.spinner.show();
    setTimeout(() => {
      this.showTable = false;
      this.showForm = true;
      this.populateForm();
      this.spinner.hide();
    }, 1500);

  }

  populateForm() {
    this.userForm = this.formBuilder.group({
      firstName: [this.user?.firstName, [Validators.required]],
      lastName: [this.user?.lastName, [Validators.required]],
      address: [this.user?.address],
      phone: [this.user?.phone],
      username: [this.user?.username, [Validators.required]],
      password: [this.user?.password, [Validators.required, Validators.minLength(5)]]
    });
  }

  createUserObj() {
    let user: User = {
      id: this.user?.id ? this.user.id : 0,
      firstName: this.userForm.get('firstName')?.value,
      lastName: this.userForm.get('lastName')?.value,
      address: this.userForm.get('address')?.value,
      phone: this.userForm.get('phone')?.value,
      username: this.userForm.get('username')?.value,
      password: this.userForm.get('password')?.value
    }

    return user;
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.spinner.show();

      if (this.id) {
        //modifica
        this.service.updateUser(this.createUserObj()).subscribe(result => {
          this.spinner.hide();
          this.modalComponent.openModal(TypeModal.Update);
          this.route.navigate(['userList']);
        })
      } else {
        //creazione
        this.service.createUser(this.createUserObj()).subscribe(result => {
          this.spinner.hide();
          this.modalComponent.openModal(TypeModal.Create);
          this.route.navigate(['userList']);
        })
      }
    }
  }

  deleteUser() {
    this.modalComponent.openDeleteModal(this.user);
  }

  canDeactivate(): Observable<boolean> | boolean {

    if (this.unSaved) {
      const result = window.confirm('There are unsaved changes! Are you sure?');
      return of(result);
    }
    return true;
  }
}
