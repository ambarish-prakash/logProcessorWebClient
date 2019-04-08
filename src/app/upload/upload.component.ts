import { Component, OnInit } from '@angular/core';
import { LogprocessorService } from '../logprocessor.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  formD : FormData;
  status: boolean;
  msg: string;

  async delayFalse(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    this.status=false;
  }

  async delayTrue(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    this.status=true;
  }

  uploadLogFile(){

      console.log('uploading file');
      console.log(this.formD);
      this.logprocessorService.uploadLogFile(this.formD).subscribe(data => {
        this.msg = data? "Upload Sucessful" : "Upload Failed";
      });

      this.delayTrue(500);
      this.delayFalse(2000);
  }

  fileChange(event) {
    console.log('file change');
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        this.formD = new FormData();
        this.formD.append('file', file, file.name);
     }
  }

  constructor(private logprocessorService: LogprocessorService) { }

  ngOnInit() {
      this.status = false;
      this.msg = "";
  }

}
