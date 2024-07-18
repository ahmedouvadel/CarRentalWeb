import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrl: './add-cars.component.css'
})
export class AddCarsComponent {

  constructor(private router:Router){}

  onCancel():void {
    this.router.navigateByUrl('/cars')
  }

}
