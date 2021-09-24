import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'book-detail', component: BookDetailComponent },
    { path: 'book-detail', component: DashboardComponent },
    { path: 'book-detail/:id', component: BookDetailComponent },
    { path: '', component: DashboardComponent },
 
    // { path: '**', component: NotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }