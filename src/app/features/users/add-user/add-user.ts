import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss'
})
export class AddUser {

  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private router = inject(Router);

  isEdit = false;

  form = this.fb.nonNullable.group({
    id: [0],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required]
  });

  ngOnInit() {
    const user = history.state.user;
    if (user) {
      this.isEdit = true;
      this.form.patchValue(user);
    }
  }

  save() {
    if (this.form.invalid) return;

    const user = this.form.getRawValue();

    this.isEdit
      ? this.userService.updateUser(user)
      : this.userService.addUser(user);

    this.router.navigate(['/dashboard']);
  }
}
