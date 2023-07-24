import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';

import {Haber} from '../../model/haber.interface'
import { HaberService } from 'src/app/service/haber-service/haber.service';

import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-home-haberler',
  templateUrl: './home-haberler.component.html',
  styleUrls: ['./home-haberler.component.css']
})
export class HomeHaberlerComponent implements OnInit{

  haberler: Haber[] = [];
  selectedHaber!: Haber ;
  
  @ViewChild('haberDetayDialog') haberDetayDialog!: TemplateRef<any> 

  constructor(private haberService: HaberService,private dialog: MatDialog) { }

  ngOnInit() {
    this.getHaberler();
  }

  getHaberler() {
    this.haberService.getAllHaberler().subscribe({
      next: (haberler: Haber[]) => {
        this.haberler = haberler;
      },
      error: (error) => {
        console.error('Haberler alınamadı:', error);
      },
    });
  }

  showHaberDetay(haber: Haber) {
    this.selectedHaber = haber;
    this.dialog.open(this.haberDetayDialog);
  }

  closeHaberDetayDialog() {
    this.dialog.closeAll();
  }
}
