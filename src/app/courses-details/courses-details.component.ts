import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrl: './courses-details.component.css'
})
export class CoursesDetailsComponent {

  constructor(
    private router:Router,
    private route:ActivatedRoute) { 

    } 

close(){
  // console.log("close");
  this.router.navigate([{ outlets : { course_details: null,course_details2 :null }}])

}
}
