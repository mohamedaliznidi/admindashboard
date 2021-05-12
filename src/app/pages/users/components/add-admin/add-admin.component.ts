import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent implements OnInit {
  hide = true;
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: '',
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      number: 0,
    });
    this.myForm.valueChanges.subscribe(console.log)
  }

  public onSubmit(): void {
    console.log('sub');
  }
}
