'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b516da95e1ef39fd1e8f3922b7da13a7",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "07cbe02e788407f1290063991e44accf",
"/": "07cbe02e788407f1290063991e44accf",
"main.dart.js": "e1a946a1b75aacbe0905bc5dfbe54167",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "8c29f7ef09ec664ddc20fa50ddbee11b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "0030db902d2e524d540da0e71a7cefd7",
".git/objects/0d/4ef794f5b33e8dede1847dc111bbdd0791f904": "d59ae6e7d0c027596673cf882eb8dd56",
".git/objects/95/0d2ba1cc181d536abcc305c162eb7ac9b7ee04": "2f7b7a9b6b8b19f368ebf3831bddd3ba",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/0c/182058b57c4bc0b19d7650efedf4ab11745566": "f4a2f95592b59983667802f01b188fe2",
".git/objects/0c/1522a1993057719dcb44d668a2e9f9cd961108": "e20e96626b580cbfad9dd037a96b562d",
".git/objects/0c/d3b273bd4d4a9b038a533bcb24e4aa3b13a47a": "5472dd936c55056f6a3aa87876e5a4ba",
".git/objects/0c/b9b00f7c099cd2b86b1e9dc3cf856f9c0602b2": "a95254595e7d4186f52dd739e71a526c",
".git/objects/66/bb35c9f450e19ae7fa359dae1054f9c162e8c4": "ef65757ded03bdb4e89c243cc97070f2",
".git/objects/66/a6e60c72232866b597052fde3875a41ecc71c4": "c9279780b80d4a9df8509d27f5ae2f54",
".git/objects/66/b75def561d8c6027d30e3f3d9a3eeb655cdf74": "75866da19579fc029c13ed61994e0104",
".git/objects/50/d0ca4183bb3ec74c4a1ede46358c1010d30493": "571a1670ad5c9d4f880a43b8146cf947",
".git/objects/50/69d0026e95356195d515f2f33dfc1d309cb65d": "b7ca46b83a79c9aee1e7514dfff477d9",
".git/objects/3b/7ba40c68fc93f2ab0c29a6810b4a2e281287ca": "2d639f6010458d61d42bf9e89afc3d12",
".git/objects/03/4e83d58391582226247a5932d42f409e0e1dfe": "b13fc1992fd54b946a761cf995dd4373",
".git/objects/03/05952db0cce6c5fbe0fcfcd832f396acad173c": "e750e218fbd483d99bd79ef11c7aab09",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/04/ec98901afd9b6ab998e828708a1a00b96f2854": "e7c8c60aa40f6a341ec7efb6674036e8",
".git/objects/6a/e411f222a4803a58d88efc9d7a451068bc314b": "03793ff9eb71821a857708a81f51f049",
".git/objects/6a/944c7da9979c3c7d0988369436e6a24a4736c7": "34b8b27cc4048360a3aec229aee347fc",
".git/objects/35/79269f2c9d2ba020cae8986344afc836358611": "2ef2c4eef74d61c7ee7ecefc714c213d",
".git/objects/35/59e411f640981efc428c81af302dc4eca70a37": "3a5ea77e6f6475d7e05fd6dbe1c6b0bf",
".git/objects/3c/9427513a48d9b67200149af9d9e04e114ecbd5": "a7d1700e863f8cef729038dac526c4e2",
".git/objects/51/aceb69b4f4715ba969e6fc77093bbf81fa0470": "47fb12c81c0d54c725f380840c531616",
".git/objects/51/8da1986113b3b93ee3f3512cc419c159a39eb4": "e309e28d2faa2a332527fb04f1d3e498",
".git/objects/51/2153df88ec2daaf1218f24c4291d9dece93ab8": "4935bbe813b26ec90456b2a0b2d9cc93",
".git/objects/3d/b405f216e9803244ab36f0efa120a107f49579": "cc78614b4f93971a7567d1162b920b5a",
".git/objects/3d/da8bbb62b32f08c3009e342b930fc37122a6cc": "89f24c55c4b1e893629442d71bdc3c6b",
".git/objects/67/fc8c2146943bd0d5cd40946f8097508827b5ff": "4b89c831232046d984c2ab3af998400c",
".git/objects/0b/aeefe25ea7d357de3e95d2d21c5a0190292795": "3eb0a6531fa00d3e29972e725cdd41ed",
".git/objects/94/af3b8743ce2a98186470f223d6611e55204bb0": "8c11096c51b9d1f3d26cdb57a1d4273e",
".git/objects/94/5f75b733e84150b749610aff1784e2aec69e51": "f1b7f33f22a840202a690221826cc732",
".git/objects/34/ecca0bad2f34da07cb5117f2f1bdd6ac835ab9": "13854877551f6672ed8d00d80b70264f",
".git/objects/33/fb47aa8bda88845b83db5adcf0ffa2fafa3b60": "08c08d322a63f4b8dcb8a7cb33011920",
".git/objects/33/7c4df56c81278d3074803cee57d29151889ffa": "4438be46d0052bcf65451931f138a6f4",
".git/objects/9d/953749e5bd2dbd67ae8edcb6fef41aa30011b8": "563fbe2f3a1b7681302465cc73e79013",
".git/objects/9d/f749a4e1cffb7f11055aa9c3e810a91c566d5a": "f9b60a6cb26ecfdadb999b2531a6364b",
".git/objects/b2/c4cd53ff01c5369b31b2fcdd3ff68a2413d3f4": "0d822a1809a9457986dac3842f49612c",
".git/objects/d9/c44db267ef1fcdfa72565148c90e9d9897277b": "92bb883a1ab51b863582830c03175440",
".git/objects/ac/ed477a9e6e2e3515e343554c083d915dd423b4": "1d0fa9be460257f5cd16e10f5248b0fd",
".git/objects/ad/1aeb4164dd228f8ea60b9d4f1934f26ba0f042": "7a4acd752e25c74f4269c53a83026826",
".git/objects/bb/eaaf1559a1b91d25ad038616e04ffa531a77a0": "88ffc8d01f501f2d48110a4448ac92bb",
".git/objects/bb/bde0c5e0eed6665dc098a0c8851371cdb273be": "824b06755182133e94b3c9659e83234c",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/39380bade0de898ee3ad442772a35e33a8c04b": "a68b5dc6d941d35a10b8bd0f5f96bf67",
".git/objects/b3/73a72fc8bc9fd90bb55ee25b6c808c361bb5b7": "a0ae09d3d6529fb89c19798c3393bb54",
".git/objects/da/e7e14f73ce1b14da6b21b47d5b503e80f8d04f": "ff7ac2f3958542ccbd8c4d5439ec8416",
".git/objects/a2/8cb68e9f70abac2ea17b0e2aa8020026438de1": "cc510269e5c405eabb79391fbc92d308",
".git/objects/a5/ef99a8d91dfe698f599a7d0dc54fdbde73d5e7": "179c853871f61908e43a3e354db8d934",
".git/objects/bd/8736a0eab68e249383fb414178b44cf328acba": "5a2f6e7bf2c357da1866d113848099ee",
".git/objects/bd/883d4834a6f7807165855b5c48af0e7f3d78d8": "e4cc8913b295b6548156d2ae5e1dcc1e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/abde2ef471726c50cacf4ae71064e62c4b4721": "986b290340464e1a2744b0aedbda97d8",
".git/objects/ae/6b70dac954ad6f9bea5f2e26043020af52c085": "1738ee8ea733b556f4bb9fc6c91acf48",
".git/objects/e5/8619627fdce8e897d7d05fac00da2ecdcfb743": "79ed14d2d185c1c6b21dd2402c50cf26",
".git/objects/e2/78016f0003b0f7d853494645e598c144ca94ba": "f83aeb67c82ef6c3d9f08e70f016e5a6",
".git/objects/f4/e4215566107fdf9ad78ab82812480651f8f59c": "8a2a4974556259a1fe612ad78bdf3159",
".git/objects/f3/3a6f1f09c64acee33dce673777b5d729cad8dd": "d4286ee96f59dcc1b218566919a5e5ef",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/96091e45207445a092e201214d1d6143e6b6ac": "c65e45fac1428ccdf1f9bedfe638510d",
".git/objects/c7/968edc2ff290db512dc676f2c0ad025b1bee88": "08575c60d2addcfdf024c66b8897e425",
".git/objects/c7/f737b1d855a9800ac3f53c6e90f819b70b775d": "2c30c06e95b701b2c5e9ecbf6ce7daeb",
".git/objects/c0/7f2bea21e5db1ad95f25ce3dcfb2ddebb94849": "64c5803e06db10af9ce93e16f102b073",
".git/objects/ee/b8e75c8a7e155e6dbb2a6485dc7ad0ab191ead": "73332eb9e0a4bfdc22be9e47bc5b86b8",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/c9/3618e1f7b724aed60f204bd5d6f4ae7f4117c6": "47af7247bbc3c65849b81244ec16f04f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/10db168fe20864daca23fad66074fe804aea33": "7a61b3952753bc46ae8ec110e33c05d5",
".git/objects/f5/be88c37c2d6d5db4912732923f748d72e661cb": "84613d74b73891084713baf116168603",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/6ecb3d86ea65467d2419cf42986416a1fff339": "ff90c1939664a1e52bfd12f60f6fef38",
".git/objects/ca/03bde4e0f5297bd19e66b8f6cee966ea247e3a": "9222a3a775cf1b05e159617074f1e99e",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/c8/1bcccbabb6dac228f277749e1db3a4cfb24930": "a0df9819f45af097b8193c2f2c8329ec",
".git/objects/c8/b79ea5454d9498e4678021e273ec48f4453bc0": "3a619f6e4447bb14b9e1d4ae1adb40f5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ed/f9b081c73cce598fda499fd9350952c4c5d8ee": "9d539619ace7bacca357e875357ca316",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/3af0f4be38c4fbaea2a009fd3992dc9dd95db0": "5319d75adddbd89f6e20e37f813667ab",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/bf3cf69305f51e1a5788afb220468483a908e4": "32183c8018b88667ee9c030e73866303",
".git/objects/20/59accbe429b4d0eb269312dbb3840c0f32f88a": "6b8bc666bb9eb6bf53c5de20c582e388",
".git/objects/20/23049755ee261fc6048a7fa58826a40655cd7d": "b809d8dd5c26e25bf9da3d0e1e231b05",
".git/objects/18/c40b3c782677157068a7a296d5c0e84bbfe2f7": "5da9a792848e48fd50ab8d25751ec500",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/ad91fc3682a50a8fa0681ac8d65181345e0ca9": "96311efe8fbc7a55337f49332d630cce",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/16/3f6d1e7b39e9c95a21ca66d797f26483f7e790": "c34c7d11ec864702de4fc03ebb2e5d17",
".git/objects/16/cf614224173d7d9f2f734eaf8c8646626b4222": "2537f305b4bcdbec8011ce8067548edf",
".git/objects/45/66e2b12a5a4de4447d09d655683d017477e10e": "ea4b64364b4a372e26f4b1824302736a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/80/883abba237cb4eb58873c0891ec23f4e7a98e0": "8ff33ec42f8c36f357b1a26510abfce5",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/28/33dfff855f89f56595cf0240c55edbc12e8e9f": "c453bbfde72a1a4ca1679ad4a8a1a58d",
".git/objects/7b/a95501c5f5d13162b447590f4a69ef83745202": "e4f0904cc96ca6baf508184c3f7f0886",
".git/objects/7b/4f562b0fdbf7a86cf9ab819cb3727df71f2220": "772c188d93d94bf9d1871335afbb7c4c",
".git/objects/8a/8f83b2c76d8d058a180355c7742f586d7957e7": "e6b5a513bd2f473da37603569f9ff0e9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/fb57e8e1205aa87413ad7bc8c0b94c33d336e8": "812723af8c5f40023f47e4753789d755",
".git/objects/19/a38d6a579b69dbe6329efeca67f24ac3cb155a": "8c7d4aeed31be6521468932d136da444",
".git/objects/4c/aa3fccf27de150a9f44e3deee178d24ce199f0": "6cbe5c9bb4acb0d8c61d07708f84acfe",
".git/objects/4d/bbef1e1171c2972771fd4a0b8e1a8370746a78": "835c7dfcc6522f35aea500c12e553709",
".git/objects/75/c8062f39884e57f6c847e2f74a1f57ba0541b9": "97e880ed32cb01ac5541e09b903f78ac",
".git/objects/86/bb8ce95b0003ab61d7e1c0bdc81021bf044300": "b3cd63a29f00cec3f60f72b7764db104",
".git/objects/86/bb45664800f54a7c65657fa215b3369fce7f43": "5e9935679d79d05df6448962755ca6cc",
".git/objects/2a/4714cfc82086c920caabcecd8b91618403d247": "e0edb5abd36b4822a5e7e4839541376a",
".git/objects/2a/c80c54e77d6805ea00b7016052b66a29f06149": "8b7772afd82412531b3de982e4f2f028",
".git/objects/2f/d928d0d7fd4c0b944d6e3ef05cfe555f345f0e": "d711de0affb3d33c708ca6e3ac8be934",
".git/objects/2f/c0f8fafa6aec9304eeabba06193c7b57283738": "08f9755514bd6de280afe9cd98679d8d",
".git/objects/43/7696762de50a08689cfb2a39ec5029bb762c1d": "9f47fddaa71f384ee02371043386e3af",
".git/objects/43/1033a7c35a349fce0145b357134935c9620dcf": "cdf5dece765e05bce1b94020712195ce",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/8ad9bd889de12494a212fd3215307f6a21ae94": "f0b1fd442054f1e54fa068aa7a1a3d5a",
".git/objects/9f/4eff5f8e51d98f42c5cdadaa7288fdd4ff1a6b": "283b7b4c78f8efd1485c06771afb79a3",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/572b502688bece7992494f136b56b523b6377d": "1eb8af09b8d8a0d9d5deb98731644d51",
".git/objects/07/4c251e1620a63cc220522c017a6cba440c4345": "f2f4a48d62c1f03be1444f7c6ecb0ccc",
".git/objects/07/600192b84a4736213ed53bc62fb6e5d6d7c062": "6658c74fc40b16e77c861f5f668a08e1",
".git/objects/9a/d75aafb8520a0768fcca7b0f6f7df8ebbb0c0d": "e1f2c07a09605ea76ca228f01f2b23ac",
".git/objects/5d/39219ffc2283e2c7be988be12abaf542143002": "39ca5f3324bb3d528aa7a8209b7801db",
".git/objects/31/347764579d473b0479d0de79aa03cb96f8f99b": "85d1768e36d8a48804426781a819896d",
".git/objects/3a/123e113c81cd9d2d68feb380422748870af6f6": "a87f0f95d9f53f0b0c44912fb752cbed",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/3f/242d810aebdac5a801472fc8075b280a5a6971": "467023d821695a41f69b7d6eafe0e10d",
".git/objects/3f/ee107f1dccadd5c57d0a793b12edecccbbb090": "8b2b3876aed7dd2174d3fc5041171c5a",
".git/objects/5b/ede954abbc493ca131ef6c148bbeb82e5774fa": "16f80158d16c98f33cb9457b1c7729b5",
".git/objects/37/b5315cb5b928751be5dd527e907929ac20327f": "feb9d42d4080d596e74edf35a7b7544c",
".git/objects/08/25a78785f09c8ace1633870935cc0046a2b488": "d69444312a881de251ca065aa0899b85",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/2e2f343a4f9364bcecd47abadbaa4116b6a9c2": "8d9cd5cc5514b36c50c48df30ba22264",
".git/objects/01/7a73d560835e0f18e01524c19700b7650374a8": "324db3853ad606c74d27e76081774065",
".git/objects/01/aabea2a73cd1fbcc047103cc44456a005ee247": "4c23b30176f9171e76c0166ae4a6bdac",
".git/objects/6c/cbe321efae54fb4e4b90e1446357b8e15e620c": "9557895552aaad804f98d1d9afaa4c80",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/39/73448700375d37c4ce630584a999eef1cef6ec": "6b4209bb4330a39d5ac4572a36a65246",
".git/objects/99/8f3acc889cd2538390bb3e54c8a6ef459069df": "65b415ea50b427a0e0014b05a57b3452",
".git/objects/52/684ff6d721db17b91f16022eed1c7ecff08532": "af0015c9edd79b7e5975feb2f6571ce3",
".git/objects/52/4d2009b9b9c341536fc0921816591d49d0b54b": "863f41e624d543e69b8109e7e1bfc01e",
".git/objects/55/55acadb6eaf3620b0fc1ef324cb4446becbf17": "b97cf454b7272de58636afd00ca3b4ef",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/ea3febfb7ce53d6e24fdc47066ef7d79e5dad5": "92c38029a4e994b5f27bef5489894be3",
".git/objects/0f/d2a60ff36300441c95305e2694b98a11beec17": "d64ed08539d6b30abf200a3fb800f72b",
".git/objects/64/0a7a883ca46f9e24f0004685b608be031b08f0": "baa95d6a4136513556424421bf882844",
".git/objects/90/e2235d9040804c3f7dbdacd3e9b77f1009450a": "ecc07a5d27012d68cf75da785c029350",
".git/objects/bf/ec477383b7431640235d61e890c0938afd29ca": "c9b41e8d0ba7b82c8b885bc9544825b6",
".git/objects/d3/a619b8041a56f75daafe536e579066ecc11182": "42297b5eafd69043953ce9d17a9d62fa",
".git/objects/d3/3a724ff71822dd9e167722f2416758cabf9a25": "3a15ed961022497ceb0da7aae8ba7369",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3d1f3ada151bf1ff03f4578a34457829717745": "7e295c0bcfea6c44d3fab30f50153c83",
".git/objects/d4/872210f8297280516d5af8633cb6400a78a1d7": "a4adba358dba4c84dc2b3aa888b15b91",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/40f30dd23dc1ede528891ebf460fa7326d4793": "1e5e6fc293235f4d6f7185fc7417ba26",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dc/5be435552e880d7b9a9f655ac387cd924623ec": "038634d69540a67ceb1c8b87fffc43fb",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b6/9303409d168c53575587924de064acef6cd35f": "eff3e1ada7226545de128d08577efe25",
".git/objects/b6/623ed576de2ca134fb136089a858a75abfdd0a": "62d81888da346f5f978498d44b64a858",
".git/objects/d5/1cb952f3622397b97c6cffc7a839a30f3ffaef": "0780d6d564df8ffef7a18df383127d22",
".git/objects/d5/1656f633165af059bd9cd41f1ef915568f30c5": "0fde99aff3e3465f36422596e0ef388d",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/6fe96b91cbb76144d6b17bc2cb9ade70c1f190": "65f6d09f2a1d89820e4542398963be68",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6ac1d2c7f2d08d82f22e581de5f2871fabc12a": "b1fa267a48300bcd4186b119f4621d0f",
".git/objects/a8/6009cb2f0a40ad28ce19173295f5d5942ce2b2": "49c06c066760cf173a289b64566978f7",
".git/objects/de/c5de1320c6e612c839fe1e897a77904e86db38": "1a2712f0c77567f2c4551dcc610087a8",
".git/objects/b0/9faae8f72eb4dd9e0f9c844ecb11e8fa5ed889": "e89bb41064636103843b453d3c787c56",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5e3bea3fcf23a73a1fd71033547b7e599cc011": "b3f0e7f4fec6a6160dce94ca86ef61a1",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/a1/45261c0ae4baceeb4ba8e1a54a6583cc32f9f9": "af643c202973d38c14c71225fc5163b6",
".git/objects/a1/6ba5434b0ebf556ebaed2024883062f5e586bc": "94190a2da3ffdb548c2cdcb50f6da222",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/414e3ed21006b141ae805f5757c40f58970d45": "0b9a36fd9fcce02fffc01a0133fa42ed",
".git/objects/c3/25b04f715e7f8527be62ac9439ff0fed899631": "b63697ce5cd3acdb9e0fd70f8c8416c6",
".git/objects/e1/f27cb00fc663f621e0216f6f42b8549b112b54": "7ec8791674da8c3d25f4e70c47240e07",
".git/objects/cc/a51d95b6618459e95178f739c6238c5f0c587d": "36ac023d018be9e943afcab35b8d81e4",
".git/objects/cc/da914aa522a8926f75e7284c084a284a9b5b61": "3fff0073980435d9ed62a8d9d8c82a09",
".git/objects/e6/2ad0f00635bb37369fd4d461238279e28642d3": "116af2c44e469dbd6b572de389090491",
".git/objects/ff/61a4d449a469837f22db08145084574e2f3fd8": "04f1e2b3be0615da5cd8946f01de38f5",
".git/objects/f6/96e109a05fc16ad20e2b91c69c6a8752c02f67": "5065b7f355951ce3f33fb94bf95f2091",
".git/objects/f6/bf348f15ac399d2f16f24b9b50ffb27c631865": "92a5e8e953f1903b6132e17a72db77cb",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/e03cdcaaddc6b1a33418e7ce0a334094d3769a": "8c650222c1c61427d5568b3b3f2d01d7",
".git/objects/f8/a97fcd692ef00494afdc41fd529fc4664d1ec0": "fd70b45a2df9c4ccc8da6649232dc0c1",
".git/objects/ce/c93070c15cc1cfbdc56503500512b038657007": "864785dc15edbecf1219e5300ee27641",
".git/objects/e0/414609530cc72cbc9cf43a9610bbec887fb914": "ea4c204adc03c4f91ace0b3eeace1a0c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ec7d6eebf09c7e382b0dacdaea86deed4ebf36": "2069742f3809e89099afadede93938c2",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/7b67159081c84eb9dae70d42521004c6c2b245": "697c33d51aa10225ccf4087a0ccd35b2",
".git/objects/41/0492c7df84025b18ce185b442ccb1e33105cd1": "7403024d2c7f83da931acb636a6a7842",
".git/objects/41/b94a6ff55ba9086a43f90417cafd8207d4f5a1": "83601f45add269448647bca497800ab2",
".git/objects/41/a55b74a5078fc49eeb007e191c1f699a5b857a": "691bd27fc9c1e0c1d97b85e33bc2096d",
".git/objects/83/4a8ad0cd54701f17a064ccbbfe725372a99b13": "929e8298e18d51d1d070bcdeaf15b365",
".git/objects/77/8761056322c428a569ec46997e8a6105bc6ca7": "5e98e47684527342892590a3795f72a1",
".git/objects/48/bc6f6eec041657bb854123672f63c031b07b50": "e53485f7e9dd8edd61370c7cf3e7018d",
".git/objects/48/c3edde6d282749761e050a745cbda9ac255f01": "b27512156e226fa8530e21f8dcc0bd4b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/1e/74bcf38216aaf98b7131cf55e95b2e82b493fe": "31ed66de0ba646a407d30c8a470e6066",
".git/objects/1e/d9e290f7e603e3799fbc61ba5d0864dc255189": "75f5f921f9056d57cb043e89ab7bfd7e",
".git/objects/1e/7cc27310dd42ecd8955e2e77a474528558110c": "e1edf7600399e3eed5e656b08afc1134",
".git/objects/4a/3574f8f3d4be7bd505bbc344482efcd5c0a080": "4add37ad83bf32a433974104737bd23d",
".git/objects/24/62d51cd313479af082a12c121bacb9ffdb860a": "164f36bb1ce4c7aebbabbfb18f84d2b2",
".git/objects/4f/0e3ae9d3196b6d61cd4ba1bb8448192d394b39": "58f26e8a79742911ce0d1cd45c0c827b",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8d/14dbf424310062313c78053a2d0ec6c6050758": "d05a603882bed9ad6cad805b5b2da07a",
".git/objects/15/0f721086c1c2eb12b218dfdaf02b07f3c7566e": "9ed0a011d60f0a129e7c29cab7a4c03c",
".git/objects/12/47162fc60cc371e00bab76df28877f61428c4e": "2ea7a78d3a3466eb5892a072af08c08d",
".git/objects/8c/12774e9504ec536059aa24d907a447cd294d73": "dd68de003866073914ae97d6f8d0b2fa",
".git/objects/8c/6ddb14864e2adcaad17f98239023c2ea5eba30": "2400bca5a9dbe1a4f144afa1e73dcf76",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/f4bc59bcca7e2fd47a37db20c9a8d1fae16f6f": "0d8f94fe0166cfe3a316b653bf59dd80",
".git/objects/1d/d88b1dae8b76e94e21e8850d728a7bf0d5bcaf": "623bc8be4b12123e8ea6e8bc98e6138e",
".git/objects/71/057dcef6935b61176e6fb48e02ef429d5c72df": "88732eaccdb25a870d4ce0fc689d8a75",
".git/objects/1c/8d451500f18b2a17751146dd8c2fc7f21a1f55": "2304b085215049332ec934af47143121",
".git/objects/49/e007ead8f7f2bc3683b8463c31aa6745bab7d1": "41caa2a1707b581788dfa521e53ce834",
".git/objects/40/288d04df6222f65e797c84cc9df3b799fd744b": "57c2b78ca2a2e97be680c32ca07116e7",
".git/objects/78/57b83311da8215a58dbee36e83fc599c497751": "25744f991627bbfeab849fcf2fd358f6",
".git/objects/8b/ad644e63e7319fc8a7f24d0c46857b561fe914": "3b96dd7bb5c0e8eb4c2592e0841b8df2",
".git/objects/7a/4ba8b51c0382ca9cf457589dcc195fc2627d27": "ab5488a2972f2b70880899445f93dc07",
".git/objects/7a/f1a28fda8923661c9c0f7824f587079bc9a8ba": "550b42823b2942ce28c3c96899e1cd65",
".git/objects/14/c692fa6d53c28c57cf93ef855d89e694813d13": "8ff335f1e94a5af8a37e5a3566ff3409",
".git/objects/14/11a96696d73d6696077cfad802895410254068": "4a22c7ceae3c308a44fb420a20017f5d",
".git/objects/22/2f3eeb30b955b3f6676a4cfd337d9f1bdfd8c8": "1322cc18d90822046b4ddc0fddf3764f",
".git/objects/22/a35d7e2c592ef43ea2180d9c3092eab8578389": "d06f09b89006c83a5c1536d2a03c18bb",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e97325d5cc970f4f4b2b03cd1664b1fa",
".git/logs/refs/heads/main": "cde4872eb08d6c90712e34e6bd18321d",
".git/logs/refs/remotes/origin/main": "c7f09b8758e1661be003f4117a1807f8",
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
".git/refs/heads/main": "9fca392b4b6926d8df404e14bed6eeb5",
".git/refs/remotes/origin/main": "9fca392b4b6926d8df404e14bed6eeb5",
".git/index": "f732ac36d431e52b627ad97e84b83323",
".git/COMMIT_EDITMSG": "dec8280ee1e63cc163c0ca08cdb4b973",
"assets/AssetManifest.json": "17980c0af5faa798bb3e711a5a0a3501",
"assets/NOTICES": "2e7d518389e7981b66b6cf6c26af8a26",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a9e915e9a3a5b8236d1033351553dc1a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "82a4cd9321edaefaba85d80b80de02d5",
"assets/fonts/MaterialIcons-Regular.otf": "3ccdecdf8f6311040a2fdb06abfa0e6a",
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
"assets/assets/images/screenshots/unani_quiz_app/quiz_screen.jpg": "09db2de0b5e284106d7237f9ea503058",
"assets/assets/images/screenshots/unani_quiz_app/profile_screen.jpg": "29249539936f3963415d3c50a2aa69ee",
"assets/assets/images/screenshots/unani_quiz_app/register_screen.jpg": "40ce6d96913489873c705242f70a0560",
"assets/assets/images/screenshots/unani_quiz_app/leaderboard_screen.jpg": "718b0c60edc7c39b859e59ce4746a9e4",
"assets/assets/images/screenshots/unani_quiz_app/home_screen.jpg": "2b2a2b29b4cd72fd3cf4b4a38574da09",
"assets/assets/images/screenshots/unani_quiz_app/login_screen.jpg": "4b8b91a8a79b8048c68cc26b71bb2c3a",
"assets/assets/images/screenshots/unani_quiz_app/select_mode.jpg": "198fc4045cf5395e427714f52217ef4c",
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
"assets/assets/images/x_logo.png": "3e7d48146c96fec3fd16e86028023173",
"assets/assets/images/insta_logo.png": "a5003131b742b9812c27d231bf3afd0a",
"assets/assets/images/facebook_logo.png": "e5d272e6bba0e3177f655e5da4aa6222",
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
"assets/assets/images/linkedin_logo.png": "838099001aa3f82ae29f5784826fa335",
"assets/assets/images/hfg_icon.png": "b7336d325175761b86ef16d38223e9bf",
"assets/assets/images/unani_icon.png": "4a51606fbf49eb7d3f21b6bd998a76a7",
"assets/assets/zaeem_kadri_resume.pdf": "34d731ed0728564754e6b6bd1f1f98c7",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
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
