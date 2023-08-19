var posts=["posts/882eae.html","posts/882eae5.html","posts/undefined.html","posts/882eae4.html","posts/b313554c.html","posts/3927.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"kilito","link":"https://blog.wudl.cn/","avatar":"https://bu.dusays.com/2023/08/14/64d9d5100e495.jpg","descr":"今天也是元气满满的一天","siteshot":"https://bu.dusays.com/2023/08/17/64ddf36ad5ec3.png","color":"vip","tag":"技术"},{"name":"幻梦晓寒-HACKFOX","link":"https://xiaohan.xfcloud.org","avatar":"https://f003.backblazeb2.com/file/pic-pan/1681579785696.jpg","descr":"愿此生，无悔","siteshot":"https://bu.dusays.com/2023/08/17/64ddf5639fa2f.png","color":null,"tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg","color":"vip","tag":"技术"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc9de6507.webp","descr":"期待您的光临！","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc39c5966.webp","color":"speed","tag":"生活"},{"name":"Tianli","link":"https://tianli-blog.club","avatar":"https://img02.anheyu.com/adminuploads/1/2022/11/11/636db0d451fd0.webp","descr":"惟其不可能，所以才相信。","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/11/07/6368520c9e4e7.webp","color":null,"tag":"技术"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };