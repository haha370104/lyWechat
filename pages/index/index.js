Page({
  data: {
    // 这里每张图片对应上方banner图的图片地址
    bannerList: [
      "http://ot8jhftru.bkt.clouddn.com/index_banner1.jpg",
    ],
    /*
     * text为这个标签的文字
     * images为这个标签对应的下方图片的地址
     */
    tags: [
      {text: '创新策略', images:[
        "http://ot8jhftru.bkt.clouddn.com/home_tab2.jpg",
        "http://ot8jhftru.bkt.clouddn.com/home_tab1.jpg",
      ]},
      {text: '工业设计', images:[
        "http://ot8jhftru.bkt.clouddn.com/home_tab2.jpg",
        "http://ot8jhftru.bkt.clouddn.com/home_tab1.jpg",
      ]},
      {text: '视觉整合', images:[
        "http://ot8jhftru.bkt.clouddn.com/home_tab2.jpg",
        "http://ot8jhftru.bkt.clouddn.com/home_tab1.jpg",
      ]},
      {text: '交互体验', images:[
        "http://ot8jhftru.bkt.clouddn.com/home_tab2.jpg",
        "http://ot8jhftru.bkt.clouddn.com/home_tab1.jpg",
      ]},
    ],
    selectedTagIndex: 0,
  },

  onPress: function (e) {
    this.setData({
      selectedTagIndex: e.target.dataset.tagIndex
    });
  }
});
