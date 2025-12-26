import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Sidebar } from '../components/sidebar/sidebar';
import { Navbar } from '../components/navbar/navbar';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [
    CommonModule,
    RouterModule,
    Sidebar,
    Navbar,
    MatSidenavModule
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
