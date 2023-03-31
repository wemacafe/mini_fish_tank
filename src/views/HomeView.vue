<script>
  import { ref } from 'vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';


  import { Autoplay, Pagination, Navigation } from 'swiper';

  export default{
    methods:{
        play(){
          var audio = document.getElementById("audio");
          audio.play();
        }
    },
    components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
      const progressCircle = ref(null);
      const progressContent = ref(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.value.style.setProperty('--progress', 1 - progress);
        progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
      };
      return {
        onAutoplayTimeLeft,
        progressCircle,
        progressContent,
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  
  }
</script>

<template>
  <main>
    <div class="position-absolute underwater">
      <div class="fish fish1"></div>
      <div class="fish fish2"></div>
      <div class="fish fish3"></div>
      <div class="diver" @click="play()"></div>
      <audio id="audio" class="bgmusic" src="https://vgmsite.com/soundtracks/maplestory-music/txpfjmcpot/12-01%20Aquarium.mp3" controls></audio>
    </div>
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <div class="row justify-content-center my-auto">
          <div class="col-lg-4 col-md-6 col-sm-8 col-xs-12 text-center hero-title" >
            <h1 class="py-2">角角流口水</h1>
            <p class="fs-4 mb-0">自己的魚、自己養，一起來翻轉小魚缸</p>
          </div>
        </div>
      </div>
    <div class="container py-5">
      <div class="row mt-5">
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="../assets/h-03.png"
              class="card-img-top rounded-0 object-cover"
              alt="..."
              style="height:400px"
            />
            <div class="card-body text-center">
              <h4>你心目中的魚</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  你知道魚隻有分淡水和海水嗎？電影場景出現的小丑魚和海葵游玩，是不是很有畫面，新手最好還是從淡水魚開始，話說養魚先講水，這就是一個坑的開始
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="../assets/h-02.png"
              class="card-img-top rounded-0 object-cover"
              alt="..."
              style="height:400px"
            />
            <div class="card-body text-center">
              <h4>水族設備的選購</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  魚缸的種類非常的多，迷你小魚缸特別適合在這個都市養殖，也非常容易融入居家的景玄關場景，作為多用途的它，除了當4D畫布，還能當風水招財物
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="../assets/h-01.png"
              class="card-img-top rounded-0 object-cover"
              alt="..."
              style="height:400px"
            />
            <div class="card-body text-center">
              <h4>魚隻的照顧</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  魚是不會吃大便的，但它生活在魚缸，也是它的馬桶，所以每一到二週，要幫它們換1/3水。魚也會感冒哦，它們不會流鼻涕，抵抗力不好的魚兒，身上會長白點
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<div class="container my-3">
    <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 10000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    @autoplayTimeLeft="onAutoplayTimeLeft"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="row justify-content-center py-7">
        <div class="col-md-6 text-center">
          <h3>愛上小魚缸</h3>
            <p class="my-5">我們都希望有能力照顧別人，也許可以從不用花費太多心力的小魚缸開始，在繁忙的都市裡，靜下心來看看魚的泳姿，療癒身心。</p>
            <p><small>—角角流口水—</small></p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="row justify-content-center py-7">
        <div class="col-md-6 text-center">
          <h3>小魚缸互動</h3>
            <p class="my-5">貓貓狗狗很可愛，但養貓貓狗狗整理環境次數太頻繁，要想環境好，就要花時間教化。（愛他就不要放棄他）讓不用太花你時間的小魚缸來陪伴你吧</p>
            <p><small>—角角流口水—</small></p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="row justify-content-center py-7">
        <div class="col-md-6 text-center">
          <h3>有時候我們應該靜下來</h3>
            <p class="my-5">忙碌的都市，工作回到家裡，只剩追劇、玩game嗎？這是一種不一樣的體會，看著魚兒按步就班的努力著，有種ASMR的感覺~</p>
            <p><small>—角角流口水—</small></p>
        </div>
      </div>
    </swiper-slide>
    
    <template #container-end>
      <div class="autoplay-progress">
        <svg viewBox="0 0 48 48" ref="progressCircle">
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref="progressContent"></span>
      </div>
    </template>
  </swiper>
</div>
    
    <div class="container my-7">
      <div class="row">
        <div class="col-md-6">
          <img src="../assets/hb-2.png" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">小魚缸的總花費</h4>
          <p class="text-muted">魚缸和魚隻占水族最大宗比例，魚缸還要考慮到缸體的尺寸，過濾器種類，打氣機，個人欣賞的造景 "OS:你也可以玩裸缸，個人審美觀不同嘛~~"，這些都是魚隻最基本的配備。
            小魚缸的架設和花費，一般在千元以內可以解決，在角角裡，將介紹你一些小魚缸的超值設備，希望讓你看了流口水，尤其是一些市面上買不到可以自己DIY的設備，讓喜歡配置
            的你，打造一個自己的歡樂小魚缸。推薦新手從小魚缸開始，希望起手式讓你有愉快的體驗，自己造的缸就是獨一無二。
          </p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img src="../assets/hb-1.png" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">魚缸大小與魚隻數量</h4>
          <p class="text-muted">專業的意見，通常會見意您，1公升的水，約養2隻2cm的魚隻，魚還有分上游中游和下游的功能哦，這裡會介紹一些好上手的燈科魚、工具魚。
            還在逛水族店買魚嗎？觀察水族店裡的環境，水質是否乾淨，有無異味？其實，現在很多水族工作室，乾淨養殖，網路商店，也是大家值得考慮的另一種管道，但這一切都是經驗換來的</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style>

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: rgb(217,242,254);

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}

</style>
