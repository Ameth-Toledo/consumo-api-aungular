import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FakeServiceService } from './services/fake-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Proyecto2';
  dataSource : any[] = [] 

  constructor (private fakeStoreService : FakeServiceService) {}

  async ngOnInit() {
    this.getProducts()
  }

  async getProducts() {
    this.fakeStoreService.getProducts().subscribe(

      data => {
        this.dataSource = data
        console.log(data)
      }
    )
    console.log(this.dataSource)
  }
}
