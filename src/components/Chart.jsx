import ReactECharts from "echarts-for-react";
export const EChartComponent = ({
    options = [],
    style= ""
  }) => {
  
    return (
      <div className="echart_main">
        <ReactECharts option={options} opts={{ renderer: "svg" }} style={style}  />
      </div>
    );
  };