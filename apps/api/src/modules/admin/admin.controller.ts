import { BadGatewayException, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { from, of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { I18nService } from '@services/i18n/i18n.service';
import { AppLoggerService } from '@services/app-logger/app-logger.service';
import { AppConfigService } from '@services/app-config/app-config.service';
import { ApiService } from '@services/api/api.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/admin')
export class AdminController {
  private ns: string;
  private hello: string;

  constructor(
        private readonly i18n: I18nService,
        private readonly logger: AppLoggerService,
        private readonly appConfig: AppConfigService,
        private readonly apiService: ApiService
  ) {
    this.logger.setContext(AdminController.name);
    this.i18n.changeLanguage('en');
    this.ns = this.appConfig.get<string>('services.admin.i18n.namespace');
  }

  /**
   * Simple demo action
   */
  @Get('/hello')
  getHello(): Observable<Record<string, any>> {
    return this.apiService.getHelloWorld();
  }

  /**
   * Save value to MongoDB
   */
  @Post('/mongo/hello')
  setHello(str: string): void {
    this.hello = 'World Hello!';
  }

  /**
   * Retrieve value from MongoDB
   */

  /**
   * Save value to MySQL
   */

  /**
   * Retrieve value from MySQL
   */
}