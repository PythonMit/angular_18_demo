import { CommonModule, formatNumber } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  IsElementDiv :boolean=true;
  IsElementDiv2 :boolean=true;
  inputBox1: string="";
  inputBox2:string="";
  isActive:boolean=true;
  selectedCity:string="";

// create array

cities :string []=['Surat','Rajkot','Vadodara','Valsad','Jaypur','Somanath'];

EmployeeObject: any[]=[{sr_no:"12",Name:"abc",Salary:"20000",City:"surat",Designation:"devloper",Isstatus:false},
  {sr_no:"15",Name:"xyz",Salary:"70000",City:"Rajkot",Designation:"sr.devloper",Isstatus:false},
  {sr_no:"17",Name:"pqr",Salary:"50000",City:"Vadodara",Designation:"jr.devloper",Isstatus:true},
  {sr_no:"14",Name:"mno",Salary:"56000",City:"Valsad",Designation:"designer",Isstatus:false},
  {sr_no:"19",Name:"slr",Salary:"65000",City:"Jaypur",Designation:"Team leader",Isstatus:true}

]

  elementDivShow(){
    this.IsElementDiv=true;
    alert("true");
  }
  elementDivHide(){
    this.IsElementDiv=false;
    alert("false");
  }
  toggleElementDIv(){
    this.IsElementDiv2=!this.IsElementDiv2;
  }

}
