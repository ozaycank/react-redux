import  {Container}  from "reactstrap"
import Navi  from  "../navi/navi"
import Dashboard from "../root/dashboard"
function App() {
  return (
    <Container>
      <Navi/>
      <Dashboard/>
    </Container>
  );
}

export default App;
