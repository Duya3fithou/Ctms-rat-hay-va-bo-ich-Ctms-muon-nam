var list = document.getElementsByTagName('TR');
const data = [];
for (let i = 5; i < list.length; i++) {
  const quantity = Number(list[i].getElementsByTagName('TD')[1].innerText);
  const diligence = Number(list[i].getElementsByTagName('TD')[4].innerText);
  const midterm = Number(list[i].getElementsByTagName('TD')[5].innerText);
  const endterm = Number(list[i].getElementsByTagName('TD')[6].innerText);
  const subjectName = list[i].getElementsByTagName('TD')[0].innerText;
  const subjectId = list[i].getElementsByTagName('TD')[2].innerText;
  const teacher = list[i].getElementsByTagName('TD')[3].innerText;
  const point_avg = diligence * 0.1 + midterm * 0.2 + endterm * 0.7;
  let dataSubject = {
    subjectName,
    quantity,
    subjectId,
    teacher,
    diligence,
    midterm,
    endterm,
    point_avg: Math.round(point_avg * 100) / 100,
    tempPoint: Math.round(point_avg * quantity * 100) / 100,
  };
  data.push(dataSubject);
}
console.log('data: ', data);

const dataFilter = data.filter((item, index) => {
  if (
    item.quantity !== 0 &&
    item.subjectName !== data?.[index + 1]?.subjectName &&
    item.point_avg >= 4
  ) {
    return item;
  }
});
let sumObject = 0;
let totalQuantity = 0;
dataFilter.forEach(item => {
  totalQuantity += Number(item.quantity);
  sumObject += item.tempPoint;
});
const avgLadder10 = Math.round((sumObject / totalQuantity) * 100) / 100;
const avgLadder4 = Math.round((avgLadder10 * 400) / 1000);
console.log('totalQuantity: ', totalQuantity);
console.log('avg point ladder 10: ', avgLadder10);
console.log('avg point ladder 4: ', avgLadder4);
