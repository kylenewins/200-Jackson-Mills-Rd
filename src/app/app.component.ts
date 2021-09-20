import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap/'
// import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('carousel', {static: true}) carousel: NgbCarousel;

  title = 'garrets-house';
  hrefStub = './assets/img/IMG_0';
  images = []
  
  constructor() {}

  ngOnInit(){
    this.getPics()
  }
  
  getPics(){
    for(var i = 696; i < 818; i ++){
      if(i !== 731 && i!==767 && i!==784 && i!==792 && i !== 793 && i !== 700 && i !== 816){
        var imgNum = (i.toString() + ".JPEG")
        var href = this.hrefStub + imgNum;
        this.images.push(href)
      }
    }
  }
}
