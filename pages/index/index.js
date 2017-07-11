Page({
  data: {
    // 这里每张图片对应上方banner图的图片地址
    bannerList: [
      "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
      "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
      "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
      "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
      "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
    ],
    /*
     * text为这个标签的文字
     * images为这个标签对应的下方图片的地址
     */
    tags: [
      {text: '创新策略', images:[
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
      ]},
      {text: '工业设计', images:[
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
      ]},
      {text: '视觉整合', images:[
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
      ]},
      {text: '交互体验', images:[
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
        "http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg",
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
