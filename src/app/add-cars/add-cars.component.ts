import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CarServicesService } from "../Services/carservices/carservices.service";

@Component({
  selector: "app-add-cars",
  templateUrl: "./add-cars.component.html",
  styleUrls: ["./add-cars.component.css"],
})
export class AddCarsComponent implements OnInit {
  formGroup!: FormGroup;
  selectedFile1!: File;
  selectedFile2!: File;
  selectedFile3!: File;
  previewImage1!: string | ArrayBuffer | null;
  previewImage2!: string | ArrayBuffer | null;
  previewImage3!: string | ArrayBuffer | null;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private carService: CarServicesService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      marque: ["", [Validators.required]],
      modele: ["", [Validators.required]],
      annee: ["", [Validators.required]],
      prixParJour: ["", [Validators.required]],
      proprietaireName: ["", [Validators.required]],
      disponible: ["", [Validators.required]],
    });
  }

  onFileSelect(event: any, imageType: string) {
    const file = event.target.files[0];
    if (imageType === 'image1') {
      this.selectedFile1 = file;
      this.previewImage(file, 'image1');
    } else if (imageType === 'image2') {
      this.selectedFile2 = file;
      this.previewImage(file, 'image2');
    } else if (imageType === 'image3') {
      this.selectedFile3 = file;
      this.previewImage(file, 'image3');
    }
  }

  previewImage(file: File, imageType: string) {
    const reader = new FileReader();
    reader.onload = () => {
      if (imageType === 'image1') {
        this.previewImage1 = reader.result;
      } else if (imageType === 'image2') {
        this.previewImage2 = reader.result;
      } else if (imageType === 'image3') {
        this.previewImage3 = reader.result;
      }
    };
    reader.readAsDataURL(file);
  }

  addCar(): void {
    if (this.formGroup.valid) {
      const formData: FormData = new FormData();
      formData.append("marque", this.formGroup.get("marque")?.value);
      formData.append("modele", this.formGroup.get("modele")?.value);
      formData.append("annee", this.formGroup.get("annee")?.value);
      formData.append("prixParJour", this.formGroup.get("prixParJour")?.value);
      formData.append("disponible", this.formGroup.get("disponible")?.value);
      formData.append("proprietaireName", this.formGroup.get("proprietaireName")?.value);
      formData.append("img1", this.selectedFile1);
      formData.append("img2", this.selectedFile2);
      formData.append("img3", this.selectedFile3);

      this.carService.saveCar(formData).subscribe(
        (data) => {
          if (data.id != null) {
            alert("La Voiture Ajoute avec Succès");
            this.router.navigate(["/cars"]);
          } else {
            alert("Failed Ajoute Voiture");
          }
        },
        (error) => {
          console.error("Error adding car", error);
          alert("Error adding car");
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigateByUrl("/cars");
  }
}
