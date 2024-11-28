import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employees-lst',
  templateUrl: './employees-lst.component.html',
  styleUrl: './employees-lst.component.css'
})
export class EmployeesLstComponent implements OnInit {
myemployees =[
  {  "id": 1,"name": "John Doe", "email": "johndoe@example.com", "phone": "123-456-7890"},
  {  "id": 2,"name": "Jane Smith", "email": "janesmith@example.com", "phone": "987-654-3210"},
  {  "id": 3,"name": "Bob Johnson", "email": "bobjohnson@example.com", "phone": "555-555-5555"},
  {  "id": 4,"name": "Alice Brown", "email": "alicebrown@example.com", "phone": "111-111-1111"},
  {  "id": 5,"name": "Chalie Davis", "email": "charliedavis@example.com", "phone": "222-222-2222"},
  {  "id": 6,"name": "Diana White", "email": "dianawhite@example.com", "phone": "333-333-3333"},
]

constructor(private router : Router,private route : ActivatedRoute) {
  // this.myemployees = this.employeeService.getEmployees();
}
 EmpClick(emp : any){
  console.log(emp);
  // this.router.navigate(['/employees',emp.id,emp.name]);
  this.router.navigate(['/employees',emp.id]);
 }

 selectedID : any
 ngOnInit(): void {
  this.route.paramMap.subscribe((params : ParamMap) => {
    let id  = params.get('id');
    this.selectedID = id;
 });
}

 isSelected(emp : any){
  return parseInt(emp.id) === parseInt(this.selectedID);
 }

 }


