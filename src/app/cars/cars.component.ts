import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CarServicesService } from "../Services/carservices/carservices.service";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-cars",
  templateUrl: "./cars.component.html",
  styleUrl: "./cars.component.css",
})
export class CarsComponent implements OnInit {
  Cars:any[]=[];
  formGroup!:FormGroup
  constructor(private router: Router,
    private carService:CarServicesService
  ) {}
  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars(){
    this.Cars=[];
    this.carService.getAllCars().subscribe((res:any) =>{
      res.forEach((e:any) => {
        e.image1 = 'data:image/jpeg;base64,' + e.image1;
        console.log(e)
        this.Cars.push(e);
      });
    })
  }
}
