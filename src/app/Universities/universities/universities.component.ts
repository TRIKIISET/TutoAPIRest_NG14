import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UniversitiesService } from '../universities.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {

  pays:string="Tunisia";
  liste$! :Observable<any>;
  constructor(private univService:UniversitiesService) { }

  ngOnInit(): void {

  }

  afficher(){
      this.liste$ = this.univService.getUniversities(this.pays);
  }

}
