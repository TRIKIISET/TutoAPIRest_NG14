import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  devises$!: Observable<any>;
  montantConverti:number =0;
  constructor(private currencyService:CurrencyService) { }

  ngOnInit(): void {
    this.devises$ = this.currencyService.getSupportedCurrencies()
    // Pour tester l'API
    this.currencyService.convert('CHF', 'TND', 10).subscribe(
      data => console.log(data)
    )
  }
  convertir(amount:string, from:string, to:string){
    this.currencyService.convert(from, to, Number(amount)).subscribe(
      data => this.montantConverti = data.result.convertedAmount)
  }
}
