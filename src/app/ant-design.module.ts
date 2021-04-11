import {NgModule} from '@angular/core';
import {TextFieldModule} from '@angular/cdk/text-field';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    NzButtonModule
  ],
  exports: [
    NzButtonModule
  ]
})
export class AntDesignModule {}
