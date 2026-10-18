import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoStateService {
  private logoSubject = new BehaviorSubject<string | null>(null);
  public logo$: Observable<string | null> = this.logoSubject.asObservable();

  updateLogo(base64Image: string | null): void {
    this.logoSubject.next(base64Image);
  }
}
