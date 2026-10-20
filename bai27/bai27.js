
// Lấy tất cả nút Đặt ngay trong Modal
let buttons = document.querySelectorAll(".modal-footer .btn-danger");

// Thêm sự kiện khi bấm nút
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Bạn đã chọn địa điểm du lịch!");
    });
});
