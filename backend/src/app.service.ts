import { Injectable } from '@nestjs/common'
// import { UrlWithStringQuery } from 'url'

@Injectable()
export class AppService {
	getHello(): string {
		return 'World!'
	}
}
