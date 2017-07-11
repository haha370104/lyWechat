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
     * title为这个标签对应下方文字的标题
     * contents为每行字 每行字之间有一个间距
     * image对应这下面的图片，默认会把图片横向填满手机，纵向等比拉伸，如果有image将会忽略contents和title
     */
    tags: [
      {
        text: 'BUSSINESS',
        title: 'Get in touch',
        // contents: ['中国.上海.杨浦区政立路150号\r\n江湾体育场环廊111单元', 'bussiness@loedesign.com', '+86 21 3632 1881',],
        image: 'http://file.baixing.net/201707/f562eedcbbc671d5554ba32d54a4b840.jpg'
      },
      {
        text: 'JOIN US',
        title: 'Join us',
        contents: ['我们，一直在寻找有才华和激情的人\r\n加入我们的团队', 'bussiness@loedesign.com', '+86 21 3632 1881',],
        // image: ''
      },
    ],
    selectedTagIndex: 0,
  },

  onPress: function (e) {
    this.setData({
      selectedTagIndex: e.target.dataset.tagIndex
    });
  }
});
