import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { AgentComponent } from './agent/agent.component';
import { DatasetComponent } from './dataset/dataset.component';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
  {path:'', component:ChatComponent},
  {path:'chat', component:ChatComponent},
  {path:'agent', component:AgentComponent},
  {path:'persona', component:PersonaComponent},
  {path:'datasets', component:DatasetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
