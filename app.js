// class odam {
//     constructor(ism, yosh) {
//         this.ism = ism;
//         this.yosh = yosh;
//     }

//     salomBer() {
//         console.log(`Salom, mening ismim ${this.ism} va yoshim ${this.yosh}.`);
//     }
// }

// let odam1 = new odam("Akmal", 25);
// odam1.salomBer(); 

// class odam {
//     constructor(ism, yosh) {
//         this._ism = ism;
//         this.yosh = yosh;
//     }

//     salomBer() {
//         console.log(`Salom, mening ismim ${this._ism} va yoshim ${this.yosh}.`);
//     }

//     ismniol() {
//         return this._ism;
//     }

//     ismniozgartir(yangiIsm) {
//         this._ism = yangiIsm;
//     }
// }

// let odam1 = new odam("Akmal", 25);
// console.log(odam1.ismniol()); 
// odam1.ismniozgartir("Jasur");
// odam1.salomBer(); 


// class Hisob {
//     #balans = 0;

//     hisobnitoldir(miqdor) {
//         this.#balans += miqdor;
//     }

//     hisobniol() {
//         return this.#balans;
//     }
// }

// let hisob1 = new Hisob();
// hisob1.hisobnitoldir(100);
// console.log(hisob1.hisobniol()); // Natija: 100
// hisob1.hisobnitoldir(50);
// console.log(hisob1.hisobniol()); // Natija: 150


// class Hayvon {
//     constructor(ism, ovoz) {
//         this.ism = ism;
//         this.ovoz = ovoz;
//     }

//     ovozBer() {
//         console.log(this.ovoz);
//     }
// }

// class It extends Hayvon {
//     constructor(ism) {
//         super(ism, "Vov!");
//     }
// }

// class Mushuk extends Hayvon {
//     constructor(ism) {
//         super(ism, "Miyov!");
//     }
// }

// let it1 = new It("Rex");
// let mushuk1 = new Mushuk("Mila");

// it1.ovozBer();      
// mushuk1.ovozBer(); 
