<template>
  <div>
    <header class="header">
      <h1>GIFT<span>贈答用</span></h1>
    </header>
    <main class="main">
      <p class="top-text">
        <span>宮崎牛がたっぷり詰まった肉ギフト。</span><br /><span
          >お歳暮やお中元、季節のご挨拶や</span
        ><span>入学祝い、就職祝いなどに</span
        ><span>宮崎牛の詰め合わせはいかがでしょうか</span>
      </p>
      <div class="menu-area">
        <dl class="gift-product product01">
          <div class="gift-menu">
            <div class="gift-menu__title">
              <dt>宮崎牛焼肉セット</dt>
              <dd><span>税込</span>5,400<span>円</span></dd>
            </div>
            <dd class="gift-menu__text">
              宮崎牛の人気の部位３種類を食べやすい焼肉カットで詰め合わせました。
            </dd>
            <dd class="gift-menu__naiyo">
              <ul>
                <li>カルビ 200g</li>
                <li>ロース　200g</li>
                <li>モモ　200g</li>
                <li class="empty"></li>
              </ul>
            </dd>
          </div>
          <dd class="gift-menu__image">
            <picture>
              <source
                type="image/webp"
                srcset="~assets/image/gift/image-gift01.webp"
              />
              <source
              type="image/jpg"
                srcset="~assets/image/gift/image-gift01.jpg"
              />
              <img src="~assets/image/gift/image-gift01.jpg" />
            </picture>
          </dd>
        </dl>
        <dl class="gift-product product02">
          <div class="gift-menu">
            <div class="gift-menu__title">
              <dt>宮崎牛スライスカット</dt>
              <dd><span>税込</span>4,320<span>円</span></dd>
            </div>
            <dd class="gift-menu__text">
              しゃぶしゃぶやすき焼き、肉じゃがにも。お好みの部位をスライスカットでお届けします。
            </dd>
            <dd class="gift-menu__naiyo">
              <ul>
                <li>ロースの場合 450g</li>
                <li>赤身の場合 500g</li>
                <li>肩ロースの場合 550g</li>
                <li class="empty"></li>
              </ul>
            </dd>
          </div>
          <dd class="gift-menu__image">
            <picture>
              <source
                type="image/webp"
                srcset="~assets/image/gift/image-gift02.webp"
              />
              <source
              type="image/jpg"
                srcset="~assets/image/gift/image-gift02.jpg"
              />
              <img src="~assets/image/gift/image-gift02.jpg" />
            </picture>
          </dd>
        </dl>
        <dl class="gift-product product02">
          <div class="gift-menu">
            <div class="gift-menu__title">
              <dt>サーロイン＆モモ<span class="ib">ステーキセット</span></dt>
              <dd><span>税込</span>4,320<span>円</span></dd>
            </div>
            <dd class="gift-menu__text">
              宮崎牛をたっぷり堪能できる肉厚ステーキ。
            </dd>
            <dd class="gift-menu__naiyo">
              <ul>
                <li>サーロイン 250g</li>
                <li>モモ 200g</li>
                <li>ステーキソース付</li>
                <li class="empty"></li>
              </ul>
            </dd>
          </div>
          <dd class="gift-menu__image">
            <picture>
              <source
                type="image/webp"
                srcset="~assets/image/gift/image-gift03.webp"
              />
              <source
              type="image/jpg"
                srcset="~assets/image/gift/image-gift03.jpg"
              />
              <img src="~assets/image/gift/image-gift03.jpg" />
            </picture>
          </dd>
        </dl>
        <dl class="gift-product product02">
          <div class="gift-menu">
            <div class="gift-menu__title">
              <dt>リブロース<span class="ib">ステーキセット</span></dt>
              <dd><span>税込</span>4,430<span>円</span></dd>
            </div>
            <dd class="gift-menu__text">
              牛肉の中でも人気のリブロースを贅沢なステーキカットで。
            </dd>
            <dd class="gift-menu__naiyo">
              <ul>
                <li>リブロース 500g</li>
                <li>ステーキソース付</li>
              </ul>
            </dd>
          </div>
          <dd class="gift-menu__image">
            <picture>
              <source
                type="image/webp"
                srcset="~assets/image/gift/image-gift04.webp"
              />
              <source
              type="image/jpg"
                srcset="~assets/image/gift/image-gift04.jpg"
              />
              <img src="~assets/image/gift/image-gift04.jpg" />
            </picture>
          </dd>
        </dl>
        <dl class="gift-product product02 last-product02"></dl>
      </div>
      <div class="last-text">
        <span>上記の他、ご予算やご用途に合わせて</span
        ><span>お作りできます。</span><br />お気軽にお問い合わせ下さい。
      </div>
      <nuxt-link class="btn-home" to="/">ホームに戻る</nuxt-link>
    </main>
  </div>
