/* TEVAH — App entry */
const { createRoot } = ReactDOM;

const App = () => {
  return (
    <div data-screen-label="Home" className="min-h-screen">
      <Announce/>
      <Navbar/>
      <Hero/>
      <TrustBar/>
      <Categories/>
      <Consultoria/>
      <Novidades/>
      <CompleteLook/>
      <Heritage/>
      <Lojas/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App/>);
