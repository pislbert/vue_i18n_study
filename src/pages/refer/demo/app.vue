<template>
  <div>
    <span v-text="$t('m.music')"></span>
    <span>{{$t('m.music')}}</span>
    <button @click="changeLangEvent">中/英</button>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
export default {
  // name: 'app',
  data() {
    return {
      lang: 'zh-CN'
    }
  },
  methods: {
      changeLangEvent() {
          this.$confirm('确定切换语言吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
          }).then(() => {
              if ( this.lang === 'zh-CN' ) {
                this.lang = 'en-US';
                this.$i18n.locale = this.lang;//关键语句
              }else {
                this.lang = 'zh-CN';
                this.$i18n.locale = this.lang;//关键语句
              }
          }).catch(() => {
              this.$message({
                  type: 'info',
              });
          });
      }
  }
}
</script>

<style>
</style>
