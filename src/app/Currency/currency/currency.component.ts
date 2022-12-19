import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  devises$!: Observable<any>
  constructor(private currencyService:CurrencyService) { }

  ngOnInit(): void {
    this.devises$ = this.currencyService.getSupportedCurrencies()
   }

}
