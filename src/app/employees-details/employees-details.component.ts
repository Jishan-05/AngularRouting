import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrl: './employees-details.component.css'
})
export class EmployeesDetailsComponent implements OnInit {

  public EmpID : any;
  // public EmpName : any;

  constructor(private route : ActivatedRoute,private router : Router) {


   }

   ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    // let name = this.route.snapshot.paramMap.get('name');
    // this.EmpID = id;
    // this.EmpName = name;
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id  = params.get('id');
      this.EmpID = id;
    })
   }

   PreviousEmp(){
    let previousId = parseInt(this.EmpID) - 1;
    this.router.navigate(['/employees',previousId]);

   }
   NextEmp(){
    let nextId = parseInt(this.EmpID) + 1;
    this.router.navigate(['/employees',nextId]);
   }

   goBack(){
    let selectedId = parseInt(this.EmpID);
    this.router.navigate(['/employees',{id : selectedId}]);
   }

}
