function App() {
  return (
    <section className="bg-[url(/background.png)] bg-cover bg-gray-50 px-5 lg:px-28 w-full flex flex-col items-center min-h-screen">
      <div className="container lg:px-14 lg:mb-6 flex flex-row justify-between items-start">
        <img
          src="/sesa-text.png"
          alt="text-sesa"
          className="w-[60%] lg:w-[500px] h-auto mt-6 lg:mt-16"
        />
        <img
          src="/sesa-logo.png"
          alt="logo-sesa"
          className="w-[35%] lg:w-[300px] h-auto"
        />
      </div>
      <div className="container flex flex-row flex-wrap justify-center items-start">
        <div className="items-container">
          <img src="/ippa-id.png" alt="ippa-id" className="w-full h-auto" />
          <button className="button-regist disabled">Sold Out</button>
        </div>
        <div className="items-container">
          <img
            src="/ippa-conero.png"
            alt="ippa-conero"
            className="w-full h-auto"
          />
          <a
            href="https://baskaraciptakarya.com/checkouts/ippaconero-ticket/"
            className="button-regist"
          >
            Register Now
          </a>
        </div>
        <div className="items-container">
          <img src="/iiyma.png" alt="iiyma" className="w-full h-auto" />
          <a href="http://sesabyldc.id/iiyma2025" className="button-regist">
            Register Now
          </a>
        </div>
        <div className="items-container">
          <img src="/gamf-pop.png" alt="gamf-pop" className="w-full h-auto" />
          <a
            href="https://sesabyldc.id/gamfpop/onsite2025"
            className="button-regist"
          >
            Register Now
          </a>
        </div>
        <div className="items-container">
          <img src="/gamf-kids.png" alt="gamf-kids" className="w-full h-auto" />
          <button className="button-regist">Coming Soon</button>
        </div>
        <div className="items-container">
          <img src="/nima.png" alt="nima" className="w-full h-auto" />
          <button className="button-regist">Coming Soon</button>
        </div>
        <div className="items-container">
          <img src="/ippasea.png" alt="ippa-sea" className="w-full h-auto" />
          <button className="button-regist">Coming Soon</button>
        </div>
        <div className="items-container">
          <img
            src="/gamf-classic.png"
            alt="gamf-classic"
            className="w-full h-auto"
          />
          <button className="button-regist">Coming Soon</button>
        </div>
      </div>
      <div className="container">
        <img src="/jury.png" alt="jury" className="w-full h-auto" />
      </div>
    </section>
  );
}

export default App;
