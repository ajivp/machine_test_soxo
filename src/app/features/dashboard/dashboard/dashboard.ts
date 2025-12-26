import { Component, ChangeDetectionStrategy, inject, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { User, UserService } from '../../../core/services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard implements AfterViewInit {

  private userService = inject(UserService);
  private router = inject(Router);

  displayedColumns = ['id', 'name', 'email', 'username', 'actions'];
  dataSource = new MatTableDataSource<User>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.dataSource.data = users;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  addUser() {
    this.router.navigate(['/users']);
  }

  edit(user: User) {
    this.router.navigate(['/users'], { state: { user } });
  }

  delete(id: number) {
    this.userService.deleteUser(id);

    // Update table instantly
    this.dataSource.data = this.dataSource.data.filter(u => u.id !== id);
  }
}
