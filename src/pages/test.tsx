import Sidebar from "../components/navigations/Sidebar";
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import CostingTable from "../components/costing/table/CostingTable";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const marginalStatus = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Marginal Status",
    },
  },
};

export const trueValueTrueCost = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "True Value vs True Cost (Accumulated)",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const data2 = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Test: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto bg-gray-100 p-10">
        <div className="mb-6 flex">
          <div className="ml-auto">
            <button className="rounded-md bg-[#538DFF] px-5 py-2 text-white hover:shadow-lg">
              Update
            </button>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="aspect-square flex-1 rounded-[10%] bg-white shadow-lg hover:shadow-inner">
            <div className="flex h-full flex-col items-center justify-center p-5">
              <div className="mb-4">
                <Image
                  src="/contract-icon.png"
                  alt="Icon"
                  width="75"
                  height="75"
                />
              </div>
              <>
                <h2 className="text-xl font-bold">Contract Value</h2>
                <p className="text-3xl font-bold text-[#0075FF]">
                  RM10 million
                </p>
              </>
            </div>
          </div>
          <div className="aspect-square flex-1 rounded-[10%] bg-white shadow-lg hover:shadow-inner">
            <div className="flex h-full flex-col items-center justify-center p-5">
              <div className="mb-4">
                <Image
                  src="/tender-cost-icon.png"
                  alt="Icon"
                  width="75"
                  height="75"
                />
              </div>
              <>
                <h2 className="text-xl font-bold">Tender Costs</h2>
                <p className="text-3xl font-bold text-[#0075FF]">RM8 million</p>
              </>
            </div>
          </div>
          <div className="aspect-square flex-1 rounded-[10%] bg-white shadow-lg hover:shadow-inner">
            <div className="flex h-full flex-col items-center justify-center p-5">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/tender-margin-icon.png"
                  alt="Icon"
                  width="75"
                  height="75"
                />
                <h2 className="text-4xl font-bold">20%</h2>
              </div>
              <>
                <h2 className="text-xl font-bold">Tender Margin</h2>
                <p className="text-3xl font-bold text-[#0075FF]">RM2 million</p>
              </>
            </div>
          </div>
          <div className="aspect-square flex-1 rounded-[10%] bg-white shadow-lg hover:shadow-inner">
            <div className="flex h-full flex-col items-center justify-center p-5">
              <div className="mb-4">
                <Image
                  src="/duration-icon.png"
                  alt="Icon"
                  width="75"
                  height="75"
                />
              </div>
              <>
                <h2 className="text-xl font-bold">Project Duration</h2>
                <p className="text-3xl font-bold text-[#0075FF]">10 months</p>
              </>
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-3">
          <div className=" flex flex-[1.5] flex-col gap-3">
            <div className="flex flex-[1.5] flex-col items-center justify-center rounded-[25px] bg-white text-center shadow-lg hover:shadow-inner">
              <h2 className="text-xl">Actual Margin</h2>
              <h1 className="my-3 text-6xl">30%</h1>
              <p className="text-xl text-gray-400">
                (True Value - True Cost) / True Value
              </p>
            </div>
            <div className=" flex flex-[2] flex-col justify-center pl-5 text-2xl font-medium leading-[3rem] text-gray-400">
              <h2>General Explaination:</h2>
              <h2>True Value (work done on site) = 10</h2>
              <h2>True Costs = 8</h2>
              <h2>Actual Margin = 2</h2>
            </div>
          </div>
          <div className="flex flex-[2] flex-col gap-3">
            <div className="aspect-video flex-1 rounded-[25px] bg-white p-5 shadow-lg">
              <Line options={marginalStatus} data={data} />
            </div>
            <div className="aspect-video flex-1 rounded-[25px] bg-white p-5 shadow-lg">
              <Line options={trueValueTrueCost} data={data2} />
            </div>
          </div>
        </div>
        <div className="relative mt-8 flex flex-col bg-white p-5 shadow-lg">
          <h1 className="mb-5 text-3xl font-bold">Budget VS Costs</h1>
          <button className="absolute right-5 rounded-md bg-[#538DFF] px-5 py-2 text-white hover:shadow-lg">
            Add New
          </button>
          <CostingTable />
        </div>
      </div>
    </div>
  );
};

export default Test;
