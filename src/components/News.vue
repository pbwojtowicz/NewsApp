<template>
  <div class="root d-flex">

    <p>Component News</p>
    <!-- TRZY PIERWSZE  ARTYKUŁY NA SZTYWNO W KARUZELI-->
    <section class="u-clearfix u-white u-section-1" id="sec-c603">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div id="carousel-963b" data-interval="2500" data-u-ride="carousel" class="u-carousel u-carousel-duration-250 u-expanded-width u-slider u-slider-1">
          <ol class="u-absolute-hcenter u-carousel-indicators u-hidden u-carousel-indicators-1">
            <li data-u-target="#carousel-963b" class="u-active u-grey-30 u-shape-circle" data-u-slide-to="0" style="height: 10px; width: 10px;"></li>
            <li data-u-target="#carousel-963b" class="u-grey-30 u-shape-circle" data-u-slide-to="1" style="height: 10px; width: 10px;"></li>
            <li data-u-target="#carousel-963b" class="u-grey-30 u-shape-circle" data-u-slide-to="2" style="height: 10px; width: 10px;"></li>
          </ol>
          <div class="u-carousel-inner" role="listbox" style="">
            <div class="u-active u-carousel-item u-container-style u-slide">

              <div class="u-container-layout u-container-layout-1">

                <div >
                  <a v-bind:href="info.articles[0].url" target="_blank">
                    <img v-bind:src="info.articles[0].urlToImage" alt="image"  class="u-image u-image-default u-image-1" data-image-width="1200" data-image-height="800" data-animation-name="pulse" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="">

                  </a>
                </div>

                <div class="u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-palette-3-base u-group-1">
                  <div class="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-valign-top-xs u-container-layout-2">
                    <h2 class="u-custom-font u-font-oswald u-text u-text-1">
                      <a class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-1" v-bind:href="info.articles[0].url" target="_blank" data-page-id="592809014">{{info.articles[0].title}}</a>
                    </h2>
                    <p class="u-text u-text-2">{{info.articles[0].description}}</p>
                    <a v-bind:href="info.articles[0].url" target="_blank" class="u-align-center-xs u-btn u-button-style u-white u-btn-2">czytaj więcej</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="u-carousel-item u-container-style u-expanded-width u-slide u-white u-carousel-item-2">
              <div class="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-xl u-container-layout-3">
                <a v-bind:href="info.articles[1].url" target="_blank">
                  <img v-bind:src="info.articles[1].urlToImage" alt="image" class="u-image u-image-default u-image-2" data-image-width="800" data-image-height="800">
                </a>
                  <div class="u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-palette-3-base u-group-2">
                  <div class="u-container-layout u-container-layout-4">
                    <h2 class="u-custom-font u-font-oswald u-text u-text-3">
                      <a class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-3" v-bind:href="info.articles[1].url" data-page-id="84708366">{{info.articles[1].title}}</a>
                    </h2>
                    <p class="u-text u-text-4"> {{info.articles[1].description}}<br>
                    </p>
                    <a v-bind:href="info.articles[1].url" data-page-id="84708366" class="u-btn u-button-style u-white u-btn-4">czytaj więcej</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="u-carousel-item u-container-style u-slide">
              <div class="u-container-layout u-container-layout-5">
                <a v-bind:href="info.articles[2].url" target="_blank">
                  <img v-bind:src="info.articles[2].urlToImage"  alt="" class="u-image u-image-default u-image-3" data-image-width="1200" data-image-height="800" data-animation-name="pulse" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="">
                </a>
                <div class="u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-palette-3-base u-group-3">
                  <div class="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-valign-top-xs u-container-layout-6">
                    <h2 class="u-custom-font u-font-oswald u-text u-text-5">
                      <a class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-5" v-bind:href="info.articles[2].url" data-page-id="592809014">{{info.articles[2].title}}</a>
                    </h2>
                    <p class="u-text u-text-6">{{info.articles[2].description}}</p>
                    <a v-bind:href="info.articles[1].url" class="u-align-center-xs u-btn u-button-style u-white u-btn-6">czytaj więcej</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="u-carousel-control u-carousel-control-prev u-hover-palette-3-light-1 u-opacity u-opacity-70 u-palette-3-base u-spacing-19 u-text-body-color u-carousel-control-1" href="#carousel-963b" role="button" data-u-slide="prev">
            <span aria-hidden="true">
              <svg viewBox="0 0 256 256"><g><polygon points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128"></polygon>
</g></svg>
            </span>
            <span class="sr-only">
              <svg viewBox="0 0 256 256"><g><polygon points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128"></polygon>
