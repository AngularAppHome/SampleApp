import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SampleGridComponent } from '../pages/sample-grid/sample-grid.component';
import { SampleGrid } from '../interfaces/sample-grid';

@Injectable()
export class GridServiceService {

  constructor(private http: Http) {}

  getSampleGridData() {
    
    return this.http.get('../sampledata/sample.json')
                .toPromise()
                .then(res => <SampleGrid[]> res.json().data)
                .then(data => { return data; });
  }

}
