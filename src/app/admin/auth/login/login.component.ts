import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'ngprime-core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authSvc: AuthService,
    private spinner: NgxSpinnerService
  ) {
    this.crearLoginForm();
  }

  ngOnInit(): void { }

  crearLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      remember: [false, Validators.required],
      pool: ['default', Validators.required]
    });
  }

  isInvalidField(campo: string): boolean {
    return this.loginForm.get(campo).invalid && this.loginForm.get(campo).touched;
  }

  getErrorMessage(campo: string): string {
    let message;
    if (this.loginForm.get(campo).hasError('required')) {
      message = 'Este campo es obligartorio';
    } else if (this.loginForm.get(campo).hasError('noEsIgual')) {
      message = 'No coinciden las cotraseñas';
    } else if (this.loginForm.get(campo).hasError('existe')) {
      message = 'Este número de documento ya esta registrado';
    } else if (this.loginForm.get(campo).hasError('maxlength')) {
      const maxLength = this.loginForm.get(campo).errors?.maxlength.requiredLength;
      message = `No puede ingresar más de ${maxLength} caracteres`;
    } else if (this.loginForm.get(campo).hasError('minlength')) {
      const minlength = this.loginForm.get(campo).errors?.minlength.requiredLength;
      message = `No puede ingresar menos de ${minlength} caracteres`;
    }
    return message;
  }

  login(): void {
    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach(control => {
        control.markAsTouched();
      });
      console.log(this.loginForm);
      return;
    }
    // console.log(this.loginForm.value);
    this.spinner.show();
    this.authSvc.login(this.loginForm.value).subscribe((res) => {
      console.log(res);
      if (res.cambia_clave) {
        // this.spinner.hide();
        // $('#modal-change-password').modal('show');
        this.spinner.hide();
        return console.log('cambio la contraseña');
      }
      // this.spinner.hide();
      this.router.navigate(['/1']);
      this.spinner.hide();
      //  console.log('Ingrese al sistema');
    }, (err) => {
      this.spinner.hide();
    });
  }

}
