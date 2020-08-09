<template>
    <div>
      <div class="page-header page-header-micro clear-filter" filter-color="none" bottom-margin="10px">
      <parallax
        class="page-header-image"
        style="background-color: #f96534 "
        
      >
      </parallax>
     </div>
     <b-nav tabs>
          <b-nav-item disabled><b>Fancy Quiz App</b></b-nav-item>
          <b-nav-item disabled>Counter: {{ numCorrect }}/{{ numTotal }}</b-nav-item>
          
      </b-nav>
    </div>
</template>

<script>
export default {
  props: [
    'numCorrect',
    'numTotal'
  ]
}
</script>