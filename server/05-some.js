const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

let response = false;

for (let i = 0; i < numbers.length; i++) {
  let almacenaje = [];
  const element = numbers[i];
  if (element % 2 === 0) {
    response = true;
    break;
  }
}
console.log(response);

const response2 = numbers.some((i) => i % 2 === 0); //reduce todo el for a una linea
console.log("response 2 : ", response2);

//** SOME CON OBJETOS */

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Nicoiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const responseObj = orders.some((items) => items.delivered); //reduce todo el for a una linea
console.log("responseObj : ", responseObj);

//** AÑADIENDO DIFICULTAD A SOME CON ARRAYS DE FECHAS */

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

// const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");// no funciono asi.
const { areIntervalsOverlapping } = require("date-fns");

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate }
    );
  });
};
console.log("isOverlap", isOverlap(newAppointment));
