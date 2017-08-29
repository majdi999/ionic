import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicPageModule } from '../../../../../..';

import { ContactUs } from './contact-us';

@NgModule({
  declarations: [
    ContactUs,
  ],
  imports: [
    IonicPageModule.forChild(ContactUs)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactUsModule {}