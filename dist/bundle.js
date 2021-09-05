!function(l){function t(t){for(var e,a,r=t[0],n=t[1],i=t[2],s=0,o=[];s<r.length;s++)a=r[s],Object.prototype.hasOwnProperty.call(d,a)&&d[a]&&o.push(d[a][0]),d[a]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(l[e]=n[e]);for(p&&p(t);o.length;)o.shift()();return u.push.apply(u,i||[]),c()}function c(){for(var t,e=0;e<u.length;e++){for(var a=u[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==d[i]&&(r=!1)}r&&(u.splice(e--,1),t=s(s.s=a[0]))}return t}var a={},d={0:0},u=[];function s(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=l,s.c=a,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var e=(r=window.webpackJsonp=window.webpackJsonp||[]).push.bind(r);r.push=t;for(var r=r.slice(),n=0;n<r.length;n++)t(r[n]);var p=e;u.push([10,1]),c()}([,function(t,e){class a extends HTMLElement{set restaurant(t){this._restaurant=t,this.render()}async render(){this.innerHTML=`
    <div class="restaurant">
    <picture class="restaurant-image">
        <source class="lazyload" data-srcset="https://restaurant-api.dicoding.dev/images/large/${this._restaurant.pictureId}" media="(min-width: 992px)">
        <source class="lazyload" data-srcset="https://restaurant-api.dicoding.dev/images/medium/${this._restaurant.pictureId}" media="(min-width: 768px)">
        <img class="lazyload" data-src="https://restaurant-api.dicoding.dev/images/small/${this._restaurant.pictureId}" alt="Some picture">
    </picture>
    <div class="restaurant-info">
        <h3 tabindex="0" class="restaurant-info--name">
            <a href="/#/detail/${this._restaurant.id}">${this._restaurant.name}</a>
        </h3>
        <span
            class="restaurant-info--city"
            tabindex="0"
        >
            ${this._restaurant.city}
        </span>
        <p class="mt-3 text-secondary" tabindex="0">
        ${this._restaurant.description}
        </p>
        <div
            class="restaurant-info--rating mt-3 d-inline-flex flex-center"
            tabindex="0"
            aria-label="rating ${this._restaurant.rating}"
        >
            <svg
                class="mr-1"
                width="16"
                height="16"
                fill="#ffc107"
                stroke="#ffc107"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
            </svg>
            <span>${this._restaurant.rating}</span>
        </div>
    </div>
</div>
    `}}window.customElements.define("restaurant-card",a)},,,,function(t,e,a){var r=a(6),n=a(7),a={insert:"head",singleton:!1};r(n="string"==typeof(n=n.__esModule?n.default:n)?[[t.i,n,""]]:n,a);t.exports=n.locals||{}},,function(t,e,a){(e=a(8)(!1)).push([t.i,".text-capitalize{text-transform:capitalize}.text-center{text-align:center}.d-flex{display:flex}.d-inline-flex{display:inline-flex}.flex-center{justify-content:center;align-items:center}.flex-columns{flex-direction:column}.items-center{align-items:center}.text-secondary{color:#718096}.mt-3{margin-top:1.25em}.mb-3{margin-bottom:1.25em}.mr-1{margin-right:0.5em}.mt-1{margin-top:0.5em}.mb-1{margin-bottom:0.5em}.btn{display:inline-block;padding:0.65em 0.75em;border:1px solid #1a202c;color:white}.btn.primary{background-color:#ffc107;border:1px solid #ffc107;color:#1a202c}.like{font-size:18px;position:fixed;bottom:16px;right:16px;background-color:#f69435;color:white;border:0;border-radius:50%;width:55px;height:55px;cursor:pointer;display:flex;align-items:center;justify-content:center}*{margin:0;padding:0;box-sizing:border-box}html{min-height:100vh;scroll-behavior:smooth}body{position:relative;background-color:#edf2f7;width:100%;min-height:100%;font-family:'Open Sans', sans-serif}a{text-decoration:none}section{margin-bottom:1.5em}footer{position:relative;bottom:0;z-index:9;width:100%;text-align:center;padding:0.75em 0}[tabindex='0']:focus{outline:2px solid #ffc107}.skip-link{position:absolute;top:-40px;left:0;background-color:#ffc107;color:#1a202c;padding:8px;z-index:100}.skip-link:focus{top:0}.container{width:90%;margin:0 auto}.navbar{background-color:#1a202c;padding:0.25em 0;position:fixed;z-index:10;left:0;right:0}.navbar .container{display:flex;justify-content:space-between;align-items:center}.navbar .navbar--brand{display:flex;align-items:center;font-size:1.5em;color:#f7fafc;padding:0.5em}.navbar .navbar--brand img{width:32px;border-radius:12px;margin-right:8px}.navbar .navbar--toggle{display:inline-block;background-color:transparent;color:#f7fafc;border:none;font-size:1.5em;padding:0.25em 0.5em}.navbar .navbar--toggle:hover{cursor:pointer}.navbar .nav--list{list-style-type:none;display:flex;flex-direction:column;position:fixed;z-index:9;top:0;left:0;text-align:left;width:60%;height:100%;background-color:#1a202c;padding-top:1.5em;transition:transform 0.3s ease-in-out;transform:translateX(-1000px)}.navbar .nav--list.open{transform:translateX(0)}.navbar .nav--list .nav--item{margin-left:0.25em;color:#f7fafc;padding:0.7em 0.25em;display:inline-block;font-size:1.25em;color:#f7fafc;margin:0.15em 0.75em}.navbar .nav--list .nav--item:hover{color:#ffc107}.jumbotron{height:512px;position:relative}.jumbotron-image{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.jumbotron-text{left:0;right:0;position:absolute;color:#f7fafc;display:flex;height:100%;flex-direction:column;justify-content:center}.jumbotron-text--card{border:1px solid #1a202c;padding:1em 1.25em;width:100%;background-color:rgba(26,32,44,0.5)}.jumbotron-text-title{font-size:3em;font-weight:bold}.jumbotron-text-caption{margin:0.75em 0}.restaurants-list{display:grid;grid-template-columns:1fr;grid-gap:1.25em;gap:1.25em;margin-bottom:1.5em}.restaurants-list .restaurant{background-color:#fff;box-shadow:0 2px 4px rgba(26,32,44,0.13)}.restaurants-list .restaurant-image img{width:100%;height:245px;-o-object-fit:cover;object-fit:cover}.restaurants-list .restaurant-info{padding:0.75em 1em}.restaurants-list .restaurant-info--name a{color:#1a202c}.restaurants-list .restaurant-info--name a:hover{color:#f8bc06}.restaurants-list .restaurant-info p{line-height:24px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}#restaurant{padding-top:6rem}#restaurant .restaurant-detail{padding:1.25rem;display:grid;grid-template-columns:1fr;grid-gap:1.25em;gap:1.25em;background:white;box-shadow:0 2px 4px rgba(26,32,44,0.13)}#restaurant .restaurant-detail h1{font-size:2rem}#restaurant .restaurant-detail picture .restaurant-image{width:100%}#restaurant .restaurant-detail--description{margin-top:1.25rem}#restaurant .restaurant-menus{background:white;box-shadow:0 2px 4px rgba(26,32,44,0.13);padding:1.25rem;margin-top:2.25rem}#restaurant .restaurant-menus--list{display:grid;grid-template-columns:repeat(2, 1fr);grid-gap:0.75rem;gap:0.75rem}#restaurant .restaurant-menus--list .menu-item{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0.75rem 0.5rem;border:1px solid #e1e1e1;min-height:150px}#restaurant .restaurant-menus--list .menu-item p{margin-top:0.25rem}#restaurant .restaurant-menus--item{margin-top:0.5rem;padding:0.5rem 0;border-bottom:1px solid #b1b1b1}#restaurant .restaurant-reviews{background:white;box-shadow:0 2px 4px rgba(26,32,44,0.13);padding:1.25rem;margin-top:2.25rem}#restaurant .restaurant-reviews--item{margin-top:0.5rem;padding:0.5rem 0;border-bottom:1px solid #b1b1b1}#favorites{padding-top:6rem}@media screen and (min-width: 576px){.restaurants-list{grid-template-columns:repeat(2, 1fr)}#restaurant .restaurant-menus--list{grid-template-columns:repeat(4, 1fr)}}@media screen and (min-width: 900px){.navbar .navbar--toggle{display:none}.navbar .nav--list{position:unset;transition:unset;height:auto;width:auto;flex-direction:row;padding:unset;transform:translateX(0);transition:none}.navbar .nav--list .nav--item{font-size:1em;display:inline-block;color:#f7fafc;margin:0.15em 0.75em}.navbar .nav--list .nav--item:hover{color:#cdcd05}.jumbotron{position:relative}.jumbotron-text--card{width:50%;background-color:rgba(26,32,44,0.5)}.restaurants-list{grid-template-columns:repeat(3, 1fr)}#restaurant .restaurant-detail{grid-template-columns:1fr 2fr}#restaurant .restaurant-detail h1{font-size:2.4rem}#restaurant .restaurant-detail picture .restaurant-image{width:100%;min-height:245px;background-color:gray}#restaurant .restaurant-detail--description{margin-top:1.25rem}#restaurant .restaurant-menus--list{grid-template-columns:repeat(5, 1fr)}}@media screen and (min-width: 1200px){.restaurants-list{grid-template-columns:repeat(4, 1fr)}#restaurant .restaurant-menus--list{grid-template-columns:repeat(6, 1fr)}}\n",""]),t.exports=e},,,function(t,e,a){"use strict";a.r(e);var r={BASE_URL:"https://restaurant-api.dicoding.dev",DEFAULT_LANGUAGE:"en-us",CACHE_NAME:"restaurant-catalogue",DATABASE_NAME:"restaurant-catalogue-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants"},n={LIST:`${r.BASE_URL}/list`,DETAIL:t=>`${r.BASE_URL}/detail/${t}`};var i=class{static async listRestaurants(){const t=await fetch(n.LIST);return(await t.json()).restaurants}static async detailRestaurant(t){const e=await fetch(n.DETAIL(t));return e.json()}},s=(a(1),{async render(){return`<section id="hero-section">
    <div class="jumbotron">
        <picture>
            <source class="jumbotron-image lazyload" data-srcset="./images/heros/hero-image_4-large.jpg" media="(min-width: 768px)">
            <img class="jumbotron-image lazyload" data-src="./images/heros/hero-image_4-small.jpg" alt="Hero Image">
            Hero image
        </picture>
        <div class="jumbotron-text container">
            <div class="jumbotron-text--card">
                <h1 class="jumbotron-text-title" tabindex="0">
                    Freshtoran
                </h1>
                <p class="jumbotron-text-caption" tabindex="0">
                    Temukan Restoran yang sesuai dengan keinginan
                    Anda
                </p>
                <a
                    href="#restaurants-section"
                    class="btn primary d-inline-flex flex-center"
                >
                    <svg
                        class="mr-1"
                        width="16px"
                        height="16px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                    Temukan Restoran
                </a>
            </div>
        </div>
    </div>
</section>
<section id="restaurants-section">
    <div class="container">
        <h2 tabindex="0">Daftar Katalog Restoran</h2>
        <div class="restaurants-list mt-3">
            
        </div>
    </div>
</section>`},async afterRender(){const t=await i.listRestaurants(),a=document.querySelector(".restaurants-list");t.forEach(t=>{const e=document.createElement("restaurant-card");e.restaurant=t,a.appendChild(e)})}}),o={parseActiveUrlWithCombiner(){var t=window.location.hash.slice(1).toLowerCase(),t=this._urlSplitter(t);return this._urlCombiner(t)},parseActiveUrlWithoutCombiner(){var t=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(t)},_urlSplitter(t){t=t.split("/");return{resource:t[1]||null,id:t[2]||null,verb:t[3]||null}},_urlCombiner(t){return(t.resource?`/${t.resource}`:"/")+(t.id?"/:id":"")+(t.verb?`/${t.verb}`:"")}},e=a(3);const{DATABASE_NAME:l,DATABASE_VERSION:c,OBJECT_STORE_NAME:d}=r,u=Object(e.a)(l,c,{upgrade(t){t.createObjectStore(d,{keyPath:"id"})}});var p={async getRestaurant(t){return(await u).get(d,t)},async getAllRestaurants(){return(await u).getAll(d)},async putRestaurant(t){return(await u).put(d,t)},async deleteRestaurant(t){return(await u).delete(d,t)}};var m={async init({likeButtonContainer:t,restaurant:e}){this._likeButtonContainer=t,this._restaurant=e,await this._renderButton()},async _renderButton(){var t=this._restaurant["id"];await this._isRestaurantExist(t)?this._renderLiked():this._renderLike()},async _isRestaurantExist(t){return!!await p.getRestaurant(t)},_renderLike(){this._likeButtonContainer.innerHTML=`
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;const t=document.querySelector("#likeButton");t.addEventListener("click",async()=>{await p.putRestaurant(this._restaurant),this._renderButton()})},_renderLiked(){this._likeButtonContainer.innerHTML=`
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;const t=document.querySelector("#likeButton");t.addEventListener("click",async()=>{await p.deleteRestaurant(this._restaurant.id),this._renderButton()})}},h={"/":s,"/detail/:id":{async render(){return`
    <section id="restaurant">
    </section>
    <div id="likeButtonContainer">
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
    </div>
    `},async afterRender(){var t=o.parseActiveUrlWithoutCombiner(),t=(await i.detailRestaurant(t.id))["restaurant"];const e=document.getElementById("restaurant");e.innerHTML=(t=>{var e=t.categories.map(t=>t.name).join();let a="",r="";return t.customerReviews.forEach(t=>{a+=`
      <div class="restaurant-reviews--item">
        <h3 tabindex="0">${t.name}</h3>
        <span tabindex="0" class="text-secondary">${t.date}</span>
        <p class="mt-1" tabindex="0">${t.review}</p>
      </div>
    `}),Object.keys(t.menus).forEach(e=>{t.menus[e].forEach(t=>{r+=`
        <div class="menu-item" tabindex="0" aria-label="${t.name}">
        <svg height="28" viewBox="0 0 59 59" width="28" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="044---Fruity-Drink" fill-rule="nonzero" transform="translate(-1)"><path id="Shape" d="m14.3 6.06.01.01c1.4745992.07259827 2.8689722.69311209 3.91 1.74 1.5727163 1.77877493 2.7124502 3.8973794 3.33 6.19l-5.15 5.74c-2.4698268-.5850992-4.7573196-1.7700617-6.66-3.45-1.05022677-1.0387233-1.6713488-2.434463-1.74-3.91l1.38-4.92z" fill="#e64c3c"/><path id="Shape" d="m15.77 2.1c.0126838 1.44433187-.4989571 2.84423828-1.44 3.94-.01.01-.02.02-.03.02-1.76 1.74-4.92 1.4-4.92 1.4s-.34-3.2 1.42-4.95c1.0957617-.94104287 2.4956681-1.45268379 3.94-1.44.2762584-.01050054.5443883.09464119.7398736.29012643.1954852.19548523.3006269.46361519.2901264.73987357z" fill="#4fba6f"/><path id="Shape" d="m8 12.38-.03.03c-1.09654639.9385494-2.4967368 1.4467403-3.94 1.43-.27625838.0105005-.54438834-.0946412-.73987357-.2901264-.19548524-.1954853-.30062697-.4636152-.29012643-.7398736-.01746469-1.4451525.49477382-2.84669395 1.44-3.94 1.75-1.76 4.94-1.41 4.94-1.41s.35 3.15-1.38 4.92z" fill="#4fba6f"/><path id="Shape" d="m9.385 8.461c-.26932771.00049973-.52747074-.10766076-.716-.3-3.258-3.346-4.656-3.597-4.669-3.598-.26107242-.00145135-.51041642-.10862306-.69112209-.29705442-.18070567-.18843135-.27735104-.44204105-.26787791-.70294558.01842432-.56046905.48024319-1.00409908 1.041-1 .452 0 2.225.3 6.02 4.2.2822166.28791523.3639371.71714258.2072617 1.08861833-.1566753.37147574-.52109912.61253519-.9242617.61138167z" fill="#4c8056"/><circle id="Oval" cx="16" cy="11" fill="#f0c419" r="1"/><circle id="Oval" cx="13" cy="14" fill="#f0c419" r="1"/><path id="Shape" d="m20.69 57.68c-1.5438291 1.1321865-3.4979081 1.5506578-5.37 1.15-.4648755-.1215602-.9119608-.3030836-1.33-.54-.422352.2352765-.872527.4166903-1.34.54-4.29 1.1-9.22-3.18-11.01-9.58-1.79-6.4.26-12.48 4.56-13.58 1.81478888-.4023206 3.71507115-.0171774 5.23 1.06 1.5594669.9900557 3.5505331.9900557 5.11 0 .5239074-.3319743 1.0800761-.6100586 1.66-.83l3.8 10.1c.02.16-1.38 11.54-1.31 11.68z" fill="#e64c3c"/><path id="Shape" d="m5.5 49.177c-.44891512-.0001881-.84269078-.2995066-.963-.732-1.023-3.672-.42-6.655.486-8.222.38766547-.7894092 1.08197101-1.385406 1.921-1.649.34619036-.0893164.71373317.0128422.96417862.2679936.25044544.2551515.34574491.6245322.25.969-.09574491.3444679-.36798826.61169-.71417862.7010064-.30583649.1483534-.54923177.4002516-.687.711-.9326407 2.1128191-1.03651751 4.4991301-.291 6.685.08426526.3017023.02228759.6254579-.1674483.8747072s-.48530398.395189-.7985517.3942928z" fill="#fff"/><path id="Shape" d="m14.58 34.29c-.36 1.43-2.68 2.09-5.2 1.47-1.74-.43-4.26-2.42-5.64-3.6-.19659547-.164179-.28103703-.4269142-.21690552-.6748894.0641315-.2479751.2653634-.4368292.51690552-.4851106 1.76-.36 4.89-.87 6.63-.44 2.52.62 4.27 2.29 3.91 3.73z" fill="#4fba6f"/><path id="Shape" d="m43.25 57.85c-.3313789.7000407-1.0354922 1.1474055-1.81 1.15h-18.88c-.8412345.004404-1.592443-.5258609-1.87-1.32-.065565-.1455006-.1061334-.3010128-.12-.46l-2.37-21.32-1.38-12.44 3.18 1.59c2.5178251 1.2600171 5.4821749 1.2600171 8 0 2.5158686-1.2533919 5.4741314-1.2533919 7.99 0l.01.01c2.5166743 1.2499632 5.4733257 1.2499632 7.99 0l3.19-1.6-1.87 16.83z" fill="#f29c1f"/><path id="Shape" d="m47.99 16.22-.81 7.24-3.19 1.6c-2.5166743 1.2499632-5.4733257 1.2499632-7.99 0l-.01-.01c-2.5158686-1.2533919-5.4741314-1.2533919-7.99 0-2.5178251 1.2600171-5.4821749 1.2600171-8 0l-3.18-1.59h-.01l-.41-3.72-.39-3.52c-.0609714-.565307.1209419-1.129918.5004619-1.5533021.37952-.4233842.9209534-.6657227 1.4895381-.6666979h28c.5685847.0009752 1.1100181.2433137 1.4895381.6666979.37952.4233841.5614333.9879951.5004619 1.5533021z" fill="#9fc9d3"/><path id="Shape" d="m25 55c-.3272256.0000441-.6337714-.1600111-.8207668-.4285429s-.2307805-.6115636-.1172332-.9184571l17-46c.0708006-.19081037.1981368-.35547527.365-.472l10-7c.4520489-.29636803 1.0577858-.17987063 1.3676555.26303221.3098698.44290285.2116982 1.05187836-.2216555 1.37496779l-9.743 6.821-16.892 45.707c-.1452211.3925009-.5194954.6530564-.938.653z" fill="#ff5364"/><g fill="#d25627"><circle id="Oval" cx="24.5" cy="32.5" r="2.5"/><circle id="Oval" cx="23" cy="40" r="1"/><circle id="Oval" cx="24" cy="45" r="1"/></g><path id="Shape" d="m58.83 55.37c-2.7191622 2.3570604-6.2014879 3.6469423-9.8 3.63-3.9867732.0018581-7.8107922-1.5810585-10.6298668-4.4001332-2.8190747-2.8190746-4.4019913-6.6430936-4.4001332-10.6298668-.0169423-3.5985121 1.2729396-7.0808378 3.63-9.8.1779951-.2191603.4403404-.3528655.7222646-.3681046.2819243-.0152392.5571534.0894079.7577354.2881046l2.1 2.1c-4.2716262 4.3139788-4.2544724 11.2687629.0383824 15.5616176 4.2928547 4.2928548 11.2476388 4.3100086 15.5616176.0383824l2.1 2.1c.1986967.200582.3033438.4758111.2881046.7577354-.0152391.2819242-.1489443.5442695-.3681046.7222646z" fill="#f0c419"/><path id="Shape" d="m56.81 51.79c-1.578775 1.5837401-3.607704 2.6418563-5.81 3.03-.6521104.1285347-1.3153464.1921786-1.98.19h-.02c-2.5685881-.009105-5.0526792-.918523-7.02-2.57-.525162-.4185002-1.0014998-.894838-1.42-1.42-1.651477-1.9673208-2.560895-4.4514119-2.57-7.02v-.02c-.0021786-.6646536.0614653-1.3278896.19-1.98.3881437-2.202296 1.4462599-4.231225 3.03-5.81z" fill="#f3d55b"/><path id="Shape" d="m51 54.82c-.6521104.1285347-1.3153464.1921786-1.98.19h-.02l-.01-9.59-7.01 7.02c-.525162-.4185002-1.0014998-.894838-1.42-1.42l7.02-7.01-9.59-.01v-.02c-.0021786-.6646536.0614653-1.3278896.19-1.98l8.85.01 3.96 3.96z" fill="#f29c1f"/><path id="Shape" d="m13.99 40.99c-.5522847 0-1-.4477153-1-1v-2c0-5.1 2.552-7.44 4.074-8.381.4681137-.2714136 1.0672016-.1212414 1.3519408.3388884.2847391.4601298.1518258 1.0632816-.2999408 1.3611116-1.168.721-3.126 2.547-3.126 6.679v2c.0005311.2655628-.1045912.5204309-.2921852.7084-.1875939.1879692-.4422514.2936005-.7078148.2936z" fill="#805333"/><path id="Shape" d="m40.85 14-4.19 11.35c-.22-.09-.44-.18-.66-.29l-.01-.01c-.3789826-.1932325-.7737445-.3538136-1.18-.48l3.9-10.57z" fill="#df4d60"/><path id="Shape" d="m36 25.06c.22.11.44.2.66.29l-10.72 29c-.1464639.3920069-.5215275.6513593-.94.65-.1191894-.000422-.2374755-.0206996-.35-.06-.5155516-.1971494-.7780355-.7710549-.59-1.29l10.75-29.08c.4062555.1261864.8010174.2867675 1.18.48z" fill="#c03a2b"/></g></g></svg>
          <p class="text-center">${t.name}</p>
          <small class="text-secondary text-capitalize">${e}</small>
        </div>
      `})}),`
  <div class="container">
    <div class="restaurant-detail">
      <div class="restaurant-detail-thumbnail">
        <picture>
          <source class="restaurant-image lazyload" data-srcset="https://restaurant-api.dicoding.dev/images/large/${t.pictureId}" media="(min-width: 992px)">
          <source class="restaurant-image lazyload" data-srcset="https://restaurant-api.dicoding.dev/images/medium/${t.pictureId}" media="(min-width: 768px)">
          <img class="restaurant-image lazyload" data-src="https://restaurant-api.dicoding.dev/images/small/${t.pictureId}" alt="Some picture">
        </picture>
      </div>
      <div class="restaurant-detail--info">
        <div class="text-secondary" tabindex="0">
            ${t.address}, ${t.city}
        </div>
        <h1 tabindex="0">${t.name}</h1>
        <div class="d-flex items-center">
          <span class="mr-1" tabindex="0" aria-label="Kategori ${e}">${e}</span>
          <span class="mr-1">&bullet;</span>
          <span class="d-inline-flex flex-center mr-1" tabindex="0" aria-label="rating ${t.rating}">
            <svg
            class="mr-1"
            width="16"
            height="16"
            fill="#ffc107"
            stroke="#ffc107"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
            </svg>
            <span>${t.rating}</span>
          </span>
          <span class="mr-1">&bullet;</span>
          <span tabindex="0" aria-label="Jumlah review ${t.customerReviews.length}">${t.customerReviews.length} Reviews</span>
        </div>
  
        <p class="restaurant-detail--description" tabindex="0">${t.description}</p>
      </div>
    </div>

    <div class="restaurant-menus">
      <h2 tabindex="0" class="mb-3">Daftar Menu</h2>
      <div class="restaurant-menus--list">
        ${r}
      </div>
    </div>
  
    <div class="restaurant-reviews">
      <h2 tabindex="0">Reviews</h2>
      ${a}
    </div>
  </div>
  `})(t),m.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),restaurant:t})}},"/favorites":{async render(){return`
<section id="favorites">
    <div class="container">
        <h2 tabindex="0">Daftar Favorite Restoran</h2>
        <div class="restaurants-list mt-3">
            
        </div>
    </div>
</section>`},async afterRender(){const t=await p.getAllRestaurants(),a=document.querySelector(".restaurants-list"),e=document.getElementById("favorites");0<t.length?t.forEach(t=>{const e=document.createElement("restaurant-card");e.restaurant=t,a.appendChild(e)}):e.innerHTML=`
        <div class="no-restaurant d-flex flex-center">
          Anda belum menambahkan restorant favorite.
        </div>
      `}}},f={init({button:t,drawer:e,content:a}){t.addEventListener("click",t=>{this._toggleDrawer(t,e)}),a.addEventListener("click",t=>{this._closeDrawer(t,e)})},_toggleDrawer(t,e){t.stopPropagation(),e.classList.toggle("open")},_closeDrawer(t,e){t.stopPropagation(),e.classList.remove("open")}};var e=class{constructor({button:t,drawer:e,content:a}){this._button=t,this._drawer=e,this._content=a,this._initiateAppShell()}_initiateAppShell(){f.init({button:this._button,drawer:this._drawer,content:this._content})}async renderPage(){var t=o.parseActiveUrlWithCombiner();const e=h[t];console.log(`Url : ${t}`),this._content.innerHTML=await e.render(),await e.afterRender()}},s=a(2),g=a.n(s),b=()=>{"serviceWorker"in navigator?g.a.register():console.log("Service worker not supported in this browser")};a(4),a(5),a(0),a(9);const v=new e({button:document.querySelector(".navbar .navbar--toggle"),drawer:document.querySelector(".navbar .nav--list"),content:document.querySelector("#main-content")});window.addEventListener("hashchange",()=>{v.renderPage()}),window.addEventListener("load",()=>{v.renderPage(),b()})}]);