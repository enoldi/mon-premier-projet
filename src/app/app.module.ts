import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { ApparielComponent } from './appariel/appariel.component';
import { ApparielService } from './services/appariel.service';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { ApparielViewComponent } from './appariel-view/appariel-view.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleApparielComponent } from './single-appariel/single-appariel.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditApparielComponent } from './edit-appariel/edit-appariel.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: 'appariels', canActivate: [AuthGuard], component: ApparielViewComponent },
  { path: 'appariels/:id', canActivate: [AuthGuard], component: SingleApparielComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditApparielComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '', component: ApparielViewComponent },
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: '/not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    ApparielComponent,
    AuthComponent,
    ApparielViewComponent,
    SingleApparielComponent,
    FourOhFourComponent,
    EditApparielComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [
    ApparielService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
