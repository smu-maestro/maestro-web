<template>
    <div class="toc">
        <section class="table-of-contents">
                <div class="card" v-for="lesson in this.lessons">
                    <h2 class="lesson-num">LESSON {{ lesson.attributes.number }}</h2>
                    <h3 class="lesson-name">{{ lesson.attributes.title }}</h3>
                </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'TOC',
    data () {
        return {
            lessons: []
        }
    },
    beforeCreate: function() {
        document.body.className= "grey";

    },
    mounted() {
        var query = new Parse.Query('lesson');
        query.find().then((results) => {
            this.lessons = results
        });	
  },
  methods: {
    next() {
       this.$router.push({name: 'LessonTitle'});
    }
  }
}
</script>
