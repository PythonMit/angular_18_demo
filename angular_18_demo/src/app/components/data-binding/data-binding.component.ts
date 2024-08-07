import { Component, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  // variable intialize
  // datatype string,number,boolean,date
  courseTitle:string="Angular 18";
  subTitle ="test project";
  inputType ="checkbox";
  inputTypeButton="button";
  rollNo:number=123;
  isIndia:boolean=true;
  currentDate :Date=new Date(); 
  statName :string="goa";
  devName = signal("python");
constructor(){

};
 checkAlert(){
  alert("welcome to our course");
 };
//  event Binding
 checkAlertWithPara(message:string){
    alert(message);
 }
 changeCourseTitle(){
  this.courseTitle="React js";
  // set the signal variable value
  this.devName.set("python_Dev");
 }
}
