import { Injectable } from '@nestjs/common';
import { UrlWithStringQuery } from 'url';

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.parse(JSON.stringify({ Hello: 'World!' }));
  }
}
