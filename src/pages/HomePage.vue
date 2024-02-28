<template>
  <div class="">
    <div class="container">
      <div>
        <div class="column bao m-3" v-for="item in imageList" :key="item.id">
          <div class="bao" @click="openDialog(item)">
            <img :src="item.image" class="img img-big">
            <i class="fa-regular fa-heart tim"></i>
            <i class="fa-solid fa-plus them"></i>
            <div class="khung-avt">
              <img class="avt" :src="item.avt"/>
              <div>
                <div>{{ item.name }}</div>
                <div class="title">{{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="column bao m-3" v-for="item in imageList2" :key="item.id">
          <div class="bao" @click="openDialog(item)">
            <img :src="item.image" class="img img-big">
            <i class="fa-regular fa-heart tim"></i>
            <i class="fa-solid fa-plus them"></i>
            <div class="khung-avt">
              <img class="avt" :src="item.avt"/>
              <div>
                <div>{{ item.name }}</div>
                <div class="title">{{ item.title }}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>
        <div class="column bao m-3" v-for="item in imageList3" :key="item.id">
          <div class="bao" @click="openDialog(item)">
            <img :src="item.image" class="img img-big">
            <i class="fa-regular fa-heart tim"></i>
            <i class="fa-solid fa-plus them"></i>
            <div class="khung-avt">
              <img class="avt" :src="item.avt"/>
              <div>
                <div>{{ item.name }}</div>
                <div class="title">{{ item.title }}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <el-dialog
          v-model="selectedItem.dialogVisible"
          width="90%"
      >
        <div class="">
          <div class="">
            <div class="khung-modal">
              <img class="avt" :src="selectedItem.avt"/>
              <div>
                <div class="name">{{ selectedItem.name }}</div>
                <div class="title">{{ selectedItem.title }}</div>
              </div>
            </div>
            <div class="bao-tim">
              <i class="fa-regular fa-heart tim-modal"></i>
            </div>
            <div class="bao-them">
              <i class="fa-solid fa-plus them-modal"></i>
            </div>
          </div>
          <img class="img-modal" :src="selectedItem.image">
          <h2>
            Related photos
          </h2>
         <div class="container">
           <div>
             <div class="column bao m-3" v-for="item in imageList" :key="item.id">
               <div class="bao" @click="openDialog(item)">
                 <img :src="item.image" class="img img-big">
                 <i class="fa-regular fa-heart tim"></i>
                 <i class="fa-solid fa-plus them"></i>
                 <div class="khung-avt">
                   <img class="avt" :src="item.avt"/>
                   <div>
                     <div>{{ item.name }}</div>
                     <div class="title">{{ item.title }}</div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div>
             <div class="column bao m-3" v-for="item in imageList2" :key="item.id">
               <div class="bao" @click="openDialog(item)">
                 <img :src="item.image" class="img img-big">
                 <i class="fa-regular fa-heart tim"></i>
                 <i class="fa-solid fa-plus them"></i>
                 <div class="khung-avt">
                   <img class="avt" :src="item.avt"/>
                   <div>
                     <div>{{ item.name }}</div>
                     <div class="title">{{ item.title }}</div>
                   </div>
                 </div>
               </div>

             </div>
           </div>
           <div>
             <div class="column bao m-3" v-for="item in imageList3" :key="item.id">
               <div class="bao" @click="openDialog(item)">
                 <img :src="item.image" class="img img-big">
                 <i class="fa-regular fa-heart tim"></i>
                 <i class="fa-solid fa-plus them"></i>
                 <div class="khung-avt">
                   <img class="avt" :src="item.avt"/>
                   <div>
                     <div>{{ item.name }}</div>
                     <div class="title">{{ item.title }}</div>
                   </div>
                 </div>
               </div>

             </div>
           </div>
         </div>
        </div>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="selectedItem.dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="selectedItem.dialogVisible = false">
              Confirm
            </el-button>
          </div>
        </template>
      </el-dialog>
    </div>

  </div>

</template>

<script setup>
import {ref} from 'vue';
import {ElMessageBox} from 'element-plus'

const dialogVisible = ref(false)
const selectedItem = ref('');
const img2 = ref('/img2.jpg');
const openDialog = (item) => {
  selectedItem.value = item;
  selectedItem.value.dialogVisible = true;
};

const imageList = ref([
  {id: 1, image: '/img1.jpg', name: 'NEM', title: 'made to change', avt: '/img2.jpg'},
  {id: 2, image: '/img2.jpg', name: 'HORRO', title: 'made to change', avt: '/img3.jpg'},
  {id: 3, image: '/img3.jpg', name: 'ANNA', title: 'made to change', avt: '/img2.jpg'},
  {id: 4, image: '/img1.jpg', name: 'JOIN', title: 'made to change', avt: '/img2.jpg'},

])
const imageList2 = ref([
  {id: 1, image: '/img5.jpg', name: 'NEM', title: 'made to change', avt: '/img5.jpg'},
  {id: 2, image: '/img6.jpg', name: 'HORRO', title: 'made to change', avt: '/img6.jpg'},
  {id: 3, image: '/img7.jpg', name: 'ANNA', title: 'made to change', avt: '/img2.jpg'},
  {id: 4, image: '/img8.jpg', name: 'JOIN', title: 'made to change', avt: '/img2.jpg'},
  {id: 5, image: '/img9.jpg', name: 'HORRO', title: 'made to change', avt: '/img2.jpg'},

])
const imageList3 = ref([
  {id: 1, image: '/img20.jpg', name: 'NEM', title: 'made to change', avt: '/img5.jpg'},
  {id: 2, image: '/img6.jpg', name: 'HORRO', title: 'made to change', avt: '/img6.jpg'},
  {id: 3, image: '/img1.jpg', name: 'ANNA', title: 'made to change', avt: '/img2.jpg'},
  {id: 4, image: '/img7.jpg', name: 'JOIN', title: 'made to change', avt: '/img2.jpg'},

])
</script>


<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.name {
  color: black;
}

.header {
  position: fixed;
  top: 0;
}

.khung-modal {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
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

.img-modal {
  width: 80%;
  height: 100%;
  padding-top: 70px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  padding-bottom: 30px;
}

.title {
  font-size: 12px;
  color: #9c9696;
  padding-top: 3px;
}

.tim {
  display: none;
}

.them {
  display: none;

}

.tim {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  padding: 10px 14px;
  border-radius: 5px;
  font-size: 18px;
  color: red;
//cursor: pointer;

}

.them {
  position: absolute;
  top: 10px;
  right: 65px;
  background: white;
  padding: 10px 14px;
  border-radius: 5px;
  font-size: 18px;
  color: black;
//cursor: pointer;
}

.bao {
  position: relative;
  padding-bottom: 10px;
//cursor: pointer;

}

.bao:hover {
  .tim {
    display: block;
  }

  .them {
    display: block;

  }

}

.img-big {
  height: auto;
  width: 100%;
}

.sub-column1 img {
//height: 300px; object-fit: cover;
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

.tim-modal {
  top: 10px;
  right: 10px;
  background: white;
  padding: 7px 13px;
  border-radius: 5px;
  font-size: 14px;
  color: gray;
  border: 1px solid gray;
//cursor: pointer;


}

.them-modal {
  top: 10px;
  right: 70px;
  background: white;
  padding: 7px 13px;
  border-radius: 5px;
  font-size: 14px;
  color: gray;
  border: 1px solid gray;
//cursor: pointer;

}

.bao-modal {
  position: relative;
}

.bao-tim {
  position: absolute;
  right: 10px;
  top: 10px;
}

.bao-them {
  position: absolute;
  right: 63px;
  top: 10px;
}

.show-close {
  display: none;
}
</style>



