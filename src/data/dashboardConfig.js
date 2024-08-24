const dashboardConfig = {
  categories: [
    {
      id: "cspm",
      title: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "widget1",
          type: "pie",
          title: "Cloud Accounts",
          data: {
            labels: ["Connected", "Not Connected"],
            values: [50, 50],
            colors: ["blue", "gray"],
          },
        },
        {
          id: "widget2",
          type: "doughnut",
          title: "Risk Assessment",
          data: {
            labels: ["Passed", "Failed", "Warning"],
            values: [70, 20, 10],
            colors: ["green", "red", "orange"],
          },
        },
        {
          id: "widget3",
          type: "bar",
          title: "Workload Alerts",
          data: {
            labels: ["Critical", "High", "Medium", "Low"],
            values: [15, 25, 35, 25],
            colors: ["red", "orange", "yellow", "green"],
          },
        },
        {
          id: "widget4",
          type: "doughnut",
          title: "Risk Alert",
          data: {
            labels: ["Passed", "Failed", "Not Connected"],
            values: [70, 10, 60],
            colors: ["green", "red", "blue"],
          },
        },
      ],
    },
    {
      id: "cspm23",
      title: "CSPM23",
      widgets: [
        {
          id: "widget1",
          type: "pie",
          title: "Cloud Accounts 23",
          data: {
            labels: ["Connected", "Not Connected"],
            values: [40, 60],
            colors: ["blue", "gray"],
          },
        },
        {
          id: "widget2",
          type: "doughnut",
          title: "Risk Assessment 23",
          data: {
            labels: ["Passed", "Failed", "Warning"],
            values: [60, 30, 10],
            colors: ["green", "red", "orange"],
          },
        },
        {
          id: "widget3",
          type: "bar",
          title: "Workload Alerts 23",
          data: {
            labels: ["Critical", "High", "Medium", "Low"],
            values: [10, 30, 40, 20],
            colors: ["red", "orange", "yellow", "green"],
          },
        },
      ],
    },
    {
      id: "cspm455",
      title: "CSPM 455",
      widgets: [
        {
          id: "widget1",
          type: "pie",
          title: "Cloud Accounts 455",
          data: {
            labels: ["Connected", "Not Connected"],
            values: [55, 45],
            colors: ["blue", "gray"],
          },
        },
        {
          id: "widget2",
          type: "bar",
          title: "error Alerts",
          data: {
            labels: ["Critical", "High", "Medium", "Low" , "moderate-low","less"],
            values: [15, 25, 35, 25 ,10,17],
            colors: ["red", "orange", "yellow", "green","pink","blue"],
          },
        },
        {
          id: "widget3",
          type: "doughnut",
          title: "Risk Assessment 455",
          data: {
            labels: ["Passed", "Failed", "Warning"],
            values: [75, 15, 10],
            colors: ["green", "red", "orange"],
          },
        },
        {
          id: "widget4",
          type: "bar",
          title: "WContact Errors",
          data: {
            labels: ["Critical", "High", "Medium", "Low" , "Deep"],
            values: [20, 20, 30, 30 , 13],
            colors: ["red", "orange", "yellow", "green" , "Brown"],
          },
        },
      ],
    },
    {
      id: "cspm2589",
      title: "CSPM 2589",
      widgets: [
        {
          id: "widget1",
          type: "pie",
          title: "Cloud Accounts 2589",
          data: {
            labels: ["Connected", "Not Connected"],
            values: [70, 30],
            colors: ["blue", "gray"],
          },
        },
        {
          id: "widget2",
          type: "doughnut",
          title: "Risk Assessment 2589",
          data: {
            labels: ["Passed", "Failed", "Warning"],
            values: [80, 10, 10],
            colors: ["green", "red", "orange"],
          },
        },
        {
          id: "widget3",
          type: "bar",
          title: "Workload Alerts 2589",
          data: {
            labels: ["Critical", "High", "Medium", "Low"],
            values: [10, 20, 50, 20],
            colors: ["red", "orange", "yellow", "green"],
          },
        },
      ],
    },
  ],
};

export default dashboardConfig;