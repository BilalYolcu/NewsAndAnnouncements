import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import {Haber} from '../../model/haber.interface'
import { HaberService } from 'src/app/service/haber-service/haber.service';

import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-admin-haberler',
  templateUrl: './admin-haberler.component.html',
  styleUrls: ['./admin-haberler.component.css']
})
export class AdminHaberlerComponent implements OnInit{

  haberler: Haber[] = [];

  yeniHaber: Haber = {
    id: 0,
    konu: '',
    icerik: '',
    gecerlilikTarihi: new Date(),
    haberLinki: ''
  };

  haber: Haber = {
    id: 0,
    konu: '',
    icerik: '',
    gecerlilikTarihi: new Date(),
    haberLinki: ''
  };

  seciliHaber: Haber = {
    id: 0,
    konu: '',
    icerik: '',
    gecerlilikTarihi: new Date(),
    haberLinki: ''
  };

  @ViewChild('haberEkleDialog') haberEkleDialog!: TemplateRef<any> ;
  @ViewChild('haberDüzenleDialog') haberDüzenleDialog!: TemplateRef<any> 

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

  createHaber(yeniHaber: Haber) {
    this.haberService.createHaber(yeniHaber).subscribe({
      next: () => {
        this.getHaberler();
        this.yeniHaber = {
          id: 0,
          konu: '',
          icerik: '',
          gecerlilikTarihi: new Date(),
          haberLinki: ''
        }; 
      },
      error: (error) => {
        console.error('Haber oluşturma hatası:', error);
      },
    });
  }

  updateHaber(id: number, haber: Haber) {
    this.haberService.updateHaber(id, haber).subscribe({
      next: () => {
        this.getHaberler(); 
      },
      error: (error) => {
        console.error('Haber güncelleme hatası:', error);
      },
    });
  }

  deleteHaber(id: number) {
    this.haberService.deleteHaber(id).subscribe({
      next: (next) => {
        this.getHaberler();
      },
      error: (error) => {
        console.error('Haber silme hatası:', error);
      },
    });
  }

  showHaberEkle() {
    this.dialog.open(this.haberEkleDialog);
  }

  showHaberDuzenle(haber: Haber) {
    this.seciliHaber = haber;
    this.dialog.open(this.haberDüzenleDialog);
  }
  
  kaydetHaber() {
    this.createHaber(this.yeniHaber);
    this.dialog.closeAll();
  }

  guncelleHaber() {
    this.updateHaber(this.seciliHaber.id,this.seciliHaber);
    this.dialog.closeAll();
  }

  silHaber(haber: Haber) {
    this.deleteHaber(haber.id);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
