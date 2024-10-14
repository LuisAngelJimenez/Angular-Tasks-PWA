import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import NavbarComponent from "./components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PWA-AngularTasks';
  deferredPrompt: any;
  showInstallButton = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  OnBeforeInstallPrompt(event:Event){
    event.preventDefault();
    this.deferredPrompt=event;
    this.showInstallButton=true;
  }

  InstalarPWA(){
    if(this.deferredPrompt){
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice().then((choiceResult:any)=>{
        if(choiceResult=='accepted'){
          console.log('el usuario instalo el prompt');
        }else{
          console.log('no instalo nada el ue');
        }
        this.deferredPrompt=null;
      })
    }
  }
}
