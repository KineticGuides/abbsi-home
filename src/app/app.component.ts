import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, AfterViewInit, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit, AfterViewInit {
  
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


  constructor(private router: Router, private _dataService: DataService) {
    this.router.events
    .pipe(filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Change this logic based on your default route (e.g., '/home')
        this.showWrapper = event.urlAfterRedirects === '/' 
        || event.urlAfterRedirects === '/home'
        || event.urlAfterRedirects === '/how-it-works'
        || event.urlAfterRedirects === '/longevitiy'
        || event.urlAfterRedirects === '/muscle-gain'
        || event.urlAfterRedirects === '/mental-focus'
        || event.urlAfterRedirects === '/belly-fat'
        || event.urlAfterRedirects === '/stamina'
        || event.urlAfterRedirects === '/stress-levels'
        || event.urlAfterRedirects === '/weight-loss'
        || event.urlAfterRedirects === '/immune-system'
        || event.urlAfterRedirects === '/sexual-function'
        || event.urlAfterRedirects === '/chronic-disease'
        || event.urlAfterRedirects === '/appearance'
        || event.urlAfterRedirects === '/lifestyle'
        || event.urlAfterRedirects === '/supplements'
        || event.urlAfterRedirects === '/peptides'
        || event.urlAfterRedirects === '/medications'
        || event.urlAfterRedirects === '/learn-supplements'
        || event.urlAfterRedirects === '/learn-healthy'
        || event.urlAfterRedirects === '/learn-peptides'
        || event.urlAfterRedirects === '/find-physician'

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
      console.log(this.data['formData'])
  }) 

  }

  ngAfterViewInit(): void {  


  }

  toggleOpen(m:any) {
    console.log(m)
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
