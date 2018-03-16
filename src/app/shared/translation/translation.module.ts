import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { HttpLoaderFactory } from './http-loader-factory';
import { ConfigService } from '../services';
import { TranslationGuard } from './guards';
import { TranslationCacheService, TranslationService } from './services';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http, ConfigService, TranslationCacheService],
      },
    }),
  ],
  providers: [
    TranslationGuard,
    TranslateService,
    TranslationService,
    TranslationCacheService,
  ],
  exports: [
    TranslateModule,
  ]
})

export class TranslationModule {
}