</template>

<script>
export default {
  transition: {
    name: "page",
    mode: "out-in",
  },
  head() {
    return {
      title: "お肉の贈答用ギフト",
      htmlAttrs: {
        lang: "ja",
        prefix: "og: http://ogp.me/ns#",
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "宮崎牛の肉ギフト。お歳暮やお中元、季節のご挨拶や入学祝い、就職祝いなどに宮崎牛の詰め合わせはいかがでしょうか",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "宮崎牛の肉ギフト。お歳暮やお中元、季節のご挨拶や入学祝い、就職祝いなどに宮崎牛の詰め合わせはいかがでしょうか",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://meatfactory-tsukuba.com/gift/ogp-image.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$color-red: rgb(188, 2, 2);
$max-width: 1360px;
.header {
  height: 20vh;
  position: relative;
  background-image: url(~assets/image/gift/bg-top.jpg);
  background-size: cover;
  background-position: center center;
  &::after {
    display: block;
    content: "";
    background-color: #000;
    width: 100%;
    height: 100%;
    opacity: 0.25;
    z-index: 1;
  }
  h1 {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 2;
    font-family: "Archivo Narrow", sans-serif;
    font-display: swap;
    font-weight: 700;
    font-size: 3.8em;
    color: #fff;
    @media screen and (max-width: 500px) {
      font-size: 12vw;
    }
    span {
      display: block;
      font-size: 0.3em;
      letter-spacing: 0.3em;
      &::before {
        content: "-";
      }
      &::after {
        content: "-";
      }
    }
  }
}

.main {
  padding: 0 0 40px 0;
  @media screen and (max-width: 780px) {
    padding: 0 0 5vw 0;
  }
  .top-text {
    font-size: 1.5em;
    text-align: center;
    padding: 60px 0 30px 0;
    line-height: 1.5em;
    max-width: 800px;
    width: 90%;
    margin: 0 auto;
    @media screen and (max-width: 500px) {
      font-size: 4.5vw;
      padding: 11% 0 3.5% 0;
    }
    span {
      display: inline-block;
    }
  }
  .menu-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: $max-width;
    margin: 0 auto;
  }
}

.notice {
  max-width: 600px;
  width: 90%;
  margin: 20px auto;
  padding: 1.5em;
  box-sizing: border-box;
  border: 2px solid rgb(96, 19, 19);
  background-color: rgb(235, 235, 235);
  &__title {
    text-align: center;
    font-size: 1.3em;
    font-weight: bold;
    padding-bottom: 1em;
  }
  &__content {
    font-size: 1.2em;
    line-height: 1.4em;
    em {
      font-size: 1.1em;
      font-weight: bold;
      font-style: normal;
    }

  }
}

.product01 {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  box-shadow: 0px 0px 10px #000;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px 40px 20px 20px;
  box-sizing: border-box;
  margin: 50px auto 0 auto;
  width: 95%;
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    max-width: 600px;
    padding: 5%;
  }
  .gift-menu {
    flex: 1;
    @media screen and (max-width: 800px) {
      max-width: 450px;
      margin: 10px auto 0 auto;
    }
    &__title {
      font-weight: bold;
      color: $color-red;
      margin: 0 0 15px 0;
      dt {
        font-size: 2em;
        border-left: 10px solid;
        padding: 0.3em 0 0.1em 0.5em;
        @media screen and (max-width: 1000px) {
          font-size: 3vw;
        }
        @media screen and (max-width: 800px) {
          font-size: 1.6em;
          padding: 0.3em 0 0.05em 0.5em;
        }
      }
      dd {
        font-size: 2em;
        border-left: 10px solid;
        padding: 0.1em 0 0.3em 0.5em;
        @media screen and (max-width: 1000px) {
          font-size: 3vw;
        }
        @media screen and (max-width: 800px) {
          font-size: 1.6em;
          padding: 0.05em 0 0.3em 0.5em;
        }
        span {
          font-size: 0.7em;
        }
      }
    }
    &__text {
      line-height: 1.6em;
      margin: 0 0 15px 0;
      @media screen and (max-width: 1000px) {
        font-size: 1.5vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 0.9em;
      }
    }
    &__naiyo {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        border: 1px solid;
        border-radius: 10px;
        list-style: inside;
        padding: 10px;
        li {
          width: 45%;
          min-width: 170px;
          @media screen and (max-width: 1000px) {
            font-size: 1.3vw;
            min-width: 100px;
          }
          @media screen and (max-width: 800px) {
            font-size: 0.8em;
            min-width: 100px;
          }
        }
      }
    }
  }
  .gift-menu__image {
    margin-right: 20px;
    @media screen and (max-width: 1000px) {
      width: 60%;
      img {
        width: 100%;
      }
    }
    @media screen and (max-width: 800px) {
      width: 100%;
      margin: 0;
    }
  }
}

.product02 {
  display: flex;
  flex-direction: column-reverse;
  box-shadow: 0px 0px 10px #000;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px 30px 40px 30px;
  margin: 30px 20px;
  box-sizing: border-box;
  width: 45%;
  max-width: 500px;
  @media screen and (max-width: 800px) {
    max-width: 600px;
    width: 95%;
    padding: 5%;
    margin: 30px auto 0 auto;
  }
  .gift-menu {
    flex: 1;
    @media screen and (max-width: 800px) {
      max-width: 450px;
      margin: 0 auto;
    }
    &__title {
      font-weight: bold;
      color: $color-red;
      margin: 0 0 15px 0;
      dt {
        font-size: 1.8em;
        border-left: 10px solid;
        padding: 0.3em 0 0.1em 0.5em;
        @media screen and (max-width: 1000px) {
          font-size: 2.8vw;
        }
        @media screen and (max-width: 800px) {
          font-size: 1.6em;
          padding: 0.3em 0 0.05em 0.5em;
        }
      }
      dd {
        font-size: 1.8em;
        border-left: 10px solid;
        padding: 0.1em 0 0.3em 0.5em;
        @media screen and (max-width: 1000px) {
          font-size: 2.8vw;
        }
        @media screen and (max-width: 800px) {
          font-size: 1.6em;
          padding: 0.05em 0 0.3em 0.5em;
        }
        span {
          font-size: 0.7em;
        }
      }
    }
    &__text {
      line-height: 1.6em;
      margin: 0 0 15px 0;
      @media screen and (max-width: 1000px) {
        font-size: 1.5vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 0.9em;
      }
    }
    &__naiyo {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        border: 1px solid;
        border-radius: 10px;
        list-style: inside;
        padding: 10px;
        li {
          width: 45%;
          min-width: 170px;
          @media screen and (max-width: 1000px) {
            font-size: 1.3vw;
            min-width: 100px;
          }
          @media screen and (max-width: 800px) {
            font-size: 0.8em;
            min-width: 100px;
          }
        }
      }
    }
  }
  .gift-menu__image {
    text-align: center;
    img {
      width: 100%;
    }
  }
  &.last-product02 {
    visibility: hidden;
  }
}

.last-text {
  background-color: $color-red;
  color: #fff;
  max-width: 800px;
  margin: 50px auto;
  padding: 30px 0;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  line-height: 1.5em;
  width: 90%;
  @media screen and (max-width: 500px) {
    font-size: 4.6vw;
  }
  span {
    display: inline-block;
  }
}

.btn-home {
  display: block;
  margin: 0 auto;
  width: 210px;
  text-align: center;
  background-color: rgb(110, 99, 92);
  color: #fff;
  padding: 1em 0;
  border-radius: 10px;
}

.empty {
  visibility: hidden;
}
</style>
