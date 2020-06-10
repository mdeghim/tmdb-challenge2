import {Lightning, Utils} from 'wpe-lightning-sdk';
import {List} from "../components"

export default class Main extends Lightning.Component{
    static _template() {
        return {
            Lists: {
                x: 100,
                y: 560,
                zIndex: 3,
                List: {
                  type: List,
                }
            },
            Logo: {
              src: Utils.asset("images/logo.png"),
              x: 100,
              y: 50,
            }
        };
    }

    _init() {
        this._index = 0;
    }


    _focus() {

    }

    /**
     * @todo: add set movies() that will be called by the data-provider
     * inside set movies create new List child and call it's movies setter
     * and hand over the movies
     */
     set movies(data) {
       this.tag('List').movies = data.results
     }

    _unfocus() {
        // @todo
    }

    _getFocused() {
        return this.tag('List')
    }
}
