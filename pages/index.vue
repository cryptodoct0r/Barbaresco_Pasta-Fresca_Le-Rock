<i18n>
{
  "uk": {
          "home": {
            "title": "Оберіть заклад",
            "siteButtonTxt": "Перейти до закладу",
            "descriptions": [{
                "details": "Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас"
              },
              {
                "details": "Відкриваємо суперздібності від смаку нашої пасти Приходьте та спробуйте самі"
              },
              {
                "details": "Компанія друзів, смачне меню і відмінна атмосфера - тільки в Le Rock!"
              },
              {
                "details": "Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас"
              }
            ]
          }
        },
        "en": {
          "home": {
            "title": "SELECT AN INSTITUTION",
            "siteButtonTxt": "Go to the institution",
            "descriptions": [{
                "details": "Cozy atmosphere, nice music, delicious cuisine and friendly staff - all of which you will find in Us"
              },
              {
                "details": "Unlock the taste of our pasta Come and try for yourself"
              },
              {
                "details": "Company of friends, delicious menu and great atmosphere - only in Le Rock!"
              },
              {
                "details": "Cozy atmosphere, nice music, delicious cuisine and friendly staff - all of which you will find in Us"
              }
            ]
          }
        },

        "ru": {
          "home": {
            "title": "Оберіть заклад",
            "siteButtonTxt": "Перейти до закладу",
            "descriptions": [{
                "details": "Уютная атмосфера, приятная музыка, вкусная кухня и приветливый персонал - все это Вы найдете у Нас"
              },
              {
                "details": "Открываем суперспособности от вкуса нашей пасты Приходите и попробуйте сами"
              },
              {
                "details": "Компания друзей, вкусное меню и отличная атмосфера - только в Le Rock!"
              },
              {
                "details": "Уютная атмосфера, приятная музыка, вкусная кухня и приветливый персонал - все это Вы найдете у Нас"
              }
            ]
          }
        }
}
</i18n>

