<template lang="html">
  <div>
    <input id="timepicker" name="timepicker" class="form-control" type="text" value="2010-01-02 15:04:05">
    <!-- <div class="input-append date" id="datetimepicker" data-date="2010-01-02 15:04:05" data-date-format="yyyy-mm-dd hh:ii:ss">
      <input class="span2" size="16" type="text" value="2010-01-02 15:04:05">
      <span class="add-on"><i class="icon-th"></i></span>
    </div>   -->
  </div>
</template>

<script>
import $ from 'jquery'
import { getLanguage } from '../i18n/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../static/bootstrap-datetimepicker/bootstrap-datetimepicker.js'
import '../static/bootstrap-datetimepicker/bootstrap-datetimepicker.css'

// import ('../static/bootstrap-datetimepicker/bootstrap-datetimepicker.css')
// import ('../static/bootstrap-datetimepicker/bootstrap-datetimepicker.js')

// $('#timepicker').datetimepicker({
//   language: bigLauguage,
//   format: 'yyyy-mm-dd hh:ii:ss',
//   autoclose: true
// })

export default {
  // updated: function() {
  //   this.datetimepicker({
  //     language: bigLauguage,
  //     format: 'yyyy-mm-dd hh:ii:ss',
  //     autoclose: true
  //   })
  // }
  mounted: function() {
    let lauguage = getLanguage()
    let bigLauguage = 'en'
    if (lauguage == 'zh') {
      require('../static/bootstrap-datetimepicker/bootstrap-datetimepicker.zh-cn.js')
      // import('../static/bootstrap-datetimepicker/bootstrap-datetimepicker.zh-cn.js')
      // require('../static/bootstrap-datetimepicker/bootstrap-datetimepicker.zh-cn.js')
      console.log('ee2')
      bigLauguage = 'zh-cn'
    } else {
      console.log('ee3')
    }

    $('#timepicker').datetimepicker({
      language: bigLauguage,
      fontAwesome: 'font-awesome',
      format: 'yyyy-mm-dd hh:ii:ss',
      autoclose: true
    })

    console.log(bigLauguage)
  }
}
</script>

<style lang="css">
/* @import '../static/bootstrap-datetimepicker/bootstrap-datetimepicker.css'; */
/* div {
    color:red;
  } */
</style>
