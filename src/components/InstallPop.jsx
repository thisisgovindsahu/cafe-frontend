import PWAInstallButton from "./PWAInstallButton";

const InstallPop = ({setShowPOPUp}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[1000]"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(6px)",
      }}>
      <div
        className="bg-white p-8 rounded-lg shadow-lg text-center w-[95%] md:w-[400px] flex flex-col items-center gap-2"
        style={{ paddingBlock: "20px" }}>
        <h2 className="text-2xl font-semibold mb-2">Install Our App</h2>
        <p className="mb-4">
          Get a better experience by installing our Progressive Web App.
        </p>
        <PWAInstallButton setShowPOPUp={setShowPOPUp} />
        <button
          style={{
            padding: "5px 15px",
            borderRadius: "8px",
            backgroundColor: "orange",
          }}
          className="mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          onClick={() => {
            // You can add logic here to close the popup if needed
            setShowPOPUp(false);
          }}>
          No, thanks
        </button>
      </div>
    </div>
  );
};

export default InstallPop;
