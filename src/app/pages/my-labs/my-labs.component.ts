import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule,  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../data.service'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from '../../search-filter.pipe';
import { NavMenuComponent } from '../../controls/nav-menu/nav-menu.component';
import { UploadLabsComponent } from '../../forms/upload-labs/upload-labs.component';
import { OrderLabsComponent } from '../../forms/order-labs/order-labs.component';

@Component({
  selector: 'app-my-labs',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, SearchFilterPipe, NgxPaginationModule, NavMenuComponent, UploadLabsComponent, OrderLabsComponent],
  templateUrl: './my-labs.component.html',
  styleUrl: './my-labs.component.css'
})
export class MyLabsComponent   implements OnInit {

  data: any;
  message: any;
  searchText: string = '';
  p: any = 1;
  showing: string = 'N';
  upload_labs: string = 'N';
  order_labs: string = 'N';
  
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _dataService: DataService,
    private _router: Router,
    public http: HttpClient  // used by upload
) { }

  ngOnInit(): void
  {      
      this._activatedRoute.data.subscribe(({ 
          data })=> { 
          this.data=data;
      }) 
  }

  toggleThoughts() {
    if (this.showing=='N') {
      this.showing='Y'
    } else {
      this.showing='N';
    }
}

toggleUpload() {
  if (this.upload_labs=='N') {
    this.upload_labs='Y'
  } else {
    this.upload_labs='N';
  }
}

toggleOrder() {
  if (this.order_labs=='N') {
    this.order_labs='Y'
  } else {
    this.order_labs='N';
  }
}

  switchUserGeneral(m: any): void { 
    let formData: any = { "member_id": m.id }
    this._dataService.postData("switch-member", formData).subscribe((data: any)=> { 
    this._router.navigate(['/general']);
  }) 

  }

  switchUserLongevity(m: any): void { 
    let formData: any = { "member_id": m.id }
    this._dataService.postData("switch-member", formData).subscribe((data: any)=> { 
    this._router.navigate(['/longevity']);
  }) 

  }

  switchUserDiet(m: any): void { 
    let formData: any = { "member_id": m.id }
    this._dataService.postData("switch-member", formData).subscribe((data: any)=> { 
    this._router.navigate(['/diet-exercise']);
  }) 

  }

  switchUserSkincare(m: any): void { 
    let formData: any = { "member_id": m.id }
    this._dataService.postData("switch-member", formData).subscribe((data: any)=> { 
    this._router.navigate(['/skincare']);
  }) 

  }

  switchUser(m: any): void { 
    let formData: any = { "member_id": m.id }
    this._dataService.postData("switch-member", formData).subscribe((data: any)=> { 
    this._router.navigate(['/general']);
  }) 

  }



  postForm(): void {
  
    let formData: any = { "message": this.message }

    this._dataService.postData("hey-skipper", formData).subscribe((data: any)=> { 
      console.log(data.location)
      this._router.navigate([data.location]);
      console.log(this.data)
  }) 

  }


}
