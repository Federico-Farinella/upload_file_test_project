import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoStateService } from '../logo-state.service';

@Component({
  selector: 'jhi-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  //styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoUrl: string | null = null;

  constructor(private logoStateService: LogoStateService) {}

  ngOnInit(): void {
    this.logoStateService.logo$.subscribe(logo => {
      this.logoUrl = logo;
    });
  }
}
