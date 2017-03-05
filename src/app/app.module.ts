import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { BrowsePage } from '../pages/browse/browse';


// LOCAL STORAGE
import { LocalStorageModule } from 'angular-2-local-storage';

// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../providers/auth-service';


// FIREBASE CONFIG
export const firebaseConfig = {
  apiKey: "AIzaSyCBAaf-Umc90JrkCcublrJniE4QI4XTLD0",
  authDomain: "lunchapp-63359.firebaseapp.com",
  databaseURL: "https://lunchapp-63359.firebaseio.com",
  storageBucket: "lunchapp-63359.appspot.com",
  messagingSenderId: "354945138269"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    BrowsePage,
    TabsPage
  ],
  imports: [
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    BrowsePage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService]
})
export class AppModule {}
