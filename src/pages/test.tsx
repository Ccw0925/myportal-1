import Sidebar from "../components/navigations/Sidebar";
import Image from "next/image";

const Test: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-10">
        <div className="mb-6 flex">
          <div className="ml-auto">
            <button className="rounded-md bg-[#538DFF] px-5 py-2 text-white">
              Update
            </button>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="aspect-square flex-1 rounded-[10%] bg-white shadow-lg hover:shadow-inner">
            <div className="flex h-full flex-col p-5 items-center justify-center">
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
                <p className="text-3xl text-[#0075FF] font-bold">RM10 million</p>
              </>
            </div>
          </div>
          <div className="aspect-square flex-1 rounded-[10%] bg-white shadow-lg hover:shadow-inner"><div className="flex h-full flex-col p-5 items-center justify-center">
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
                <p className="text-3xl text-[#0075FF] font-bold">RM8 million</p>
              </>
            </div></div>
          <div className="aspect-square flex-1 rounded-[10%] bg-white shadow-lg hover:shadow-inner"><div className="flex h-full flex-col p-5 items-center justify-center">
              <div className="mb-4 flex gap-3 items-center">
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
                <p className="text-3xl text-[#0075FF] font-bold">RM2 million</p>
              </>
            </div></div>
          <div className="aspect-square flex-1 rounded-[10%] bg-white shadow-lg hover:shadow-inner"><div className="flex h-full flex-col p-5 items-center justify-center">
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
                <p className="text-3xl text-[#0075FF] font-bold">10 months</p>
              </>
            </div></div>
        </div>
      </div>
    </div>
  );
};

export default Test;
