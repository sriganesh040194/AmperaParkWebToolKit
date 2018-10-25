export class FormData {
    companyName: string = '';
    personalName: string = '';
    email: string = '';
    phone: number = 0;
    noOfCarPark: number = 1;
    size: number = 2.44;
    carChargerDetails: CarCharger= {
        noOfCarCharger: 0,
        isCarChargerAvailable: false
      };
    structure: boolean = false;
    electricityPrice: number = 0.0;
    terms: boolean = false;
    mapAddress: string = '';
    latitude: number = 52.33;
    longitude: number = 6;


    clear() {
        this.companyName = '';
        this.email = '';
        this.personalName = '';
        this.phone = null;
        this.noOfCarPark = 1;
        this.size = 2.44;
        this.carChargerDetails=null;
        this.structure = false;
        this.electricityPrice = 0.0;
        this.terms = false;
        this.mapAddress = '';
        this.latitude = 52.33;
        this.longitude = 6;
    }
}


export class CompanyDetails {
    companyName: string = '';
    personalName: string = '';
    email: string = '';
    phone: number = 0;


}


//The property "noOfCarCharger" represents the number of car chargers needed  if the property "isCarChargerAvailable" is false,
//else it represents existing chargers
export class CarCharger {
    isCarChargerAvailable: boolean = false;
    noOfCarCharger: number = 0;
}

export class CarParkDetails {
    noOfCarPark: number = 1;
    size: number = 2.44;
    carChargerDetails: CarCharger;
    structure: boolean = false;
    electricityPrice: number = 0.0;
}
export class Terms {
    terms: boolean = false;
}

export class Map {
    mapAddress: string = '';
    latitude: number = null;
    longitude: number = null;
}