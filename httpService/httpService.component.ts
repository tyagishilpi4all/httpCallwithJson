import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
    selector:'httpServices-comp',
    templateUrl:'./httpService.component.html',
    styleUrls:['./httpService.component.scss']
})

export class HttpServices{
    info:any[];
    constructor(private httpClient:HttpClient){

    }
    call(){
       //alert("fcgejmfjergfesr,gh,...")
       this.httpClient.get("https://raw.githubusercontent.com/sunnyharsh/live/master/Untitled%20Document%201.json")
       .subscribe(
           (data:any[])=>{
               this.info=data;
               console.log(data);
           }
       )
    }
}