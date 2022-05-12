import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import dynamic from "next/dynamic";
import { useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesChart = () => {
  const [pieSeries, setPieSeries] = useState([44, 55, 41, 17, 15]);

  console.log(Date.now());

  const chartoptions = {
    series: [
      {
        name: "Woodruff",
        data: [
          [Date.now() - 6 * 86400000, 2],
          [Date.now() - 5 * 86400000, 3],
          [Date.now() - 4 * 86400000, 8],
          [Date.now() - 3 * 86400000, 6],
          [Date.now() - 2 * 86400000, 2],
          [Date.now() - 86400000, 4],
        ],
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
        borderColor: "rgba(0,0,0,0.1)",
      },
      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        type: "datetime",
        min: Date.now() - 5 * 86400000, // Where the 6 is the number of days
        max: Date.now(),
      },
      // yaxis:{
      //   categories: [
      //     "1","2","3","4","5","6","7","8"
      //   ]
      // }
    },
  };

  const pieOptions = {
    options: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
    series: pieSeries,
  };

  const getDailyReport = (e) => {
    e.preventDefault();
    setPieSeries([0, 31, 40, 28, 51]);
    
  };

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Hours worked</CardTitle>
          <CardSubtitle className="text-muted" tag="h6">
            Monthly Report
          </CardSubtitle>

          <Chart
            type="area"
            width="100%"
            height="390"
            options={chartoptions.options}
            series={chartoptions.series}
          />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Hours worked</CardTitle>
          <CardSubtitle className="text-muted" tag="h6">
            Daily work Report
          </CardSubtitle>
          <Form className="chart__pie__selection">
            <FormGroup>
              <Label for="exampleSelect" tag="h6">
                Select Employee
              </Label>
              <Input id="exampleSelect" name="select" type="select">
                <option>Select Employee</option>
                <option>Vinita Rane</option>
                <option>Manish Mishra</option>
                <option>Ishita Chauhan</option>
              </Input>
            </FormGroup>
            <FormGroup className="date__input">
              <Label tag="h6" for="exampleDate">
                Select Date
              </Label>
              <Input id="date__field" name="date" type="date" />
            </FormGroup>
            <FormGroup>
              <Button onClick={(e) => getDailyReport(e)}>Submit</Button>
            </FormGroup>
          </Form>
          <Chart
            type="pie"
            width="100%"
            height="390"
            options={pieOptions.options}
            series={pieOptions.series}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default SalesChart;
