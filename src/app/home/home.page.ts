import { Component, OnInit } from '@angular/core';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[BrowserTab]
})
export class HomePage implements OnInit {

  constructor(private browserTab: BrowserTab) {
    // browserTab.isAvailable()
    // .then(isAvailable => {
    //   if (isAvailable) {
    //     browserTab.openUrl('https://ionic.io');
    //   } else {
    //     // open URL with InAppBrowser instead or SafariViewController
    //   }
    // });
  }

  ngOnInit(){
    
  }

}
