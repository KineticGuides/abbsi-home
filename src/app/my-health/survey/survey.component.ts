import { Component, AfterViewInit, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent  implements OnInit, AfterViewInit {
  
  data: any;
  formData: any = {country: "", languages: ""};
  colData: any = {country: "", languages: ""};
  keys: any;
  values: any;
  backData: any = {      
    goal_pct: 0, medical_history_pct: 0, family_history_pct: 0,
    diet_pct: 0, exercise_pct: 0, stress_pct: 0, sleep_pct: 0, hormonal_pct: 0,
    aging_pct: 0, lifestyle_pct: 0, goal_count: 0,
    medical_history_count: 0, family_history_count: 0, diet_count: 0,
    exercise_count: 0, stress_count: 0, sleep_count: 0, hormonal_count: 0,
    aging_count: 0, lifestyle_count: 0, medical_history_quest: 0,
    family_history_quest: 0, diet_quest: 0, exercise_quest: 0,
    stress_quest: 0, sleep_quest: 0, hormonal_quest: 0,
    aging_quest: 0, lifestyle_quest: 0 }

  @Input() path: any = '';
  @Input() id: any = '';
  @Input() id2: any = '';
  @Input() id3: any = '';
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() next: EventEmitter<any> = new EventEmitter<any>();

  onRadioChange(event: Event, section_id: any): void {
    const target = event.target as HTMLInputElement;
    const radioId = target.id;  // Get the ID of the changed radio
    const radioValue = target.value;  // Get the new value of the radio
  
    console.log(`Radio button ID: ${radioId}, New value: ${radioValue}`);
    this.data.formData['last_question_id']=radioId;
    this.data.formData['last_answer']=radioValue;
    this.postForm(section_id);
  }

  constructor(private _dataService: DataService) {

  }

  closeIt() {
   this.close.emit('N');
  }

  nextPage() {
    this.next.emit('N');
  }

  ngOnInit(): void {
    let path: any = '';
    if (this.path!='')  {
      path=this.path
    } else {
      path='start-self-survey';
    }

    this._dataService.getData(path, this.id, this.id2, this.id3).subscribe((data: any)=> { 
      this.data=data;
      this.formData=data['formData'];
      this.colData=data['colData'];
//      this.keys = Object.keys(this.formData);
//      this.values = Object.entries(this.formData);
      console.log('SURVEY')
      console.log(this.data)
      console.log('END')
  }) 

  }

  isStarted(): boolean {
    let res: boolean = false;
    if (this.data && this.data.counts) {
      if (this.data.counts.goal_pct!=0) res=true;
      if (this.data.counts.medical_history_pct!=0) res=true;
      if (this.data.counts.family_history_pct!=0) res=true;
      if (this.data.counts.diet_pct!=0) res=true;
      if (this.data.counts.exercise_pct!=0) res=true;
      if (this.data.stress_pct!=0) res=true;
      if (this.data.counts.sleep_pct!=0) res=true;
      if (this.data.counts.hormonal_pct!=0) res=true;
      if (this.data.counts.aging_pct!=0) res=true;
      if (this.data.counts.lifestyle_pct!=100) res=true;
    }
    return res;
  }

  isComplete(): boolean {
    let res: boolean = true;
    if (this.data && this.data.counts) {
    if (this.data.counts.goal_pct!=100) res=false;
    if (this.data.counts.medical_history_pct!=100) res=false;
    if (this.data.counts.family_history_pct!=100) res=false;
    if (this.data.counts.diet_pct!=100) res=false;
    if (this.data.counts.exercise_pct!=100) res=false;
    if (this.data.counts.stress_pct!=100) res=false;
    if (this.data.counts.sleep_pct!=100) res=false;
    if (this.data.counts.hormonal_pct!=100) res=false;
    if (this.data.counts.aging_pct!=100) res=false;
    if (this.data.counts.lifestyle_pct!=100) res=false;
    }
    return res;
  }
  
  findNext(): any {
    let n: any = 'complete';
    if (this.path=='goals') n = 'goals';
    if (this.path=='medical-history')  n = 'medical-history';
    if (this.path=='family-history')  n = 'family-history';
    if (this.path=='diet')  n = 'diet';
    if (this.path=='exercise')  n = 'exercise';
    if (this.path=='stress')  n = 'stress';
    if (this.path=='sleep')  n = 'sleep';
    if (this.path=='hormonal')  n = 'hormonal';
    if (this.path=='aging')  n = 'lifestyle';
    return n;
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
  
  postForm(section :any): void {
    let form3 = {
      section_id: section,
      member_id: this.data.formData['member_id'],
      last_question_id: this.data.formData['last_question_id'],
      last_answer: this.data.formData['last_answer']
    }
    this._dataService.postData("post-self-survey", form3).subscribe((data: any)=> { 
      this.backData.goal_pct=data.goal_pct;
      this.backData.medical_history_pct=data.medical_history_pct;
      this.backData.family_history_pct=data.family_history_pct;
      this.backData.diet_pct=data.diet_pct;
      this.backData.exercise_pct=data.exercise_pct;
      this.backData.stress_pct=      data.stress_pct;
      this.backData.sleep_pct=      data.sleep_pct;
      this.backData.hormonal_pct=      data.hormonal_pct;
      this.backData.aging_pct=      data.aging_pct;
      this.backData.lifestyle_pct=      data.lifestyle_pct;
      this.backData.goal_count=      data.goal_count;
      this.backData.medical_history_count=      data.medical_history_count;
      this.backData.family_history_count=      data.family_history_count;
      this.backData.diet_count=      data.diet_count;
      this.backData.exercise_count=      data.exercise_count;
      this.backData.stress_count=      data.stress_count;
      this.backData.sleep_count=      data.sleep_count;
      this.backData.hormonal_count=      data.hormonal_count;
      this.backData.aging_count=      data.aging_count;
      this.backData.lifestyle_count=      data.lifestyle_count;
      this.backData.goal_quest=      data.goal_quest;
      this.backData.medical_history_quest=data.medical_history_quest;
      this.backData.family_history_quest=data.family_history_quest;
      this.backData.diet_quest=data.diet_quest;
      this.backData.exercise_quest=data.exercise_quest;
      this.backData.stress_quest=data.stress_quest;
      this.backData.sleep_quest=data.sleep_quest;
      this.backData.hormonal_quest=data.hormonal_quest;
      this.backData.aging_quest=data.aging_quest;
      this.backData.lifestyle_quest= data.lifestyle_quest;
      this.close.emit(this.backData);
  }) 

  }

}
