import { Component, OnInit, Input } from '@angular/core';
import { LogprocessorService } from '../logprocessor.service'

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  status: String;
  @Input() type: string;
  @Input() id: string;
  @Input() ts: number;

  values: string;

  onKeyType(event: any) { // without type info
    this.type = event.target.value;
  }

  onKeyId(event: any) { // without type info
    this.id= event.target.value;
  }

  onKeyTs(event: any) { // without type info
    this.ts = event.target.value;
  }

  onClick(){
    this.logprocessorService.getStatus(this.type,this.id,this.ts).subscribe(data => {
      this.status = data.result;
    });
  }

  constructor(private logprocessorService: LogprocessorService) { }

  ngOnInit() {
    this.status="";
  }

}
