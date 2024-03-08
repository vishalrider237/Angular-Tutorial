import {NgModule} from '@angular/core'
import { TeamComponent } from '../components/teams/team.component';

@NgModule({
    declarations:[TeamComponent],
    exports:[TeamComponent],
    imports:[],
    providers:[]
})
export class CustomModule{
    
}