<template>
  <div id="homePage">
    <div class="mx-auto ">
      <h1 class="homePageHeading">
        {{ $t('home.title') }}
      </h1>
      <client-only
        aria-placeholder="Loading..."
        placeholder="Loading..."
      >
        <div>
          <carousel
            :nav="false"
            :dots="false"
            :items="3"
            :loop="false"
            :mouse-drag="true"
            :touch-drag="true"
            :autoplay="false"
            :rewind="false"
            :stage-padding="40"
            :auto-width="350"
            :responsive="{
              0: { items: 1, center: true, dots: true, autoWidth: 280 },
              600: { items: 1, center: false, margin: 0, dots: true },
              800: { items: 1, center: false, margin: 0 },
              1440: { items: 3, center: false, margin: 60 },
              1800: { items: 3, center: false, margin: 0 }
            }"
          >
            <div
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-delay="400"
              data-aos-duration="500"
              class=" col-4 "
            >
              <b-card
                :img-src="require(`~/assets/img/${variants[0].imageShowcase + '.jpg'}`)"
                :img-alt="variants[0].showcaseAlt"
                img-top
                tag="article"
                style=""
                class="mb-1 homeNavCard"
              >
                <div class="cardContent">
                  <div class="card-log mx-auto text-center">
                    <b-img
                      class="mx-auto"
                      :src="require(`~/assets/img/${variants[0].logo + '.svg'}`)"
                      :alt="variants[0].logoAlt"
                    />
                  </div>
                  <b-card-text class="cardDescription">
                    {{ variants[0].details }}
                  </b-card-text>
                  <div class="text-center goTosite">
                    <b-button
                      size="lg"
                      class="mx-auto goToSiteBtn"
                      :href="localePath({name: variants[0].siteLink},$i18n.locale)"
                    >
                      {{ $t('home.siteButtonTxt') }}
                    </b-button>
                  </div>
                  <div class="text-center ">
                    <b-button
                      class="socialButtons instagram mx-auto"
                      :href="variants[0].instaLink"
                      target="_blank"
                    >
                      <b-img
                        class="inButtonImg "
                        src="~assets/img/instagram.svg"
                        alt="instagram text"
                      />
                    </b-button>
                    <b-button
                      class="socialButtons facebook mx-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                      :href="variants[0].facebLink"
                    >
                      <b-img
                        class="inButtonImg "
                        target="_blank"
                        rel="noopener noreferrer"
                        src="~assets/img/facebook.svg"
                        alt="facebook text"
                      />
                    </b-button>
                  </div>
                </div>
              </b-card>
            </div>

            <div
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-delay="800"
              data-aos-duration="500"
              class=" col-4 "
            >
              <b-card
                :img-src="require(`~/assets/img/${variants[1].imageShowcase + '.jpg'}`)"
                :img-alt="variants[1].showcaseAlt"
                img-top
                tag="article"
                style=""
                class="mb-1 homeNavCard"
              >
                <div class="cardContent">
                  <div class="card-log mx-auto text-center">
                    <b-img
                      class="mx-auto"
                      :src="require(`~/assets/img/${variants[1].logo + '.svg'}`)"
                      :alt="variants[1].logoAlt"
                    />
                  </div>
                  <b-card-text class="cardDescription">
                    {{ variants[1].details }}
                  </b-card-text>
                  <div class="text-center goTosite">
                    <b-button
                      class="mx-auto goToSiteBtn"
                      :href="localePath({name: variants[1].siteLink},$i18n.locale)"
                    >
                      {{ $t('home.siteButtonTxt') }}
                    </b-button>
                  </div>
                  <div class="text-center ">
                    <b-button
                      class="socialButtons instagram mx-auto"
                      :href="variants[1].instaLink"
                      target="_blank"
                    >
                      <b-img
                        class="inButtonImg "
                        src="~assets/img/instagram.svg"
                        alt="instagram text"
                      />
                    </b-button>
                    <b-button
                      class="socialButtons facebook mx-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                      :href="variants[1].facebLink"
                    >
                      <b-img
                        class="inButtonImg "
                        target="_blank"
                        rel="noopener noreferrer"
                        src="~assets/img/facebook.svg"
                        alt="facebook text"
                      />
                    </b-button>
                  </div>
                </div>
              </b-card>
            </div>

            <div
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-delay="1200"
              data-aos-duration="500"
              class=" col-4 "
            >
              <b-card
                :img-src="require(`~/assets/img/${variants[2].imageShowcase + '.jpg'}`)"
                :img-alt="variants[2].showcaseAlt"
                img-top
                tag="article"
                style=""
                class="mb-1 homeNavCard"
              >
                <div class="cardContent">
                  <div class="card-log mx-auto text-center">
                    <b-img
                      class="mx-auto"
                      :src="require(`~/assets/img/${variants[2].logo + '.svg'}`)"
                      :alt="variants[2].logoAlt"
                    />
                  </div>
                  <b-card-text class="cardDescription">
                    {{ variants[2].details }}
                  </b-card-text>
                  <div class="text-center goTosite">
                    <b-button
                      class="mx-auto goToSiteBtn"
                      :href="localePath({name: variants[2].siteLink},$i18n.locale)"
                    >
                      {{ $t('home.siteButtonTxt') }}
                    </b-button>
                  </div>
                  <div class="text-center ">
                    <b-button
                      class="socialButtons instagram mx-auto"
                      :href="variants[2].instaLink"
                      target="_blank"
                    >
                      <b-img
                        class="inButtonImg "
                        src="~assets/img/instagram.svg"
                        alt="instagram text"
                      />
                    </b-button>
                    <b-button
                      class="socialButtons facebook mx-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                      :href="variants[2].facebLink"
                    >
                      <b-img
                        class="inButtonImg "
                        target="_blank"
                        rel="noopener noreferrer"
                        src="~assets/img/facebook.svg"
                        alt="facebook text"
                      />
                    </b-button>
                  </div>
                </div>
              </b-card>
            </div>
          </carousel>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
  layout: 'default',
  components: {

  },
  data () {
    return {

      variants: [
        {
          name: 'Barbaresco',
          imageShowcase: 'home-page-barbaresco',
          showcaseAlt: 'Image of barbaresco',
          logo: 'barbaresco-logo',
          logoAlt: 'barbaresco logo',
          siteLink: 'barbaresco',
          details: this.$t('home.descriptions[0].details'),
          instaLink: 'https://www.instagram.com/barbaresco.citycafe/?hl=ru',
          facebLink: 'https://www.facebook.com/barbarescocitycafe/'
        },
        {
          name: 'Pasta Fresca',
          imageShowcase: 'home-page-pasta-fresca',
          showcaseAlt: 'Image of Pasta Fresca',
          logo: 'pasta-fresca-logo',
          logoAlt: 'pasta-fresca-logo',
          siteLink: 'pasta-fresca',
          details:
            this.$t('home.descriptions[1].details'),
          instaLink: 'https://www.instagram.com/pasta_fresca_/?igshid=1qyzx39m5mbxn',
          facebLink: 'https://www.facebook.com/pages/Pasta-Fresca/305757176274117'
        },
        {
          name: 'Le rock',
          imageShowcase: 'home-page-le-rock',
          showcaseAlt: 'Image of Le rock',
          logo: 'le-rock-logo',
          logoAlt: 'Le rock logo',
          siteLink: 'le-rock',
          details: this.$t('home.descriptions[2].details'),
          instaLink: 'https://www.instagram.com/lerock2017/?igshid=1sbpswqx2738u',
          facebLink: 'https://www.facebook.com/lerockpab/'
        },
        {
          name: 'Piazza white',
          imageShowcase: 'home-page-piazza-white',
          showcaseAlt: 'Image of Piazza white',
          logo: 'piazza-white-logo',
          logoAlt: 'Piazza white logo',
          siteLink: 'piazza',
          details: this.$t('home.descriptions[3].details'),
          instaLink: '#',
          facebLink: '#'
        }
      ]
    }
  },
  watch: {
    $route () {
      this.items[0].text = this.$t('links.home')
      this.items[1].text = this.$route.fullPath.charAt(1).toUpperCase() + this.$route.fullPath.slice(2)
    }
  }
}
</script>

