import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  studentForm : FormGroup;
  constructor( private studentService : StudentService, private router: Router) { 
    this.studentForm = new FormGroup({
      'uname' : new FormControl('',Validators.required),
      'udob' : new FormControl('',Validators.required),
      'skill' : new FormControl('',Validators.required),
      'dept' : new FormControl('',Validators.required),
      'country' : new FormControl('',Validators.required),
      'state' : new FormControl('',Validators.required),
      'city' : new FormControl('',Validators.required),
      'address' : new FormControl('',Validators.required),
      'zip' : new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }

  create(){
    console.log(this.studentForm.value);
    this.studentService.saveStudent(this.studentForm.value).subscribe((data : any)=>{
      console.log(data);
      this.router.navigate(['/studentlist'])
    },(err : any)=>{
      console.log(err)
    })
  }

}
