import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { Route, RouterModule, Routes } from '@angular/router';

const routing = RouterModule.forChild([
  { path: 'help-page', component: HelpComponent },
  { path: '**', redirectTo: 'help-page', pathMatch: 'full' },
]);
@NgModule({
  imports: [CommonModule, routing],
  declarations: [HelpComponent],
})
export class HelpModule {}
