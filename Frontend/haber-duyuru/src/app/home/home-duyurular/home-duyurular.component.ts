import { Component, OnInit } from '@angular/core';

import {Duyuru} from '../../model/duyuru.interface'
import { DuyuruService } from 'src/app/service/duyuru-service/duyuru.service';


interface ImageData {
  id: number;
  resim: string;
}

@Component({
  selector: 'app-home-duyurular',
  templateUrl: './home-duyurular.component.html',
  styleUrls: ['./home-duyurular.component.css']
})
export class HomeDuyurularComponent implements OnInit{

  duyurular: Duyuru[] = [];
  imageData: ImageData = {
    id:0,
    resim: ""
  };

  imageList: ImageData[] = [];

  constructor(private duyuruService: DuyuruService) { }

  ngOnInit() {
    this.getDuyurular();
  }

  getDuyurular() {
    this.duyuruService.getAllDuyurular().subscribe({
      next: (duyurular: Duyuru[]) => {
        this.duyurular = duyurular;
        this.loadImages();
      },
      error:(error) => {
        console.error('Duyuruları alınamadı:', error);
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

}
