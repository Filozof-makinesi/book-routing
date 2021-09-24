import { Component, Input, OnInit, Query } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent  {
  [x: string]: any;
  fname: any;
  lname: any;
  fyıl: any;
  foto: any;
  fyayn: any;
  honeypot: any;
 
  form = this.fb.group({
    fname: ['',Validators.required],
    lname: [''],
    fyıl:  [''],
      foto:  [''],
      fyayn: [''],
    
    });
    addService: Array<any> = [];
 
  
     
     
  constructor(private fb: FormBuilder, private dataService: DataServiceService, private router: Router, private route: ActivatedRoute) { 
    this.form = this.fb.group({
			fname: this.fname,
			lname: this.lname,
			fyıl: this.fyıl,
			foto: this.foto,
			fyayn: this.fyayn,
      form: this.fb.array([]) ,
      });

	
  }
 
 
  

onSubmit(form: { fname: string; lname: string; fyıl:number; foto: string; fyayn: string;}) {
  
  
  if(this.id !== ' ' && this.fname !== ' ' && this.lname!== ' ' && this.fyıl !== ' ' && this.foto !== ' ' && this.fyayn !== ' ' ){
    this.dataService.books.push({id: Math.random(),bookName: form.fname,autor: form.lname ,year:form.fyıl, imageUrl: form.foto, home: form.fyayn });
    this.router.navigate(['/dashboard']); //anasayfaya yönlendir

    }
    else{
        alert('Lütfen tüm alanları doldurunuz!!');
    }
  console.log(form)
 
  }
  
  ngOnInit(): void {

    this.addService = this.dataService.books;
    

    
  }

    
}
