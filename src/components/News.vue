<template>
  <v-content>
    <v-flex d-flex>
      <v-layout wrap>
        <v-card v-for="(item, index) in info.articles" :key="item" class="mx-auto my-12 pa-2" max-width="374">
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
          </template>
          <v-img v-bind:src="item.urlToImage"></v-img>
          <v-card-title> {{ item.title }}</v-card-title>
          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
            </v-row>
            <br>
            <div> {{ item.description }}</div>
            <div> {{ item.author }}</div>
          </v-card-text>
          <v-card-text>
            <a class="posi" v-bind:href="item.url" target="_blank">
              <v-btn
                  color="deep-purple lighten-2"
                  text
                  absolute
                  bottom
                  right
              >
                Zobacz
              </v-btn>
            </a>
            <v-btn style="z-index: 2" @click="addToFavourite(index)"
                   depressed
                   elevation="2"
                   color="primary"
                   rounded
                   absolute
                   bottom
                   left


            > <v-icon dark>mdi-heart</v-icon>
            </v-btn>
          </v-card-text>


        </v-card>
      </v-layout>
    </v-flex>

  </v-content>
</template>

<script>
//import axios from 'axios';
//import '../assets/css/głowna-zalogowane.css';
import db from '../components/FirebaseInit';
export default {
  name: 'News',
  data() {
    return {
      info: null,
      titles: [],
      descriptions: [],
      authors: [],
      sourceUrls: [],
      imageUrls: [],
    };
  },
  created() {
    var infoTitles = [];
    var infoDescriptions = [];
    var infoAuthors = [];
    var infoUrls = [];
    var infoImageUrl = [];
    const url = 'https://newsapi.org/v2/top-headlines?country=pl' +
        '&apiKey=15df16e7b6ef4578afc917f47115ab6f';
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.info = data;
          for (const val of data.articles) {
            infoTitles.push(val.title);
            infoDescriptions.push(val.description);
            infoAuthors.push(val.author);
            infoUrls.push(val.url);
            infoImageUrl.push(val.urlToImage);
          }
          this.titles = infoTitles;
          this.descriptions = infoDescriptions;
          this.authors = infoAuthors;
          this.sourceUrls = infoUrls;
          this.imageUrls = infoImageUrl;
        });
    //axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=15df16e7b6ef4578afc917f47115ab6f')
    //    .then(response => this.info = response.data)
    //    .catch(error => {
    //      this.errorMessage("There was en error!", error);
    //    });
  },
  methods:{
    addToFavourite(i){
      db.collection('Favourites').add({
        id:(Math.floor(Math.random() * 1000000) + 1),
        title: this.titles[i],
        description: this.descriptions[i],
        author: this.authors[i],
        url:this.sourceUrls[i],
        urlToImg:this.imageUrls[i],
      })
          .then(docRef =>{
            console.log("Document written with ID: ", docRef.id);
            alert("dodano do ulubionych");
          }).catch((error) => {
        console.log("Error: ", error);
        alert("error");
      });
    }
  }
};
</script>
