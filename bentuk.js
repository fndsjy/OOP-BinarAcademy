// Abstract Class
class bentuk{
    constructor(nama, warna){
        if(this.constructor === bentuk){
            throw new Error("Cannot instantiate from Abstract Class");
        }
        this.nama = nama;
        this.warna = warna;
    }

    // Encapsulation Protected
    _draw(){
        console.log("\n===================================");
        console.log("     B A N G U N   D A T A R");
        console.log("===================================");
        console.log(`  Bentuk   :  ${this.nama}`);
        console.log(`  Warna    :  ${this.warna}`);
    }
}

// Inheritance
class lingkaran extends bentuk{
    constructor(nama, radius, warna){
        super(nama, warna);
        this.radius = radius;
    }

    // Encapsulation Private
    #keliling = () => {
        try {
            if(this.radius !== parseInt(this.radius)){
                throw("  WARNING! RADIUS BUKAN NUMBER");
            }
            else{
                const res_keliling_lingkaran = (2 * (22/7) * this.radius);
                if(this.radius % 7 === 0){
                    console.log("  Keliling : ", res_keliling_lingkaran);
                }
                else{
                    console.log("  Keliling : ", res_keliling_lingkaran.toFixed(3));
                }
            }   
        } catch (err) {
            console.error(err);
        }
    }

    #luas = () => {
        try{
            if(this.radius !== parseInt(this.radius)){
                throw("  WARNING! RADIUS BUKAN NUMBER");
            }
            else{
                const res_luas_lingkaran = ((22/7) * this.radius ** 2);
                if(this.radius % 7 === 0){
                    console.log("  Luas\t   : ", res_luas_lingkaran, "\n");
                }
                else{
                    console.log("  Luas\t   : ", res_luas_lingkaran.toFixed(3), "\n");
                }
            }
        } catch(err){
            console.log(err);
        }
    }
    
    // Encapsulation Public
    draw(){
        super._draw();
        this.#keliling();
        this.#luas();
    }    
}

class persegi extends bentuk{
    constructor(nama, warna){
        super(nama, warna);
    }

    // Overloading
    #keliling = (sisi_persegi) => {
        try{
            if(sisi_persegi !== parseInt(sisi_persegi)){
                throw("  WARNING! SISI PERSEGI BUKAN NUMBER");
            }
            else{
                console.log("  Keliling : ", 4 * sisi_persegi);
            }
        } catch(err){
            console.error(err);
        }
    }
    
    #luas = (sisi_persegi) => {
        try{
            if(sisi_persegi !== parseInt(sisi_persegi)){
                throw("  WARNING! SISI PERSEGI BUKAN NUMBER");
            }
            else{
                console.log("  Luas\t   : ", sisi_persegi ** 2);
            }
        } catch(err){
            console.error(err);
        }
    }

    draw(sisi_persegi){
        super._draw();
        this.#keliling(sisi_persegi);
        this.#luas(sisi_persegi);
    }
}

class persegi_panjang extends bentuk{
    constructor(nama, panjang_lebar, warna){
        super(nama, warna);
        this.panjang_lebar = panjang_lebar;
    }

    // Overriding
    #keliling = () => {
        try{
            if((this.panjang_lebar["Panjang"] !== parseInt(this.panjang_lebar["Panjang"])) && (this.panjang_lebar["Lebar"] !== parseInt(this.panjang_lebar["Lebar"]))){
                throw("  WARNING! PANJANG LEBAR BUKAN NUMBER");
            }
            else if((this.panjang_lebar["Panjang"] !== parseInt(this.panjang_lebar["Panjang"]))){
                throw("  WARNING! PANJANG BUKAN NUMBER");
            }
            else if((this.panjang_lebar["Lebar"] !== parseInt(this.panjang_lebar["Lebar"]))){
                throw("  WARNING! LEBAR BUKAN NUMBER");
            }
            else{
                console.log("  Keliling : ", 2 * (this.panjang_lebar["Panjang"] + this.panjang_lebar["Lebar"]));
            }
        } catch(err){
            console.error(err);
        }
    }

    #luas = () => {
        try{
            if((this.panjang_lebar["Panjang"] !== parseInt(this.panjang_lebar["Panjang"])) && (this.panjang_lebar["Lebar"] !== parseInt(this.panjang_lebar["Lebar"]))){
                throw("  WARNING! PANJANG LEBAR BUKAN NUMBER");
            }
            else if((this.panjang_lebar["Panjang"] !== parseInt(this.panjang_lebar["Panjang"]))){
                throw("  WARNING! PANJANG BUKAN NUMBER");
            }
            else if((this.panjang_lebar["Lebar"] !== parseInt(this.panjang_lebar["Lebar"]))){
                throw("  WARNING! LEBAR BUKAN NUMBER");
            }
            else{
                console.log("  Luas\t   : ", (this.panjang_lebar["Panjang"] * this.panjang_lebar["Lebar"]));
            }
        } catch(err){
            console.error(err);
        }
    }

    draw(){
        super._draw();
        this.#keliling();
        this.#luas();
    }
}

