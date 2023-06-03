import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  displayedColumns: string[] = ['select','docType', 'lang', 'domain', 'intents', 'entities', 'docs', 'assigned', 'tagged', 'trained', 'status'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);
  selectedHeadIndex = 0;

  constructor() {

  }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        docType: 'Cash Reimbursable', lang: 'English', domain: 'Supplier Contracts', intents: '12', entities: '98', docs: '12', assigned: '3', tagged: '6', trained: '3', status: 'Assigned'
      },
      {
        docType: 'Fixed Price', lang: 'English', domain: 'Supplier Contracts', intents: '12', entities: '98', docs: '12', assigned: '3', tagged: '6', trained: '3', status: 'Assigned'
      },
      {
        docType: 'Cash Reimbursable', lang: 'English', domain: 'Supplier Contracts', intents: '12', entities: '98', docs: '12', assigned: '3', tagged: '6', trained: '3', status: 'Assigned'
      },
      {
        docType: 'Cash Reimbursable', lang: 'English', domain: 'Supplier Contracts', intents: '12', entities: '98', docs: '12', assigned: '3', tagged: '6', trained: '3', status: 'Assigned'
      },
      {
        docType: 'Cash Reimbursable', lang: 'English', domain: 'Supplier Contracts', intents: '12', entities: '98', docs: '12', assigned: '3', tagged: '6', trained: '3', status: 'Assigned'
      },
      {
        docType: 'Cash Reimbursable', lang: 'English', domain: 'Supplier Contracts', intents: '12', entities: '98', docs: '12', assigned: '3', tagged: '6', trained: '3', status: 'Assigned'
      },
      {
        docType: 'Cash Reimbursable', lang: 'English', domain: 'Supplier Contracts', intents: '12', entities: '98', docs: '12', assigned: '3', tagged: '6', trained: '3', status: 'Assigned'
      },
      {
        docType: 'Cash Reimbursable', lang: 'English', domain: 'Supplier Contracts', intents: '12', entities: '98', docs: '12', assigned: '3', tagged: '6', trained: '3', status: 'Assigned'
      }
    ]
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  selectHeadFilter(index:number) {
    this.selectedHeadIndex = index;
  }
}