</g></svg>
            </span>
          </a>
          <a class="u-carousel-control u-carousel-control-next u-hover-palette-3-light-1 u-opacity u-opacity-70 u-palette-3-base u-spacing-19 u-text-body-color u-carousel-control-2" href="#carousel-963b" role="button" data-u-slide="next">
            <span aria-hidden="true">
              <svg viewBox="0 0 306 306"><g id="chevron-right"><polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153"></polygon>
</g></svg>
            </span>
            <span class="sr-only">
              <svg viewBox="0 0 306 306"><g id="chevron-right"><polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153"></polygon>
</g></svg>
            </span>
          </a>
        </div>
      </div>
    </section>


     <!--ITERACJA ARTYKUŁÓW W DRUGIEJ SEKCJI-->
         <section class="u-clearfix u-white u-section-2" id="sec-2cb2">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-list u-list-1" v-for="item in info.articles" :key="item">

          <div class="u-repeater u-repeater-1" >
            <div class="u-container-style u-list-item u-repeater-item u-video-cover u-white">
              <div class="u-container-layout u-similar-container u-valign-top ">
                <h3 class="u-align-center u-text ">
                  <a class="u-active-none u-btn u-button-link u-button-style u-hover-none u-none u-text-black u-btn-1" v-bind:href="item.url" data-page-id="84708366">{{item.title}}</a>
                </h3>
                <div class="u-border-4 u-border-palette-3-base u-expanded-width u-line u-line-horizontal u-line-1"></div>
                <img v-bind:src="item.urlToImage" alt="image" class="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-image-1" data-image-width="1600" data-image-height="1063"  data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0">
                <p class="u-text u-text-2">{{item.description}}</p>
                <a v-bind:href="item.url" data-page-id="84708366" class="u-btn u-button-style u-palette-3-base u-btn-2">CZYTAJ więcej</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


<!-- TRZY KOLEJNE ARTYKUŁY NA SZTYWNO
    <section class="u-clearfix u-white u-section-2" id="sec-2cb2">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            <div class="u-container-style u-list-item u-repeater-item u-video-cover u-white">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                <h3 class="u-align-center u-text u-text-1">
                  <a class="u-active-none u-btn u-button-link u-button-style u-hover-none u-none u-text-black u-btn-1" v-bind:href="info.articles[3].url" data-page-id="84708366">{{info.articles[3].title}}</a>
                </h3>
                <div class="u-border-4 u-border-palette-3-base u-expanded-width u-line u-line-horizontal u-line-1"></div>
                <img alt="" class="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-image-1" data-image-width="1600" data-image-height="1063" v-bind:src="info.articles[3].urlToImage" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0">
                <p class="u-text u-text-2">{{info.articles[3].description}}</p>
                <a v-bind:href="info.articles[3].url" data-page-id="84708366" class="u-btn u-button-style u-palette-3-base u-btn-2">CZYTAJ więcej</a>
              </div>
            </div>
            <div class="u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-2">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-2">
                <h3 class="u-align-center u-text u-text-3">
                  <a class="u-active-none u-btn u-button-link u-button-style u-hover-none u-none u-text-black u-btn-1" v-bind:href="info.articles[4].url" data-page-id="84708366">{{info.articles[4].title}}</a>
                </h3>
                <div class="u-border-4 u-border-palette-3-base u-expanded-width u-line u-line-horizontal u-line-2"></div>
                <img alt="" class="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-image-2" data-image-width="501" data-image-height="626" v-bind:src="info.articles[4].urlToImage" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0">
                <p class="u-text u-text-4">{{info.articles[4].description}}</p>
                <a v-bind:href="info.articles[4].url" class="u-btn u-button-style u-palette-3-base u-btn-3">czytaj dalej</a>
              </div>
            </div>
            <div class="u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-3">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                <h3 class="u-align-center u-text u-text-5">

                  <a class="u-active-none u-btn u-button-link u-button-style u-hover-none u-none u-text-black u-btn-1" v-bind:href="info.articles[6].url" data-page-id="84708366">{{info.articles[6].title}}</a>

                </h3>
                <div class="u-border-4 u-border-palette-3-base u-expanded-width u-line u-line-horizontal u-line-3"></div>
                <img alt="" class="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-image-3" data-image-width="2000" data-image-height="1333" v-bind:src="info.articles[6].urlToImage" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0">
                <p class="u-text u-text-6">{{info.articles[6].description}}</p>
                <a v-bind:href="info.articles[6].url" class="u-btn u-button-style u-palette-3-base u-btn-4">czytaj dalej</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>-->


  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: "News",
  data() {
    return {
      info: null,
    }
  },
  created(){
    axios.get('https://newsapi.org/v2/top-headlines?country=pl&apiKey=862e7350bffe42ffb5e5928951899018')
      .then(response => this.info = response.data)
      .catch(error => {
        this.errorMessage("There was en error!", error);
      });
  }



}



</script>





<style scoped src="../assets/styles/Home.css">

</style>
