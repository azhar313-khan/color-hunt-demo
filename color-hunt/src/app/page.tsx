import Sidebar from "./component/Sidebar";
import PaletteGrid from "./component/PaletteGrid";
import Header from "./component/Layout/Header";

export default function Home() {
  const palettes = [
    {
      colors: ["#A8E6CF", "#DCEDC1", "#FFD3B6", "#FFAAA5"],
      likes: 57,
      time: "9 hours",
    },
    {
      colors: ["#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9"],
      likes: 116,
      time: "Yesterday",
    },
    // Add more palettes here...
  ];

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <PaletteGrid palettes={palettes} />
        </main>
      </div>
    </>
  );
}
