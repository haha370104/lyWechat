Page({
  data: {
    // 这里每张图片对应上方banner图的图片地址
    bannerList: [
      "http://ot8jhftru.bkt.clouddn.com/contact_banner1.jpg"
    ],
    /*
     * text为这个标签的文字
     * title为这个标签对应下方文字的标题
     * contents为每行字 每行字之间有一个间距
     * image对应这下面的图片，默认会把图片横向填满手机，纵向等比拉伸，如果有image将会忽略contents和title
     */
    tags: [
      {
        text: '商务合作',
        title: 'Get in touch',
        // contents: ['中国.上海.杨浦区政立路150号\r\n江湾体育场环廊111单元', 'bussiness@loedesign.com', '+86 21 3632 1881',],
        image: 'http://ot8jhftru.bkt.clouddn.com/contact_bussiness.jpg'
      },
      {
        text: '联系我们',
        title: 'Join us',
        image: 'http://ot8jhftru.bkt.clouddn.com/contact_joinus.jpg'
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
