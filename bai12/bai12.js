let now = new Date();

d.value = now.getDate();
m.value = now.getMonth() + 1;
y.value = now.getFullYear();

function showDate() {
    let day = Number(d.value);
    let month = Number(m.value);
    let year = Number(y.value);

let date = new Date(year, month - 1, day);
let months = ["Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12"];
let weekdats = ["Chủ Nhật",
    "thứ hai",
    "thứ ba",
    "thứ tư",
    "thứ năm",
    "thứ sáu",
    "thứ bảy"];

document.getElementById("year").innerText=year;
document.getElementById("month").innerText=months[month-1];
document.getElementById("day").innerText=day;
document.getElementById("weekday").innerText=weekdays[day.getDay()];

let h=now.hetHours();
let greeting=h<12 ?"Chào buổi sáng":
            h<18 ?"Chào buổi chiều":"Chào buổi tối";
document.getElementById("greeting").innerText=greeting;
}

showDate();