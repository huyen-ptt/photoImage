<!--<template>-->
<!--  &lt;!&ndash; <button @click="cong++">{{ cong }}</button> &ndash;&gt;-->
<!--  &lt;!&ndash;  pham-duc-chinh -> Pham Duc Chinh&ndash;&gt;-->
<!--  {{changeName('pham-duc-chinh')}}-->
<!--  <span style="text-transform: capitalize">-->
<!--    {{changeNameByReplace('pham-duc-chinh')}}-->
<!--  </span>-->
<!--  <h1>{{ age }}quee quán:{{ address }}</h1>-->
<!--  <button @click="tru">{{ cong }}</button>-->
<!--  <h1>{{ total }}</h1>-->
<!--  <h1>{{ changeAddress }}</h1>-->
<!--  <div v-if="loading">-->
<!--    loading ....-->
<!--  </div>-->
<!--  <div v-else>-->
<!--    hoàn thành-->
<!--  </div>-->
<!--  <form @submit.prevent="nextPage">-->
<!--    <label for="fname">First name:</label>-->
<!--    <input type="text" v-model="name" id="fname" name="fname"><br><br>-->
<!--    <label for="lname">Last name:</label>-->
<!--    <input type="text" v-model="name1" id="lname" name="lname"><br><br>-->
<!--    <button type="submit"> Đăng nhập</button>-->
<!--    <h1>{{ name }}</h1>-->
<!--    <h1>{{ name1 }}</h1>-->
<!--    <div>-->
<!--      <ul v-for="item in dulieu" :key="item.id">-->
<!--        <li>{{ item.title }}</li>-->
<!--      </ul>-->

<!--    </div>-->
<!--&lt;!&ndash;    <h1>{{ nameh }}</h1>&ndash;&gt;-->
<!--&lt;!&ndash;    <h2>{{convert}}</h2>&ndash;&gt;-->
<!--    <h3>{{change}}</h3>-->
<!--  </form>-->
<!--  <div style="width: 200px; height: 200px; background: red" @click="handleClickParent">-->
<!--    click cha-->
<!--    <div style="width: 50px; height: 50px; background: blue"-->
<!--         @click.stop="handleClickChild">-->
<!--      click con-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script setup>-->
<!--import {ref, computed, onMounted, watch} from 'vue';-->
<!--// import axios from 'axios';-->
<!--import {useRouter} from 'vue-router'-->
<!--import axios from "axios";-->
<!--import {changeName, changeNameByReplace} from "@/until.js";-->

<!--const address = ref('hưng yên');-->
<!--const dulieu = ref([])-->
<!--const name = ref('');-->
<!--const name1 = ref('');-->
<!--const cong = ref(0);-->
<!--const age = ref(19);-->
<!--const router = useRouter();-->
<!--const change = ref('')-->
<!--const loading = ref(false)-->
<!--const tru = () => {-->
<!--  cong.value += 1;-->
<!--}-->
<!--// const changeName = () => {-->
<!--//   console.log('name', nameh)-->
<!--//   // console.log( nameh.value.toUpperCase())-->
<!--//    convert.value = (nameh.toUpperCase() + nameh.slice(1));-->

<!--// }-->
<!--// pham-Duc-chinh-->

<!--const handleClickParent = () => {-->
<!--  // router.push('/home')-->
<!--  console.log('click cha')-->
<!--}-->
<!--const handleClickChild = () => {-->
<!--  // router.push('/login');-->
<!--  console.log('click con')-->
<!--}-->
<!--const nextPage = () => {-->
<!--  if (name.value === 'admin' && name1.value === '123456') {-->
<!--    return router.push('/home')-->


<!--  }-->
<!--  return console.log('lỗi r')-->

<!--};-->
<!--const getData = () => {-->
<!--  loading.value = true;-->
<!--  axios.get('https://jsonplaceholder.typicode.com/posts')-->
<!--      .then((resp) => {-->
<!--        setTimeout(() => {-->
<!--          dulieu.value = resp.data-->
<!--          loading.value = false;-->
<!--        }, 2000)-->
<!--      })-->
<!--      .catch((error) => {-->
<!--        loading.value = false;-->
<!--        console.log(error)-->
<!--      })-->
<!--}-->
<!--const total = computed(() => {-->
<!--  return cong.value + 5-->
<!--});-->
<!--const changeAddress = computed(() => {-->
<!--  return address.value = 'ha noi'-->
<!--})-->
<!--const fetchData = () => {-->
<!--  console.log('get data');-->
<!--  cong.value = 50;-->
<!--}-->

<!--watch(cong, () => {-->
<!--  console.log('watch')-->
<!--})-->

