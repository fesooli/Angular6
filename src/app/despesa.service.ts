import { Injectable } from '@angular/core';
import { Despesa } from './despesa';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private despesas: Despesa[];

  constructor(private localStorageService: LocalStorageService) { }

  public getAll(): Despesa[] {
    this.getDb();
    return this.despesas;
  }

  getDb(): void {
    this.despesas = [];
    if(this.localStorageService.get('despesas') != null) {
      this.despesas = JSON.parse(this.localStorageService.get('despesas'));
    }
  }

  public save(despesa: Despesa): void {
    this.getDb();
    this.despesas.push(despesa);
    this.localStorageService.set('despesas', JSON.stringify(this.despesas));
  }

  public delete(despesaId: number): void {
    this.despesas.splice(this.despesas.indexOf(this.despesas.find(d => d.id == despesaId)), 1);
    this.localStorageService.set('despesas', JSON.stringify(this.despesas));
  }
}
