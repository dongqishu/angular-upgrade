import { Product } from './../model/product.ts';
import { Injectable, Inject } from 'ng-metadata/core';
import { IQService } from 'angular';

@Injectable()
export class ProductService {
    constructor(@Inject('$q') private $q: IQService){}

    public getProducts() { 
        return this.$q.when<Array<any>>(products);
    }

    public getProductById(id: number){
        return this.$q.when<Product>(product);
    }

    public rateProduct(id: number, stars: number): void{
        console.log("Call API to rate product ID " + id + ", Stars: " + stars);
        // call api here to rate product
    }
}

const product = {
    "id": 1932,
    "name": "Ricoh 500 GX Camera",
    "tag": "Vintage",
    "model": "No. 1960140180",
    "description": "The Ricoh 500 is a 35 mm rangefinder camera with fixed lens made in Japan by Ricoh from 1957.",
    "reviews": {
        "stars": 4,
        "count": 61,
        "myRating": null
    },
    "price": 129,
    "longDescription": "The Ricoh 500 GX is a handy rangefinder camera with fixed lens made in Taiwan by Ricoh. Its special feature is an easy-to-use multi-exposure facility.",
    "sourceUrl": "http://camerapedia.wikia.com/wiki/Ricoh_500GX",
    "features": [
        "Type: rangefinder camera with electronic aperture control for shutter priority operation option",
        "Films: 35mm with speeds of 25 - 800 ASA",
        "Lens: Rikenon 1:2.8/40mm",
        "Shutter: Speeds 1/8 - 1/500 sec.",
        "Aperture: 1/2.8 - 1:16",
        "Exposure: manual shutter speed selection, aperture controlled by CdS-meter or manually",
        "Viewfinder: optical finder, superimposed rangefinder, parallax correction marks, 'M' for manual operation visible, and the exposure meter's needle shows f-stop value or works as battery control",
        "Focusing: manual focusing with help of coupled rangefinder",
        "Battery: 1,35 volt mercury battery PX675",
        "Dimensions: 111×71×56 mm",
        "Weight: 420 g"
    ],
    "imageUrl": "assets/camera-1248682_640.jpg"
}

