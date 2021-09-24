import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  allBooksdetail: Array<any> = [];
  scope:any;
  id: any;
  private routeSub: Subscription = new Subscription;
  deger: any;
  
  constructor(private dataServicedetail: DataServiceService ,private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.allBooksdetail = this.dataServicedetail.books; // kitap için olaşturduğumuz servis ile haberleşerek id ye ulaşmayı sağlar


    this.route.paramMap
      .subscribe(params => {
        this.id = params.get('id');
        console.log(this.id);
      });

      //find fonksiyonu karşılaştırmak için kullanılır
    if (this.allBooksdetail && this.allBooksdetail.length > 0) { //burada routingden aldığı id dinleyrek karşılaştırma yapar eşitse detail sayfasına yönlenidirir
      this.deger = this.allBooksdetail.find((findedBook) => {
        return findedBook.id === +this.id;

      })
      
    }


}
delete() { // bu alnada silme işlemini gerçekleştirir
  if (confirm('Silme istediğinize emin misiniz?')) {
    const index = this.allBooksdetail.indexOf(this.deger);
    this.allBooksdetail.splice(index, 1);

    this.router.navigate(['/dashboard']);
  } else {
  
    console.log(' ');
  }
 
}


}



