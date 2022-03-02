<template>
    <div class="wrapper">

        <section class="range-slider container">
            <span class="output outputOne"></span>
            <span class="output outputTwo"></span>
            <span class="full-range"></span>
            <span class="incl-range"></span>
            <input name="rangeOne" value="10" min="0" max="100" step="1" type="range">
            <input name="rangeTwo" value="90" min="0" max="100" step="1" type="range">
        </section>

    </div>
</template>

<script>
export default{
    mounted(){
    
    var rangeOne = document.getElementsByName('input[name="rangeOne"]')[0],
    rangeTwo = document.getElementsByName('input[name="rangeTwo"]')[0],
    outputOne = document.getElementsByClassName('.outputOne')[0],
    outputTwo = document.getElementsByClassName('.outputTwo')[0],
    inclRange = document.getElementsByClassName('.incl-range')[0],
    updateView = function () {
      if (this.getAttribute('name') === 'rangeOne') {
        outputOne.innerHTML = this.value;
        outputOne.style.left = this.value / this.getAttribute('max') * 100 + '%';
      } else {
        outputTwo.style.left = this.value / this.getAttribute('max') * 100 + '%';
        outputTwo.innerHTML = this.value
      }
      if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
        inclRange.style.width = (rangeOne.value - rangeTwo.value) / this.getAttribute('max') * 100 + '%';
        inclRange.style.left = rangeTwo.value / this.getAttribute('max') * 100 + '%';
      } else {
        inclRange.style.width = (rangeTwo.value - rangeOne.value) / this.getAttribute('max') * 100 + '%';
        inclRange.style.left = rangeOne.value / this.getAttribute('max') * 100 + '%';
      }
    };

  document.addEventListener('DOMContentLoaded', function () {
    updateView.call(rangeOne);
    updateView.call(rangeTwo);
    var a = document.getElementsByTagName('input[type="range"]')
    
    for(var i = 0; i < a.length; i++) {
    a.on('mouseup', function() {
      this.blur();
    }).on('mousedown input', function () {
      updateView.call(this);
    });
    }
  });
    }
}

</script>


<style lang="scss" scoped>
/* https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/ */

.range-slider {
    position: relative;
    width: 200px;
    height: 35px;
    text-align: center;
}

.range-slider input {
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 15px;
    width: 200px;
    outline: none;
    height: 18px;
    margin: 0;
    padding: 0;
}

.range-slider input::-webkit-slider-thumb {
    pointer-events: all;
    position: relative;
    z-index: 1;
    outline: 0;
}

.range-slider input::-moz-range-thumb {
    pointer-events: all;
    position: relative;
    z-index: 10;
    -moz-appearance: none;
    width: 9px;
}

.range-slider input::-moz-range-track {
    position: relative;
    z-index: -1;
    background-color: rgba(0, 0, 0, 1);
    border: 0;
}

.range-slider input:last-of-type::-moz-range-track {
    -moz-appearance: none;
    background: none transparent;
    border: 0;
}

.range-slider input[type=range]::-moz-focus-outer {
  border: 0;
}

.rangeValue {
  width: 30px;
}

.output {
  position: absolute;
  border:1px solid #999;
  width: 40px;
  height: 30px;
  text-align: center;
  color: #999;
  border-radius: 4px;
  display: inline-block;
  font: bold 15px/30px Helvetica, Arial;
  bottom: 75%;
  left: 50%;
  transform: translate(-50%, 0);
}

.output.outputTwo {
  left: 100%;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

input[type=range] {
  -webkit-appearance: none;
  background: none;
}

input[type=range]::-webkit-slider-runnable-track {
  height: 5px;
  border: none;
  border-radius: 3px;
  background: transparent;
}

input[type=range]::-ms-track {
  height: 5px;
  background: transparent;
  border: none;
  border-radius: 3px;
}

input[type=range]::-moz-range-track {
  height: 5px;
  background: transparent;
  border: none;
  border-radius: 3px;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #555;
  margin-top: -5px;
  position: relative;
  z-index: 10000;
}

input[type=range]::-ms-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #555;
  margin-top: -5px;
  position: relative;
  z-index: 10000;
}

input[type=range]::-moz-range-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #555;
  margin-top: -5px;
  position: relative;
  z-index: 10000;
}

input[type=range]:focus {
  outline: none;
}

.full-range,
.incl-range {
  width: 100%;
  height: 5px;
  left: 0;
  top: 21px;
  position: absolute;
  background: #DDD;
}

.incl-range {
  background: gold;
}

</style>
