<template>
  <div class="footer">
    <div class="wrapper">
      <section>
        <h4>Social Media</h4>
        <hr />
        <div class="social-media">
          <img src="@/assets/icons/socialMedia/twitter.svg" alt="Icon" />
          <a href="https://twitter.com/">Twitter </a>
        </div>
        <div class="social-media">
          <img src="@/assets/icons/socialMedia/facebook.svg" alt="Icon" />
          <a href="https://facebook.com/">Facebook </a>
        </div>
        <div class="social-media">
          <img src="@/assets/icons/socialMedia/instagram.svg" alt="Icon" />
          <a href="https://instagram.com/">Instagram </a>
        </div>
        <div class="social-media">
          <img src="@/assets/icons/socialMedia/youtube.svg" alt="Icon" />
          <a href="https://youtube.com/">YouTube </a>
        </div>
      </section>
      <section>
        <h4>About Us</h4>
        <hr />
        <label>Our About Page</label>
        <label>Our Developers</label>
      </section>
      <section>
        <h4>Find US</h4>
        <hr />
        <plaintext></plaintext>
        <p>Cool Street 7th Radville 12741 Sweden</p>
      </section>
      <section>
        <h4>Work With US</h4>
        <hr />
        <p>Send Application:</p>
        <label>jobs.sinus@sinus.se</label>
        <p>For Information:</p>
        <label>info.sinus@sinus.se</label>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/styles/_functions.scss";

.footer {
  @include flexCenter(column);
  background-color: $interfaceBlack;
  min-height: 242px;
  .wrapper {
    @include flexCenter(row);
    background-color: $pureWhite;
    column-gap: 7%;
    width: 68.334%;
    border-radius: 16px;
    section {
      max-width: 130px;
      min-height: 200px;
      justify-content: space-around;
      margin-top: 1rem;
      h4 {
        display: flex;
        justify-content: center;
      }
      .social-media {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding-bottom: 0.777rem;
      }
      label {
        padding-bottom: 0.5rem;
        display: block;
        color: $monsterGreen;
        font-size: 16px;
        font-weight: bold;
      }
      p {
        font-size: 16px;
        font-weight: bold;
      }
      hr {
        size: 5px;
        margin-top: 5px;
        margin-bottom: 10px;
      }
      a {
        color: $monsterGreen;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}
</style>
