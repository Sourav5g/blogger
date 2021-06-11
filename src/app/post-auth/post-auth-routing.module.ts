import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule),
  },
  {
    path: 'chat-room',
    loadChildren: () => import('./chat-room/chat-room.module').then(m => m.ChatRoomModule),
  },
  {
    path: 'calender',
    loadChildren: () => import('./calender/calender.module').then(m => m.CalenderModule),
  },
  {
    path: 'floara',
    loadChildren: () => import('./floara/floara.module').then(m => m.FloaraModule),
  },
  {
    path: 'gridster',
    loadChildren: () => import('./gridsters/gridsters.module').then(m => m.GridstersModule),
  },
  {
    path: 'dynamicComponent',
    loadChildren: () => import('./dynamic-cmpt/dynamic-cmpt.module').then(m => m.DynamicCmptModule),
  },
  {
    path: 'datatable',
    loadChildren: () => import('./data-table/data-table.module').then(m => m.DataTableModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostAuthRoutingModule { }
