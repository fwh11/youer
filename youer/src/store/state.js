import {loadSearch} from './common/cache.js';

const state = {
    singer:{},
    playing:false,
    fullScreen:false,
    playList:[],
    sequenceList:[],
    mode:playMode.sequence,
    currentIndex:-1,
    disc:{},
    topList:{},
    searchHistory:loadSearch()　　　　//默认值从本地存储中获取
}
export default state