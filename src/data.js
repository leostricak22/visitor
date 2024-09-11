import bjelovarImg from './assets/bjelovar.jpg';
import cakovecImg from './assets/cakovec.jpg';
import dakovoImg from './assets/dakovo.jpg';
import dubrovnikImg from './assets/dubrovnik.jpg';
import karlovacImg from './assets/karlovac.jpg';
import kastelaImg from './assets/kastela.jpg';
import koprivnicaImg from './assets/koprivnica.jpg';
import osijekImg from './assets/osijek.jpg';
import pozegaImg from './assets/pozega.jpg';
import pulaImg from './assets/pula.jpg';
import rijekaImg from './assets/rijeka.jpg';
import samoborImg from './assets/samobor.jpeg';
import sibenikImg from './assets/sibenik.jpg';
import sisakImg from './assets/sisak.jpg';
import splitImg from './assets/split.jpg';
import varazdinImg from './assets/varazdin.jpg';
import velikaGoricaImg from './assets/velika-gorica.jpg';
import vinkovciImg from './assets/vinkovci.jpeg';
import vukovarImg from './assets/vukovar.jpg';
import zadarImg from './assets/zadar.jpg';
import zagrebImg from './assets/zagreb.jpg';


export const AVAILABLE_PLACES = [
    {
        "id": "p1",
        "title": "Zagreb",
        "image": {
            "src": zagrebImg,
            "alt": "The capital city of Croatia, a cultural and political hub with historic architecture."
        },
        "lat": 45.8150,
        "lon": 15.9819
    },
    {
        "id": "p2",
        "title": "Split",
        "image": {
            "src": splitImg,
            "alt": "A coastal city blending ancient Roman architecture with modern Mediterranean vibes."
        },
        "lat": 43.5081,
        "lon": 16.4402
    },
    {
        "id": "p3",
        "title": "Rijeka",
        "image": {
            "src": rijekaImg,
            "alt": "Croatia’s largest port city known for its maritime heritage and lively atmosphere."
        },
        "lat": 45.3271,
        "lon": 14.4422
    },
    {
        "id": "p4",
        "title": "Osijek",
        "image": {
            "src": osijekImg,
            "alt": "A city in eastern Croatia, known for its Baroque architecture and peaceful riverside setting."
        },
        "lat": 45.5602,
        "lon": 18.6753
    },
    {
        "id": "p5",
        "title": "Zadar",
        "image": {
            "src": zadarImg,
            "alt": "A coastal city with a mix of ancient history and modern artistic installations."
        },
        "lat": 44.1194,
        "lon": 15.2314
    },
    {
        "id": "p6",
        "title": "Velika Gorica",
        "image": {
            "src": velikaGoricaImg,
            "alt": "A suburban city near Zagreb, offering a blend of urban and suburban living."
        },
        "lat": 45.7125,
        "lon": 16.0756
    },
    {
        "id": "p7",
        "title": "Pula",
        "image": {
            "src": pulaImg,
            "alt": "A historic coastal city in Istria, renowned for its Roman amphitheater."
        },
        "lat": 44.8666,
        "lon": 13.8496
    },
    {
        "id": "p8",
        "title": "Karlovac",
        "image": {
            "src": karlovacImg,
            "alt": "A city known for its star-shaped fortress layout and riverside beauty."
        },
        "lat": 45.4929,
        "lon": 15.5550
    },
    {
        "id": "p9",
        "title": "Sisak",
        "image": {
            "src": sisakImg,
            "alt": "An industrial city with ancient roots along the Sava River."
        },
        "lat": 45.4875,
        "lon": 16.3758
    },
    {
        "id": "p10",
        "title": "Varaždin",
        "image": {
            "src": varazdinImg,
            "alt": "A Baroque city known for its well-preserved historic architecture and lively festivals."
        },
        "lat": 46.3057,
        "lon": 16.3366
    },
    {
        "id": "p11",
        "title": "Šibenik",
        "image": {
            "src": sibenikImg,
            "alt": "A medieval city on the Adriatic, famous for its fortresses and Renaissance cathedral."
        },
        "lat": 43.7272,
        "lon": 15.9058
    },
    {
        "id": "p12",
        "title": "Dubrovnik",
        "image": {
            "src": dubrovnikImg,
            "alt": "A world-renowned historic city with medieval walls and stunning Adriatic views."
        },
        "lat": 42.6507,
        "lon": 18.0944
    },
    {
        "id": "p13",
        "title": "Bjelovar",
        "image": {
            "src": bjelovarImg,
            "alt": "A small agricultural city with rich military history."
        },
        "lat": 45.8980,
        "lon": 16.8440
    },
    {
        "id": "p14",
        "title": "Kaštela",
        "image": {
            "src": kastelaImg,
            "alt": "A group of coastal towns near Split, known for their historical sites and Mediterranean charm."
        },
        "lat": 43.5503,
        "lon": 16.3666
    },
    {
        "id": "p15",
        "title": "Samobor",
        "image": {
            "src": samoborImg,
            "alt": "A quaint town near Zagreb, known for its old town charm and nature trails."
        },
        "lat": 45.8037,
        "lon": 15.7180
    },
    {
        "id": "p16",
        "title": "Vinkovci",
        "image": {
            "src": vinkovciImg,
            "alt": "One of the oldest continuously inhabited towns in Europe, with rich prehistoric history."
        },
        "lat": 45.2870,
        "lon": 18.8047
    },
    {
        "id": "p17",
        "title": "Vukovar",
        "image": {
            "src": vukovarImg,
            "alt": "A riverside city known for its historical significance and resilience after the war."
        },
        "lat": 45.3431,
        "lon": 19.0022
    },
    {
        "id": "p18",
        "title": "Đakovo",
        "image": {
            "src": dakovoImg,
            "alt": "A city famous for its stunning cathedral and equestrian tradition."
        },
        "lat": 45.3089,
        "lon": 18.4094
    },
    {
        "id": "p19",
        "title": "Koprivnica",
        "image": {
            "src": koprivnicaImg,
            "alt": "A town in northern Croatia known for its eco-friendly initiatives and cultural heritage."
        },
        "lat": 46.1625,
        "lon": 16.8276
    },
    {
        "id": "p20",
        "title": "Požega",
        "image": {
            "src": pozegaImg,
            "alt": "A city nestled in a picturesque valley, known for its wine production and Baroque architecture."
        },
        "lat": 45.3404,
        "lon": 17.6855
    },
    {
        "id": "p21",
        "title": "Čakovec",
        "image": {
            "src": cakovecImg,
            "alt": "A charming northern city known for its rich history, cultural heritage, and medieval castle."
        },
        "lat": 46.3844,
        "lon": 16.4336
    }
]
