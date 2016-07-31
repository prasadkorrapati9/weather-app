import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(<any>AppComponent, [HTTP_PROVIDERS]);
