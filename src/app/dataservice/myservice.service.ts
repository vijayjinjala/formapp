import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  cartcount = new BehaviorSubject<number>(0);
  constructor() { }
}
