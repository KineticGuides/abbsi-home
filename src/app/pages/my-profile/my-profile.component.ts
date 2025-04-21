import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterLink, NavigationEnd } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule,  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../data.service'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from '../../search-filter.pipe';
import { NavMenuComponent } from '../../controls/nav-menu/nav-menu.component';
import { SurveyComponent } from '../../my-health/survey/survey.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, SearchFilterPipe, NgxPaginationModule, NavMenuComponent, SurveyComponent],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent  implements OnInit {

  data: any;
  message: any;
  searchText: string = '';
  p: any = 1;
  showing: string = 'N';
  path: any = '';
  goal_pct: any = 0;
  medical_history_pct: any = 0;
  family_history_pct: any = 0;
  diet_pct: any = 0;
  exercise_pct: any = 0;
  stress_pct: any = 0;
  sleep_pct: any = 0;
  hormonal_pct: any = 0;
  aging_pct: any = 0;
  lifestyle_pct: any = 0;
  goal_count: any = 0;  
  medical_history_count: any = 0;
  family_history_count: any = 0;
  diet_count: any = 0;
  exercise_count: any = 0;
  stress_count: any = 0;
  sleep_count: any = 0;
  hormonal_count: any = 0;
  aging_count: any = 0;
  lifestyle_count: any = 0;
  medical_history_quest: any = 0;
  family_history_quest: any = 0;
  diet_quest: any = 0;
  exercise_quest: any = 0;
  stress_quest: any = 0;
  sleep_quest: any = 0;
  hormonal_quest: any = 0;
  aging_quest: any = 0;
  lifestyle_quest: any = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _dataService: DataService,
    private _router: Router,
    public http: HttpClient  // used by upload
) { 
  this._router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
    console.log('scrollto')
    window.scrollTo(0, 0);
  });
}

  ngOnInit(): void
  {      
      this._activatedRoute.data.subscribe(({ 
          data })=> { 
          this.data=data;
          this.goal_pct=data.goal_pct;
          this.medical_history_pct=data.medical_history_pct;
          this.family_history_pct=data.family_history_pct;
          this.diet_pct=data.diet_pct;
          this.exercise_pct=data.exercise_pct;
          this.stress_pct=data.stress_pct;
          this.sleep_pct=data.sleep_pct;
          this.hormonal_pct=data.hormonal_pct;
          this.aging_pct=data.aging_pct;
          this.lifestyle_pct=data.lifestyle_pct;
          this.goal_count=data.medical_history_pct;
          this.medical_history_count=data.medical_history_pct;
          this.family_history_count=data.medical_history_pct;
          this.diet_count=data.medical_history_pct;
          this.exercise_count=data.medical_history_pct;
          this.stress_count=data.medical_history_pct;
          this.sleep_count=data.medical_history_pct;
          this.hormonal_count=data.medical_history_pct;
          this.aging_count=data.medical_history_pct;
          this.lifestyle_count=data.medical_history_pct;
          this.medical_history_quest=data.medical_history_pct;
          this.family_history_quest=data.medical_history_pct;
          this.diet_quest=data.medical_history_pct;
          this.exercise_quest=data.medical_history_pct;
          this.stress_quest=data.medical_history_pct;
          this.sleep_quest=data.medical_history_pct;
          this.hormonal_quest=data.medical_history_pct;
          this.aging_quest=data.medical_history_pct;
          this.lifestyle_quest=data.medical_history_pct;
      }) 
  }

  toggleThoughts() {
    if (this.showing=='N') {
      this.showing='Y'
    } else {
      this.showing='N';
    }

}

isComplete(): boolean {
  let res: boolean = true;
  if (this.goal_pct!=100) res=false;
  if (this.medical_history_pct!=100) res=false;
  if (this.family_history_pct!=100) res=false;
  if (this.diet_pct!=100) res=false;
  if (this.exercise_pct!=100) res=false;
  if (this.stress_pct!=100) res=false;
  if (this.sleep_pct!=100) res=false;
  if (this.hormonal_pct!=100) res=false;
  if (this.aging_pct!=100) res=false;
  if (this.lifestyle_pct!=100) res=false;
  return res;
}

