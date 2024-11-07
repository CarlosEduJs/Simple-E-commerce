import Header from "./components/layout/Header";

import ProductOverview from "./components/ProductOverview";

function App() {
  return (
    <div className="w-screen h-screen px-20 max-lg:px-10 max-md:px-3 max-sm:px-0">
      <main className="flex flex-col">
        <Header />
        <ProductOverview />
      </main>
    </div>
  );
}

export default App;
