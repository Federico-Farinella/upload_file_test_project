import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoStateService {
  private logoSubject = new BehaviorSubject<string | null>(null);
  public logo$: Observable<string | null> = this.logoSubject.asObservable();

  constructor() {
    this.checkAndSetDefaultLogo();
  }

  /**
   * Controlla se il file logo.png esiste nella cartella degli asset.
   * Se esiste, lo imposta come logo predefinito.
   */
  private checkAndSetDefaultLogo(): void {
    // Angular copia i file di `public` nella root dell'applicazione.
    // Lo slash iniziale evita che il percorso dipenda dalla route corrente.
    const defaultLogoPath = '/logo.png';

    const img = new Image();
    img.src = defaultLogoPath;

    // Se l'immagine esiste ed è caricabile, imposta il percorso
    img.onload = () => {
      // Impostiamo il percorso solo se nessun logo è già stato caricato dall'utente
      if (!this.logoSubject.value) {
        this.logoSubject.next(defaultLogoPath);
      }
    };

    // Se il file non esiste (errore 404), lascia lo stato a null
    img.onerror = () => {
      console.log('Nessun logo.png predefinito trovato negli asset.');
    };
  }

  updateLogo(base64Image: string | null): void {
    this.logoSubject.next(base64Image);
  }
}
