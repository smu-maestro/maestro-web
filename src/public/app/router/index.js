import Lesson from '../components/Lesson.vue';
import LessonTitle from '../components/LessonTitle.vue';
import LessonCompletion from '../components/Lesson-Completion.vue';
import LessonContent from '../components/LessonContent.vue';
import TOC from '../components/TOC.vue'


export default new VueRouter({
  routes: [
    {
      path: '/lesson:num/title',
      name: 'LessonTitle',
      component: LessonTitle,
      props:true
    }, 
    {
      path: '/lesson:num',
      name: 'Lesson',
      component: Lesson,
      props:true
    },
    {
      path: '/lesson:num/completion',
      name: 'Completion',
      component: LessonCompletion,
      props:true
    },
    {
      path: '/',
      name: 'TOC',
      component: TOC
    }
  ]
})
