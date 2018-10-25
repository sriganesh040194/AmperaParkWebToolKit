import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private httpClient: HttpClient, ) { }
  
  
  geIrradiance() {

    
const headers = new Headers();
headers.append("Content-Type","text/html"); 
headers.append("responseType", "text")
    console.log("HTTP Request start");
    var url = "http://re.jrc.ec.europa.eu/pvgis5/DRcalc.php?lat=45&lon=8&month=3&global=1&browser=0";
    
    var request = new HttpRequest("GET", url,headers);
console.log(request);
// var param = new HttpParams().append("responseType","text");
console.log("HTTP Client Get");
var aa = this.httpClient.get(url).subscribe(res=>{
  console.log("HTTP inside get response");
  console.log(res)});
   console.log("HTTP Client");
var response = this.httpClient.request(request).subscribe((res)=>{
  console.log(res);
});

// var meta = { "Content-Type": "text/xml" }
//   var header = new Headers();
//   header.append('text/xml');

console.log("Fetch Request start");
var requestw= new Request(url,{ method:"GET", mode:"no-cors", headers: {
  "Content-Type": "text/html",
  // "Content-Type": "application/x-www-form-urlencoded",
}});
  fetch(requestw).then((res)=>{
// res.formData().then(aa=>console.log(aa));
//var aaa = res.json();
    console.log(res);
  });

    //var data = this.http.request()
  }
}
