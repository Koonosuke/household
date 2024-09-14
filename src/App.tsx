import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { format } from "date-fns";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import { db } from "./firebase";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Report from "./pages/Report";
import { theme } from "./theme/theme";
import { Transaction } from "./types/index";
import { formatMonth } from "./utils/formatting";

function App() {
  //Firesoreエラーかどうかを判定する型ガード
  function isFireStoreError(
    err: unknown
  ): err is { code: string; message: string } {
    return typeof err === "object" && err !== null && "code" in err;
  }
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  console.log(currentMonth);
  const a = format(currentMonth, "yyyy-MM");
  console.log(a);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Transactions"));
        console.log(querySnapshot);
        const transactionData = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          } as Transaction; //TypeScriptの型アサーション
          //「このデータはTransaction型だ」と指示することで、型のチェックやエラーを回避
        });
        console.log(transactionData);
        setTransactions(transactionData);
      } catch (err) {
        if (isFireStoreError(err)) {
          //console.error(JSON.stringify(err, null,2));
          console.error("firestoreのエラーは", err);
        } else {
          console.error("一般的なエラーは:", err);
        }
      }
    };
    fetchTransactions();
  }, []);
  const monthlyTransactions = transactions.filter((transaction) => {
    return transaction.date.startsWith(formatMonth(currentMonth));
  });
  console.log(monthlyTransactions);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route
              index
              element={<Home monthlyTransactions={monthlyTransactions} />}
            />
            <Route path="/report" element={<Report />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
