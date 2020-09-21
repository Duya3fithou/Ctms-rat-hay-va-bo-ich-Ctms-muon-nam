var list = document.getElementsByTagName("TR");
const data = [];
for (let i = 5; i < list.length; i++) {
  const quantity = list[i].getElementsByTagName("TD")[1].innerText;
  const diligence = list[i].getElementsByTagName("TD")[4].innerText;
  const midterm = list[i].getElementsByTagName("TD")[5].innerText;
  const endterm = list[i].getElementsByTagName("TD")[6].innerText;
  const point_avg = diligence * 0.1 + midterm * 0.2 + endterm * 0.7;
  let dataSubject = {
    subjectName: list[i].getElementsByTagName("TD")[0].innerText,
    quantity,
    subjectId: list[i].getElementsByTagName("TD")[2].innerText,
    teacher: list[i].getElementsByTagName("TD")[3].innerText,
    diligence,
    midterm,
    endterm,
    point_avg: Math.round(point_avg * 100) / 100,
  };
  data.push(dataSubject);
}
console.log("data: ", data);
let sumObject = 0;
let arr = [];
const dataFilter = data.filter(
  (item, index) =>
    item.quantity !== "0" &&
    item.point_avg >= 5 &&
    item.subjectName !== data[index + 1].subjectName
);

console.log("dataFilter: ", dataFilter);
let totalQuantity = 0;
dataFilter.forEach((item) => {
  totalQuantity += Number(item.quantity);
})
console.log('totalQuantity: ', totalQuantity)
