import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  contactForm!: FormGroup;

  constructor(private form: FormBuilder){
    this.contactForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      number:['', [Validators.required, Validators.maxLength(10)]]
    });
  }

ngOnInit(): void {
  
}
enviar(e: Event){
      e.preventDefault();
      console.log(this.contactForm.value)
}

hasErrors(controlName: string, errorType: string){
  return this.contactForm.get(controlName)?.hasError(errorType) && this.contactForm.get(controlName)?.touched

}
}
