import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterSuperAdmin } from '../models/register-super-admin.model';
import { SilverBayApiAppService } from '../services/silver-bay-api-app.service';

@Component({
  selector: 'app-register-super-admin',
  templateUrl: './register-super-admin.component.html',
  styles: [
  ]
})
export class RegisterSuperAdminComponent implements OnInit {

  constructor(public service:SilverBayApiAppService,
    private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
  }

  register(form: NgForm) {
    this.service.registerUser().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Submitted successfully", "User Register");
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.registerData = new RegisterSuperAdmin();
  }

}
