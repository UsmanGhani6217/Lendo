export const BarOptions = {
    title: {
      text: "",
      show: false,
      textStyle: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Roboto, sans-serif",
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      show: true,
      data: ["Spent", "Excepted"],
    },
    grid: {
      left: "0px",
      right: "10px",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        splitLine: {
          show: true,
          lineStyle: {
            color: "#F0F0F0",
          },
        },
      },
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 300,
            interval: 50,
            axisLabel: {
              formatter: '{value} SAR'
            }
          },
    ],
    series: [
      {
        name: "Spent",
        type: "bar",
        stack: "YTDTarget",
        smooth: true,
        color: "#2D91FE",
        data: [50,250,150,130,100,90,0],
      },
      {
        name: "Excepted",
        type: "bar",
        stack: "YTD",
        smooth: true,
        color: "#4BDFFF",
        data:  [0, 0, 0, 0, 0, 0, 290],
      }
    ],
  };
export const PieOptions = {
    title: {
      text: "",
      show: false,
      textStyle: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Roboto, sans-serif",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      backgroundColor: "#F0F0F0",
      top: 10,
      right: 10,
      type: "scroll",
      orient: "vertical",
      itemWidth: 24,
      itemHeight: 20,
      selectedMode: true,
      padding: [10, 10, 10, 10],
      borderRadius: 8,
      itemGap: 10, // Reduced gap between legend items
      icon: "roundRect",
    },

    grid: {
      left: "30px",
      right: "10px",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        show: false,
        splitLine: {
          show: true,
          lineStyle: {
            color: "#F0F0F0",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            color: "#F0F0F0",
          },
        },
      },
    ],

    series: [
      {
        type: "pie",
        radius: ["50%", "75%"], // Increased radius to make the pie chart bigger
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: "#fff",
          borderWidth: 0,
        },
        label: {
          show: true,
          position: "center",
          fontSize: 16,
          fontWeight: "bold",
        },

        labelLine: {
          show: false,
        },
        center: ["35%", "50%"],
        color: ["#2D91FE", "#4BDFFF", "#FFC359", "#FF6769"],
        data: [
            { value: 45.7, name: 'A - 45.7%' },
            { value: 51.5, name: 'B - 51.5%' },
            { value: 23.2, name: 'C - 23.2%' },
            { value: 51.7, name: 'D - 51.7%' }
          ],
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: "bold",
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  }
  