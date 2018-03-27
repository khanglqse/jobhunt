import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Attachment } from '../../../models/attachment/attachment.model';
import { ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'iap-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent implements OnInit {
  @ViewChild('file', { read: ElementRef }) browseBtn: ElementRef;
  @Input() data: Attachment[] = [];


  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {
  }

  openFileDialog() {
    if (this.browseBtn && this.browseBtn.nativeElement) {
      this.browseBtn.nativeElement.click();
    }
  }

  handleInputFileChange(event) {
    const src = <HTMLInputElement>event.srcElement;
    if (!src) {
      return;
    }
    const files = src.files;
    if (!files) {
      return;
    }
    for (let i = 0; i < files.length; i++) {
      this.data.unshift(
        {
          documentName: files[i].name,
          documentType: files[i].type,
          uploadedBy: 'Current User',
          uploadedDate: this.datePipe.transform(Date.now(), 'dd MM yyyy'),
        }
      );
    }
    src.value = '';
  }

}
