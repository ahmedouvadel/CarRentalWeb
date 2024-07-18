import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.css'
})
export class AddUsersComponent {

  constructor(private route:Router){}

  onCancel(): void {
    this.route.navigateByUrl('admin/users')
      }

}
