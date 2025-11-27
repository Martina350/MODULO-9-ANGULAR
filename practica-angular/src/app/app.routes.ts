import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product';
import { Movie } from './components/movie/movie';
import { Cinema } from './components/cinema/cinema';
import { User } from './components/user/user';
import { Sales } from './components/sales/sales';
import { Father } from './components/father/father';
import { Page404 } from './components/page404/page404';
import { ProfileComponent } from './components/profile/profile';
import { Account } from './components/account/account';
import { Transactions } from './components/transactions/transactions';
import { Loans } from './components/loans/loans';

export const routes: Routes = [
    { path: "start", component: ProfileComponent },
    //{ path: "start", component: ProductComponent },
    //{ path: "components", component: ProductComponent },
    //{ path: "cycle", component: Movie },
    //{ path: "templates", component: User },
    //{ path: "directives", component: Sales },
    //{ path: "models", component: Cinema },
    //{ path: "comunication", component: Father},
    { path: "account", component: Account},
    { path: "transactions", component: Transactions},
    { path: "loans", component: Loans},
    { path: "**", component: Page404},

];
