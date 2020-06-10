import {Lightning} from "wpe-lightning-sdk";
import Item from "../item/Item"

export default class List extends Lightning.Component {
    static _template() {
        return {
            Label: {
                text: {text: '', fontFace: 'Magra'}
            },
            Movies: {
                y: 75
            }
        }
    }

    _init() {
        this._index = 0;
    }

    _handleLeft() {
        // @todo: update index and call setIndex
        this.setIndex(-1)
    }

    _handleRight() {
        // @todo: update index and call setIndex
        this.setIndex(1)
    }

    setIndex(index) {
        /**
         * @todo:
         * Implement working setIndex method
         * that stores index and position movie component to focus
         * on selected item
         */
         console.log("this.activeItem() %o",this.activeItem);
         this.activeItem._unfocus()
         this._index  += index
         if(this._index === -1)
            this._index = this.items.length-1
        if(this._index === this.items.length)
           this._index = 0
        this.activeItem._focus()
    }

    set label(v) {
      this.tag('Label').patch({
        text: {
          text: v,
        }
      })
    }

    set movies(v) {
        // we add an array of object with type: Item
        // this.tag("Levels").children = v.map((el, idx)=>{
        //     return {
        //         type: Item
        //     };
        // });
        console.log(v);
        this.tag("Movies").children = v.map((el, idx)=>{
          return {
                   x: idx * 220,
                   item : el,
                   type: Item
              };
      });
    }

    get items() {
        return this.tag("Movies").children;
    }

    get activeItem() {
      console.log("pp %",this.items);
        return this.items[this._index]
    }

}
