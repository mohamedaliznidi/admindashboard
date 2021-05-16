import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  //CURRENCY RATE
  //TND
  public TND_USD: number = 10;
  public TND_EUR: number = 20;
  public TND_GBP: number = 30;
  //EUR
  public EUR_GBP: number = 40;
  //USD
  public USD_EUR: number = 50;
  public USD_GBP: number = 60;

  public from: string = '';
  public to: string = '';
  public rateNB: number = 2;
  public fromNB: number = 0;
  public toNB: number = this.fromNB * this.rateNB;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.loadCurrency1().subscribe((res) => {
    //   this.TND_USD = res.TND_USD;
    //   this.TND_EUR = res.TND_EUR;
    // });
    // this.loadCurrency2().subscribe((res) => {
    //   this.TND_GBP = res.TND_GBP;
    //   this.USD_EUR = res.USD_EUR;
    // });
    // this.loadCurrency3().subscribe((res) => {
    //   this.USD_GBP = res.USD_GBP;
    //   this.EUR_GBP = res.EUR_GBP;
    // });
  }
  public loadCurrency1(): Observable<any> {
    return this.http.get<any>(
      'https://free.currconv.com/api/v7/convert?q=TND_USD,TND_EUR&compact=ultra&apiKey=e637f2794949d71d61c6'
    );
  }
  public loadCurrency2(): Observable<any> {
    return this.http.get<any>(
      'https://free.currconv.com/api/v7/convert?q=TND_GBP,USD_EUR&compact=ultra&apiKey=e637f2794949d71d61c6'
    );
  }
  public loadCurrency3(): Observable<any> {
    return this.http.get<any>(
      'https://free.currconv.com/api/v7/convert?q=USD_GBP,EUR_GBP&compact=ultra&apiKey=e637f2794949d71d61c6'
    );
  }
  public onSubmit(): void {}

  public calFrom(data): void {
    this.toNB = data * this.rateNB;
  }
  public calTo(data): void {
    this.fromNB = data / this.rateNB;
  }
  public changeFrom(data): void {
    this.from = data;
    this.calRate(this.from, this.to);
    this.calTo(this.from);
  }
  public changeTo(data): void {
    this.to = data;
    this.calRate(this.from, this.to);
    this.calFrom(this.to);
  }
  public calRate(from, to): void {
    if (to == from) {
      this.rateNB = 1;
    }
    switch (from) {
      case 'TND':
        switch (to) {
          case 'USD':
            this.rateNB = this.TND_USD;
            break;
          case 'EUR':
            this.rateNB = this.TND_EUR;
            break;
          case 'GBP':
            this.rateNB = this.TND_GBP;
            break;
        }
        break;
      case 'USD':
        switch (to) {
          case 'TND':
            this.rateNB = 1 / this.TND_USD;
            break;

          case 'EUR':
            this.rateNB = this.USD_EUR;
            break;
          case 'GBP':
            this.rateNB = this.USD_GBP;
            break;
        }
        break;
      case 'EUR':
        switch (to) {
          case 'TND':
            this.rateNB = 1 / this.TND_EUR;
            break;
          case 'USD':
            this.rateNB = 1 / this.USD_EUR;
            break;

          case 'GBP':
            this.rateNB = this.EUR_GBP;
            break;
        }
        break;
      case 'GBP':
        switch (to) {
          case 'TND':
            this.rateNB = 1 / this.TND_GBP;
            break;
          case 'USD':
            this.rateNB = 1 / this.USD_GBP;
            break;
          case 'EUR':
            this.rateNB = 1 / this.EUR_GBP;
            break;
        }
        break;
    }
  }
}
