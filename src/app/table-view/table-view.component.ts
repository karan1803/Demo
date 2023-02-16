import { Component } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {

  usersList = [
    {
      first: 'Karan',
      last: 'Prabha',
      handler: '@karan01'
    },
    {
      first: 'Mani',
      last: 'vasu',
      handler: '@mani1'
    },
    {
      first: 'Nathan',
      last: 'Praga',
      handler: '@praga031'
    },
    {
      first: 'sam',
      last: 'jerin',
      handler: '@sam1'
    }
  ];

  columnsList = [
    {
      header: "#",
    }, 
    {
      header: "First",
    }, 
    {
      header: "Last",
    },
    {
      header: "Handle",
    }
  ];

}
