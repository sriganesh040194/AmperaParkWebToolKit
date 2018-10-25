import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private httpClient: HttpClient, ) { }
  
  
  geIrradiance() {
    var url = "http://re.jrc.ec.europa.eu/pvgis5/DRcalc.php?lat=45&lon=8&month=3&global=1&browser=0";
    
//     var request = new HttpRequest("GET", url);
// console.log(request);
// var response = this.httpClient.request(new HttpRequest("GET", url,)).get(url).subscribe((res)=>{
//   console.log(res);
// });
const headers = new Headers();
headers.append('Accept', 'text/xml');

// var meta = { "Content-Type": "text/xml" }
//   var header = new Headers();
//   header.append('text/xml');

console.log("Fetch Request start");
var request= new Request(url,{ method:"GET", mode:"no-cors", headers: {
  "Content-Type": "application/json; charset=utf-8",
  // "Content-Type": "application/x-www-form-urlencoded",
}});
  fetch(request).then((res)=>{
// res.formData().then(aa=>console.log(aa));
//var aaa = res.json();
    console.log(res);
  });

    //var data = this.http.request()
  }
}