<!--onMounted(() => {-->
<!--  console.log('mouted')-->
<!--});-->
<!--fetchData();-->
<!--getData();-->
<!--</script>-->
<template>
  <div class="container">
    <div class="" v-for="item in imageList" :key="item.id">
      <div class="bao m-3">
        <div class="bao" @click="dialogVisible = true">
          <img :src="item.image" class="img img-big">
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-plus"></i>
          <div class="khung-avt">
            <img class="avt" :src="item.avt"/>
            <div>
              <div>{{ item.name }}</div>
              <div class="title">{{ item.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <!--      <div class="column m-3">-->
      <!--        <div class="sub-column sub-column1">-->
      <!--          <img :src="img3" class="img">-->
      <!--        </div>-->
      <!--        <div class="sub-column">-->
      <!--          <img :src="img1" class="img">-->
      <!--        </div>-->
      <!--        <div class="sub-column sub-column1">-->
      <!--          <img :src="img3" class="img">-->
      <!--        </div>-->
      <!--        <div class="sub-column">-->
      <!--          <img :src="img1" class="img">-->
      <!--        </div>-->
      <!--        <div class="sub-column sub-column1">-->
      <!--          <img :src="img3" class="img">-->
      <!--        </div>-->
      <!--        <div class="sub-column">-->
      <!--          <img :src="img1" class="img">-->
      <!--        </div>-->
      <!--        <div class="sub-column sub-column1">-->
      <!--          <img :src="img3" class="img">-->
      <!--        </div>-->
      <!--        <div class="sub-column">-->
      <!--          <img :src="img1" class="img">-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="column m-3">-->
      <!--        <img :src="img2" class="img img-big">-->
      <!--        <img :src="img3" class="img img-big">-->
      <!--        <img :src="img1" class="img img-big">-->
      <!--        <img :src="img2" class="img img-big">-->
      <!--        <img :src="img3" class="img img-big">-->
      <!--        <img :src="img2" class="img img-big">-->
      <!--        <img :src="img3" class="img img-big">-->
      <!--      </div>-->
      <el-dialog
          title="Tips"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
        <span>This is a message</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
        </span>
      </el-dialog>
    </div>

  </div>

</template>

<script setup>
import {ElButton, ElDialog} from 'element-plus';
import {ref} from 'vue';

const dialogVisible = ref(false)
const img1 = ref('/img1.jpg')
const img2 = ref('/img2.jpg')
const img3 = ref('/img3.jpg')
const imageList = ref([
  {id: 1, image: '/img1.jpg', name: 'NEM', title: 'made to change', avt: '/img2.jpg'},
  {id: 2, image: '/img2.jpg', name: 'HORRO', title: 'made to change', avt: '/img3.jpg'},
  {id: 3, image: '/img3.jpg', name: 'ANNA', title: 'made to change', avt: '/img2.jpg'},
  {id: 4, image: '/img1.jpg', name: 'JOIN', title: 'made to change', avt: '/img2.jpg'},
  {id: 5, image: '/img2.jpg', name: 'HORRO', title: 'made to change', avt: '/img2.jpg'},
  {id: 6, image: '/img3.jpg', name: 'ANNA', title: 'made to change', avt: '/img4.jpg'},
  {id: 7, image: '/img1.jpg', name: 'JOIN', title: 'made to change', avt: '/img4.jpg'},
])
</script>


<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.khung-avt {
  display: flex;
  align-items: center;
  position: absolute;
  gap: 10px;
  color: white;
  bottom: 25px;
  left: 10px;
}

.avt {
  width: 36px;
  height: 36px;
  border-radius: 999px;
}

.title {
  font-size: 12px;
  color: #9c9696;
  padding-top: 3px;
}

.fa-regular {
  display: none;
}

.fa-solid {
  display: none;

}

.fa-regular {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  padding: 10px 14px;
  border-radius: 5px;
  font-size: 18px;
  color: red;
}

.fa-solid {
  position: absolute;
  top: 10px;
  right: 70px;
  background: white;
  padding: 10px 14px;
  border-radius: 5px;
  font-size: 18px;
  color: black;
}

.bao {
  position: relative;
}

.bao:hover {
  .fa-regular {
    display: block;
  }

  .fa-solid {
    display: block;

  }
}

.img-big {
  height: auto;
  width: 100%;
}

.sub-column1 img {
  height: 300px;
  object-fit: cover;
}

.row {
  display: flex;
  gap: 20px;
}

.column {
//flex: 1; //display: flex; //flex-direction: column;
}

.sub-column {
  flex: 1;
  margin-bottom: 10px; /* Khoảng cách giữa hai ảnh */
}

.img {
  width: 100%;
}

</style>



