import { Component, OnInit, ChangeDetectorRef, NgZone, OnDestroy, ViewChild, HostListener, Directive, AfterViewInit, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from '../../../shared/utilities/helpers/sidebar-menu';
import { Router } from '@angular/router';   

export class SubNavigationMenu {
  SubTitle: string = "";
  SubIcon: string = "";
}

export class NavigationMenu {
  Title: string = "";
  Child: SubNavigationMenu[] = [];
  Icon: string = "";
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  mobileQuery: MediaQueryList;
  @Input() loggedInUserName: string | undefined;
  private _mobileQueryListener: () => void; 

  navigationMenu: NavigationMenu[] = [
    { Title: 'Dashboard', Child: [], Icon: 'account_circle' },
    { Title: 'Motor', Child: [{ SubTitle: 'Policy Management', SubIcon: 'account_circle' }], Icon: '' },
    { Title: 'Health', Child: [{ SubTitle: 'Health Management', SubIcon: 'account_circle' }], Icon: '' },
    { Title: 'Voucher', Child: [], Icon: 'account_circle' },
    { Title: 'Claims', Child: [], Icon: 'account_circle' },
    { Title: 'Inspection', Child: [], Icon: 'account_circle' },
  ];
 
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private router: Router) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    const token = sessionStorage.getItem('data'); 
  }




  NavMenu(title: string) {
    switch (title) {
      case 'Dashboard':
        this.router.navigate(['./user/dashboard']);
        break;
      case 'Customer':
        this.router.navigate(['./user/customer']);
        break;
      case 'Policy Management':
        this.router.navigate(['./user/motor/motor-policy-management']);
        break;
      case 'Health Management':
        this.router.navigate(['./user/health/health-policy-management']);
        break;
      case 'Voucher':
        this.router.navigate(['./user/voucher']);
        break;
      case 'Claims':
        this.router.navigate(['./user/claims']);
        break;
      case 'Inspection':
        this.router.navigate(['./user/inspection']);
        break;
      default:
        break;
    }
  }

  public logout() {
    sessionStorage.clear();
    this.router.navigate(['../login']);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}