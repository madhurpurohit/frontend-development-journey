import { Navbar } from "./Components/Navbar";

function App() {
  return (
    // Background image poori screen par apply kiya gaya hai
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Website content ke liye max-width container */}
      <div className="relative max-w-[1460px] mx-auto">
        <Navbar />
        <main className="flex items-center justify-center h-screen px-6 pt-24">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
              Welcome to Your Page
            </h1>
            <p className="mt-4 text-xl drop-shadow-md">
              Explore the menu to navigate.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
