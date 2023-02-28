
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit {

  StudentArray: any[] = [];
  currentStudentID = "";

  name: string = "";
  address: string = "";
  phone: string = "";

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent() {

    this.http.get("http://localhost:8000/user/getAll")
      .subscribe((resultData: any) => {

        console.log(resultData);
        this.StudentArray = resultData.data;
      });


  }

  setUpdate(data: any) {
    this.name = data.name;
    this.address = data.address;
    this.phone = data.phone;

    this.currentStudentID = data._id;

  }

  UpdateRecords() {
    let bodyData = {
      "name": this.name,
      "address": this.address,
      "phone": this.phone,

    };

    this.http.patch("http://localhost:8000/user/update" + "/" + this.currentStudentID, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Updateddd")
      this.name = '';
      this.address = '';
      this.phone = '';
      this.getAllStudent();

    });
  }

  setDelete(data: any) {
    this.http.delete("http://localhost:8000/user/delete" + "/" + data._id).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Deletedddd")
      this.getAllStudent();

    });
  }

  save() {
    if (this.name != "" && this.address != "" && this.phone != "") {
      if (this.currentStudentID == '') {
        this.register();
      }
      else {
        this.UpdateRecords();
      }
    }
    else {
      alert("please fill up the employee form");
    }

  }

  register() {

    let bodyData = {
      "name": this.name,
      "address": this.address,
      "phone": this.phone,
    };
    this.http.post("http://localhost:8000/user/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Registered Successfully")
      //this.getAllEmployee();
      this.name = '';
      this.address = '';
      this.phone = '';
      this.getAllStudent();
    });
  }
}
