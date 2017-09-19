<template>
    <div class="toc">
        <section class="table-of-contents">
                <div v-for="lesson in lessons">
                    <div class="card" @click="select(lesson.attributes.number)">
                        <h2 class="lesson-num">LESSON {{ lesson.attributes.number }}</h2>
                        <h3 class="lesson-name">{{ lesson.attributes.title }}</h3>
                    </div>

                </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'TOC',
    data: function() {
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
    },
    select(id) {
        this.$router.push({name: 'LessonTitle', params:{num:id}});
    }
  }
}
</script>
