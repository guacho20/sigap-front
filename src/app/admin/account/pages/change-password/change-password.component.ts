import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, UtilitarioService, ValidadoresService } from 'ngprime-core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styles: [
  ]
})
export class ChangePasswordComponent implements OnInit {

  reglas = [];
  passwordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private utilitarioSvc: UtilitarioService,
    private validadores: ValidadoresService
  ) {
    this.createPasswordForm();
  }

  ngOnInit(): void {
    /*this.authSvc.getReglasClave().subscribe(resp => {
      this.reglas = resp.datos;
    });*/
  }

  createPasswordForm(): void {
    this.passwordForm = this.fb.group({
      contrasenaActual: ['', Validators.required],
      nuevaContrasena: ['', Validators.required],
      confirmarContrasena: ['', Validators.required],
    }, { validators: this.validadores.passwordsIguales('nuevaContrasena', 'confirmarContrasena') });
  }

  isInvalidField(campo: string): boolean {
    return this.passwordForm.get(campo).invalid && this.passwordForm.get(campo).touched;
  }

  getErrorMessage(campo: string): string {
    let message;
    if (this.passwordForm.get(campo).hasError('required')) {
      message = 'Este campo es obligartorio';
    } else if (this.passwordForm.get(campo).hasError('noEsIgual')) {
      message = 'No coinciden las cotraseñas';
    } else if (this.passwordForm.get(campo).hasError('existe')) {
      message = 'Este número de documento ya esta registrado';
    } else if (this.passwordForm.get(campo).hasError('maxlength')) {
      const maxLength = this.passwordForm.get(campo).errors?.maxlength.requiredLength;
      message = `No puede ingresar más de ${maxLength} caracteres`;
    } else if (this.passwordForm.get(campo).hasError('minlength')) {
      const minlength = this.passwordForm.get(campo).errors?.minlength.requiredLength;
      message = `No puede ingresar menos de ${minlength} caracteres`;
    }
    return message;
  }
  savePassword(): void {
    if (this.passwordForm.invalid) {
      Object.values(this.passwordForm.controls).forEach(control => {
        control.markAsTouched();
      });
      // console.log(this.passwordForm);
      return;
    }
    this.utilitarioSvc.abrirLoading();
    this.authSvc.actualizarContrasena(this.passwordForm.value).subscribe(res => {
      this.utilitarioSvc.agregarMensajeExito(res.mensaje);
      this.utilitarioSvc.cerrarLoading();
      this.passwordForm.reset();
    }, (err => { this.utilitarioSvc.cerrarLoading(); }));
  }

}
