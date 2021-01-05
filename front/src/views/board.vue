<template>
  <div class="view-wrap">
    <div class="write-wrap">
      <img src="../img/profile-sample2.png" alt="프로필 사진" class="user-img">
      <textarea class="write-box" placeholder="Type your post..."></textarea>
    </div>
    <ul class="board-list">
      <li class="board-item">
        <div class="info-wrap">
          <img src="../img/profile-sample2.png" alt="프로필 사진" class="user-img">
          <div class="info-box">
            <span class="user-name">Bee</span><button class="post-del">삭제</button>
            <span class="post-time">2020.11.14</span>
          </div>
          <p class="post-txt">
            2020년 11월 14일에 작성한 글입니다.
          </p>
        </div>
      </li>
      <li class="board-item">
        <div class="info-wrap">
          <img src="../img/profile-sample2.png" alt="프로필 사진" class="user-img">
          <div class="info-box">
            <span class="user-name">Bee</span><button class="post-del">삭제</button>
            <span class="post-time">2020.11.14</span>
          </div>
          <p class="post-txt">
            2020년 11월 14일에 작성한 글입니다.
          </p>
          <img src="../img/post-sample.png" alt="post-sample" class="post-img">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'board',
  components: {

  }
}
</script>

<style scoped>
  .view-wrap {flex-direction: column; align-items: center; background-color: #fff;}
  .write-wrap {height: 55px; margin: 35px 0;}
  .write-wrap .user-img{width: 55px; height: 55px; border-radius: 50%;}
  .write-wrap .write-box {width: 625px; height: 55px; padding: 12px 25px; background-color: #8D25BA; border-radius: 30px; font-family: 'NanumSquare'; font-size: 20px; line-height: 1.5; resize: none; color: #fff; box-sizing: border-box; overflow: scroll; -ms-overflow-style: none; scrollbar-width: none;}
  .write-wrap .write-box::placeholder {color: rgba(255, 255, 255, 0.5);}
  .write-wrap .write-box::-webkit-scrollbar {display: none;}
</style>