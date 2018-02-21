import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'driverpopup',
    templateUrl: '../driverpopup/driverpopup.component.html'
})

export class DriverPopupComponent implements OnInit {
    @Input() public fld1;
    @Input() public fld2;
    //closeResult: string;
    public Veld: any;

    constructor(public activeModal: NgbActiveModal) { }

    public ngOnInit() {
        this.Veld = {
            veld1: this.fld1,
            veld2: this.fld2
        }
    }

    public cancel() {
        this.activeModal.close();
    }
}

    // open(content) {
    //     this.modalService.open(content).result.then((result) => {
    //         this.closeResult = `Closed with: ${result}`;
    //     }, (reason) => {
    //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //     });
    // }

    // private getDismissReason(reason: any): string {
    //     if (reason === ModalDismissReasons.ESC) {
    //         return 'by pressing ESC';
    //     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //         return 'by clicking on a backdrop';
    //     } else {
    //         return `with: ${reason}`;
    //     }
    // }

    // public ngOnInit() {
    //     console.log('Hello Popup');
    // }

// }