import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MenuItems } from '../../utilities/helpers/sidebar-menu';
import { MediaMatcher } from '@angular/cdk/layout'; 

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
}) 
export class LayoutComponent implements OnInit { 
  constructor() { }  
  ngOnInit() { }
}