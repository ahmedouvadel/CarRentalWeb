import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'DashTemplate';
  constructor(private router: Router) {}


  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }


  // Constructeur du composant, injecte le service Router

  // Méthode exécutée lors de l'initialisation du composant
/*   ngOnInit() {
    // Abonnement aux événements de navigation du Router
    this.router.events.subscribe(event => {
      // Vérification si l'événement est une instance de NavigationEnd
      if (event instanceof NavigationEnd) {
        // Mise à jour de la propriété isLoginPage en fonction de l'URL de navigation
        this.isLoginPage = event.url === '/';
      }
    });
  } */
  
}
