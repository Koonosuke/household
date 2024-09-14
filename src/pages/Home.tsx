import { Box } from "@mui/material";
import Calender from "../components/Calender";
import Monthly from "../components/Monthly";
import TransactionForm from "../components/TransactionForm";
import TransactionMenu from "../components/TransactionMenu";
import { Transaction } from "../types";

interface HomeProps {
  monthlyTransactions: Transaction[];
}
export default function Home({ monthlyTransactions }: HomeProps) {
  return (
    <Box sx={{ display: "flex" }}>
      {/* 左側（収支など） */}
      <Box sx={{ flexGrow: 1 }}>
        <Monthly monthlyTransactions={monthlyTransactions} />
        <Calender />
      </Box>
      {/* 右側コンテンツ */}
      <Box>
        <TransactionMenu />
        <TransactionForm />
      </Box>
    </Box>
  );
}
