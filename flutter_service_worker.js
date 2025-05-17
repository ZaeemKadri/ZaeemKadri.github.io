'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a8432a1749e180e0a3f185513d989875",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "7d50debe6f4d678f31f505c53329f067",
"/": "7d50debe6f4d678f31f505c53329f067",
"main.dart.js": "114a1a462edef90e40ddaa8c55e8a858",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "0030db902d2e524d540da0e71a7cefd7",
".git/objects/0d/4ef794f5b33e8dede1847dc111bbdd0791f904": "d59ae6e7d0c027596673cf882eb8dd56",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/0c/d3b273bd4d4a9b038a533bcb24e4aa3b13a47a": "5472dd936c55056f6a3aa87876e5a4ba",
".git/objects/0c/b9b00f7c099cd2b86b1e9dc3cf856f9c0602b2": "a95254595e7d4186f52dd739e71a526c",
".git/objects/66/bb35c9f450e19ae7fa359dae1054f9c162e8c4": "ef65757ded03bdb4e89c243cc97070f2",
".git/objects/66/a6e60c72232866b597052fde3875a41ecc71c4": "c9279780b80d4a9df8509d27f5ae2f54",
".git/objects/66/b75def561d8c6027d30e3f3d9a3eeb655cdf74": "75866da19579fc029c13ed61994e0104",
".git/objects/50/69d0026e95356195d515f2f33dfc1d309cb65d": "b7ca46b83a79c9aee1e7514dfff477d9",
".git/objects/3b/7ba40c68fc93f2ab0c29a6810b4a2e281287ca": "2d639f6010458d61d42bf9e89afc3d12",
".git/objects/51/2153df88ec2daaf1218f24c4291d9dece93ab8": "4935bbe813b26ec90456b2a0b2d9cc93",
".git/objects/3d/b405f216e9803244ab36f0efa120a107f49579": "cc78614b4f93971a7567d1162b920b5a",
".git/objects/67/fc8c2146943bd0d5cd40946f8097508827b5ff": "4b89c831232046d984c2ab3af998400c",
".git/objects/94/5f75b733e84150b749610aff1784e2aec69e51": "f1b7f33f22a840202a690221826cc732",
".git/objects/34/ecca0bad2f34da07cb5117f2f1bdd6ac835ab9": "13854877551f6672ed8d00d80b70264f",
".git/objects/33/fb47aa8bda88845b83db5adcf0ffa2fafa3b60": "08c08d322a63f4b8dcb8a7cb33011920",
".git/objects/9d/f749a4e1cffb7f11055aa9c3e810a91c566d5a": "f9b60a6cb26ecfdadb999b2531a6364b",
".git/objects/bb/bde0c5e0eed6665dc098a0c8851371cdb273be": "824b06755182133e94b3c9659e83234c",
".git/objects/d7/39380bade0de898ee3ad442772a35e33a8c04b": "a68b5dc6d941d35a10b8bd0f5f96bf67",
".git/objects/b3/73a72fc8bc9fd90bb55ee25b6c808c361bb5b7": "a0ae09d3d6529fb89c19798c3393bb54",
".git/objects/da/e7e14f73ce1b14da6b21b47d5b503e80f8d04f": "ff7ac2f3958542ccbd8c4d5439ec8416",
".git/objects/a2/8cb68e9f70abac2ea17b0e2aa8020026438de1": "cc510269e5c405eabb79391fbc92d308",
".git/objects/a5/ef99a8d91dfe698f599a7d0dc54fdbde73d5e7": "179c853871f61908e43a3e354db8d934",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/7f2bea21e5db1ad95f25ce3dcfb2ddebb94849": "64c5803e06db10af9ce93e16f102b073",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/10db168fe20864daca23fad66074fe804aea33": "7a61b3952753bc46ae8ec110e33c05d5",
".git/objects/f5/be88c37c2d6d5db4912732923f748d72e661cb": "84613d74b73891084713baf116168603",
".git/objects/ca/03bde4e0f5297bd19e66b8f6cee966ea247e3a": "9222a3a775cf1b05e159617074f1e99e",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/c8/1bcccbabb6dac228f277749e1db3a4cfb24930": "a0df9819f45af097b8193c2f2c8329ec",
".git/objects/ed/f9b081c73cce598fda499fd9350952c4c5d8ee": "9d539619ace7bacca357e875357ca316",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/3af0f4be38c4fbaea2a009fd3992dc9dd95db0": "5319d75adddbd89f6e20e37f813667ab",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/a38d6a579b69dbe6329efeca67f24ac3cb155a": "8c7d4aeed31be6521468932d136da444",
".git/objects/75/c8062f39884e57f6c847e2f74a1f57ba0541b9": "97e880ed32cb01ac5541e09b903f78ac",
".git/objects/86/bb8ce95b0003ab61d7e1c0bdc81021bf044300": "b3cd63a29f00cec3f60f72b7764db104",
".git/objects/2f/c0f8fafa6aec9304eeabba06193c7b57283738": "08f9755514bd6de280afe9cd98679d8d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/31/347764579d473b0479d0de79aa03cb96f8f99b": "85d1768e36d8a48804426781a819896d",
".git/objects/3a/123e113c81cd9d2d68feb380422748870af6f6": "a87f0f95d9f53f0b0c44912fb752cbed",
".git/objects/3f/242d810aebdac5a801472fc8075b280a5a6971": "467023d821695a41f69b7d6eafe0e10d",
".git/objects/5b/ede954abbc493ca131ef6c148bbeb82e5774fa": "16f80158d16c98f33cb9457b1c7729b5",
".git/objects/08/25a78785f09c8ace1633870935cc0046a2b488": "d69444312a881de251ca065aa0899b85",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/01/aabea2a73cd1fbcc047103cc44456a005ee247": "4c23b30176f9171e76c0166ae4a6bdac",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/39/73448700375d37c4ce630584a999eef1cef6ec": "6b4209bb4330a39d5ac4572a36a65246",
".git/objects/99/8f3acc889cd2538390bb3e54c8a6ef459069df": "65b415ea50b427a0e0014b05a57b3452",
".git/objects/52/4d2009b9b9c341536fc0921816591d49d0b54b": "863f41e624d543e69b8109e7e1bfc01e",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/ea3febfb7ce53d6e24fdc47066ef7d79e5dad5": "92c38029a4e994b5f27bef5489894be3",
".git/objects/0f/d2a60ff36300441c95305e2694b98a11beec17": "d64ed08539d6b30abf200a3fb800f72b",
".git/objects/64/0a7a883ca46f9e24f0004685b608be031b08f0": "baa95d6a4136513556424421bf882844",
".git/objects/90/e2235d9040804c3f7dbdacd3e9b77f1009450a": "ecc07a5d27012d68cf75da785c029350",
".git/objects/bf/ec477383b7431640235d61e890c0938afd29ca": "c9b41e8d0ba7b82c8b885bc9544825b6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dc/5be435552e880d7b9a9f655ac387cd924623ec": "038634d69540a67ceb1c8b87fffc43fb",
".git/objects/b6/623ed576de2ca134fb136089a858a75abfdd0a": "62d81888da346f5f978498d44b64a858",
".git/objects/d5/1656f633165af059bd9cd41f1ef915568f30c5": "0fde99aff3e3465f36422596e0ef388d",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/6fe96b91cbb76144d6b17bc2cb9ade70c1f190": "65f6d09f2a1d89820e4542398963be68",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6ac1d2c7f2d08d82f22e581de5f2871fabc12a": "b1fa267a48300bcd4186b119f4621d0f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5e3bea3fcf23a73a1fd71033547b7e599cc011": "b3f0e7f4fec6a6160dce94ca86ef61a1",
".git/objects/a1/6ba5434b0ebf556ebaed2024883062f5e586bc": "94190a2da3ffdb548c2cdcb50f6da222",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/414e3ed21006b141ae805f5757c40f58970d45": "0b9a36fd9fcce02fffc01a0133fa42ed",
".git/objects/e1/f27cb00fc663f621e0216f6f42b8549b112b54": "7ec8791674da8c3d25f4e70c47240e07",
".git/objects/cc/da914aa522a8926f75e7284c084a284a9b5b61": "3fff0073980435d9ed62a8d9d8c82a09",
".git/objects/f6/bf348f15ac399d2f16f24b9b50ffb27c631865": "92a5e8e953f1903b6132e17a72db77cb",
".git/objects/cb/e03cdcaaddc6b1a33418e7ce0a334094d3769a": "8c650222c1c61427d5568b3b3f2d01d7",
".git/objects/f8/a97fcd692ef00494afdc41fd529fc4664d1ec0": "fd70b45a2df9c4ccc8da6649232dc0c1",
".git/objects/ce/c93070c15cc1cfbdc56503500512b038657007": "864785dc15edbecf1219e5300ee27641",
".git/objects/e0/414609530cc72cbc9cf43a9610bbec887fb914": "ea4c204adc03c4f91ace0b3eeace1a0c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ec7d6eebf09c7e382b0dacdaea86deed4ebf36": "2069742f3809e89099afadede93938c2",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/0492c7df84025b18ce185b442ccb1e33105cd1": "7403024d2c7f83da931acb636a6a7842",
".git/objects/1e/74bcf38216aaf98b7131cf55e95b2e82b493fe": "31ed66de0ba646a407d30c8a470e6066",
".git/objects/1e/7cc27310dd42ecd8955e2e77a474528558110c": "e1edf7600399e3eed5e656b08afc1134",
".git/objects/24/62d51cd313479af082a12c121bacb9ffdb860a": "164f36bb1ce4c7aebbabbfb18f84d2b2",
".git/objects/4f/0e3ae9d3196b6d61cd4ba1bb8448192d394b39": "58f26e8a79742911ce0d1cd45c0c827b",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8d/14dbf424310062313c78053a2d0ec6c6050758": "d05a603882bed9ad6cad805b5b2da07a",
".git/objects/8c/6ddb14864e2adcaad17f98239023c2ea5eba30": "2400bca5a9dbe1a4f144afa1e73dcf76",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1c/8d451500f18b2a17751146dd8c2fc7f21a1f55": "2304b085215049332ec934af47143121",
".git/objects/40/288d04df6222f65e797c84cc9df3b799fd744b": "57c2b78ca2a2e97be680c32ca07116e7",
".git/objects/7a/4ba8b51c0382ca9cf457589dcc195fc2627d27": "ab5488a2972f2b70880899445f93dc07",
".git/objects/7a/f1a28fda8923661c9c0f7824f587079bc9a8ba": "550b42823b2942ce28c3c96899e1cd65",
".git/objects/14/c692fa6d53c28c57cf93ef855d89e694813d13": "8ff335f1e94a5af8a37e5a3566ff3409",
".git/objects/14/11a96696d73d6696077cfad802895410254068": "4a22c7ceae3c308a44fb420a20017f5d",
".git/objects/22/2f3eeb30b955b3f6676a4cfd337d9f1bdfd8c8": "1322cc18d90822046b4ddc0fddf3764f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0940707487cf11780c4345041ab11f7e",
".git/logs/refs/heads/main": "4dd8eecb9a2a3150004ebf1af96596ca",
".git/logs/refs/remotes/origin/main": "c6ba3d70a21d0339b284af99d2fc5b1d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "84ccdb29a27e36d7b571f16eceea8376",
".git/refs/remotes/origin/main": "84ccdb29a27e36d7b571f16eceea8376",
".git/index": "d0f5a266add7c6ba2fa04b683834502b",
".git/COMMIT_EDITMSG": "b3c77472e3ac729cbd8f984a5b410ed2",
"assets/AssetManifest.json": "617c2ab702b6a48ceb5084cee78ae7a0",
"assets/NOTICES": "1af3734bf0c1114c01567cba92b6374e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "feb85c281ee3f7d44e2f8316114f5f59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fb6cb4ceff0e50c69a6f22b8c9a7c14a",
"assets/fonts/MaterialIcons-Regular.otf": "4faf7557cb7f47ee8f4d40a5b81cb878",
"assets/assets/images/flutter_logo.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/images/screenshots/home_automation/fan_history.jpg": "150081389ff65dc690bc696542ce7767",
"assets/assets/images/screenshots/home_automation/light_control.jpg": "18d54396ec56468b35c5bf15c8eee58c",
"assets/assets/images/screenshots/home_automation/login.jpg": "21d920a847ba0fe4c1a5b4c5d25823d9",
"assets/assets/images/screenshots/home_automation/fire_history.jpg": "a14870cdf23c73902a0c9171659eb51c",
"assets/assets/images/screenshots/home_automation/home_page.jpg": "9ca42520aecd1208c81cc3e3a67490da",
"assets/assets/images/screenshots/home_automation/signup.jpg": "363f2168a0c6cb0df6b64f86392f5e02",
"assets/assets/images/screenshots/home_automation/pir_history.jpg": "e5e5f1a071a0666571d548e649576fd2",
"assets/assets/images/screenshots/home_automation/fan_control.jpg": "1a6e9610fe9ad376c1d56a6337f70af7",
"assets/assets/images/screenshots/home_automation/light_history.jpg": "a29d346ed10cffd9912dabf24eab9c26",
"assets/assets/images/screenshots/home_automation/smoke_history.jpg": "35ed723e1fef6034e4dd7e019b114cfe",
"assets/assets/images/screenshots/home_automation/sensor_control.jpg": "af5b073e19af3787f7bea5ed0f84057a",
"assets/assets/images/screenshots/educom/login.jpg": "e723b0a45d02720f36599d5d1b1c84a9",
"assets/assets/images/screenshots/educom/register.jpg": "164d350133d1b1d5f6431efa5abb38bf",
"assets/assets/images/screenshots/educom/chat_page.jpg": "f0c67c15b5d2192a189739838e72c059",
"assets/assets/images/screenshots/educom/home_page.jpg": "165b6f521b0601797592bfc0d436c096",
"assets/assets/images/screenshots/educom/signup.jpg": "76461512773f471d186e89d83d5648a1",
"assets/assets/images/screenshots/educom/chat_section.jpg": "bb03d7dd26fb54892a65be546c99b398",
"assets/assets/images/screenshots/educom/profile_page_more.jpg": "f5da645b4a9b0daa172531888a477f61",
"assets/assets/images/screenshots/educom/profile_page.jpg": "6f9ac5f5397c3ad2c1f4e9984fd627c0",
"assets/assets/images/screenshots/peakfit/weight_selection.jpg": "d97a27efc84c1c543472ecf01054cd93",
"assets/assets/images/screenshots/peakfit/login.jpg": "9fb1f05d3abb2cb7b47bacca26ebb75b",
"assets/assets/images/screenshots/peakfit/level_selection.jpg": "9003cd0c96d9fcc921b1f945a5f02755",
"assets/assets/images/screenshots/peakfit/food_category.jpg": "86df193f0f36d436b23bc0a6d55c4438",
"assets/assets/images/screenshots/peakfit/workout_page.jpg": "fcca8435f6ec7462b1e0d12c21caf8e9",
"assets/assets/images/screenshots/peakfit/diet_page.jpg": "60c78121e2a681b67181e836a17e3d7d",
"assets/assets/images/screenshots/peakfit/gender_selection.jpg": "d905d9dca0b09d9eb5c75d75c89a7f5b",
"assets/assets/images/screenshots/peakfit/diet_history.jpg": "04b040704f1ddd6c7c86a8d9d66d8771",
"assets/assets/images/screenshots/peakfit/age_selection.jpg": "4e477e8357281cd526034e3fd430ac12",
"assets/assets/images/screenshots/peakfit/goal_selection.jpg": "81755e12f7bd6e4d6a9d3d5399350ee9",
"assets/assets/images/screenshots/peakfit/workout_history.jpg": "f53eed8bc2effb71b680929b06b07c37",
"assets/assets/images/screenshots/peakfit/home_page.jpg": "488c5db81a3db33e4b0da9b6bca09024",
"assets/assets/images/screenshots/peakfit/signup.jpg": "2ae3c0a2d085f2ac26f209d2ccf5933c",
"assets/assets/images/screenshots/peakfit/profile.jpg": "0689a2b37bae97fa50a5948e652def4b",
"assets/assets/images/home_model_3.jpeg": "d0356152b65bb045dc8984b623224212",
"assets/assets/images/profile_photo.png": "b782aa8e356a31a29db4229fc5b9c5be",
"assets/assets/images/educom_icon.png": "2f77ff6932797d5f268c7025bb244b79",
"assets/assets/images/home_automation_icon.png": "7278e5e6add9f731fbb1f36f7271198f",
"assets/assets/images/home_model_2.jpeg": "9745f20b6bf20be880ba410ae8518ea6",
"assets/assets/images/photo.png": "3b2c4c255e79dfd47b2a989c5e31fae6",
"assets/assets/images/home_model_1.jpeg": "a0d301cdf2fe20316e03b020d06ab0f7",
"assets/assets/images/peakfit_icon.png": "4494017b2a2fd39c3d049cd391567a62",
"assets/assets/images/firebase_logo.png": "a0460b95a432081ebb4979800f2cc53e",
"assets/assets/images/android_logo.png": "4973e9978711220c4d7085867ca5ef49",
"assets/assets/images/mysql_logo.png": "a331387718d805c9720d3730d4e895c2",
"assets/assets/cv.pdf": "4e83a478609d4e0c86af1af5b89a9cc3",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
