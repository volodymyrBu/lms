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
  toDoModalRef: any;
  resourcesModalRef: any;
  coursesModalRef: any;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  viewToDo(content) {
    this.toDoModalRef = this.modalService.open(content, { size: 'lg' });
  }

  open(content) {
    this.modalRef = this.modalService.open(content);
  }
  openResources(content) {
    this.resourcesModalRef = this.modalService.open(content, { size: 'lg' });
  }
  openCourses(content) {
    this.coursesModalRef = this.modalService.open(content, { size: 'lg' });
  }


}
