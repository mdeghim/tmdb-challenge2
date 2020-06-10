import {Lightning, Utils} from "wpe-lightning-sdk";

export default class Level extends Lightning.Component{
    static _template(){
        return {
            Image: {

            },
            Title: {
                y: 310, x: 20,
                text: {fontFace: "SourceSansPro-Bold", fontSize: 24}
            }
        }
    }

    /**
     * @todo:
     * - toggle alpha on focus / unfocus (transition)
     */
     _focus() {
       this.patch({smooth: { alpha: 1, scale: 1.2 } })
     }

     _unfocus() {
       this.patch({smooth: { alpha: 0.8, scale: 1 } })
     }

    set item(v){
        console.log("On create item %o",v);
        this.patch({
        Image: {
          src: `https://image.tmdb.org/t/p/w200/${v.poster_path}`,
        },
        Title: {
          text: {
            text: v.title
          }
        }
      })
    }
}
