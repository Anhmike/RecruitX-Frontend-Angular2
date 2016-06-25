import {Injectable} from "@angular/core";
import {Http, Headers } from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Interview} from "../interviews/interviewDetails/interview.component";

@Injectable()
export class HttpService {
    constructor(protected http: Http) {
    }
    getInterviews(): Observable<Interview[]> {
        return this.http.get("http://localhost:4000/interviews?panelist_login_name=ppanelistp&panelist_experience=5&panelist_role=QA")
            .map(response => response.json())
    }

    getMyInterviews(): Observable<{total_pages: number, interviews: Interview[]}> {
        return this.http.get("http://localhost:4000/interviews?panelist_name=dineshb&page")
            .map(response => response.json())
    }
}