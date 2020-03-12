import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  displayBasic: boolean;
  displayBasic2: boolean;

  // END DIALOGS

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  isOptional = false;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    console.log(this.firstFormGroup.value);
  }

  getInfo() {
    console.log(this.firstFormGroup.value.firstCtrl);
  }

  showBasicDialog() {
      this.displayBasic = true;
  }

  showBasicDialog2() {
      this.displayBasic2 = true;
      this.displayBasic = false;
  }
}
