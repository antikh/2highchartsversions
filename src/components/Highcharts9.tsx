import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts9";
(window as any).Highcharts9 = Highcharts;
(window as any).Highcharts = null;



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

const Highcharts9 = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Highcharts9;
