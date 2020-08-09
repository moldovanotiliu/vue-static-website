<template>
  <div id="quiz">

    
    <Header 
    :numCorrect="numCorrect"
    :numTotal="numTotal"
    />

    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="10" offset="0">
          <QuestionBox 
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
          />
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>
<script>
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'

export default {
  name: 'App',
  components: {
    Header,
    QuestionBox
  },
  data(){
    return {
      questions:[],
      index: 0,
      numCorrect: 0,
      numTotal: 0
    }
  },
  methods: {
    next(){
      this.index++
    },
    increment(isCorrect){
      if (isCorrect){
        this.numCorrect++
      }
      this.numTotal++
    }
  },
  mounted: function() {
    fetch('https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple', {
    method: 'get'
  })
    .then((response) =>{
      return(response.json())
    })
    .then((jsonData) =>{
      this.questions= jsonData.results
    })
  }
};
</script>
<style>
</style>
