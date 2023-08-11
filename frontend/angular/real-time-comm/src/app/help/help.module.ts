import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/help-page',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: HelpComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HelpComponent],
})
export class HelpModule {}
