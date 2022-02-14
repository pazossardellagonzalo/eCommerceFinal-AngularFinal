import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApirestService } from '../../services/apirest.service';
import { iLogin } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  password: string | null;
  user: string | null;

  constructor(
    public apirestService: ApirestService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.user = this.aRouter.snapshot.paramMap.get('user');
    this.password = this.aRouter.snapshot.paramMap.get('password');
    console.log('Rellena el campo password');
    console.log(this.password);
  }

  ngOnInit(): void {}

  login() {
    const log: iLogin = {
      user: this.loginForm.get('user')?.value,
      password: this.loginForm.get('password')?.value,
    };

    if (log.user !== null && log.password !== null) {
      this.apirestService.getLogin(log.user, log.password).subscribe((data) => {
        if(data !== null){
          this.router.navigate([
            'tablaEmpleados/loginForm/Managers',
          ]);
          this.toastr.success('Login correcto', 'Acceso permitido');
        }else{
          this.toastr.warning('Login incorrecto', 'Acceso denegado');
        }
      })
    }
  }
}
