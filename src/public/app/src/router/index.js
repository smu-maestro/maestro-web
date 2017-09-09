import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Lesson from '@/components/Lesson'
import LessonTitle from '@/components/LessonTitle'
import LessonQuiz from '@/components/LessonQuiz'
import LessonCompletion from '@/components/Lesson-completion'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
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
