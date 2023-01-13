import { TypeModal } from '../../enum/enum';
import { Router } from '@angular/router';
import { CrudMethodsService } from '../../service/crud-methods.service';
import { User } from './../../interfaces/user';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(type: TypeModal) {
    const modalRef = this.modalService.open(NgbdModalContent, { centered: true });
    modalRef.componentInstance.type = type;
  }

  openDeleteModal(user: User) {
    const modalRef = this.modalService.open(NgbdModalContentDelete, { centered: true });
    modalRef.componentInstance.user = user;
  }

  openChangesModal() {
    const modalRef = this.modalService.open(NgbdModalContentChanges, { centered: true });
  }
}

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
		</div>
		<div class="modal-body">
			<p>Utente {{type}} correttamente</p>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
		</div>
	`,
  styleUrls: ['./modal.component.css']
})
export class NgbdModalContent {
  @Input() type?: string;
  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'ngbd-modal-content',
  template: `
		<div class="modal-body">
			<p>E' sicuro di voler eliminare l'utente {{user?.firstName}} {{user?.lastName}}?</p>
		</div>
    <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="deleteModal.dismiss('cancel click')">Cancel</button>
    <button type="button" class="btn btn-danger" (click)="deleteModal.close('Ok click')" (click)="deleteUser()">Ok</button>
  </div>
	`,
})
export class NgbdModalContentDelete {

  @Input() user!: User;
  modalComponent = new ModalComponent(this.modalService);

  constructor(public deleteModal: NgbActiveModal,
    private crudService: CrudMethodsService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private modalService: NgbModal) { }


  deleteUser() {
    this.crudService.deleteUser(this.user.id).subscribe(result => {
      this.spinner.show();
      this.router.navigate(['userList']);
      setTimeout(() => {
        this.spinner.hide();
        this.modalComponent.openModal(TypeModal.Delete);
      }, 1000);
    })
  }

}

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header-changes">
    </div>
		<div class="modal-body">
			<p>Sono presenti delle modifiche non salvate. Si intende proseguire?</p>
		</div>
    <div class="modal-footer">
    <button type="button" class="btn btn-danger" (click)="deleteModal.close('Ok click')">Ok</button>
    <button type="button" class="btn btn-outline-secondary" (click)="deleteModal.dismiss('cancel click')" >Cancel</button>
  </div>
	`,
})

export class NgbdModalContentChanges {

  modalComponent = new ModalComponent(this.modalService);

  constructor(
    public deleteModal: NgbActiveModal,
    private modalService: NgbModal,
  ) { }

}