import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsercreateComponent } from './usercreate.component';
import { AuditLogComponentView } from './user-audit-log/audit-log.component';
import { SharedModule } from '../../../shared/shared.module';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FormsModule } from "@angular/forms";
import { TextMaskModule } from "angular2-text-mask";
import { LoadingModule } from 'ngx-loading';
import { OrderModule } from 'ngx-order-pipe';
import { DatePickerModule } from '../../../modules/datepicker.module';

import {UserSharedModule} from "../user-shared/user.shared.module";

const CUSTCREATE_ROUTE = [
    { path: '', component: UsercreateComponent },
];

@NgModule({
	  declarations: [UsercreateComponent,AuditLogComponentView],
    imports: [
		FormsModule,
		TextMaskModule,		
			CommonModule,
			SharedModule,
			NgxDatatableModule,
			RouterModule.forChild(CUSTCREATE_ROUTE),
			LoadingModule, OrderModule,UserSharedModule
    ]
  
})
export class UserCreateModule { 

}
