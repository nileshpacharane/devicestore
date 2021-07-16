import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) {

    }

    public getAllDevices() {
        return this.http.get('http://localhost:3000/device/getDevice')
    }

    public addDevice(data) {
        return this.http.post('http://localhost:3000/device/add', data);
    }

    public deleteDevice(id) {
        let url = `http://localhost:3000/device/remove/${id}`;
        return this.http.delete(url);
    }

    public checkInCheckOutDevice(id, data) {
        let url = `http://localhost:3000/device/checkInCheckOut/${id}`;
        return this.http.put(url, data);
    }

    public getReviews(id) {
        let url = `http://localhost:3000/review/get/${id}`;
        return this.http.get(url);
    }

    public addReview(data) {
        return this.http.post('http://localhost:3000/review/add', data);
    }
}