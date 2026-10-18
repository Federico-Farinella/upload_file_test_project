import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LogoStateService } from '../../shared/logo-state.service';

@Component({
  selector: 'jhi-configurazione',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './configurazione.component.html',
  styleUrls: ['./configurazione.component.css']
})
export class ConfigurazioneComponent {
  imageBase64: string | null = null;

  constructor(private logoStateService: LogoStateService) {}

  onFileSelected(event: Event): void {
    const inputElement = event.currentTarget as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file: File = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageBase64 = reader.result as string;
        this.logoStateService.updateLogo(this.imageBase64);
      };
      reader.readAsDataURL(file);
    }
  }
}