const products = [{
        "id": 1,
        "name": "ultrices",
        "description": "lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum",
        "price": "333.29"
    },
    {
        "id": 2,
        "name": "porta volutpat",
        "description": "interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
        "price": "332.39"
    },
    {
        "id": 3,
        "name": "justo pellentesque viverra",
        "description": "turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec",
        "price": "317.67"
    },
    {
        "id": 4,
        "name": "fusce",
        "description": "mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu",
        "price": "152.64"
    },
    {
        "id": 5,
        "name": "purus sit amet",
        "description": "nec nisi vulputate nonummy maecenas tincidunt",
        "price": "323.96"
    },
    {
        "id": 6,
        "name": "eget congue",
        "description": "nulla facilisi cras non velit nec nisi vulputate",
        "price": "190.02"
    },
    {
        "id": 7,
        "name": "sit amet cursus",
        "description": "nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam",
        "price": "289.70"
    },
    {
        "id": 8,
        "name": "convallis",
        "description": "potenti in eleifend quam a odio in hac habitasse platea",
        "price": "38.34"
    },
    {
        "id": 9,
        "name": "montes nascetur ridiculus",
        "description": "ligula suspendisse ornare consequat lectus in est risus auctor sed",
        "price": "153.27"
    },
    {
        "id": 10,
        "name": "rhoncus",
        "description": "metus vitae ipsum aliquam non mauris morbi non",
        "price": "143.40"
    },
    {
        "id": 11,
        "name": "leo",
        "description": "a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus",
        "price": "203.47"
    },
    {
        "id": 12,
        "name": "ac diam",
        "description": "varius ut blandit non interdum in ante",
        "price": "131.56"
    },
    {
        "id": 13,
        "name": "ac",
        "description": "tortor id nulla ultrices aliquet maecenas",
        "price": "333.21"
    },
    {
        "id": 14,
        "name": "rhoncus aliquam",
        "description": "nam congue risus semper porta volutpat quam",
        "price": "272.20"
    },
    {
        "id": 15,
        "name": "sit amet",
        "description": "at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis",
        "price": "34.75"
    },
    {
        "id": 16,
        "name": "nulla integer",
        "description": "pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante",
        "price": "174.62"
    },
    {
        "id": 17,
        "name": "curae",
        "description": "ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula",
        "price": "105.06"
    },
    {
        "id": 18,
        "name": "nunc",
        "description": "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia",
        "price": "54.81"
    },
    {
        "id": 19,
        "name": "elementum",
        "description": "risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula",
        "price": "352.35"
    },
    {
        "id": 20,
        "name": "leo",
        "description": "etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut",
        "price": "358.92"
    },
    {
        "id": 21,
        "name": "nam dui",
        "description": "ligula sit amet eleifend pede libero quis orci nullam molestie nibh in",
        "price": "92.45"
    },
    {
        "id": 22,
        "name": "ut dolor",
        "description": "turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit",
        "price": "224.59"
    },
    {
        "id": 23,
        "name": "non",
        "description": "rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo",
        "price": "205.90"
    },
    {
        "id": 24,
        "name": "proin eu mi",
        "description": "nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus",
        "price": "121.79"
    },
    {
        "id": 25,
        "name": "vivamus",
        "description": "mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam",
        "price": "280.41"
    },
    {
        "id": 26,
        "name": "enim",
        "description": "porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat",
        "price": "124.14"
    },
    {
        "id": 27,
        "name": "id ligula suspendisse",
        "description": "nec nisi volutpat eleifend donec ut dolor morbi vel lectus",
        "price": "395.60"
    },
    {
        "id": 28,
        "name": "in ante vestibulum",
        "description": "curabitur at ipsum ac tellus semper interdum mauris",
        "price": "378.67"
    },
    {
        "id": 29,
        "name": "orci luctus",
        "description": "at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse",
        "price": "150.85"
    },
    {
        "id": 30,
        "name": "ac lobortis vel",
        "description": "nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim",
        "price": "380.78"
    },
    {
        "id": 31,
        "name": "sagittis",
        "description": "diam in magna bibendum imperdiet",
        "price": "10.51"
    },
    {
        "id": 32,
        "name": "duis mattis egestas",
        "description": "elit proin risus praesent lectus vestibulum quam sapien",
        "price": "381.48"
    },
    {
        "id": 33,
        "name": "natoque penatibus",
        "description": "curabitur convallis duis consequat dui",
        "price": "34.37"
    },
    {
        "id": 34,
        "name": "in",
        "description": "ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus",
        "price": "118.53"
    },
    {
        "id": 35,
        "name": "maecenas",
        "description": "nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi",
        "price": "331.10"
    },
    {
        "id": 36,
        "name": "vel ipsum",
        "description": "sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan",
        "price": "80.27"
    },
    {
        "id": 37,
        "name": "odio in hac",
        "description": "penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis",
        "price": "180.97"
    },
    {
        "id": 38,
        "name": "curae",
        "description": "lectus suspendisse potenti in eleifend quam a odio in",
        "price": "120.33"
    },
    {
        "id": 39,
        "name": "elit proin",
        "description": "nec sem duis aliquam convallis nunc proin at turpis",
        "price": "286.67"
    },
    {
        "id": 40,
        "name": "quisque arcu libero",
        "description": "ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum",
        "price": "27.94"
    },
    {
        "id": 41,
        "name": "et ultrices",
        "description": "ut nulla sed accumsan felis ut at dolor quis odio",
        "price": "281.35"
    },
    {
        "id": 42,
        "name": "justo",
        "description": "libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu",
        "price": "371.08"
    },
    {
        "id": 43,
        "name": "vestibulum ante ipsum",
        "description": "ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae",
        "price": "240.25"
    },
    {
        "id": 44,
        "name": "suscipit",
        "description": "duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam",
        "price": "104.18"
    },
    {
        "id": 45,
        "name": "elit proin",
        "description": "sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit",
        "price": "339.93"
    },
    {
        "id": 46,
        "name": "in hac",
        "description": "penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum",
        "price": "291.02"
    },
    {
        "id": 47,
        "name": "suscipit a feugiat",
        "description": "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus",
        "price": "144.25"
    },
    {
        "id": 48,
        "name": "nulla tellus in",
        "description": "erat id mauris vulputate elementum nullam varius nulla facilisi cras",
        "price": "13.03"
    },
    {
        "id": 49,
        "name": "nunc",
        "description": "justo in hac habitasse platea",
        "price": "324.52"
    },
    {
        "id": 50,
        "name": "donec",
        "description": "consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi",
        "price": "265.08"
    }];