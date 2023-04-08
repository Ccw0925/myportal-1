import Sidebar from "../components/navigations/Sidebar";
import Image from "next/image";

const Test: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto bg-gray-100 p-10">
        <div className="mb-6 flex">
          <div className="ml-auto">
            <button className="rounded-md bg-[#538DFF] px-5 py-2 text-white">
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
            <div className="aspect-video flex-1 rounded-[25px] bg-white shadow-lg">
              Marginal Status
            </div>
            <div className="aspect-video flex-1 rounded-[25px] bg-white shadow-lg">
              True Value vs True Cost (Accumulated)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
