import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient,
    private firestore: AngularFirestore
  ) { }

  // LOGIN //
  _userLogin(requestData: any) {
    console.log(requestData)
    return this.httpClient.post(`http://localhost:3004/employees`, requestData);
  }

  _getData() {
    let url = "http://localhost:3004/employees";
    return this.httpClient.get(url);
  }

  getData() {
    return this.firestore.collection('employees').snapshotChanges();
  }

  addData(empData: any) {
    return this.firestore.collection('employees').add(empData);
  }

  updateData(empData: any){
    this.firestore.doc('employees/' + empData.id).update(empData);
  }

  deleteData(empData: string){
    this.firestore.doc('employees/' + empData).delete();
  }
}
