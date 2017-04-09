import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Ytube} from './video';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class YtubeService {
	constructor (private http: Http) {} 

	private ytubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxresults=3&q=tutsplus&type=video&key=AIzaSyDi3nKZv-yYAZgA_A2Ukz7meUlQ0_cOhTc&#x27';

	getVideos() {
		return this.http.get(this.ytubeURL)
		.map(res => <Ytube[]> res.json().items)
		.do(data => console.log(data))
		.catch(this.errorHandler);
	}
	private errorHandler (error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}

}
