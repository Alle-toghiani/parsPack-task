import {NgModule} from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@NgModule({
  imports: [
    NzButtonModule,
    NzTableModule,
    NzCarouselModule,
    NzBadgeModule,
    NzEmptyModule,
    NzAlertModule
  ],
  exports: [
    NzButtonModule,
    NzTableModule,
    NzCarouselModule,
    NzBadgeModule,
    NzEmptyModule,
    NzAlertModule
  ]
})
export class AntDesignModule {}
