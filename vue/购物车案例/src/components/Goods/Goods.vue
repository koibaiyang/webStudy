<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框 -->
        <input type="checkbox" class="custom-control-input" :id="id" :checked="status" @change="status_change"/>
        <label class="custom-control-label" :for="id">
          <!-- 商品的缩略图 -->
          <img :src="pic" alt="" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <h6 class="goods-title">{{title}}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">￥{{price}}</span>
        <!-- 商品的数量 -->
        <!-- <span class="goods-number"><button @click="increaseCount">+</button>{{count}}<button @click="decreaseCount">-</button></span> -->
        <Count :id="id" :num="number"></Count>
      </div>
    </div>
  </div>
</template>

<script>
import Count from '@/components/Counter/Counter.vue'
export default {
  
  components: {
    Count
  },
  props: {
    title: {
      default: '',
      type: String
    },
    pic: {
      default: '',
      type: String
    },
    number: {
      default: 0,
      type: Number
    },
    price: {
      default: 0,
      type: Number
    },
    status: {
      default: true,
      type: Boolean
    },
    id: {
      required: true,
      type: Number
    }
    
  },
  data(){
    return {
      count: this.number
    }
  },
  methods: {
    status_change(e){
      const newState = e.target.checked
      this.$emit('statechange',{id:this.id, state:newState})
    },
    increaseCount(){
      this.count++
      this.$emit('newNumber', {id:this.id, number:this.count})
    },
    decreaseCount(){
      this.count--
      this.$emit('newNumber', {id:this.id, number:this.count})
    }
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  padding: 10px;
  display: flex;
  .thumb {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }
    .goods-info-bottom {
      display: flex;
      justify-content: space-between;
      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 13px;
      }
      .goods-number {
        color: #000;
        font-size: 13px;
        button {
          margin: 0 5px;
          border: none;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>
