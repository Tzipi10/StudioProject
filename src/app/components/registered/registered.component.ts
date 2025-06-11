import { Component, HostListener } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, AllCommunityModule, ModuleRegistry, GridReadyEvent } from 'ag-grid-community';
import { Registered } from '../../types/registered';
import { RegistrationsService } from '../../services/registrations/registration.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {RegisteredDetailsComponent} from '../registered-details/registered-details.component'
import { LessonsService } from '../../services/lessons/lessons.service';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-registered',
  standalone: true,
  imports: [AgGridModule,MatDialogModule],
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent {
  registereds: Registered []=[];

  constructor(public router: Router, private registersService: RegistrationsService,private lessonsService: LessonsService , private titleService: Title, private dialog: MatDialog) {}

  columnDefs: ColDef[] = [
    { headerName: 'ID', field: 'id', filter: 'agNumberColumnFilter', headerClass: 'text-right', cellClass: 'text-right' },
    { headerName: 'First Name', field: 'firstName', filter: 'agTextColumnFilter', headerClass: 'text-right', cellClass: 'text-right' },
    { headerName: 'Last Name', field: 'lastName', filter: 'agTextColumnFilter', headerClass: 'text-right', cellClass: 'text-right' },
    { headerName: 'Phone', field: 'phone', filter: 'agTextColumnFilter', headerClass: 'text-right', cellClass: 'text-right' },
    { headerName: 'Lesson Name', field: 'lessonName', filter: 'agTextColumnFilter', headerClass: 'text-right', cellClass: 'text-right' },
    { headerName: 'Price', field: 'price', filter: 'agNumberColumnFilter', headerClass: 'text-right', cellClass: 'text-right' },
    { headerName: 'Paid', field: 'paid', filter: 'agSetColumnFilter', headerClass: 'text-right', cellClass: 'text-right', width:90 },
    {
  headerName: 'Details',
  field: 'details',
  cellRenderer: (params: any) => {
    const button = document.createElement('button');
    button.innerText = '👁';
    // button.className = 'mat-mdc-button mat-flat-button mat-primary details-button';
    button.classList.add('details-button');
    button.addEventListener('click', () => {
      params.context.componentParent.viewDetails(params.data.id);
    });
    return button;
  }
}
  ];

  rowData: any;
  ngOnInit() {
  this.registereds = this.registersService.getRegistrations().map(registration => {
    const lesson = this.lessonsService.getLessonById(registration.lessonId);
    return {
     ...registration,
      lessonName: lesson ? lesson.lessonName: 'Unknown Lesson'
      };
  });

  this.rowData = this.registereds;
  this.titleService.setTitle('registerads list');
  }

  private loadRegistrations() {
    this.registereds = this.registersService.getRegistrations();
  } 
  
  getRowStyle = (params: any) => {
   if (!params.data.paid) {
    return { background: '#ffe0e0' };
      }
  return undefined;
  } 

@HostListener('window:resize', ['$event'])
onResize() {
  if (this.gridApi) {
    this.gridApi.sizeColumnsToFit();
  }
}

gridApi: any;

onGridReady(params: GridReadyEvent) {
  this.gridApi = params.api;
  this.gridApi.sizeColumnsToFit();
}

context = { componentParent: this };

viewDetails(id: number) {
    const register = this.registereds.find(r => r.id === id);
      const dialogRef = this.dialog.open(RegisteredDetailsComponent, {
        data: register
      });
  }


}