<style lang="scss">
#homePage .owl-carousel .owl-stage {
  margin: auto;
}

#homePage .owl-theme .owl-nav.disabled + .owl-dots {
  margin-top: 30px !important;
}

#homePage .owl-theme .owl-nav.disabled + .owl-dots .active span {
  background-color: #ffffff !important;
}

#homePage .owl-carousel .owl-stage {
  margin: auto !important;
}

#homePage .owl-theme .owl-dots .owl-dot span {
  min-width: 50px;
  max-width: 50px;
  width: 100%;
  min-height: 50px;
  max-height: 50px;
  height: 100%;
  background-color: black !important;
  border: none;
}

@media screen and (max-height: 480px) {
  #homePage .owl-theme .owl-nav.disabled + .owl-dots {
    margin-top: -12px !important;
  }
}

@media screen and (min-height: 481px) and (max-height: 500px) {
  #homePage .owl-theme .owl-nav.disabled + .owl-dots {
    margin-top: -9px !important;
  }
}

@media screen and (min-height: 500px) and (max-height: 559px) {
  #homePage .owl-theme .owl-nav.disabled + .owl-dots {
    margin-top: -2px !important;
  }
}

@media screen and (min-height: 560px) and (max-height: 670px) {
  #homePage .owl-theme .owl-nav.disabled + .owl-dots {
    margin-top: 1% !important;
  }
}

@media screen and (min-width: 600px) and (max-width: 800px) {
  #homePage .owl-theme .owl-dots .owl-dot span {
    min-width: 25px;
    max-width: 25px;
    width: 100%;
    min-height: 25px;
    max-height: 25px;
    height: 100%;
    background-color: black !important;
    border: none;
  }
}

