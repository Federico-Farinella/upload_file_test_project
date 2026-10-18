import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ConfigurazioneComponent } from '../configurazione/configurazione.component';

@Component({
  selector: 'jhi-volumi',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    ConfigurazioneComponent
  ],
  templateUrl: './dashboard/dashboard.component.html',
  //styleUrls: ['./volumi.component.css']
})
export class DashBoardComponent {}
