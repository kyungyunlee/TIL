<template>
  <div>
    <div class="titleContainer">
      <h1>인생을 마음 먹은대로 살되
        <br>마음대로는 살지 않겠다.
        <br><span>- 랩모녕</span>
      </h1>

      <div class="infoContainer">
        <div class="name">Learn something everyday</div>
        <p>Personal study notes, diary, etc.</p>
        <ul>
          <li>
            <a href="https://kyungyunlee.github.io">Website</a>
          </li>
          <li>
            <a href="https://github.com/kyungyunlee">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@700&display=swap');

.infoContainer {
  text-align: right;
}
h1 {
  font-family: 'Nanum Gothic Coding', sans-serif;
  font-weight: 400;
  border-bottom: 10px solid #1589FF;
  word-break: keep-all;
  font-size: 3.5rem;
}
.name {
  font-weight: 400;
  font-size: 2rem;
}
ul {
  list-style: none;
  line-height: 1.5rem;
}

@media (max-width: 550px) {
  h1 {
    font-size: 3rem;
  }

  .name {
    font-size: 1.7rem;
  }
}

@media (max-width: 430px) {
  h1 {
    font-size: 3rem;
  }
}
</style>
