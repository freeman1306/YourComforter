export const tesDataForSectionTopAdminCards = [
  "856",
  "856",
  "856",
  "99",
  "99",
  "856",
  "856",
  "4%",
  "8%",
  "12%"
];

export const tempDayData = {
  startDay: "March 18, 2019",
  stopDay: "March 23, 2019"
};

export const testName = [
  { id: "01", name: "service name" },
  { id: "02", name: "service name" },
  { id: "03", name: "service name" },
  { id: "04", name: "service name" },
  { id: "05", name: "service name" },
  { id: "06", name: "service name" },
  { id: "07", name: "service name" },
  { id: "08", name: "service name" },
  { id: "09", name: "service name" },
  { id: "10", name: "service name" }
];

export const bar = {
  options: {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ["<21", "21-30", "31-40", "41-50", "51-60", "60<"]
    },
    colors: ["#EFBB40", "#581F77"]
    // fill: {
    //   colors: ["#EFBB40", "#581F77"]
    // }
  },
  series: [
    {
      name: "Male",
      data: [30, 40, 45, 50, 49, 60]
    },
    {
      name: "Female",
      data: [20, 30, 55, 80, 19, 70]
    }
  ]
};

export const pie = {
  options: {
    labels: ["Seeker", "Professionals"],
    colors: ["#EFBB40", "#581F77"]
    // fill: {
    //   colors: ["#EFBB40", "#581F77"]
    // }
  },

  series: [579336, 678877]
};

export const statePie = {
  options: {
    labels: [
      "IOwa",
      "Minnesota",
      "Georgia",
      "Idaho",
      "Michigan",
      "Kansas",
      "Indiana",
      "Loisiana",
      "Maine",
      "Texas"
    ]
  },
  series: [44.35, 29.03, 6.45, 4.84, 3.23, 12.1, 3, 23.06, 3.6, 12.06]
};

export const area = {
  options: {
    colors: "black",
    fill: {
      colors: "#BA83D8"
    },

    dataLabels: {
      style: {
        colors: ["lime"]
      }
    },
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ["18", "19", "20", "21", "22", "23"]
      // type: "datetime"
    }
  },

  series: [
    {
      name: "Areas name",
      data: [280, 370, 230, 195, 285, 330]
    }
  ]
};
