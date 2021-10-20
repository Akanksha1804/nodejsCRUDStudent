import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from './model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }

  saveStudent(data : student){
    return this.http.post("https://nodejs-crud-student.herokuapp.com/student",data);
  }

  getAllStudents(){
    return this.http.get("https://nodejs-crud-student.herokuapp.com/student");
  }

  getStudentByID(id:number){
    return this.http.get<student>(`https://nodejs-crud-student.herokuapp.com/student/${id}`);
  }

  updateStudentByID(id:number,studentdata:student){
    return this.http.put(`https://nodejs-crud-student.herokuapp.com/student/${id}`,studentdata);
  }

  deleteUserById(id:number){
    return this.http.delete(`https://nodejs-crud-student.herokuapp.com/student/${id}`)
  }

}
