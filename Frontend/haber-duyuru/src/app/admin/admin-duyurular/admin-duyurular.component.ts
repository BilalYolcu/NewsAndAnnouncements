import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import {Duyuru} from '../../model/duyuru.interface'
import { DuyuruService } from 'src/app/service/duyuru-service/duyuru.service';

import { MatDialog } from '@angular/material/dialog';

interface ImageData {
  id: number;
  resim: string;
}

@Component({
  selector: 'app-admin-duyurular',
  templateUrl: './admin-duyurular.component.html',
  styleUrls: ['./admin-duyurular.component.css']
})
export class AdminDuyurularComponent implements OnInit{

  duyurular: Duyuru[] = [];
  yeniDuyuru: Duyuru = {
    id: 0,
    konu: '',
    icerik: '',
    gecerlilikTarihi: new Date(),
    resim: ''
  }; 
  
  seciliDuyuru: Duyuru = {
    id: 0,
    konu: '',
    icerik: '',
    gecerlilikTarihi: new Date(),
    resim: ''
  };

  seciliResim!: File ;


  imageData: ImageData = {
    id:0,
    resim: ""
  }; 

  imageList: ImageData[] = [];


  @ViewChild('duyuruEkleDialog') duyuruEkleDialog!: TemplateRef<any> ;
  @ViewChild('duyuruDüzenleDialog') duyuruDüzenleDialog!: TemplateRef<any> 

  constructor(private duyuruService: DuyuruService,private dialog: MatDialog) { }

  ngOnInit() {
    this.getDuyurular();
  }

  getDuyurular() {
    this.duyuruService.getAllDuyurular().subscribe({
      next: (duyurular: Duyuru[]) => {
        this.duyurular = duyurular;
        this.loadImages();
      },
      error: (error) => {
        console.error('Duyurular alınamadı:', error);
      },
    });
  }

  createDuyuru(yeniDuyuru: Duyuru) {
    this.duyuruService.createDuyuru(this.seciliResim,yeniDuyuru).subscribe({
      next: () => {
        this.getDuyurular();
        this.yeniDuyuru ={
          id: 0,
          konu: '',
          icerik: '',
          gecerlilikTarihi: new Date(),
          resim: ''
        }; 
        this.seciliResim ;
      },
      error: (error) => {
        console.error('Duyuru oluşturma hatası:', error);
      },
    });
  }

  updateDuyuru(id: number, duyuru: Duyuru) {
    this.duyuruService.updateDuyuru(id,this.seciliResim, duyuru).subscribe({
      next: () => {
        this.getDuyurular(); 
      },
      error: (error) => {
        console.error('Duyuru güncelleme hatası:', error);
      },
    });
  }

  deleteDuyuru(id: number) {
    this.duyuruService.deleteDuyuru(id).subscribe({
      next: () => {
        this.getDuyurular(); 
      },
      error: (error) => {
        console.error('Duyuru silme hatası:', error);
      },
    });
  }

  loadImages() {
    this.imageList = [];
    for (let i = 0; i < this.duyurular.length; i++) {
      this.getImage(this.duyurular[i].resim, this.duyurular[i]);
    }
  }

  getImage(duyuruResim: string, duyuru: Duyuru) {
    this.duyuruService.getImage(duyuruResim).subscribe({
      next: (data: any) => {
        this.imageData = {id:duyuru.id,resim:'data:image/jpeg;base64,' + data};
        this.imageList.push(this.imageData);
      },
      error: (error) => {
        console.error('Resim alınırken bir hata oluştu:', error);
      }
    });
  }

   getFullImagePath( duyuru: Duyuru) {
    for (let i = 0; i < this.imageList.length; i++) {
      if(this.imageList[i].id == duyuru.id){
        return this.imageList[i].resim;
      }
    }
    return null;
  }

  onResimSec(event: any): void {
    const file = event.target.files[0];
    this.seciliResim = file;
  }

  showDuyuruEkle() {
    this.dialog.open(this.duyuruEkleDialog);
  }

  showDuyuruDuzenle(duyuru: Duyuru) {
    this.seciliDuyuru = duyuru;
    this.dialog.open(this.duyuruDüzenleDialog);
  }
  
  kaydetDuyuru() {
    this.createDuyuru(this.yeniDuyuru);
    this.dialog.closeAll();
  }

  guncelleDuyuru() {
    this.closeDialog();
    this.updateDuyuru(this.seciliDuyuru.id,this.seciliDuyuru);   
  }

  silDuyuru(duyuru: Duyuru) {
    this.deleteDuyuru(duyuru.id);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
