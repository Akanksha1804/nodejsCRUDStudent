import { Component, OnInit } from '@angular/core';
import { student } from '../model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList : Array<any> = [];

  constructor(private studentService : StudentService) { 
    this.studentService.getAllStudents().subscribe((data : any)=>{
      console.log(data);
      this.studentList = data;
    })
  }

  ngOnInit(): void {
  }

  deleteData(id:number){
    this.studentService.deleteUserById(id).subscribe(() => {
      this.studentService.getAllStudents().subscribe((data:any) => {
        this.studentList = data
      })
    })
  }

}
