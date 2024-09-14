import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Transaction } from "../types";
import { financeCalculations } from "../utils/financeCalculations";

interface MonthlyProps {
  monthlyTransactions: Transaction[];
}
const Monthly = ({ monthlyTransactions }: MonthlyProps) => {
  console.log(monthlyTransactions);

  const { income, expense, balance } = financeCalculations(monthlyTransactions);

  return (
    <Grid container spacing={2}>
      <Grid item xs={4} display={"flex"} flexDirection={"column"}>
        <Card
          sx={{
            bgcolor: "blue",
            color: "white",
            borderRadius: "10px",
            flexGrow: 1,
          }}
        >
          <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
            <Stack direction={"row"}>
              <ArrowUpwardIcon sx={{ fontSize: "2rem" }} />
              <Typography>収入</Typography>
            </Stack>

            <Typography
              textAlign={"right"}
              variant="h5"
              fontWeight={"bold"}
              sx={{
                wordBreak: "break-word",
                fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" },
              }}
            >
              ￥{income}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} display={"flex"} flexDirection={"column"}>
        {/* xs={4} は、画面幅の1/3をこのアイテムに割り当て */}
        <Card
          sx={{
            bgcolor: "red",
            color: "white",
            borderRadius: "10px",
            flexGrow: 1,
          }}
        >
          <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
            <Stack direction={"row"}>
              <ArrowDownwardIcon sx={{ fontSize: "2rem" }} />
              <Typography>支出</Typography>
            </Stack>

            <Typography
              textAlign={"right"}
              variant="h5"
              fontWeight={"bold"}
              sx={{
                wordBreak: "break-word",
                fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" },
              }}
            >
              ￥{expense}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} display={"flex"} flexDirection={"column"}>
        <Card
          sx={{
            bgcolor: "green",
            color: "white",
            borderRadius: "10px",
            flexGrow: 1,
          }}
        >
          <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
            <Stack direction={"row"}>
              <AccountBalanceIcon sx={{ fontSize: "2rem" }} />
              <Typography>残高</Typography>
            </Stack>

            <Typography
              textAlign={"right"}
              variant="h5"
              fontWeight={"bold"}
              sx={{
                wordBreak: "break-word",
                fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" },
              }}
            >
              ￥{balance}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Monthly;