const segitiga = Base => class extends Base{
    _luas(){
        if(this.nama === "Segitiga Sama Kaki"){
            try{
                if((this.sisi_sama_kaki["Tinggi"] !== parseInt(this.sisi_sama_kaki["Tinggi"])) && (this.sisi_sama_kaki["Alas"] !== parseInt(this.sisi_sama_kaki["Alas"]))){
                    throw("  WARNING! TINGGI ALAS BUKAN NUMBER");
                }
                else if((this.sisi_sama_kaki["Tinggi"] !== parseInt(this.sisi_sama_kaki["Tinggi"]))){
                    throw("  WARNING! TINGGI BUKAN NUMBER");
                }
                else if((this.sisi_sama_kaki["Alas"] !== parseInt(this.sisi_sama_kaki["Alas"]))){
                    throw("  WARNING! ALAS BUKAN NUMBER");
                }
                else{
                    const luas = 0.5 * this.sisi_sama_kaki["Alas"] * this.sisi_sama_kaki["Tinggi"];
                    console.log("  Luas\t   : ", luas);
                }
            } catch(err){
                console.error(err);
            }
        }
        else if(this.nama === "Segitiga Sama Sisi"){
            try{
                if((this.sisi_sama_sisi["Tinggi"] !== parseInt(this.sisi_sama_sisi["Tinggi"])) && (this.sisi_sama_sisi["Alas"] !== parseInt(this.sisi_sama_sisi["Alas"]))){
                    throw("  WARNING! TINGGI ALAS BUKAN NUMBER");
                }
                else if((this.sisi_sama_sisi["Tinggi"] !== parseInt(this.sisi_sama_sisi["Tinggi"]))){
                    throw("  WARNING! TINGGI BUKAN NUMBER");
                }
                else if((this.sisi_sama_sisi["Alas"] !== parseInt(this.sisi_sama_sisi["Alas"]))){
                    throw("  WARNING! ALAS BUKAN NUMBER");
                }
                else{
                    const luas = 0.5 * this.sisi_sama_sisi["Alas"] * this.sisi_sama_sisi["Tinggi"];
                    console.log("  Luas\t   : ", luas);
                }
            } catch(err){
                console.error(err);
            }
        }
        else if(this.nama === "Segitiga Siku Siku"){
            try{
                if((this.sisi_siku_siku["Alas"] !== parseInt(this.sisi_siku_siku["Alas"])) && (this.sisi_siku_siku["Tinggi"] !== parseInt(this.sisi_siku_siku["Tinggi"]))){
                    throw("  WARNING! ALAS TINGGI BUKAN NUMBER");
                }
                else if((this.sisi_siku_siku["Alas"] !== parseInt(this.sisi_siku_siku["Alas"]))){
                    throw("  WARNING! ALAS BUKAN NUMBER");
                }
                else if((this.sisi_siku_siku["Tinggi"] !== parseInt(this.sisi_siku_siku["Tinggi"]))){
                    throw("  WARNING! TINGGI BUKAN NUMBER");
                }
                else{
                    const luas = 0.5 * this.sisi_siku_siku["Alas"] * this.sisi_siku_siku["Tinggi"];
                    console.log("  Luas\t   : ", luas);
                }
            } catch(err){
                console.error(err);
            }
        }
    }
}

class segitiga_sama_kaki extends segitiga(bentuk){
    constructor(nama, sisi_sama_kaki, warna){
      super(nama, warna);
      this.sisi_sama_kaki = sisi_sama_kaki;
    }

