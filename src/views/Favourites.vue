<template>
  <v-content>
    <v-flex d-flex>
      <v-layout wrap>
        <v-card v-for="(fav, index) in fav" v-bind:key="fav.id" class="mx-auto my-12 pa-2" max-width="374">
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
          </template>
          <v-img v-bind:src="fav.urlToImg"></v-img>
          <v-card-title> {{ fav.title }}</v-card-title>
          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
            </v-row>
            <br>
            <div> {{ fav.description }}</div>
            <div> {{ fav.author }}</div>
          </v-card-text>
          <v-card-text>
            <a v-bind:href="fav.url" target="_blank">
              <v-btn
                  color="deep-purple lighten-2"
                  text
                  absolute
                  bottom
                  left
              >
                Zobacz
              </v-btn>
            </a>
            <v-btn @click="deleteFromDB(index)"
                   depressed
                   elevation="2"

                   icon
                   raised
                   rounded
                   absolute
                   bottom
                   right
            ><v-icon>mdi-delete</v-icon></v-btn>
          </v-card-text>


        </v-card>
      </v-layout>
    </v-flex>

  </v-content>
</template>

<script>
import db from '../components/FirebaseInit';
export default {
  name: 'Favourites',
  data() {
    return {
      fav:[],
    }
  },
  created() {
    db.collection('Favourites').get().then(querySnapshot =>{
      querySnapshot.forEach(doc =>{
        const data = {
          'id':doc.data().id,
          'title':doc.data().title,
          'description':doc.data().description,
          'urlToImg':doc.data().urlToImg,
          'url':doc.data().url,
        }
        this.fav.push(data)
      })
    })
  },
  methods:{
    deleteFromDB(i){
      if(confirm('Are you sure?')){
        //db.collection('Favourites').where('id','==',this.fav[i].id).delete();
        var ref = db.collection('Favourites').where('id','==',this.fav[i].id);
        ref.get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            doc.ref.delete();
          });
        });
      }
    }
  }
};
</script>

<style scoped>
</style>
