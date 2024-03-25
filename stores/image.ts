// import { defineStore } from 'pinia';
//
// export const useImageStore = defineStore('image', {
//     state: () => ({
//         imageList: [], // Thêm danh sách hình ảnh vào state
//         selectedItem: null // Thêm selectedItem vào state để lưu trữ thông tin hình ảnh được chọn
//     }),
//     actions: {
//         fetchImageList() {
//             // Logic để fetch dữ liệu từ API hoặc bất kỳ nguồn dữ liệu nào khác
//             // Sau khi fetch xong, cập nhật state
//             // Ví dụ:
//             const imageList = [/* Danh sách hình ảnh */];
//             this.imageList = imageList;
//         },
//         selectItem(item) {
//             this.selectedItem = item;
//         }
//     },
//     getters: {
//         getImageList() {
//             return this.imageList;
//         },
//         getSelectedItem() {
//             return this.selectedItem;
//         }
//     }
// });
