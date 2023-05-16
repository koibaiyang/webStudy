<template>
  <div class="app-container">
    <!-- <p>{{amount}}</p> -->
    <Header></Header>
    <Goods v-for="item in list" 
    :key="item.goods_id"
    :id="item.goods_id" 
    :title="item.goods_name" 
    :pic="item.goods_small_logo" 
    :price="item.goods_price" 
    :number="item.goods_number"
    :status="item.is_promote"
    @statechange="getNewStatus"
    @newNumber="getNewCount"></Goods>
    <Footer :fullstate="fullstate" :totalPrice="amount" :checkCount="checkCount" @newCheckAll="getnewcheckall"></Footer>
  </div>
</template>

<script>
// 导入 axios 
import axios from 'axios'
// 导入 eventBus 
import Bus from '@/components/eventBus.js'
// 导入组件
import Header from '@/components/Header/Header.vue'
import Goods from '@/components/Goods/Goods.vue'
import Footer from '@/components/Footer/Footer.vue'
export default {
  created(){
    this.initCartList()
    // Bus.$emit('giveCount', {id: this.list.goods_id, count: this.list.goods_number})
    Bus.$on('share', (val) => {
      // console.log(val);
      this.list.some(item => {
        if(item.goods_id === val.id){
          item.goods_number = val.num
          return true
        }
      })
    })
  },
  data(){
    return {
      list: [],
      lx: []
    }
  },
  components: {
    Header,
    Goods,
    Footer
  },
  methods: {
    async initCartList () {
      const {data:res} = await axios.get('https://www.uinav.com/api/public/v1/goods/search')
      if(!res.meta.status === 200) return alert('获取列表失败')
      this.list = res.message.goods
      // console.log(this.list);
    },
    getNewStatus(val){
      // console.log(val);
      this.list.some(item => {
        if(item.goods_id === val.id){
          item.is_promote = val.state
          return true
        }
      })
    },
    getnewcheckall(val){
      this.list.forEach(item => item.is_promote = val)
    },
    getNewCount(val){
      // console.log(val);
      this.list.some(item => {
        if(item.goods_id === val.id){
          item.goods_number = val.number
          return true
        }
      })
    }
  },
  computed: {
    fullstate(){
      return this.list.every(item => item.is_promote)
    },
    amount(){
      return this.list.filter(item => item.is_promote === true).reduce((prev,now) => prev + now.goods_price * now.goods_number, 0)
    },
    checkCount(){
      return this.list.filter(item => item.is_promote === true).reduce((prev,now) => prev + now.goods_number, 0)
    }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
