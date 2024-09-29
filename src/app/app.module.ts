import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './components/displayname/displayname.component';
import { CounterComponent } from './components/counter/counter.component';
import { SimpleformComponent } from './components/simpleform/simpleform.component';
import { UserageComponent } from './components/userage/userage.component';
import { UsergreetingComponent } from './components/usergreeting/usergreeting.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TextlengthComponent } from './components/textlength/textlength.component';
import { CurrencyconverterComponent } from './components/currencyconverter/currencyconverter.component';
import { EvenoddcheckerComponent } from './components/evenoddchecker/evenoddchecker.component';
import { WordreverserComponent } from './components/wordreverser/wordreverser.component';
import { ShowdateComponent } from './components/showdate/showdate.component';
import { ShowusernameComponent } from './components/showusername/showusername.component';
import { MultiplicationtableComponent } from './components/multiplicationtable/multiplicationtable.component';
import { SimpleloginComponent } from './components/simplelogin/simplelogin.component';
import { FahrenheittocelsiusComponent } from './components/fahrenheittocelsius/fahrenheittocelsius.component';
import { BookmarklistComponent } from './components/bookmarklist/bookmarklist.component';
import { CharactercounterComponent } from './components/charactercounter/charactercounter.component';
import { PalindromecheckerComponent } from './components/palindromechecker/palindromechecker.component';
import { TemperatureconverterComponent } from './components/temperatureconverter/temperatureconverter.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { FactorialcalculatorComponent } from './components/factorialcalculator/factorialcalculator.component';
import { TodomanagerComponent } from './components/todomanager/todomanager.component';
import { GuessnumbergameComponent } from './components/guessnumbergame/guessnumbergame.component';
import { WordcounterComponent } from './components/wordcounter/wordcounter.component';
import { RandomnumbergeneratorComponent } from './components/randomnumbergenerator/randomnumbergenerator.component';
import { MultiplicationcheckerComponent } from './components/multiplicationchecker/multiplicationchecker.component';
import { UppercaseconverterComponent } from './components/uppercaseconverter/uppercaseconverter.component';
import { WordshufflerComponent } from './components/wordshuffler/wordshuffler.component';
import { BmisolverComponent } from './components/bmisolver/bmisolver.component';
import { UsernamevalidatorComponent } from './components/usernamevalidator/usernamevalidator.component';
import { InterestcalculatorComponent } from './components/interestcalculator/interestcalculator.component';
import { FibonaccigeneratorComponent } from './components/fibonaccigenerator/fibonaccigenerator.component';
import { OddsumcalculatorComponent } from './components/oddsumcalculator/oddsumcalculator.component';
import { CurrencyformatterComponent } from './components/currencyformatter/currencyformatter.component';
import { RandomquotedisplayComponent } from './components/randomquotedisplay/randomquotedisplay.component';
import { UppercasegreetingComponent } from './components/uppercasegreeting/uppercasegreeting.component';
import { DivisiblecheckerComponent } from './components/divisiblechecker/divisiblechecker.component';
import { RockpaperscissorsComponent } from './components/rockpaperscissors/rockpaperscissors.component';
import { OddorevengameComponent } from './components/oddorevengame/oddorevengame.component';
import { StopwatchesimulatorComponent } from './components/stopwatchesimulator/stopwatchesimulator.component';
import { RollthediceComponent } from './components/rollthedice/rollthedice.component';
import { RandomcolorpickerComponent } from './components/randomcolorpicker/randomcolorpicker.component';
import { NumbersequencegameComponent } from './components/numbersequencegame/numbersequencegame.component';
import { PrimecheckerComponent } from './components/primechecker/primechecker.component';
import { GuessthewordgameComponent } from './components/guessthewordgame/guessthewordgame.component';
import { RandomletterpickerComponent } from './components/randomletterpicker/randomletterpicker.component';
import { NumbercomparerComponent } from './components/numbercomparer/numbercomparer.component';
import { CompoundinterestcalculatorComponent } from './components/compoundinterestcalculator/compoundinterestcalculator.component';




const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'displayhelloworld', component: DisplayhelloworldComponent },
  { path: 'showhellobutton', component: ShowhellobuttonComponent },
  { path: 'displayname', component: DisplaynameComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'simpleform', component: SimpleformComponent },
  { path: 'userage', component: UserageComponent },
  { path: 'usergreeting', component: UsergreetingComponent },
  { path: 'calculator', component: CalculatorComponent},
  { path: 'textlength', component: TextlengthComponent},
  { path: 'currencyconverter', component: CurrencyconverterComponent},
  { path: 'evenoddchecker', component: EvenoddcheckerComponent},
  { path: 'wordreverser', component: WordreverserComponent},
  { path: 'showdate', component: ShowdateComponent},
  { path: 'showusername', component: ShowusernameComponent},
  { path: 'multiplicationtable', component: MultiplicationtableComponent},
  { path: 'simplelogin', component: SimpleloginComponent},
  { path: 'fahrenheittocelsius', component: FahrenheittocelsiusComponent},
  { path: 'bookmarklist', component: BookmarklistComponent},
  { path: 'charactercounter', component: CharactercounterComponent},
  { path: 'palindromechecker', component: PalindromecheckerComponent},
  { path: 'temperatureconverter', component: TemperatureconverterComponent},
  { path: 'shoppinglist', component: ShoppinglistComponent},
  { path: 'factorialcalculator', component: FactorialcalculatorComponent},
  { path: 'todomanager', component: TodomanagerComponent},
  { path: 'guessnumbergame', component: GuessnumbergameComponent},
  { path: 'wordcounter', component: WordcounterComponent},
  { path: 'randomnumbergenerator', component: RandomnumbergeneratorComponent},
  { path: 'multiplicationchecker', component: MultiplicationcheckerComponent},
  { path: 'uppercaseconverter', component: UppercaseconverterComponent},
  { path: 'wordshuffler', component: WordshufflerComponent},
  { path: 'bmisolver', component: BmisolverComponent},
  { path: 'usernamevalidator', component: UsernamevalidatorComponent},
  { path: 'interestcalculator', component: InterestcalculatorComponent},
  { path: 'compoundinterestcalculator', component: CompoundinterestcalculatorComponent},
  { path: 'fibonaccigenerator', component: FibonaccigeneratorComponent},
  { path: 'oddsumcalculator', component: OddsumcalculatorComponent},
  { path: 'currencyformatter', component: CurrencyformatterComponent},
  { path: 'randomquotedisplay', component: RandomquotedisplayComponent},
  { path: 'uppercasegreeting', component: UppercasegreetingComponent},
  { path: 'divisiblechecker', component: DivisiblecheckerComponent},
  { path: 'rockpaperscissors', component: RockpaperscissorsComponent},
  { path: 'oddorevengame', component: OddorevengameComponent},
  { path: 'stopwatchesimulator', component: StopwatchesimulatorComponent},
  { path: 'rollthedice', component: RollthediceComponent},
  { path: 'randomcolorpicker', component: RandomcolorpickerComponent},
  { path: 'numbersequencegame', component: NumbersequencegameComponent},
  { path: 'primechecker', component: PrimecheckerComponent},
  { path: 'guessthewordgame', component: GuessthewordgameComponent},
  { path: 'randomletterpicker', component: RandomletterpickerComponent},
  { path: 'numbercomparer', component: NumbercomparerComponent},

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    
  ],
  
  providers: [
    provideAnimationsAsync(),
    ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
