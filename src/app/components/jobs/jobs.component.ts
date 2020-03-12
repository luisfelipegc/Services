import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styles: [`
  .reset {
    margin-left: auto;
}
`]
})
export class JobsComponent implements OnInit {

  user: any = {
    email: '',
    password: ''
  };

  forma: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.createForm();
   }

   ngOnInit() {

   }

   get invalidEmail() {
      return this.forma.get('email').invalid && this.forma.get('email').touched;
   }

   get invalidPassword() {
    return this.forma.get('password').invalid && this.forma.get('password').touched;
 }


   createForm() {
     this.forma = this.formbuilder.group({
       email : ['', [Validators.required,
                     Validators.email,
                     Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+[.]+[a-z]{2,3}$')
                    ]
               ],
       password: ['', [Validators.required,
                       Validators.minLength(6),
                      ]
                 ]

      });
    }

  getInfo() {
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach( control => {
        control.markAsTouched();
      });
    } else {
      this.user = {
        ...this.forma.value
      };
      console.log(this.user);
    }
  }
}
