import { Component, Inject, OnInit } from '@angular/core';
import { AppService } from './app.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  devices: any = [];

  title = 'frontend';
  displayedColumns: string[] = ['device', 'manufacturer', 'os', 'action'];

  constructor(private appService: AppService, public dialog: MatDialog, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.getAllDevices();
  }

  getAllDevices() {
    this.appService.getAllDevices().subscribe((resp) => {
      this.devices = resp;

    })
  }

  openSnackBar(message) {
    this._snackBar.open(message, 'close')
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: { device: '', os: '', manufacturer: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.addDevice(result)
    });
  }

  showReview(id) {
    const dialogRef = this.dialog.open(DialogReviewExampleDialog, {
      width: '550px',
      data: { deviceId: id }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  addDevice(data) {
    this.appService.addDevice(data).subscribe((resp: any) => {
      this.openSnackBar(resp.message)
      this.getAllDevices();
    })
  }

  deleteDevice(id) {
    this.appService.deleteDevice(id).subscribe((resp: any) => {
      this.openSnackBar(resp.message)
      this.getAllDevices();
    })
  }

  checkInCheckOutDevice(id, isCheckIn) {
    let data;
    if (isCheckIn) {
      data = {
        lastCheckedInDate: new Date(),
        lastCheckedInBy: 'Nilesh',
        isCheckedOut: false
      }
    } else {
      data = {
        lastCheckedOutDate: new Date(),
        lastCheckedOutBy: 'Danny',
        isCheckedOut: true
      }
    }
    this.appService.checkInCheckOutDevice(id, data).subscribe((resp: any) => {
      this.openSnackBar(resp.message)
      this.getAllDevices();
    })
  }


}


export interface DeviceData {
  "device": string,
  "os": string,
  "manufacturer": string,
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DeviceData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface ReviewData {
  "deviceId": string,
  "comment": string,
}

@Component({
  selector: 'dialog-review-example-dialog',
  templateUrl: 'dialog-review-example-dialog.html',
})
export class DialogReviewExampleDialog implements OnInit {

  reviews = [];
  constructor(
    public dialogRef: MatDialogRef<DialogReviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ReviewData,
    private appService: AppService) { }

  ngOnInit() {
    this.getAllReviews();
  }

  getAllReviews() {
    this.appService.getReviews(this.data.deviceId).subscribe((resp: any) => {
      this.reviews = resp;
    })
  }

  addReview() {
    this.appService.addReview({ deviceId: this.data.deviceId, comment: this.data.comment }).subscribe((resp: any) => {
      this.getAllReviews();
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
