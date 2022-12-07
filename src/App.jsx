import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChartLine from "./components/ChartLine"
import ChartArea from "./components/ChartArea"
// Icons
import { RiLineChartLine, RiHashtag } from "react-icons/ri";

function App() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Card 1 */}
          <div className="bg-primary-100 p-8 rounded-xl text-gray-300 flex flex-col gap-6 col-span-1 md:col-span-2">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-2xl">Volume Operado</h4>
            <span className="text-5xl text-white">R$ 8.350,00</span>
            <span className="pt-2 px-3 border-t border-white font-bold text-sm">
              Taxa média - mês <br />
              <span className="font-normal">0,00%</span>
            </span>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-2xl text-primary-900 flex flex-col gap-6 col-span-1 md:col-span-2">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-2xl">Total de Oportunidades</h4>
            <span className="text-5xl">R$ 8.350,00</span>
            <span className="pt-2 px-3 border-t border-primary-100 font-bold text-sm">
              Taxa de Conversão <br />
              <span className="font-normal">79,83%</span>
            </span>
          </div>
        </section>
        {/* Section 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-2xl text-primary-900 flex flex-col gap-6 col-span-1 md:col-span-2">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-2xl">Prazo Médio de Compras</h4>
            <span className="text-5xl">R$ 8.350,00</span>
            <span className="pt-2 px-3 border-t border-primary-100 font-bold text-sm">
              Taxa de Conversão <br />
              <span className="font-normal">79,83%</span>
            </span>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-2xl text-primary-900 flex flex-col gap-6 col-span-1 md:col-span-2">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-2xl">Prazo Médio de Compras</h4>
            <ChartArea />
          </div>
        </section>
        <section className="grid grid-cols-1 mt-10 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-2xl text-primary-900 flex flex-col gap-6 col-span-1 md:col-span-2">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-2xl">Total de Oportunidades</h4>
            <ChartLine />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