@media screen and (max-width: 600px) {
  #homePage {
    .owl-theme .owl-dots button:nth-child(1) span {
      background-image: url("~assets/img/barbaresco-padded.svg") !important;
      background-size: contain !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-origin: content-box !important;
    }

    .owl-theme .owl-nav.disabled + .owl-dots button:nth-child(1).active span {
      background-image: url("~assets/img/barbaresco-padded-black.svg") !important;
    }

    .owl-theme .owl-dots button:nth-child(2) span {
      background-image: url("~assets/img/pasta-fresca-padded.svg") !important;
      background-size: contain !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-origin: content-box !important;
    }

    .owl-theme .owl-nav.disabled + .owl-dots button:nth-child(2).active span {
      background-image: url("~assets/img/pasta-fresca-padded-black.svg") !important;
    }

    .owl-theme .owl-dots button:nth-child(3) span {
      background-image: url("~assets/img/padded-le-rock.svg") !important;
      background-size: contain !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-origin: content-box !important;
    }

    .owl-theme .owl-nav.disabled + .owl-dots button:nth-child(3).active span {
      background-image: url("~assets/img/padded-le-rock-black.svg") !important;
    }

    .owl-theme .owl-dots button:nth-child(4) span {
      background-image: url("~assets/img/piazza-white-logo.svg") !important;
      background-size: contain !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-origin: content-box !important;
    }
  }
}
</style>

<style lang="scss" scoped>
#homePage {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden !important;
  background: url("~assets/img/home-page-bg.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: fixed;

  background-color: $blackColor;

  opacity: 0.9;
  filter: blur(0.5px);

  height: 100vh;
  width: 100vw;
}

.homePageHeading {
  text-align: center;
  margin-top: 3.5%;
  margin-bottom: 3.5%;

  font-family: $segoeFont;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 53px;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: #ffffff;

  opacity: 0.8;
}

.homeNavCard {
  background: #0a0a0a;
  border: 0;
}

.card {
  max-width: 350px;
  width: 100%;
  min-width: 350px;
}

.cardContent {
  padding: 35px 20px;
}

.card-body {
  padding: 0;
}

.card-log,
.card-log img {
  max-height: 80px;
  max-width: 160px;
  min-height: 80px;
  min-width: 160px;
  margin-bottom: 35px;
  object-fit: contain;
}

.cardDescription {
  height: 94px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  padding-right: 18.5px;
  padding-left: 18.5px;

  color: $lightColor;
}

.goTosite {
  margin-bottom: 10px;
}

.goToSiteBtn {
  border: 2px solid $lightColor;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;

  @include easeInOut;

  border-radius: 0;
  box-sizing: border-box;

  background-color: transparent;
  // padding: 12px 50px;
  width: 280px;
  height: 48px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 35px;

  color: $lightColor;

  &:hover {
    background: $lightColor;
    color: $blackColor;
  }
}

.socialButtons {
  border: 2px solid $lightColor;
  border-radius: 0;
  box-sizing: border-box;
  z-index: 0;
  position: relative;
  overflow: hidden;

  background-color: transparent;
  margin: 10px 10px 10px 10px;

  @include easeInOut;

  &.instagram {
    margin: 10px 9px 10px 10px !important;
    // padding: 10px 20px;
    width: 130px;
    height: 48px;
    text-align: center;

    .inButtonImg {
      width: 80px;
      height: 35px;
      margin: auto;
    }
  }

  &.instagram::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 132px;
    height: 50px;
    @include easeInOut;
    opacity: 0;

    background-image: -moz-linear-gradient(
      69.74deg,
      #fdd276 -7.77%,
      #e1585f 55.36%,
      #a741b6 106.84%
    );
    background-image: -webkit-linear-gradient(
      69.74deg,
      #fdd276 -7.77%,
      #e1585f 55.36%,
      #a741b6 106.84%
    );
    background-image: linear-gradient(
      69.74deg,
      #fdd276 -7.77%,
      #e1585f 55.36%,
      #a741b6 106.84%
    );
  }

  &.instagram:hover {
    border: 2px solid transparent;
    width: 131px !important;
    height: 48px !important;
    &::before {
      opacity: 1;
    }
  }

  &.facebook {
    margin: 10px 10px 10px 9px !important;
    // padding: 10px 20px;
    width: 130px;
    height: 48px;
    text-align: center;

    .inButtonImg {
      width: 80px;
      height: 30px;
      margin: auto;
    }
  }

  &.facebook:hover {
    border: 2px solid #395795;
    background-color: #395795;
  }
}

