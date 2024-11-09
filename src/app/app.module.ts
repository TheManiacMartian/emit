import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// materials
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButton } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TopbarComponent } from './topbar/topbar.component';
import { ChatComponent } from './chat/chat.component';
import { AgentComponent } from './agent/agent.component';
import { PersonaComponent } from './persona/persona.component';
import { DatasetComponent } from './dataset/dataset.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopbarComponent,
    ChatComponent,
    AgentComponent,
    PersonaComponent,
    DatasetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatButton,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
