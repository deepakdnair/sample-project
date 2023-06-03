import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
detailsForm:any


constructor(private fb: FormBuilder) {

}

ngOnInit(): void {
  this.detailsForm = this.fb.group({
    modelName: ['Sample model Name'],
    modelDesc: ['Point of Sale data from Reliance Fresh, Hyderabad'],
    inputLayer: [200],
    trainRatio: [48],
    misRatio: [12],
    learningRate: [36],
    actFn: ['OWC'],
    modelType: ['Data Format'],
    epochs: ['Details Row'],
    embeddingDim: [36],
    filterSize: ['John.Doe'],
    noOfFilters: ['John.Doe'],
    batchSize: ['John.Doe'],
    drop: ['Properties']
  })
}
}
