import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `custom-component`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CustomComponent extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          display: block;
        }
        a {
  color: inherit;
}

.cards-wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4rem;
  padding: 4rem;
  margin: 0 auto;
  width: max-content;
}

.card {
  font-family: 'Heebo';
  --bg-filter-opacity: 0.5;
  background-image: linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.6)), url("https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg");
  height: 20em;
  width: 15em;
  font-size: 1.5em;
  color: white;
  border-radius: 1em;
  padding: 1em;
  /*margin: 2em;*/
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 2em -1em black;
  transition: all .05s;
  position: relative;
  overflow: hidden;
  border: 10px solid #ccc;
  text-decoration: none;
}

.card:hover {
  transform: rotate(0);
}

.card h1 {
  margin: 0;
  font-size: 1.5em;
  line-height: 1.2em;
}

.card p {
  font-size: 0.75em;
  font-family: 'Open Sans';
  margin-top: 0.5em;
  line-height: 2em;
}

.card .tags {
  display: flex;
}

.card .tags .tag {
  font-size: 0.75em;
  background: rgba(255,255,255,0.5);
  border-radius: 0.3rem;
  padding: 0 0.5em;
  margin-right: 0.5em;
  line-height: 1.5em;
  transition: all .05s;
}

.card:hover .tags .tag {
  background: #3c3163;
  color: white;
}

.card .date {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.75em;
  padding: 1em;
  line-height: 1em;
  opacity: .8;
}

.card:before, .card:after {
  content: '';
  transform: scale(0);
  transform-origin: top left;
  border-radius: 50%;
  position: absolute;
  left: -50%;
  top: -50%;
  z-index: -5;
  transition: all .05s;
  transition-timing-function: ease-in-out;
}

.card:before {
  background: #ddd;
  width: 250%;
  height: 250%;
}

.card:after {
  background: white;
  width: 200%;
  height: 200%;
}

.card:hover {
  color: #3c3163;
}

.card:hover:before, .card:hover:after {
  transform: scale(1);
}

.card-grid-space .num {
  font-size: 3em;
  margin-bottom: 1.2rem;
  margin-left: 1rem;
}

.info {
  font-size: 1.2em;
  display: flex;
  padding: 1em 3em;
  height: 3em;
}

.info img {
  height: 3em;
  margin-right: 0.5em;
}

.info h1 {
  font-size: 1em;
  font-weight: normal;
}
      </style>
  <div class="card-grid-space">
    <a class="card" href="#">
      <div>
        <h1>{{header}}</h1>
        <p>{{subheader}}</p>
        <div class="date">{{date}}</div>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
    `;
    }

    static get properties() {
        return {
            header: {
              type: String
            },
            author: {
              type: String
            },
            description: {
              type: String
            },
            subheader: {
              type: String,
              computed: '_subheader(author, description)'
            },
            date: {
              type: String
            }
        };
    }

  constructor() {
    super();
    this.addEventListener('click', this.toggleClick.bind(this));
  }

  toggleClick() {
      console.log('I have been clicked!!!!!!!!!')
  }

  _subheader(author, description) {
      return `${author.toUpperCase()}: ${description}`
  }
}

window.customElements.define('denitrip-card', CustomComponent);