doNext() {
  console.log('A')
  console.log(this.path)
  if (this.path=='aging') this.changePath('lifestyle');
  if (this.path=='hormonal') this.changePath('aging');
  if (this.path=='sleep') this.changePath('hormonal');
  if (this.path=='stress') this.changePath('sleep');
  if (this.path=='exercise') this.changePath('stress');
  if (this.path=='diet') this.changePath('exercise');
  if (this.path=='family-history') this.changePath('diet');
  if (this.path=='medical-history') this.changePath('family-history');
  if (this.path=='goals') this.changePath('medical-history');
  if (this.path=='') {
    console.log('FIND NEXT')
    this.path=this.findNext();
    console.log('FOUND NEXT')
    console.log(this.path)
    if (this.path=='goals') this.changePath('medical-history');
    if (this.path=='medical-history') this.changePath('family-history');
    if (this.path=='family-history') this.changePath('diet');
    if (this.path=='diet') this.changePath('exercise');
    if (this.path=='exercise') this.changePath('stress');
    if (this.path=='stress') this.changePath('sleep');
    if (this.path=='sleep') this.changePath('hormonal');
    if (this.path=='hormonal') this.changePath('aging');
    if (this.path=='aging') this.changePath('lifestyle');
    if (this.path=='lifestyle') this.changePath('');
    if (this.path=='') this.changePath('goals');
  }
  if (this.path=='lifestyle') this.changePath('');

}

findNext(): any {
  let n: any = '';
  console.log(this.path)
  if (this.path=='') return 'goals';
  if (this.path=='goals') return 'medical-history';
  if (this.path=='medical-history') return 'family-history';
  if (this.path=='family-history') return 'diet';
  if (this.path=='diet')  return 'exercise';
  if (this.path=='exercise') return 'stress';
  if (this.path=='stress') return 'sleep';
  if (this.path=='sleep')  return 'hormonal';
  if (this.path=='hormonal') return 'aging';
  if (this.path=='aging')  return 'lifestyle';
  if (this.path=='lifestyle')  return '';
  return n;
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

  changePath(path:any) {
    setTimeout(() => {
      try {
        window.scrollTo(0, 190);
        console.log('Scroll in setTimeout executed');
      } catch (e) {
        console.error('Error in scroll inside timeout:', e);
      }
    }, 10);
       this.path=path;
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

  doClose(data: any) {
    console.log(data);
    this.goal_pct=data.goal_pct;
    this.medical_history_pct=data.medical_history_pct;
    this.family_history_pct=data.family_history_pct;
    this.diet_pct=data.diet_pct;
    this.exercise_pct=data.exercise_pct;
    this.stress_pct=data.stress_pct;
    this.sleep_pct=data.sleep_pct;
    this.hormonal_pct=data.hormonal_pct;
    this.aging_pct=data.aging_pct;
    this.lifestyle_pct=data.lifestyle_pct;
    this.goal_count=data.goal_pct;
    this.medical_history_count=data.medical_history_pct;
    this.family_history_count=data.medical_history_pct;
    this.diet_count=data.medical_history_pct;
    this.exercise_count=data.medical_history_pct;
    this.stress_count=data.medical_history_pct;
    this.sleep_count=data.medical_history_pct;
    this.hormonal_count=data.medical_history_pct;
    this.aging_count=data.medical_history_pct;
    this.lifestyle_count=data.medical_history_pct;
    this.medical_history_quest=data.medical_history_pct;
    this.family_history_quest=data.medical_history_pct;
    this.diet_quest=data.medical_history_pct;
    this.exercise_quest=data.medical_history_pct;
    this.stress_quest=data.medical_history_pct;
    this.sleep_quest=data.medical_history_pct;
    this.hormonal_quest=data.medical_history_pct;
    this.aging_quest=data.medical_history_pct;
    this.lifestyle_quest=data.medical_history_pct;
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
