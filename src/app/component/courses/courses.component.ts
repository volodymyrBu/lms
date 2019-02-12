import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  closeResult: string;
  modalRef: any;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open(content) {
    this.modalRef = this.modalService.open(content);
  }
}