@media (max-width: 1440px) {
  .homePageHeading {
    margin-top: 3%;
    margin-bottom: 3%;
  }

  .card {
    max-width: 275px;
    width: 100%;
    min-width: 275px;
  }

  .card-image-top {
    height: 150px;
  }

  .card-log,
  .card-log img {
    height: 50px;
    width: 100px;
    margin-bottom: 35px;
  }

  .cardDescription {
    height: 75px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }

  .cardContent {
    padding: 20px 20px;
  }

  .goTosite {
    margin-bottom: 10px;
  }

  .goToSiteBtn {
    width: inherit;
    height: inherit;
    padding: 12px 25px;
    line-height: inherit;
  }

  .socialButtons {
    &.instagram {
      margin: auto 2.5px 5px 0 !important;
      padding: 7.5px 18px;
      width: inherit;
      height: inherit;
      line-height: inherit;

      .inButtonImg {
        width: 67.5px;
        height: 24px;
      }
    }

    &.facebook {
      margin: auto 0 5px 2.5px !important;
      padding: 12px 18px;
      width: inherit;
      height: inherit;
      line-height: inherit;

      .inButtonImg {
        width: 67.5px;
        height: 14.82px;
      }
    }
  }

  .inButtonImg {
    width: 70px;
  }
}

@media screen and (min-width: 1800px) {
  .col-3 {
    margin: auto;
  }
}

@include mediaMenu {
  .homePageHeading {
    margin-top: 7%;
    margin-bottom: 7%;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;

    letter-spacing: 0.2em;
  }
}

@include mediaSm {
  .homePageHeading {
    margin-top: 6.5%;
    margin-bottom: 6.5%;
    font-size: 20px;
    line-height: 24px;
  }

  .card {
    max-width: 275px;
    width: 100%;
    min-width: 275px;
  }

  .card-image-top {
    height: 140px;
  }

  .card-log,
  .card-log img {
    height: 50px;
    width: 100px;
    margin-bottom: 15px;
  }

  .cardDescription {
    height: 80px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }

  .cardContent {
    padding: 20px 20px;
  }

  .goToSiteBtn {
    width: 210px;
    height: 48px;
    padding: 12px 5px;
  }

  .socialButtons {
    &.instagram {
      width: 100px;
      height: 48px;
      padding: 12px 0px;

      .inButtonImg {
        width: 65px;
        height: 24px;
      }
    }

    &.facebook {
      width: 100px;
      height: 48px;
      padding: 14px 0px;

      .inButtonImg {
        width: 65px;
        height: 15px;
      }
    }
  }
}

@include mediaXXSm {
  .homePageHeading {
    margin-top: 3%;
    margin-bottom: 3%;
  }

  .card {
    max-width: 250px;
    width: 100%;
    min-width: 250px;

    img {
      height: 120px;
      max-width: 100%;
      object-fit: cover;
    }
  }

  .card-image-top {
    height: 100px;
  }

  .card-log,
  .card-log img {
    max-height: 40px !important;
    min-height: 40px !important;
    max-width: 80px !important;
    min-width: 80px !important;
    margin-bottom: 10px;
    object-fit: contain;
  }

  .cardDescription {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }

  .cardContent {
    padding: 10px 10px;
  }

  .goTosite {
    margin-bottom: 10px;
  }

  .goToSiteBtn {
    width: 210px;
    height: 48px;
    padding: 12px 5px;
  }

  .socialButtons {
    &.instagram {
      width: 100px;
      height: 48px;
      padding: 12px 0px;

      .inButtonImg {
        width: 65px;
        height: 24px;
      }
    }

    &.facebook {
      width: 100px;
      height: 48px;
      padding: 14px 0px;

      .inButtonImg {
        width: 70px;
        height: 15px;
      }
    }
  }

  .inButtonImg {
    width: 70px;
  }
}

