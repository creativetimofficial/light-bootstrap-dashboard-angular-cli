import { Component, OnInit } from '@angular/core';
// import { ROUTES } from './sidebar-routes.config';
// import { MenuType } from './sidebar.metadata';
import { MenuType, RouteInfo } from './sidebar.metadata';

@Component({
    // moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    // public menuItems: any[];
    // isCollapsed = true;
    // constructor() {}
    public ROUTES: RouteInfo[] = [
        { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'pe-7s-graph' },
        { path: 'user', title: 'User profile', menuType: MenuType.LEFT, icon:'pe-7s-user' },
        { path: 'table', title: 'Table List', menuType: MenuType.LEFT, icon:'pe-7s-note2' },
        { path: 'typography', title: 'Typography', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
        { path: 'icons', title: 'Icons', menuType: MenuType.LEFT, icon:'pe-7s-science' },
        { path: 'maps', title: 'Maps', menuType: MenuType.LEFT, icon:'pe-7s-map-marker' },
        { path: 'notifications', title: 'Notifications', menuType: MenuType.LEFT, icon:'pe-7s-bell' },
    ];
    public menuItems: any[];
    isCollapsed = true;
    constructor() {}
    ngOnInit() {
        this.menuItems = this.ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    }
    // public get menuIcon(): string {
    //     return this.isCollapsed ? '☰' : '✖';
    // }
    // public getMenuItemClasses(menuItem: any) {
    //     return {
    //         'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
    //     };
    // }
}
