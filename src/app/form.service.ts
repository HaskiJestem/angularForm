import { Injectable } from '@angular/core';
import { FormElement } from '../app/element.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  formElements: FormElement = {
    ala: {type: 'text'},
    ma: {type: 'number'},
    kota: {type: 'select', options: ['a', 'b', 'c']}
  }

  getFormElements(): FormElement {
    return this.formElements;
  }

  sendForm(form: Record<string, any>): void {
    console.log(form);
  }
}
