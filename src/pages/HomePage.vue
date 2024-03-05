<template>
  <div class="">
    <div class="container">
      <div>
        <div class="column bao m-3" v-for="item in imageList" :key="item.id">
          <div class="bao" @click="openDialog(item)">
            <img :src="item.image" class="img img-big">
            <i class="fa-regular fa-heart tim"
               :class="{ 'red-heart': item.isLiked }"
               @click.stop="toggleLike(item)">
            </i>
            <i class="fa-solid fa-plus them"></i>
            <router-link to="/test" class="khung-avt">
              <img class="avt" :src="item.avt"/>
              <div>
                <div>{{ item.name }}</div>
                <div class="title">{{ item.title }}</div>
              </div>
            </router-link>
            <i class="fa-solid fa-arrow-down tai" @click.stop="DowloadeImage(item)"></i>
          </div>
        </div>
      </div>
      <div>
        <div class="column bao m-3" v-for="item in imageList2" :key="item.id">
          <div class="bao" @click="openDialog(item)">
            <img :src="item.image" class="img img-big">
            <i class="fa-regular fa-heart tim"
               :class="{ 'red-heart': item.isLiked }"
               @click.stop="toggleLike(item)">
            </i>
            <i class="fa-solid fa-plus them"></i>
            <div class="khung-avt">
              <img class="avt" :src="item.avt"/>
              <div>
                <div>{{ item.name }}</div>
                <div class="title">{{ item.title }}</div>
              </div>
            </div>
            <i class="fa-solid fa-arrow-down tai" @click.stop="DowloadeImage(item)"></i>
          </div>

        </div>
      </div>
      <div>
        <div class="column bao m-3" v-for="item in imageList3" :key="item.id">
          <div class="bao" @click="openDialog(item)">
            <img :src="item.image" class="img img-big">
            <i class="fa-regular fa-heart tim"
               :class="{ 'red-heart': item.isLiked }"
               @click.stop="toggleLike(item)">
            </i>
            <i class="fa-solid fa-plus them"></i>
            <div class="khung-avt">
              <img class="avt" :src="item.avt"/>
              <div>
                <div>{{ item.name }}</div>
                <div class="title">{{ item.title }}</div>
              </div>
            </div>
            <i class="fa-solid fa-arrow-down tai" @click.stop="DowloadeImage(item)"></i>

          </div>
        </div>
      </div>
      <el-dialog
          v-model="selectedItem.dialogVisible"
          width="82%"
          class="modal-chitiet"
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
              <i class="fa-regular fa-heart tim-modal"
                 :class="{ 'red-heart': selectedItem.isLiked }"
                 @click.stop="toggleLike(selectedItem)">
              </i>
            </div>
            <div class="bao-them">
              <i class="fa-solid fa-plus them-modal"></i>
            </div>
          </div>
          <img class="img-modal avt-moadal" :src="selectedItem.image">
          <div class="views">
            Views : {{ selectedItem.views }}
          </div>
          <h3 class="lien-quan">
            Related photos
          </h3>
          <div class="container">
            <div>
              <div class="column bao m-3" v-for="item in imageList" :key="item.id">
                <div class="bao" @click="openDialog(item)">
                  <img :src="item.image" class="img img-big">
                  <i class="fa-regular fa-heart tim"
                     :class="{ 'red-heart': item.isLiked }"
                     @click.stop="toggleLike(item)">
                  </i>
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
                  <i class="fa-regular fa-heart tim"
                     :class="{ 'red-heart': item.isLiked }"
                     @click.stop="toggleLike(item)">
                  </i>
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
                  <i class="fa-regular fa-heart tim"
                     :class="{ 'red-heart': item.isLiked }"
                     @click.stop="toggleLike(item)">
                  </i>
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
  item.views += 1;
  // item.views = +1; đây là code sai

  selectedItem.value = item;
  selectedItem.value.dialogVisible = true;
};
const toggleLike = (item) => {
  item.isLiked = !item.isLiked;
  console.log(item.isLiked); // Đảm bảo rằng giá trị đã được chuyển đổi
}
const imageList = ref([
  {
    id: 1,
    image: 'https://plus.unsplash.com/premium_photo-1707030602987-8ca280726bdb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'NEM',
    title: 'made to change',
    isLiked: false,
    views: 0,
    description: 'Lượt đoạn đầu: Tác giả trình bày mục đích chuyến đi thực tế Tây Bắc và sông Đà của mình chủ yếu là để tìm hiểu những con người ở đây mà ông gọi “thứ vàng mười đã qua thử lửa của cách mạng là kháng chiến, hiện nay đang góp phần vào việc đến thiết Tây Bắc.',
    avt: 'https://plus.unsplash.com/premium_photo-1701181947338-02e4c55514d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    image: 'https://plus.unsplash.com/premium_photo-1673127326756-d065bce2f85e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'HORRO',
    title: 'made to change',
    isLiked: false,
    views: 0,
    description: 'Lượt đoạn đầu: Tác giả trình bày mục đích chuyến đi thực tế Tây Bắc và sông Đà của mình chủ yếu là để tìm hiểu những con người ở đây mà ông gọi “thứ vàng mười đã qua thử lửa của cách mạng là kháng chiến, hiện nay đang góp phần vào việc đến thiết Tây Bắc.',
    avt: 'https://plus.unsplash.com/premium_photo-1701181947338-02e4c55514d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'ANNA',
    title: 'made to change',
    isLiked: false,
    views: 0,
    description: 'Lượt đoạn đầu: Tác giả trình bày mục đích chuyến đi thực tế Tây Bắc và sông Đà của mình chủ yếu là để tìm hiểu những con người ở đây mà ông gọi “thứ vàng mười đã qua thử lửa của cách mạng là kháng chiến, hiện nay đang góp phần vào việc đến thiết Tây Bắc.',
    avt: 'https://plus.unsplash.com/premium_photo-1701181947338-02e4c55514d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1708947513411-30a04b57b53c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'JOIN',
    title: 'made to change',
    isLiked: false,
    views: 0,
    description: 'Lượt đoạn đầu: Tác giả trình bày mục đích chuyến đi thực tế Tây Bắc và sông Đà của mình chủ yếu là để tìm hiểu những con người ở đây mà ông gọi “thứ vàng mười đã qua thử lửa của cách mạng là kháng chiến, hiện nay đang góp phần vào việc đến thiết Tây Bắc.',
    avt: 'https://plus.unsplash.com/premium_photo-1701181947338-02e4c55514d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },

])
const imageList2 = ref([
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1708947513411-30a04b57b53c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'NEM',
    isLiked: false,
    views: 0,
    title: 'made to change',
    avt: 'https://plus.unsplash.com/premium_photo-1701181947338-02e4c55514d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    image: 'https://plus.unsplash.com/premium_photo-1701181947338-02e4c55514d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'HORRO',
    isLiked: false,
    views: 0,
    title: 'made to change',
    avt: 'https://plus.unsplash.com/premium_photo-1701181947338-02e4c55514d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    image: 'https://plus.unsplash.com/premium_photo-1707030602987-8ca280726bdb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'ANNA',
    isLiked: false,
    views: 0,
    title: 'made to change',
    avt: 'https://plus.unsplash.com/premium_photo-1701181947338-02e4c55514d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1708947513411-30a04b57b53c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'JOIN',
    isLiked: false,
    views: 0,
    title: 'made to change',
    avt: 'https://plus.unsplash.com/premium_photo-1701181947338-02e4c55514d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },

])
const imageList3 = ref([
  {
    id: 1,
    image: 'https://plus.unsplash.com/premium_photo-1673127326756-d065bce2f85e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'NEM',
    isLiked: false,
    views: 0,
    title: 'made to change',
    avt: 'https://plus.unsplash.com/premium_photo-1701181947338-02e4c55514d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'HORRO',
    isLiked: false,
    views: 0,
    title: 'made to change',
    avt: 'https://plus.unsplash.com/premium_photo-1701181947338-02e4c55514d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1708917880580-a6bea5c232a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'ANNA',
    isLiked: false,
    views: 0,
    title: 'made to change',
    avt: 'https://plus.unsplash.com/premium_photo-1701181947338-02e4c55514d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1708923806194-0036d90971b5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'JOIN',
    isLiked: false,
    views: 0,
    title: 'made to change',
    avt: 'https://plus.unsplash.com/premium_photo-1701181947338-02e4c55514d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },

])
const DowloadeImage = (item) => {
  const anchor = document.createElement('a');
  anchor.href = item.image;
  anchor.download = 'test_image.jpg';
  anchor.target = '_blank';
  anchor.click();

}
const profileActor = (item) => {

}
</script>


<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.avt-moadal {
  width: 80%;
  height: 500px;
}

.name {
  color: black;
}

.modal-chitiet {
  margin-top: 10px !important;

}

.header {
  position: fixed;
  top: 0;
}

.red-heart {
  color: red !important;
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

h2 {
  padding-top: 10px;
  padding-bottom: 10px;

}
.khung-avt{
  display: none;
}
.khung-avt {
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
  height: 680px;
  object-fit: contain;
  padding-top: 55px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  padding-bottom: 30px;
}

.title {
  font-size: 12px;
  color: #9c9696;
}


.them {
  display: none;
}

.tai {
  display: none;
}

.tim {
  position: absolute;
  top: 10px;
  right: 18px;
  background: white;
  padding: 8px 11px;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
  color: rgb(118, 118, 118) ;

}

.them {
  position: absolute;
  top: 10px;
  right: 61px;
  background: white;
  padding: 8px 11px;
  border-radius: 5px;
  font-size: 13px;
  color: rgb(118, 118, 118);
  cursor: pointer;
}

.tai {
  position: absolute;
  bottom: 28px;
  right: 38px;
  background: white;
  padding: 8px 11px;
  border-radius: 5px;
  font-size: 13px;
  color: rgb(118, 118, 118);

  cursor: pointer;
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
  .khung-avt {
    display: flex;
  }
  .them {
    display: block;

  }

  .tai {
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
  border: 1px solid gray;
  color: rgb(118, 118, 118) !important;
//cursor: pointer;


}

.tim {
  display: none;
}

.them-modal {
  top: 10px;
  right: 70px;
  background: white;
  padding: 7px 13px;
  border-radius: 5px;
  font-size: 14px;
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
.views{
  color: rgb(118, 118, 118);
}
.lien-quan{
  padding: 20px 0 5px 0;
  color: black;
}
</style>



