import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CasaDetallDto } from '../models/casa-detall-dto';

@Injectable({
  providedIn: 'root'
})
export class CasaRuralService {
  private http = inject(HttpClient);
  private apiCasas = 'https://ruralstay-latest.onrender.com/api/v1/casas';

  obtenerDetalleCasa(id: number): Observable<CasaDetallDto> {
    return this.http.get<CasaDetallDto>(`${this.apiCasas}/detalle/${id}`);
  }
}
