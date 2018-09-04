import { Component,ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,Events,Platform } from 'ionic-angular';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { BeaconProvider } from '../../providers/beacon/beacon';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { StoresProvider } from '../../providers/stores/stores';
import { BeaconModel } from '../../models/beaconModel';
import moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { AnalyticsProvider } from '../../providers/analytics/analytics';

declare var $:any;
@IonicPage({
    segment:'maps'
})
@Component({
    selector: 'page-maps',
    templateUrl: 'maps.html',
})
export class MapsPage {
    @ViewChild('bluetooth') bluetoothModal;
    myInput: string;
    myData: any;
    filteredList: any = [];
    locationObj: any = {};
    mapJson: any;
    beaconsList: BeaconModel[] = [];
    nearestBeaconList: BeaconModel[] = [];
    userCurrentLocationUnitNo: string = null;
    prevMajor: any = null;
    prevMinor: any = null;
    beaconObserver$: any;
    interval: number;
    isIntervalSet: boolean = false;
    state: boolean = false;
    hideBackButton: boolean = false;
    johorData = [
        { id: 9999, "name": "Food Court" },
        { id: 500, "name": "Starbucks Coffee" },
        { id: 502, "name": "Baskin-Robbins" },
        { id: 506, "name": "Camel Active (Opening Soon)" },
        { id: 510, "name": "Cotton On" },
        { id: 514, "name": "Bath & Body Works" },
        { id: 516, "name": "Austin Reed" },
        { id: 518, "name": "Obermain" },
        { id: 520, "name": "New Balance Outlet" },
        { id: 522, "name": "The Body Shop Outlet" },
        { id: 526, "name": "Levi's Outlet Store" },
        { id: 530, "name": "Royal Sporting House (Opening Soon)" },
        { id: 532, "name": "Guess" },
        { id: 902, "name": "Adidas" },
        { id: 912, "name": "Xixili" },
        { id: 914, "name": "Swatch" },
        { id: 915, "name": "Sunglass Hut" },
        { id: 916, "name": "Rockport" },
        { id: 917, "name": "Poney Outlet" },
        { id: 918, "name": "Hush Puppies" },
        { id: 920, "name": "Anakku" },
        { id: 922, "name": "Animation World" },
        { id: 924, "name": "924" },
        { id: 926, "name": "926" },
        { id: 910, "name": "Hush Puppies Apparel" },
        { id: 908, "name": "Asics" },
        { id: 1306, "name": "Diadora" },
        { id: 1304, "name": "Voir Gallery" },
        { id: 1302, "name": "Soda" },
        { id: 825, "name": "Stride Rite" },
        { id: 824, "name": "Cotton On Kids" },
        { id: 822, "name": "Leather Avenue" },
        { id: 820, "name": "Rubi Shoes" },
        { id: 818, "name": "Sembonia" },
        { id: 816, "name": "Hang Ten" },
        { id: 814, "name": "Aldo" },
        { id: 812, "name": "Converse" },
        { id: 808, "name": "Timberland" },
        { id: 801, "name": "Ace Bags & Luggage" },
        { id: 436, "name": "Armani Exchange" },
        { id: 430, "name": "Lacoste Outlet" },
        { id: 428, "name": "Fossil" },
        { id: 426, "name": "La Senza Lingerie" },
        { id: 420, "name": "Clarks" },
        { id: 416, "name": "G2000 Outlet" },
        { id: 418, "name": "Time Lab" },
        { id: 414, "name": "Rip Curl" },
        { id: 412, "name": "City Chain" },
        { id: 410, "name": "Akemi Uchi" },
        { id: 408, "name": "Carlo Rino" },
        { id: 406, "name": "Puma" },
        { id: 402, "name": "Skechers" },
        { id: 400, "name": "Renoma Paris" },
        { id: 401, "name": "Crepe & San Churros" },
        { id: 1000, "name": "Nike Factory Store" },
        { id: 1002, "name": "Absolute Thai" },
        { id: 2000, "name": "Taang Shifu" },
        { id: 434, "name": "CK Calvin Klein" },
        { id: 432, "name": "DKNY" },
        { id: 806, "name": "Aerosoles" },
        { id: 804, "name": "Polo Ralph Lauren Children" },
        { id: 424, "name": "Esprit" },
        { id: 1208, "name": "1208" },
        { id: 724, "name": "Jim Thompson" },
        { id: 722, "name": "Chocolat 5D Studio" },
        { id: 718, "name": "Lululemon" },
        { id: 716, "name": "Beauty Scents" },
        { id: 714, "name": "Calvin Klein Underwear" },
        { id: 712, "name": "Calvin Klein Jeans" },
        { id: 708, "name": "Sacoor Outlet" },
        { id: 706, "name": "Swarovski" },
        { id: 704, "name": "Furla" },
        { id: 702, "name": "Jimmy Choo"},
        { id: 700, "name": "700" },
        { id: 338, "name": "Armani Outlet" },
        { id: 334, "name": "Blackbarrett" },
        { id: 332, "name": "Salvatore Ferragamo Company Store" },
        { id: 328, "name": "Tory Burch" },
        { id: 326, "name": "Swiss Watch Gallery" },
        { id: 322, "name": "Tumi" },
        { id: 320, "name": "Wear & When" },
        { id: 318, "name": "Royal Selangor" },
        { id: 316, "name": "Geox" },
        { id: 314, "name": "Oroton Factory" },
        { id: 312, "name": "Bonia" },
        { id: 310, "name": "Samsonite Factory Outlet" },
        { id: 308, "name": "Universal Traveller" },
        { id: 306, "name": "Tomei" },
        { id: 304, "name": "Pedro Outlet" },
        { id: 302, "name": "Cosmetics & Designer Fragrances" },
        { id: 300, "name": "Vincci" },
        { id: 100, "name": "Padini Outlet Store" },
        { id: 104, "name": "Suria Muhabat Money Changer" },
        { id: 1106, "name": "World of Outdoors" },
        { id: 1104, "name": "Columbia" },
        { id: 1102, "name": "The Flexx" },
        { id: 633, "name": "Dome Café" },
        { id: 632, "name": "Aigner" },
        { id: 630, "name": "Hackett London" },
        { id: 628, "name": "Seen" },
        { id: 626, "name": "Optical 88" },
        { id: 624, "name": "Watch Station International" },
        { id: 622, "name": "Boggi Milano (Opening Soon)" },        
        { id: 620, "name": "The Make Up Outlet" },
        { id: 616, "name": "Kate Spade New York" },
        { id: 612, "name": "Hugo Boss" },
        { id: 602, "name": "Maybank" },
        { id: 600, "name": "Police Base" },
        { id: 610, "name": "Coach Men's" },
        { id: 604, "name": "Polo Ralph Lauren" },
        { id: 606, "name": "Ermenegildo Zegna Outlet Store" },
        { id: 232, "name": "Michael Kors" },
        { id: 238, "name": "Gucci" },
        { id: 230, "name": "Coach" },
        { id: 236, "name": "236" },
        { id: 701, "name": "Versace" },
        { id: 222, "name": "Bally" },
        { id: 220, "name": "Brooks Brothers Factory Store" },
        { id: 218, "name": "Tommy Hilfiger" },
        { id: 214, "name": "Kipling" },
        { id: 212, "name": "Victoria's Secret" },
        { id: 210, "name": "The Cosmetics Company Store" },
        { id: 208, "name": "Braun Buffel" },
        { id: 206, "name": "Fidani Chocolate" },
        { id: 204, "name": "George & Dragon Café" },
        { id: 200, "name": "The Coffee Bean & Tea Leaf" },
        {id: 528,"name": "Dockers"},
    ];
    gphoData = [
        { id: 9999, "name": "Food Court" },
        {id: 100,name: "Adidas"},
        {id: 524,name: "Aigner"},
        {id: 526, name: "Tommy Hilfiger" },
        {id: 1404,name: "Animation World"},
        {id: 214,name: "Asics"},
        {id: 602,name: "BOSS Womenswear"},
        {id: 610,name: "Brooks Brothers Factory Store"},
        {id: 614,name: "Calvin Klein"},
        {id: 120,name: "Charles & Keith"},
        {id: 904,name: "Cheetah"},
        {id: 800,name: "Coach"},
        {id: 222,name: "Converse"},
        {id: 304,name: "Cotton On"},
        {id: 210,name: "Cotton On Body"},
        {id: 632,name: "Cotton On Kids"},
        {id: 528,name: "Furla"},
        {id: 414,name: "G2000 Outlet"},
        {id: "kiosk2",name: "Hypergear"},
        {id: "kiosk1",name: "Elle"},
        {id: 404,name: "Guess"},
        {id: 604,name: "Hugo Boss"},
        {id: 112,name: "Hush Puppies Apparel"},
        {id: 618,name: "Jim Thompson"},
        {id: 534,name: "Kate Spade New York"},
        {id: 132,name: "Kenneth Cole"},
        {id: 518,name: "Kipling"},
        {id: 316,name: "Lacoste Outlet"},
        {id: 408,name: "Levi's Outlet Store"},
        {id: 536,name: "Max Mara"},
        {id: 538,name: "Melium Designer Outlet"},
        {id: 712,name: "Michael Kors"},
        {id: 710,name: "Michael Kors Mens"},
        {id: 804,name: "Moschino"},
        {id: 216,name: "New Balance Outlet"},
        {id: 508,name: "Nike"},
        {id: 810,name: "Oroton Factory"},
        {id: 608,name: "Outlet by Club 21"},
        {id: 624,name: "Padini Outlet Store"},
        {id: 634,name: "Poney Enfants"},
        {id: 631,name: "Poney Outlet"},
        {id: 418,name: "Puma"},
        {id: 300,name: "Reebok"},
        {id: 221,name: "Renoma Paris"},
        {id: 110,name: "Rip Curl"},
        {id: 302,name: "Royal Sporting House"},
        {id: 126,name: "Sacoor Outlet"},
        {id: 220,name: "Santa Barbara Polo & Racquet Club"},
        {id: 416,name: "Soda"},
        {id: 400,name: "Superdry"},
        {id: 806,name: "Ted Baker"},
        {id: 506,name: "The North Face"},
        {id: 122,name: "Timberland"},
        {id: 621,name: "Triumph"},
        {id: 108,name: "Under Armour"},
        {id: 502,name: "Universal Traveller"},
        {id: 900,name: "Valentino Rudy"},
        {id: 706,name: "Victoria's Secret"},
        {id: 212,name: "Wacoal"},
        {id: 308,name: "Xixili"},
        {id: 530,name: "Polo Ralph Lauren"},
        {id: 208,name: "Camel Active"},
        {id: 124,name: "Clarks"},
        {id: 612,name: "Geox"},
        {id: 412,name: "Hush Puppies"},
        {id: 310,name: "Obermain"},
        {id: 312,name: "Onitsuka Tiger"},
        {id: 703,name: "Pedro Outlet"},
        {id: 1408,name: "Shoopen"},
        {id: 106,name: "Skechers"},
        {id: 628,name: "Vincci"},
        {id: 908,name: "Ace Bags & Luggage + Zero Halliburton"},
        {id: 1400,name: "Austin Reed"},
        {id: 500,name: "Bonia"},
        {id: 702,name: "Braun Buffel"},
        {id: 218,name: "Carlo Rino"},
        {id: 314,name: "Fossil"},
        {id: 701,name: "LeSportsac"},
        {id: 700,name: "Radley London"},
        {id: 816,name: "Samsonite"},
        {id: 906,name: "Sembonia"},
        {id: 704,name: "Tumi"},
        {id: 522,name: "Citizen"},
        {id: 116,name: "City Chain"},
        {id: 630,name: "Focus Point"},
        {id: 128,name: "Frederique Constant"},
        {id: 130,name: "Toni Pons"},
        {id: 318,name: "Seen"},
        {id: 206,name: "Sunglass Hut"},
        {id: 118,name: "Swatch"},
        {id: 402,name: "Time Lab"},
        {id: 820,name: "Tomei"},
        {id: 601,name: "Watch & See"},
        {id: 812,name: "Watch Station International"},
        {id: 902,name: "Akemi Uchi Factory Outlet"},
        {id: 620,name: "Tefal"},
        {id: 818,name: "Beauty Scents"},
        {id: 808,name: "Cosmetics & Designer Fragrances"},
        {id: 600,name: "Davidoff of Geneva"},
        {id: 622,name: "Fidani Chocolatier"},
        {id: 708,name: "Godiva"},
        {id: 520,name: "Hamleys"},
        {id: 202,name: "Point Convenience Store"},
        {id: 814,name: "Royal Selangor"},
        {id: 114,name: "Sasa"},
        {id: 200,name: "Suria Muhabat Money Changer"},
        {id: 226,name: "TANGS Outlet"},
        {id: 616,name: "The Cosmetics Company Store"},
        {id: 1402,name: "Toy World"},
        {id: 504,name: "Typo"},
        {id: 1406,name: "Kickers"},
        {id: 1100,name: "Absolute Thai Highlands"},
        {id: 1110,name: "Baba Nyonya By Sambal Chilli"},
        {id: 1516,name: "Baskin - Robbins"},
        {id: 1514,name: "Crepe & San Churros"},
        {id: 1508,name: "Dapur Santai Yamch’a"},
        {id: 1118,name: "Dome Café"},
        {id: 1108,name: "DubuYo"},
        {id: 1112,name: "1112"},
        {id: 1300,name: "Golden Bites"},    
        {id: 1518,name: "Juan Valdez Café"},
        {id: 1116,name: "Krispy Kreme Doughnuts"},
        {id: 1114,name: "Crocs Outlet Shop (Opening Soon)"},
        {id: 1506,name: "New Rainbow River Fish Restaurant"},
        {id: 1502,name: "OldTown White Coffee"},
        {id: 422,name: "Starbucks Coffee"},
        {id: 1510,name: "The Chicken Rice Shop"},
        {id: 638,name: "The Coffee Bean & Tea Leaf"},
        {id: 204,name: "The Grove"},
        {id: 1104,name: "Wendy's"},
        {id: 1000,name: "Wincaa"}
    ];
    searchArr: any;
    num:any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private userdataProvider: UserdataProvider, public modalCtrl: ModalController, private beaconProvider: BeaconProvider,
        private openSettings: OpenNativeSettings, private events: Events, private zone: NgZone, private storesProvider: StoresProvider, private platform: Platform,
        private analytics: AnalyticsProvider) {
        let uid = this.navParams.get('unitnumber');
        console.log(uid, "unit number888888");
        this.hideBackButton = navParams.get('hidebackbutton');
        console.log(this.hideBackButton, "hideBackButton888888");
        if (uid != undefined) {
            if(uid=="kiosk3"){
                let id = uid;
                setTimeout(function () {
                    let map = $('#mallmap');
                    let self = map.data('spur');
                    self.showLocation(id, 600, true);
                }, 500);
            }else if(uid=="kiosk2"){
                let id = uid;
                setTimeout(function () {
                    let map = $('#mallmap');
                    let self = map.data('spur');
                    self.showLocation(id, 600, true);
                }, 500);
            }else if(uid=="kiosk1"){
                let id = uid;
                setTimeout(function () {
                    let map = $('#mallmap');
                    let self = map.data('spur');
                    self.showLocation(id, 600, true);
                }, 500);
            }else{
                let id = JSON.parse(uid);
                setTimeout(function () {
                    let map = $('#mallmap');
                    let self = map.data('spur');
                    self.showLocation(id, 600, true);
                }, 500);
            }
        }
        this.onBackground();
        this.onResume();
        // this.userdataProvider.getSelectedMall().then(mall => {
            this.mapJson = JSON.parse(localStorage.getItem('mallData'));
            if (this.mapJson.mallname == "JOHOR PREMIUM OUTLETS") {
                this.mapMall("assets/js/johor.json");
                this.searchArr = [...this.johorData];
            } else {
                this.mapMall("assets/js/gpho.json");
                this.searchArr = [...this.gphoData];
            }
        // });

        this.analytics.fa.logEvent('MapsPage');

        
    }
    movetoPos(id) {
        let that = this;
        if (that.state == false) {
            let map = $('#mallmap');
            let self = map.data('spur');
            self.showYAH(parseInt(id));
            let spur = $("#mallmap");
            let sl = spur.data("spur");
            let data = sl.getLocationData(id);
            if(data.x && data.y)
             self.moveTo(data.x,data.y,3,300);
             self.hideLocation();
        }
    }
    ionViewWillEnter() {
        this.checkBluetoothState();
        let that = this;
        let spur = $("#mallmap");
        spur.on('locationopened', function(e, self) {
          // self grants direct access to the map object
            that.state = true;
        });
        spur.on('locationclosed', function(e, self) {
          // self grants direct access to the map object
            that.state = false;
        });

    }
    gotoDetailPage(id) {
        if (id) {
            if (id != 9999) {
                this.navCtrl.push("StoreDetailsPage", { unitnumber: id });
            }
        }
    }
    //ionViewDidLoad
    mapMall(url) {
        let that = this;
        $(document).ready(function () {
            if (url) {
                setTimeout(function(){
                    let spur = $('#mallmap').spur({
                        source: url, // Using mall.json file as map data
                        sidebar: false, // Enable sidebar
                        minimap: false, // Enable minimap
                        markers: false, // Disable markers
                        search: true,
                        deeplinking: false,
                        zoombuttons: true,
                        fillcolor: false, // Disable default fill color
                        fullscreen: true, // Enable fullscreen
                        maxscale: 3 // Setting maxscale to 3 times bigger than the original file
                    });
                    spur.on('popupClicked', function (e, data) {
                        that.gotoDetailPage(data.id);
                    });
                },300);
            };
        });//document
    }//ionViewDidLoad
    onInput(ev) {
        let val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim()) {
            this.filteredList = this.searchArr.filter((item) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
        else {
            this.filteredList = [];
        }
    }
    selectedLocation(location) {
        this.myInput = location.name;
        this.filteredList = [];
        let map = $('#mallmap');
        let self = map.data('spur');
        self.showLocation(location.id, 600, true);
    }
  
    checkBluetoothState() {
        this.beaconProvider.checkBluetoothState().then(data => {
            if (data['initialize']) {
                this.initialize();
            }
            if (!data['initialize'] && data['bluetoothModal']) {
                this.openBluetoothModal();
            }
        })
    }
    //Initialize the Ibeacon
    initialize() {
      try {
      let isInitialised = this.beaconProvider.initialise();
      if (isInitialised) {
        this.listenToBeaconEvents();
      }
      } catch (e) {
          console.log(e);  
    }
  }
    openBluetoothModal() {
        this.bluetoothModal.open();
    }
    

      openBluetoothSettings() {
        this.bluetoothModal.close();
        this.openSettings.open('bluetooth').then(() => {
        }, err => {
        })
      }
    
    
      listenToBeaconEvents() {
        this.events.subscribe('didRangeBeaconsInRegion', (data) => {
          // update the UI with the beacon list
            this.zone.run(() => {
                this.beaconObserver$ = new Observable((observer) => {
                    observer.next(data.beacons);
                    observer.complete();
                    
              })
            //  let beaconEventList = [...data.beacons];
                 this.beaconObserver$.subscribe(bea => {
                
                 bea.map(beacons => {
                    // beaconEventList.map(beacons=>{
                   
                        if(beacons.rssi != 0){

                        let beaconObject = new BeaconModel(beacons);
                        let isBeaconExist = this.beaconProvider.checkBeaconList(this.beaconsList, beaconObject);
                        if (!isBeaconExist) {
                            this.addBeacon(this.beaconsList, beaconObject);
                        } else {
                            // remove the existing beacon object and add again - because distance would have changed
                            this.replaceBeacon(this.beaconsList, beaconObject);
                        }
                    }
                    });
                          
            });
            // Loop through all beacons and remove the ones > 5 seconds
            let filterByArrivalTime = this.beaconsList.filter(beacon => {
              return moment.duration(moment().diff(beacon.arrivalTime)).asSeconds() <= 5;
            });
            // Replace original list with the new filtered list
            this.beaconsList = [...filterByArrivalTime];
            // sort by arrival time and distance. That is new sorted array will be your nearest beacon
            this.nearestBeaconList = this.beaconProvider.sortBeaconsByAccuracy(this.beaconsList);
              if (!this.userCurrentLocationUnitNo && this.beaconsList.length > 0 && this.nearestBeaconList.length > 0) {
                //   this.getBeaconStore();
                //   this.isIntervalSet = true;
                this.checkNearestStore();
                this.startInterval();
                //   this.checkNearestStore();  
              }
              
          });
        });
      }
    
    
    
       //add beacon to the list
       addBeacon(beaconList: BeaconModel[],beacon: BeaconModel) {
        beaconList.push(beacon);
       }
    
    
    //replace the beacon if it is already exist
      replaceBeacon(beaconList: BeaconModel[], beacon: BeaconModel) {
        let len = beaconList.length;
        for(let i = 0; i < len; i++) {
            if(beaconList[i].minor === beacon.minor){
              beaconList[i] = beacon;
            }
        }
      }
    
    checkNearestStore() {
            
        if (!this.prevMajor || !this.prevMinor) {
            this.prevMajor = this.nearestBeaconList[0].major;
            this.prevMinor = this.nearestBeaconList[0].minor;
            this.getBeaconStore(this.nearestBeaconList[0].major, this.nearestBeaconList[0].minor);

        } else {
            if (this.prevMajor != this.nearestBeaconList[0].major || this.prevMinor != this.nearestBeaconList[0].minor) {
                this.prevMajor = this.nearestBeaconList[0].major;
                this.prevMinor = this.nearestBeaconList[0].minor;
                this.getBeaconStore(this.nearestBeaconList[0].major, this.nearestBeaconList[0].minor);
            }
        }
          
      }
    
    
      // Get the stores of connected beacon
     //If store is not available yet (empty response), then remove the beacon from beacon list;
    private getBeaconStore(major, minor) {
        // this.isIntervalSet = true;
       
        this.storesProvider.getBeaconStores(major,minor).then(storedata => {
        if (storedata) {
            this.userCurrentLocationUnitNo = storedata['associatedstore'][0].unitnumber;
            this.movetoPos(this.userCurrentLocationUnitNo);
        }
    });
    }
  
    
    ionViewDidLeave() {
        this.beaconProvider.stopRangingBeacons();
        this.events.unsubscribe('didRangeBeaconsInRegion');
        // clearInterval(this.interval);
        // if(this.beaconObserver$)
        // this.beaconObserver$.unsubscribe();
    }


    ionViewWillLeave() {
        this.beaconProvider.stopRangingBeacons();
        this.events.unsubscribe('didRangeBeaconsInRegion');
        clearInterval(this.interval);
        // if(this.beaconObserver$)
        // this.beaconObserver$.unsubscribe();
    }
    

    // on app goes to background
    onBackground() {
        this.platform.pause.subscribe(() => {
          this.beaconProvider.stopRangingBeacons();
            this.events.unsubscribe('didRangeBeaconsInRegion');
            // if(this.beaconObserver$)
            // this.beaconObserver$.unsubscribe();  
            clearInterval(this.interval);
        })
      }


      //on app come from background to foreground
      onResume() {
        this.platform.resume.subscribe(() => {
          this.checkBluetoothState();
        })
      }


    startInterval() {
        if (!this.interval) {
            this.interval = setInterval(() => {
                if (this.beaconsList.length > 0 && this.nearestBeaconList.length > 0)
                    this.checkNearestStore();
                else {
                    clearInterval(this.interval);
                }
            }, 5000);
        }
    }
    onCancel(ev) {
        // if (ev.target.value == '') {
        //     this.state = false;
        // }
    }

    ngOnDestroy(){
        if(this.beaconObserver$ != undefined )
        this.beaconObserver$.takeUntil(this.beaconObserver$);
    }
    
    gotoPage(page){
        this.navCtrl.setRoot(page);
      }
}

