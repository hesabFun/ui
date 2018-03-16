import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { ConfigService } from '../services';
import { TranslationCacheService } from './services';
import { environment } from "../../../environments/environment";

export class TranslationLoader implements TranslateLoader {
  private url: string;

  /**
   * Constructor of the class.
   *
   * @param {Http}                    http
   * @param {ConfigService}           configService
   * @param {TranslationCacheService} translationCacheService
   */
  constructor(private http: Http,
              private configService: ConfigService,
              private translationCacheService: TranslationCacheService) {
    this.url = environment.useLocalTranslation
      ? `./assets/i18n/` : `${this.configService.getApiUrl()}translation/`;
  }

  /**
   * Gets the translations from the server
   *
   * @param {string}  language
   * @returns {Observable<any>}
   */
  public getTranslation(language: string): Observable<any> {
    return this.http
      .get(`${this.url}${language}.json`)
      .map((res: Response) => {
        const translations = res.json();

        this.translationCacheService.base(language, translations);

        return translations;
      });
  }
}