@media screen and (max-height: 480px) {
  .homePageHeading {
    margin-top: 3.5px;
    margin-bottom: 3.5px;
  }
}

@media screen and (min-height: 481px) and (max-height: 500px) {
  .homePageHeading {
    margin-top: 4px;
    margin-bottom: 4px;
  }
}

@media screen and (min-height: 500px) and (max-height: 519px) {
  .homePageHeading {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

@media screen and (min-height: 520px) and (max-height: 640px) {
  .homePageHeading {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

@media screen and (min-height: 641px) and (max-height: 650px) {
  .homePageHeading {
    margin-top: 6.5vh;
    margin-bottom: 6.5vh;
  }
}

@media screen and (min-height: 651px) and (max-height: 700px) {
  .homePageHeading {
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
}

@media screen and (min-height: 701px) and (max-height: 900px) {
  .homePageHeading {
    margin-top: 3vh;
    margin-bottom: 3vh;
  }
}

@media screen and (min-height: 600px) and (max-height: 1090px) and (min-width: 600px) and (max-width: 820px) {
  .homePageHeading {
    margin-top: 8vh;
    margin-bottom: 8vh;
    font-size: 40px;
    line-height: 53px;
  }

  .card {
    max-width: 350px;
    width: 100%;
    min-width: 350px;
  }

  .cardContent {
    padding: 35px 20px;
  }

  .card-body {
    padding: 0;
  }

  .card-log,
  .card-log img {
    max-height: 80px;
    max-width: 160px;
    min-height: 80px;
    min-width: 160px;
    margin-bottom: 35px;
    object-fit: contain;
  }

  .cardDescription {
    height: 94px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    padding-right: 18.5px;
    padding-left: 18.5px;

    color: $lightColor;
  }

  .goTosite {
    margin-bottom: 10px;
  }

  .goToSiteBtn {
    border: 2px solid $lightColor;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, 0.5);
    outline-offset: 0px;
    text-shadow: none;

    @include easeInOut;

    border-radius: 0;
    box-sizing: border-box;

    background-color: transparent;
    // padding: 12px 50px;
    width: 280px;
    height: 48px;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 19px;

    color: $lightColor;

    &:hover {
      border: 2px solid transparent;
      background: $lightColor;
      color: $blackColor;
    }
  }

  .socialButtons {
    border: 2px solid $lightColor;
    border-radius: 0;
    box-sizing: border-box;

    background-color: transparent;
    margin: 10px 10px 10px 10px;

    @include easeInOut;

    &.instagram {
      margin: 10px 9px 10px 10px !important;
      // padding: 10px 20px;
      width: 130px;
      height: 48px;
      text-align: center;

      .inButtonImg {
        width: 80px;
        height: 34px;
        margin: auto;
      }
    }

    &.instagram:hover {
      border: 2px solid transparent;
      background-image: -moz-linear-gradient(
        69.74deg,
        #fdd276 -7.77%,
        #e1585f 55.36%,
        #a741b6 106.84%
      );
      background-image: -webkit-linear-gradient(
        69.74deg,
        #fdd276 -7.77%,
        #e1585f 55.36%,
        #a741b6 106.84%
      );
      background-image: linear-gradient(
        69.74deg,
        #fdd276 -7.77%,
        #e1585f 55.36%,
        #a741b6 106.84%
      );
    }

    &.facebook {
      margin: 10px 10px 10px 9px !important;
      // padding: 10px 20px;
      width: 130px;
      height: 48px;
      text-align: center;

      .inButtonImg {
        width: 80px;
        height: 18px;
        margin: auto;
      }
    }

    &.facebook:hover {
      border: 2px solid transparent;
      background-color: #395795;
    }
  }
}
</style>
