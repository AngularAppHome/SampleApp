import { Component, OnInit } from '@angular/core';
import { GridServiceService } from '../../services/grid.service';
import { SampleGrid } from '../../interfaces/sample-grid';

@Component({
  selector: 'app-sample-grid',
  templateUrl: './sample-grid.component.html',
  styleUrls: ['./sample-grid.component.css']
})
export class SampleGridComponent implements OnInit {

  SampleGrid : SampleGrid[]

  selectedData:SampleGrid;

  displayDialog: boolean;

  constructor(private gridService: GridServiceService) { }

    ngOnInit() {
      debugger
        this.gridService.getSampleGridData().then(data => this.SampleGrid = data);
        console.log(this.SampleGrid);
    }

    selectData(SampleGrid: SampleGrid) {
      this.selectedData = SampleGrid;
      this.displayDialog = true;
  }

}
