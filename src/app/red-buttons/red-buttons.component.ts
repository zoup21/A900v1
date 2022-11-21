import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-buttons',
  templateUrl: './red-buttons.component.html',
  styleUrls: ['./red-buttons.component.css']
})
export class RedButtonsComponent implements OnInit {
    imu = false  
    int = false
    gps = false
    uavVolt = false
    pcF = false
    vlcl = false
    vServ = false
    vEcu = false
    vElect = false
    vInject = false
    vIgnition = false
    vThrottle = false
    vEngine = false
    vTps = false
    vFuel = false
   

  constructor() { }

  ngOnInit(): void {
  }

  IMU(){
    this.imu= !this.imu
  }

  INT(){
    this.int = !this.int
  }

  GPS(){
    this.gps = !this.gps
  }

  volt(){
    this.uavVolt= !this.uavVolt
  }

  pcFail(){
    this.pcF = !this.pcF
  }

  lcl(){
    this.vlcl = !this.vlcl
  }

  Servo(){
    this.vServ = !this.vServ
  }

  Ecu(){
    this.vEcu = !this.vEcu
  }

  Electr(){
    this.vElect = !this.vElect
  }

  Injector(){
    this.vInject = !this.vInject
  }

  Ignition(){
    this.vIgnition = !this.vIgnition
  }

  Throttle(){
    this.vThrottle = !this.vThrottle
  }

  Engine(){
    this.vEngine = !this.vEngine
  }

  Tps(){
    this.vTps = !this.vTps
  }

  Fuel(){
    this.vFuel = !this.vFuel
  }
}
