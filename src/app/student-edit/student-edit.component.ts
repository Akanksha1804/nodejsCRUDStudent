import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  studentForm : FormGroup;
  id : number = 0;

  constructor(private activeRoute: ActivatedRoute, private studentService : StudentService, private router: Router) { 
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
    this.activeRoute.params.subscribe((paramsData)=>{
      this.id = paramsData.id;
      this.studentService.getStudentByID(paramsData.id).subscribe((data:any) => {
        console.log(data);
        delete data.id;
        this.studentForm.setValue(data);
      })
    })
  }

  edit(){
    if(this.studentForm.valid){
      this.studentService.updateStudentByID(this.id,this.studentForm.value).subscribe((data : any)=>{
        this.router.navigate(['/studentlist']);
      })
    }
  }

}
