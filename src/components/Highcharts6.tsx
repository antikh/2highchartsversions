import * as React from "react";
import ReactHighcharts from "react-highcharts";
// import Highcharts from "highcharts6";

(window as any).Highcharts6 = ReactHighcharts.Highcharts;

const options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

const Highcharts6 = () => {
  return (
    <div>
      <ReactHighcharts config={options} />
    </div>
  );
};

export default Highcharts6;
