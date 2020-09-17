var list = document.getElementsByTagName("TR");
const data = [];
for (let i = 5; i < list.length; i++) {
  const quantity = list[i].getElementsByTagName("TD")[1].innerText;
  const point_of_diligence = list[i].getElementsByTagName("TD")[4].innerText;
  const point_of_midterm = list[i].getElementsByTagName("TD")[5].innerText;
  const point_of_endterm = list[i].getElementsByTagName("TD")[6].innerText;
  const point_avg =
    point_of_diligence * 0.1 + point_of_midterm * 0.2 + point_of_endterm * 0.7;
  let dataSubject = {
    subjectName: list[i].getElementsByTagName("TD")[0].innerText,
    quantity,
    subjectId: list[i].getElementsByTagName("TD")[2].innerText,
    teacher: list[i].getElementsByTagName("TD")[3].innerText,
    point_of_diligence,
    point_of_midterm,
    point_of_endterm,
    point_avg: Math.round(point_avg * 100) / 100
  };
  data.push(dataSubject);
}
console.log("data: ", data);
let sumObject = 0
let arr = []
const temp = data.filter((item, index) => item.quantity !== '0' && item.point_avg >= 5 && item.subjectName !== data[index+1].subjectName)

console.log('temp: ', temp)