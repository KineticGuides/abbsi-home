import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, AfterViewInit, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgZone } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit, AfterViewInit {
  
  @ViewChild('offcanvasNav', { static: false }) offcanvasNav!: ElementRef;

  
  closeOffcanvas() {
    // Close mobile offcanvas
    const offcanvasEl = document.querySelector('.offcanvas.show');
    if (offcanvasEl) {
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      offcanvas?.hide();
    }
  
    // Desktop: prevent dropdown from reappearing via hover
    if (window.innerWidth >= 992) {
      const dropdownParents = document.querySelectorAll('.navbar .nav-item.dropdown');
  
      dropdownParents.forEach((parent) => {
        parent.classList.add('dropdown-closed'); // 👈 block hover
      });
  
      setTimeout(() => {
        dropdownParents.forEach((parent) => {
          parent.classList.remove('dropdown-closed'); // 👈 allow hover again
        });
      }, 500);
    }
  }
  
  
 

  data: any;
  formData: any = {country: "", languages: ""};
  colData: any = {country: "", languages: ""};
  keys: any;
  values: any;

  @Input() path: any = 'user-survey-form';
  @Input() id: any = '';
  @Input() id2: any = '';
  @Input() id3: any = '';
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  showWrapper: boolean = true;


  constructor(private router: Router, private _dataService: DataService, private zone: NgZone) {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(event => {
      const navEnd = event as NavigationEnd;
  
      this.showWrapper = [
        '/', '/home', '/how-it-works', '/longevity', '/muscle-gain',
        '/mental-focus', '/belly-fat', '/stamina', '/stress-levels',
        '/weight-loss', '/immune-system', '/sexual-function', '/chronic-disease',
        '/appearance', '/lifestyle', '/supplements', '/peptides', '/medications',
        '/learn-supplements', '/learn-healthy-living', '/learn-peptides',
        '/login', '/find-physician'
      ].includes(navEnd.urlAfterRedirects);

          // Force scroll after Angular finishes rendering
    this.zone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'auto' }); // try 'auto' for testing
      });
    });
    });
  }

  closeIt() {
   this.close.emit('N');
  }

  ngOnInit(): void {
    this._dataService.getData(this.path, this.id, this.id2, this.id3).subscribe((data: any)=> { 
      this.data=data;
      this.formData=data['formData'];
      this.colData=data['colData'];
      this.keys = Object.keys(this.formData);
      this.values = Object.entries(this.formData);
  }) 

  }

  ngAfterViewInit(): void {

  }


  toggleOpen(m:any) {
     if (m.open=='Y') {
      m.open = 'N'
     } else {
      m.open = 'Y'
     }
  }

  deleteForm() {
    if (confirm('Are you sure you want to Delete this record?')) {
      this._dataService.postData("post-contact-delete", this.formData).subscribe((data: any)=> { 
        //this.data=data;
        //this.formData=data['formData'];
        this.closeIt();
        console.log(this.data)
      }) 
    }
  }
  
  postForm(): void {
    this._dataService.postData("post-add-user", this.formData).subscribe((data: any)=> { 
      //this.data=data;
      //this.formData=data['formData'];
      this.closeIt();
      console.log(this.data)
      location.reload();
  }) 

  }

}
