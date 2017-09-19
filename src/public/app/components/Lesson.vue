<template>
  <div>
      <progress-bar :num="cardNum" :total="this.lesson.content.length"></progress-bar>
      <section class="lesson">
        <div class="lesson-content-card">
          <lesson-content v-show="isContent() && cardNum < this.lesson.content.length" :card="this.lesson.content[cardNum]"></lesson-content>
          <lesson-quiz v-if="isQuiz() && cardNum < this.lesson.content.length"  @readyToSwipe="toogleDisabled" :card="this.lesson.content[cardNum]"></lesson-quiz>
          <div class="lesson-content-card-bar">
                <button v-show="cardNum >  0 && cardNum < this.lesson.content.length" class="button link-button big-button" @click="prev">Back</button>
                <button v-show="cardNum <  this.lesson.content.length" :disabled="isDisabled" class="button link-button big-button" @click="next">Next</button>
                <button v-show="cardNum ===  this.lesson.content.length" class="button link-button big-button" @click="finish">Finish</button>
          </div>
        </div>
    </section>
  </div>
</template>



<script>
import ProgressBar from './ProgressBar.vue';
import LessonContent from './LessonContent.vue';
import LessonQuiz from './LessonQuiz.vue';
import Completion from './Lesson-Completion.vue';

var lesson = { 
  title: 'Lesson 1',
  number: '1',
  content: 
   [ { type: 'content',
       text: 'Data failed',
       image: '' }],
};

export default {
  name: 'lesson',
  data: function() {
    return {
      lesson:lesson,
      cardNum:0,
      progress:0,
      current:0,
      isDisabled: false
    }
  },
  props: [ 'num' ],
  mounted() {
    this.current = this.num;
    var query = new Parse.Query('lesson');
    query.equalTo('number',`${this.current}`);
		query.first().then( result => {
        this.lesson = result.attributes;
    }).catch((err) => {
      console.error(err);
    })
    if (localStorage.getItem("currentslide")) {
      this.cardNum = parseInt(localStorage.getItem("currentslide"));
    }	else {
      this.cardNum=0;
    }	
  },
  methods: {
    next() {
      console.log(this.lesson.content.length);
      if( (this.cardNum+1) < this.lesson.content.length ) {
        console.log("in cardhi");
        this.cardNum = this.cardNum+1; 
        localStorage.setItem("currentslide", this.cardNum);
      } else if ((this.cardNum+1) == this.lesson.content.length){
        this.$router.push({name: 'Completion'});
      } else {
        console.log("eror");
        //this.$router.push({name: 'Completion'});
        //console.log("Done with lesson" + this.cardNum);
        //this.cardNum = this.cardNum+1;
      }
    },
    toogleDisabled(ready) {
      console.log("ready" + ready);
      this.isDisabled = !ready;

    },
    prev() {
      this.cardNum = this.cardNum-1;
      this.isDisabled = false;
    },
    finish() {
       this.$router.push({name: 'Home', num:current});
    },
    isContent() {
      if( this.lesson.content[(this.cardNum)].type==='content' ) {
        return true;
      } else {
        return false; 
      }
    },
    isQuiz() {
      if( this.lesson.content[(this.cardNum)].type==='quiz' ) {              
        return true;
      } else {
        return false; 
      }
    }
  },
  components: {
    'progress-bar': ProgressBar,
    'lesson-content': LessonContent,
    'lesson-quiz': LessonQuiz,
    'lesson-completion': Completion
  }

}
</script>
