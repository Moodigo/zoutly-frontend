import {NgModule} from '@angular/core';
import {FeedComponent} from './components/feed.component';
import {SideFilterComponent} from './components/side-filter/side-filter.component';
import {FeedItemComponent} from './components/feed-item/feed-item.component';
import {NewEventFieldComponent} from './components/event/new-event-field/new-event-field.component';
import {FilterService} from './services/filter.service';
import {SharedModule} from '../shared/shared.module';
import {SideSuggestsComponent} from './components/side-suggests/side-suggests.component';
import {AuthGuard} from '../../guards/auth.guard';
import {Route, RouterModule} from '@angular/router';

const routerConfig: Route[] = [
    {
        path: '',
        component: FeedComponent,
        canActivate: [AuthGuard],
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        FeedComponent,
        FeedItemComponent,
        SideFilterComponent,
        NewEventFieldComponent,
        SideSuggestsComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routerConfig)
    ],
    providers: [FilterService]
})
export default class FeedModule {

}
