# Project Capstone: Thiết kế Website thuê xe EcobikeRental

GV hướng dẫn: TS. Nguyễn Thị Thu Trang

Nhóm SV thực hiện: Nhóm 7 - KSCQ.20211

* Phạm Đức Hòa - 20183918

* Nguyễn Thanh Tú - 20184002

* Bùi Quang Thái - 20183981

* Trần Minh Quang - 20183972

## 1. Mục tiêu

Xây dựng Website thuê xe EcobikeRental gồm các chức năng:

* Xem danh sách các bãi cho thuê xe
* Xem danh sách xe trong 1 bãi xe
* Xem thông tin xe
* Quét mã QR xe
* Thuê xe (trả tiền cọc)
* Trả xe (thanh toán tiền thuê và lấy lại cọc
* Xem thông tin thẻ thanh toán

## 2. Công nghệ sử dụng

Trong đồ án này, em đã sử dụng:

* Ngôn ngữ `Java`, `Vuejs`
* IDE `Eclipse`, `Vissual Studio Code`

## 3. Hướng dẫn cài đặt

### Tải mã nguồn

* Download mã nguồn trong thư mục [Construction/CapstoneProject](https://github.com/phamhoa2192k/TKXDPM.KSCQ.20211-07/tree/release/final_submission/FinalProject/Construction/CapstoneProject)
* Mở thư mục đã giải nén bằng `Eclipse`
* Mở `Visual studio code` và mở folder [Construction/CapstoneProject/src/main/vue](https://github.com/phamhoa2192k/TKXDPM.KSCQ.20211-07/tree/release/final_submission/FinalProject/Construction/CapstoneProject/src/main/vue)

### Thêm các biến môi trường

* Download [Tomcat 8.5.73](https://dlcdn.apache.org/tomcat/tomcat-8/v8.5.73/bin/apache-tomcat-8.5.73.zip) và cài đặt
* Chạy Project Backend bằng cách chuột phải vào project chọn `Run on server`
* download fontawesome 4.7.0 tại [get fontawesome 4.7.0](https://fontawesome.com/v4.7.0/get-started/#modal-download)
* giải nén file zip vừa tải và sao lưu vào thư mục `public/css`

## 4. Khởi chạy dự án (available scripts)

### Chạy `Mysql` trên máy (có thể sử dụng các phần mềm như `Xampp Control`

### Tạo Database bằng cách vào `Mysql Workbench` và mở database-script và `Excute` toàn bộ

### Chạy Project Backend bằng cách:

* Mở lại project đã mở trong `Eclipse`
* Vào file `Configs.java` trong thư mục `main/java/utils` và config lại `DB_USER`, `DB_PASS` là người dùng và mật khẩu Mysql để truy cập database
* Chuột phải vào project chọn `Run on server`

### Chạy Project Frontend bằng cách:

* Mở lại project Vue đã mở trong `Visual studio code`
* Chọn `Terminal` -> `New Terminal`
* Nhập `npm run serve` và enter để khởi chạy dự án

### Dự án đã khởi chạy tại : `http://localhost:8080/`

## 5. Video demo
Video demo đã được chúng em thêm trong thư mục [`Demo`](https://github.com/phamhoa2192k/TKXDPM.KSCQ.20211-07/tree/release/final_submission/FinalProject/Demo)
