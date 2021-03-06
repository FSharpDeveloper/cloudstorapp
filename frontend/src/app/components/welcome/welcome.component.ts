import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router-deprecated";
import {AdalService} from 'angular2-adal/core';
import { CLIENTID } from '../../consts'

@Component({
    selector: 'welcome',
    template: '<h1>Welcome!</h1><button (click)="logIn()">Login</button>'
})
export class WelcomeComponent implements OnInit {

    constructor(
        private router: Router,
        private adalService: AdalService
    ) {
        console.log('Entering welcome');        
        this.adalService.handleWindowCallback();
        if (this.adalService.userInfo.isAuthenticated) {
            this.router.navigate(['Home']);
        }
        let token = this.adalService.getCachedToken(CLIENTID);
        console.log(token);
    }

    public ngOnInit() {
        console.log('ngOnInit is called');
    }

    public logIn() {
        this.adalService.login();
    }
}
