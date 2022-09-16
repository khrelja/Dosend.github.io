<template>
<h1>DODAJ U KATEGORIJU</h1>

    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Naziv</span>
        <input v-model="naziv" type="naziv" class="form-control" placeholder="Upisi naziv hrane..."  aria-describedby="basic-addon1">
    </div>
    <select v-model="kategorije" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Kategorije hrane</option>
  <option value="1">Meso</option>
  <option value="2">Riba</option>
  <option value="3">Sirevi</option>
  <option value="3">Voce</option>
  <option value="3">Ugljikohidrati</option>
</select>

<div class="input-group">
  <span class="input-group-text">'Vise info'</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
<div class="mb-3">
  <v-label for="formFile" class="form-label">Izaberi sliku koju zelis da reprezentira tu hranu</v-label>
  <input class="form-control" type="file" id="formFile">
    <button @click="create" class="btn btn-warning rounded-0">Submit</button>

</div>      
            
            
            
            <div id="fooditems">
                <div id="riba">
                    <p id="category-name">Riba</p>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets//Slike/Riba/Brancin.jpg" alt="...">
                        <p id="item-name"><b>Brancin</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets//Slike/Riba/Skuša.jpg" alt="">
                        <p id="item-name"><b>Skuša</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>

                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets//Slike/Riba/Srdela.jpg" alt="">
                        <p id="item-name"><b>Srdela</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>

                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets//Slike/Riba/Haringa.jpg" alt="">
                        <p id="item-name"><b>Harringa</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>

                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets//Slike/Riba/orada.jpg" alt="">
                        <p id="item-name"><b>Orada</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>

                </div>

                <div id="meso">
                    <p id="category-name">Meso</p>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Meso/Beef.png" alt="">
                        <p id="item-name"><b>Kravlje meso</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Meso/Chicken.jpg" alt="">
                        <p id="item-name"><b>Piletina</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Meso/Lamb.jpg" alt="">
                        <p id="item-name"><b>Janjetina</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Meso/Pork.jpg" alt="">
                        <p id="item-name"><b>Svinjetina</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Meso/Turkey.png" alt="">
                        <p id="item-name"><b>Purece meso</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                </div>

                <div id="voce">
                    <p id="category-name">Voce</p>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Fruit/Apple.jpg" alt="">
                        <p id="item-name"><b>Jabuka</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Fruit/bananas.jpg" alt="">
                        <p id="item-name"><b>Banane</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Fruit/Cherry.jpg" alt="">
                        <p id="item-name"><b>Tresnja</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Fruit/Peach.jpg" alt="">
                        <p id="item-name"><b>Breskva</b></p>
                       <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Fruit/Pear.jpg" alt="">
                        <p id="item-name"><b>Kruska</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>

                </div>

                <div id="sirevi">
                    <p id="category-name">Sir</p>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets//Slike/Sirevi/Cheddar.jpg" alt="">
                        <p id="item-name"><b>Cheddar</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Sirevi/Gorgonzola.jpg" alt="">
                        <p id="item-name"><b>Gorgonzola</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Sirevi/Gouda.jpg" alt="">
                        <p id="item-name"><b>Gauda</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Sirevi/Mozarella.jpg" alt="">
                        <p id="item-name"><b>Mozarella</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Sirevi/Swiss.jpg" alt="">
                        <p id="item-name"><b>Svicarski sir</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>



                </div>

                <div id="ugljikohidrati">
                    <p id="category-name">Ugljikohidrati</p>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Carbohydrates/Bijeli_Kruh.jpg" alt="">
                        <p id="item-name"><b>Bijeli kruh</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Carbohydrates/Kukuruzni_Kruh.jpg" alt="">
                        <p id="item-name"><b>Kukuruzni kruh</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Carbohydrates/Pasta.jpg" alt="">
                        <p id="item-name"><b>Tjestenina</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Carbohydrates/Tamni_Kruh.jpg" alt="">
                        <p id="item-name"><b>Tamni kruh</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    </div>
                    <div id="item-card">
                        <div id="card-top">
                            <i class="fa fa-star" id="rating">$. 3</i>
                            <i class="fa fa-heart-o.add-to-cart"></i>
                        </div>

                        <img src="@/assets/Slike/Carbohydrates/Whole_Wheat_Pasta.jpg" alt="">
                        <p id="item-name"><b>Tjestenina od punog zrna pscenice</b></p>
                        <div class="item-info"><router-link :to="{ path: 'InfoView' }"><button>
                                    Vise
                                    info</button></router-link></div>
                    
                </div>
                </div>
           <!-- {{store.searchTerm}}-->
            </div>
            <br>
</template>

<script> /*
import store from "@/store"

export default{
    name:'items',
    data: function() {
        return{
        store,
        };
    },

    computed:{
        filteredfooditems(){
            //logika koja filtrira items
            let termin = this.store.searchTerm;
            console.log(termin);
            return fooditems;
        }
    }

   



    create() {
        const post ={
            photo.this.img,
        }
        firebase.database().ref('').push(post)
        .then((response) => {
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        })
    }

 },

}
*/
</script>

<style scoped>
.container {
    display: grid;
    /* 250 za prvi container, 1fr za sredinu, 300px za cart 
    fr - skracenica za fraction, fraction dostupnog mjesta u grid containeru
    */
    grid-template-columns: 210px 1fr 300px;
    height: 100%;
    overflow: hidden;
}


/*container stupac u kojemu su kategorije slike ... sredina uglavnom*/
#food-container {
    background: whitesmoke;
    /*overflow scroll, zbog velicine dopuste scrollanje za laksu preglednost*/
    overflow: scroll;
    /*clipa content tako da nije potrebno scrollanje vec stane*/
    overflow-x: hidden;
    /*daje defaultno box sizing ponasanje, dopusta ukljucenost paddinga i bordera u elementnu sirinu i visinu*/
    box-sizing: content-box;
}



#riba,
#meso,
#voce,
#sirevi,
#ugljikohidrati {
    margin-top: 50px;
}

/*'card' koji sadrzi rating, ime i vise info opciju*/
#riba #item-card,
#ugljikohidrati #item-card,
#sirevi #item-card {
    background: rgb(242, 208, 208);
}

/*ista stvar^^*/
#voce #item-card,
#meso #item-card {
    background: rgb(242, 208, 208);
}


#category-name,
.item-menu {
    margin: 10px;
    font-size: 30px;
    color: black;
}

/*velicina i sve ostalo za card*/
#item-card {
    width: 230px;
    height: 270px;
    padding: 10px;
    /*space oko elementovog bordera dok je padding space izmedu elemntovog bordera i njegovog contenta*/
    margin: 10px;
    /*display inlince block omogucuje odredivanja visine i sirine elementa*/
    display: inline-block;
    border-radius: 15px;
    background: rgb(245, 237, 225);
    transition: 0.5s all ease-in-out;
}

/*slika u cardu*/
#item-card img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
}


button {
    background-color: rgb(224, 168, 168);
    color: whitesmoke;
    border: none;
    height: 30px;
    width: 210px;
    margin-top: -10px;
}

button:hover {
    background-color: rgb(227, 127, 127);
    transition: 0.3s;
}

</style>