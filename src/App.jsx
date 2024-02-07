import CoreConcepts from "./component/CoreConcepts";
import Examples from "./component/Examples";
import Header from "./component/Header";

function App() {
  return (
    <div>
      <Header />

      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
