import { Injectable } from '@angular/core';

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    subState: string;
    subName: string;
}

const menuList: Menu[] = [
    { state: 'dashboard', type: 'link', name: 'Dashboard', icon: 'av_timer', subState: '', subName: '' },
    { state: 'motor', type: 'link', name: 'Motor', icon: 'time_to_leave', subState: 'motor-policy-management', subName: 'Policy Management' },
    { state: 'customer', type: 'link', name: 'Customer', icon: 'person', subState: '', subName: '' }
];

@Injectable()
export class MenuItems {
    getMenuitem(): Menu[] {
        return menuList;
    }
}