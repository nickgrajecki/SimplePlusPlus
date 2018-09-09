import { Injectable } from '@angular/core';
import { Drink } from './drink';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DrinkService {

  constructor(private http:HttpClient) { }

  private drinksUrl = 'api/drinks';

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getDrinks(): Observable<Drink[]> {
    return this.http.get<Drink[]>(this.drinksUrl)
    .pipe(tap(drinks => console.log('fetched drinks')), catchError(this.handleError('getDrinks', []))
    );
  }

  addDrink(drink: Drink): Observable<Drink> {
    return this.http.post<Drink>(this.drinksUrl, drink, httpOptions);
  }

  removeDrink(drink: Drink | number): Observable<Drink> {
    const id = typeof drink === 'number' ? drink : drink.id; 
    /* template literal string --> */ const url = `${this.drinksUrl}/${id}`;
    return this.http.delete<Drink>(url, httpOptions)
    .pipe(tap(_ => console.log(`deleted drink name=${name}`))
    );
  }
}
