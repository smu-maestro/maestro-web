import Home from '../components/Home.vue';
import Lesson from '../components/Lesson.vue';
import LessonTitle from '../components/LessonTitle.vue';
import LessonQuiz from '../components/LessonQuiz.vue';
import LessonCompletion from '../components/Lesson-Completion.vue';
import LessonContent from '../components/LessonContent.vue';
import Registration from '../components/Registration.vue';


export default new VueRouter({
  routes: [
    {
      path: '/title',
      name: 'LessonTitle',
      component: LessonTitle
    }, 
    {
      path: '/lesson',
      name: 'Lesson',
      component: Lesson
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: LessonQuiz
    },
    {
      path: '/completion',
      name: 'Completion',
      component: LessonCompletion
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
