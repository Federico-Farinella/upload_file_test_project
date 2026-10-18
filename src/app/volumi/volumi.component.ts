import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ConfigurazioneComponent } from './configurazione/configurazione.component';

@Component({
  selector: 'jhi-volumi',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    ConfigurazioneComponent
  ],
  templateUrl: './volumi.component.html',
  styleUrls: ['./volumi.component.css']
})
export class VolumiComponent {}
