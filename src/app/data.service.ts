import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private hardcodedData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' }
  ];

  constructor() { }

  getData(): Observable<any> {
    const data = localStorage.getItem('cachedData');
    if (data) {
      // Returnera cachad data som Observable
      return of(JSON.parse(data));
    } else {
      // Använd hårdkodad data och cacha det
      return of(this.hardcodedData).pipe(
        tap(response => {
          localStorage.setItem('cachedData', JSON.stringify(response));
        })
      );
    }
  }

  clearCache(): void {
    localStorage.removeItem('cachedData');
  }
}
