import Rating from "./Pages/Rating";
import TransferItemsList from "./Pages/TransferItemsList";
import SnackbarProvider from "react-simple-snackbar";

function App() {
  return (
    <div>
      {/*=========================== Star Rating Component ==================*/}
      {/* <Rating /> */}

      {/* ========================= Lists React Iems Movable ================ */}
      <SnackbarProvider>
        <TransferItemsList />
      </SnackbarProvider>
    </div>
  );
}

export default App;