    #keliling = () => {
        try{
            if((this.sisi_sama_kaki["Kaki"] !== parseInt(this.sisi_sama_kaki["Kaki"])) && (this.sisi_sama_kaki["Alas"] !== parseInt(this.sisi_sama_kaki["Alas"]))){
                throw("  WARNING! KAKI ALAS BUKAN NUMBER");
            }
            else if((this.sisi_sama_kaki["Kaki"] !== parseInt(this.sisi_sama_kaki["Kaki"]))){
                throw("  WARNING! KAKI BUKAN NUMBER");
            }
            else if((this.sisi_sama_kaki["Alas"] !== parseInt(this.sisi_sama_kaki["Alas"]))){
                throw("  WARNING! ALAS BUKAN NUMBER");
            }
            else{
                const keliling = this.sisi_sama_kaki["Kaki"] * 2 + this.sisi_sama_kaki["Alas"];
                console.log("  Keliling : ", keliling);
            }
        } catch(err){
            console.error(err);
        }
    }

    // Polymorphism
    draw(){
        super._draw(); // From Bentuk Class
        this.#keliling(); // From segitiga_sama_kaki Class
        super._luas(); // From Segitiga Class
    }  
}

class segitiga_sama_sisi extends segitiga(bentuk) {
    constructor(nama, sisi_sama_sisi, warna) {
        super(nama, warna);
        this.sisi_sama_sisi = sisi_sama_sisi;
    }

    #keliling = () => {
        try{
            if((this.sisi_sama_sisi["Sisi"] !== parseInt(this.sisi_sama_sisi["Sisi"]))){
                throw("  WARNING! SISI BUKAN NUMBER");
            }
            else{
                console.log("  Keliling : ", 3 * this.sisi_sama_sisi["Sisi"]);
            }
        } catch(err){
            console.error(err);
        }
    }

    draw(){
        super._draw();
        this.#keliling();
        super._luas();
    }
}

class segitiga_siku_siku extends segitiga(bentuk) {
    constructor(nama, sisi_siku_siku, warna) {
        super(nama, warna);
        this.sisi_siku_siku = sisi_siku_siku;
    }

    #keliling = () => {
        try{
            if((this.sisi_siku_siku["Alas"] !== parseInt(this.sisi_siku_siku["Alas"])) && (this.sisi_siku_siku["Tinggi"] !== parseInt(this.sisi_siku_siku["Tinggi"])) && (this.sisi_siku_siku["Sisi_Miring"] !== parseInt(this.sisi_siku_siku["Sisi_Miring"]))){
                throw("  WARNING! ALAS, TINGGI, SISI MIRING BUKAN NUMBER");
            }
            else if((this.sisi_siku_siku["Alas"] !== parseInt(this.sisi_siku_siku["Alas"]))){
                throw("  WARNING! ALAS BUKAN NUMBER");
            }
            else if((this.sisi_siku_siku["Tinggi"] !== parseInt(this.sisi_siku_siku["Tinggi"]))){
                throw("  WARNING! TINGGI BUKAN NUMBER");
            }
            else if((this.sisi_siku_siku["Sisi_Miring"] !== parseInt(this.sisi_siku_siku["Sisi_Miring"]))){
                throw("  WARNING! SISI MIRING BUKAN NUMBER");
            }
            else{
                const keliling = this.sisi_siku_siku["Alas"] + this.sisi_siku_siku["Tinggi"]  + this.sisi_siku_siku["Sisi_Miring"];
                console.log("  Keliling : ", keliling);
            }
        } catch(err){
            console.error(err);
        }
    }

    draw(){
        super._draw();
        this.#keliling();
        super._luas();
    }
}

//const shapes = new bentuk("Bentuk", "Hitam");

const circle = new lingkaran("Lingkaran", 42, "Putih");
circle.draw();

const square = new persegi("Persegi", "Biru");
square.draw(12);

const rectangular = new persegi_panjang("Persegi Panjang", {Panjang: 12, Lebar: 9}, "Hijau");
rectangular.draw();

const isoceles_triangle = new segitiga_sama_kaki("Segitiga Sama Kaki", { Tinggi: 3, Alas: 4, Kaki: 2}, "Merah");
isoceles_triangle.draw();

const equilateral_triangle = new segitiga_sama_sisi("Segitiga Sama Sisi", {Tinggi: 7, Alas: 10,  Sisi: 6}, "Jingga");
equilateral_triangle.draw();

const right_triangle = new segitiga_siku_siku("Segitiga Siku Siku", {Tinggi: 4, Alas: 3, Sisi_Miring: 5}, "Kuning");
right_triangle.draw();