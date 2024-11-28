import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private router:Router,
    private route:ActivatedRoute){

  }

  showTshirts(){
    this.router.navigate(['tshirts'],{relativeTo:this.route});

  }
  showTrousers(){
    this.router.navigate(['trousers'],{relativeTo:this.route});

  }

}
