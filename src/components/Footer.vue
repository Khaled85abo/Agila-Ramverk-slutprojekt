<template>
  <div class="footer">
    <div class="wrapper">
      <article>
        <section>
          <p>Social Media</p>
          <hr>
          <label>Twitter</label>
          <label>Facebook</label>
          <label>Instagram</label>
          <label>YouTube</label>
        </section>
        <section>
           <p>About Us</p>
           <hr>
          <label>Our About Page</label>
          <label>Our Developers</label>
        </section>
        <section>
           <p>Find US</p>
           <hr>
          <p>
            Cool Street 7th <br>
            Radville <br>
            12741 <br>
            Sweden
          </p>
        </section>
        <section>
           <p>Work With US</p>
           <hr>
          <p>Send Application at:</p>
          <label>jobs.sinus@sinus.se</label>
          <p>For Information:</p>
          <label>info.sinus@sinus.se</label>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@mixin flexCenter($direction){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: $direction;
}
.footer{

   @include flexCenter(column);
   background-color: $interfaceBlack;
   width: 1440px;
   height: 242px;
   .wrapper{
     background-color: $pureWhite;
     width: 1059px;
     height: 225px;
     border-radius: 16px;
     article{ 
       @include flexCenter(row);
       gap: 52px;
       margin-top: 1rem;
     }
     section{
       text-align: center;
      p{
        font-size: 16px;
        font-weight: bold;
        margin-top: 10px;
      }
       width: 147px;
       height: 177px;
       hr{
         size: 5px;
         margin-top: 5px;
       }
       label{
         margin-top: 10px;
         display: block;
         color: $monsterGreen
       }
     }
   }
}

</style>
