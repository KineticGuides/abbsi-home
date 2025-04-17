import { Routes } from '@angular/router';
import { ResolverService } from './resolver.service';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { HomeComponent } from './pages/home/home.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { LoginComponent } from './pages/login/login.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { MyMessagesComponent } from './pages/my-messages/my-messages.component';
import { MySupportComponent } from './pages/my-support/my-support.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { WeightLossComponent } from './pages/weight-loss/weight-loss.component';
import { SupplementsComponent } from './pages/supplements/supplements.component';
import { StressLevelsComponent } from './pages/stress-levels/stress-levels.component';
import { StaminaComponent } from './pages/stamina/stamina.component';
import { SexualFunctionComponent } from './pages/sexual-function/sexual-function.component';
import { PeptidesComponent } from './pages/peptides/peptides.component';
import { MuscleGainComponent } from './pages/muscle-gain/muscle-gain.component';
import { MentalFocusComponent } from './pages/mental-focus/mental-focus.component';
import { MedicationsComponent } from './pages/medications/medications.component';
import { LongevityComponent } from './pages/longevity/longevity.component';
import { LifestyleComponent } from './pages/lifestyle/lifestyle.component';
import { LearnWeightLossComponent } from './pages/learn-weight-loss/learn-weight-loss.component';
import { LearnViseralFatComponent } from './pages/learn-viseral-fat/learn-viseral-fat.component';
import { LearnSupplementsComponent } from './pages/learn-supplements/learn-supplements.component';
import { LearnPeptidesComponent } from './pages/learn-peptides/learn-peptides.component';
import { LearnMedicationsComponent } from './pages/learn-medications/learn-medications.component';
import { ImmuneSystemComponent } from './pages/immune-system/immune-system.component';
import { BellyFatComponent } from './pages/belly-fat/belly-fat.component';
import { ChronicDiseaseComponent } from './pages/chronic-disease/chronic-disease.component';
import { AppearanceComponent } from './pages/appearance/appearance.component';
import { LearnHealthyLivingComponent } from './pages/learn-healthy-living/learn-healthy-living.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AccountExistsComponent } from './pages/account-exists/account-exists.component';
import { MyRecommendationsComponent } from './pages/my-recommendations/my-recommendations.component';
import { MyLabsComponent } from './pages/my-labs/my-labs.component';
import { MyVisitsComponent } from './pages/my-visits/my-visits.component';
import { MyProtocolsComponent } from './pages/my-protocols/my-protocols.component';


export const routes: Routes = [  
    { path: '', component: HomeComponent, resolve: { data: ResolverService} },
    { path: 'coming-soon', component: ComingSoonComponent, resolve: { data: ResolverService} },
    { path: 'my-profile', component: MyProfileComponent, resolve: { data: ResolverService} },
    { path: 'my-orders', component: MyOrdersComponent, resolve: { data: ResolverService} },
    { path: 'my-messages', component: MyMessagesComponent, resolve: { data: ResolverService} },
    { path: 'my-support', component: MySupportComponent, resolve: { data: ResolverService} },
    { path: 'my-account', component: MyAccountComponent, resolve: { data: ResolverService} },
    { path: 'my-recommendations', component: MyRecommendationsComponent, resolve: { data: ResolverService} },
    { path: 'my-visits', component: MyVisitsComponent, resolve: { data: ResolverService} },
    { path: 'my-labs', component: MyLabsComponent, resolve: { data: ResolverService} },
    { path: 'my-protocols', component: MyProtocolsComponent, resolve: { data: ResolverService} },
    { path: 'login', component: LoginComponent },
    { path: 'how-it-works', component: HowItWorksComponent, resolve: { data: ResolverService} },
    { path: 'get-started', component: GetStartedComponent, resolve: { data: ResolverService} },
    { path: 'weight-loss', component: WeightLossComponent, resolve: { data: ResolverService} },
    { path: 'supplements', component: SupplementsComponent, resolve: { data: ResolverService} },
    { path: 'stress-levels', component: StressLevelsComponent, resolve: { data: ResolverService} },
    { path: 'stamina', component: StaminaComponent, resolve: { data: ResolverService} },
    { path: 'chronic-disease', component: ChronicDiseaseComponent, resolve: { data: ResolverService} },
    { path: 'sexual-function', component: SexualFunctionComponent, resolve: { data: ResolverService} },
    { path: 'peptides', component: PeptidesComponent, resolve: { data: ResolverService} },
    { path: 'stamina', component: StaminaComponent, resolve: { data: ResolverService} },
    { path: 'muscle-gain', component: MuscleGainComponent, resolve: { data: ResolverService} },
    { path: 'mental-focus', component: MentalFocusComponent, resolve: { data: ResolverService} },
    { path: 'weight-loss', component: WeightLossComponent, resolve: { data: ResolverService} },
    { path: 'belly-fat', component: BellyFatComponent, resolve: { data: ResolverService} },
    { path: 'medications', component: MedicationsComponent, resolve: { data: ResolverService} },
    { path: 'appearance', component: AppearanceComponent, resolve: { data: ResolverService} },
    { path: 'longevity', component: LongevityComponent, resolve: { data: ResolverService} },
    { path: 'lifestyle', component: LifestyleComponent, resolve: { data: ResolverService} },
    { path: 'learn-weight-loss', component: LearnWeightLossComponent, resolve: { data: ResolverService} },
    { path: 'learn-healthy-living', component: LearnHealthyLivingComponent, resolve: { data: ResolverService} },
    { path: 'learn-supplements', component: LearnSupplementsComponent, resolve: { data: ResolverService} },
    { path: 'learn-peptides', component: LearnPeptidesComponent, resolve: { data: ResolverService} },
    { path: 'learn-medications', component: LearnMedicationsComponent, resolve: { data: ResolverService} },
    { path: 'immune-system', component: ImmuneSystemComponent, resolve: { data: ResolverService} },
    { path: 'welcome', component: WelcomeComponent, resolve: { data: ResolverService} },
    { path: 'account-exists', component: AccountExistsComponent, resolve: { data: ResolverService} },
];

