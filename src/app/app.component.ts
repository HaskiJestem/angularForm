import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormArray, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormService } from '../app/form.service';
import { ProcessedElement } from '../app/element.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "formAngular"

  formularz = this.formBuilder.group({
    dynamic: this.formBuilder.array([])
  }) 
  formElements = [] as ProcessedElement[];
   
  constructor(private formBuilder: FormBuilder, private formService: FormService) {}

  get dynamic() {
    return this.formularz.get('dynamic') as FormArray;
  }

  ngOnInit() {
    const formElems = this.formService.getFormElements();
    let id = 0;
    for (const element in formElems) {
      console.log(element);
      this.dynamic.push(this.formBuilder.control(''))
      this.formElements.push({id, name: element, type: formElems[element].type, options: formElems[element].options})
      id++;
    }
  }

  submitForm(): void {
    const formData = {} as Record<string, any>;
    this.formularz.value.dynamic?.forEach((element, index) => {
      formData[this.formElements[index].name] = element;
    })
    this.formService.sendForm(formData);
  }
}
