import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-courses-details-2',
  templateUrl: './courses-details-2.component.html',
  styleUrl: './courses-details-2.component.css'
})
export class CoursesDetails2Component {

  constructor(
    private router:Router,
    private route:ActivatedRoute) { 

    } 

close(){
  // console.log("close");
  this.router.navigate([{ outlets : { course_details: null,course_details2 :null }}])

}
}
