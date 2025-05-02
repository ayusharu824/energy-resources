import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import HeaderNew from "../components/HeaderNew";

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string,
  protein: string
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Developer-Funded SPV Structure",
    "Developer funds full project, including consumer’s 26% equity stake.",
    "Recovered via fixed fee or tariff add-on over time.",
    "Large consumers preferring zero capex.",
    "No upfront investment; smooth onboarding."
  ),
  createData(
    "Deferred Equity Payment Plans",
    "Consumer pays equity in 0–20% upfront; rest in installments over 3–5 years",
    "From operational savings (cash flow positive).",
    "Mid-sized corporates wanting opex-like deals.",
    "Reduces initial cash outlay while maintaining ownership."
  ),
  createData(
    "Hybrid Power Purchase Agreements",
    "Part of the energy tariff covers consumer’s equity share amortized into the rate.",
    "Embedded in long-term PPA pricing.",
    "Price-sensitive consumers seeking simplicity.",
    "Structured tariff ensures compliance + financial ease."
  ),
  createData(
    "Leasing Structures / Equity Leasing",
    "Developer owns equity; contractual/legal agreement gives consumer equity rights for compliance.",
    "No repayment; purely legal construct.",
    "Entities avoiding balance sheet impact.",
    "Enables compliance without cash outlay."
  ),
  createData(
    "Aggregator-Based Group Captive",
    "Multiple small consumers pooled; aggregator negotiates with developer to front pooled 26% equity.",
    "Shared recovery or embedded in tariff via aggregator.",
    "SMEs, startups, low-credit consumers.",
    "Scales group captive access without large investments."
  ),
  createData(
    "Deferred Equity Payment Plans",
    "Consumer pays equity in 0–20% upfront; rest in installments over 3–5 years",
    "From operational savings (cash flow positive).",
    "Mid-sized corporates wanting opex-like deals.",
    "Reduces initial cash outlay while maintaining ownership."
  ),
  createData(
    "Hybrid Power Purchase Agreements",
    "Part of the energy tariff covers consumer’s equity share amortized into the rate.",
    "Embedded in long-term PPA pricing.",
    "Price-sensitive consumers seeking simplicity.",
    "Structured tariff ensures compliance + financial ease."
  ),
  createData(
    "Leasing Structures / Equity Leasing",
    "Developer owns equity; contractual/legal agreement gives consumer equity rights for compliance.",
    "No repayment; purely legal construct.",
    "Entities avoiding balance sheet impact.",
    "Enables compliance without cash outlay."
  ),
  createData(
    "Aggregator-Based Group Captive",
    "Multiple small consumers pooled; aggregator negotiates with developer to front pooled 26% equity.",
    "Shared recovery or embedded in tariff via aggregator.",
    "SMEs, startups, low-credit consumers.",
    "Scales group captive access without large investments."
  ),
  createData(
    "Deferred Equity Payment Plans",
    "Consumer pays equity in 0–20% upfront; rest in installments over 3–5 years",
    "From operational savings (cash flow positive).",
    "Mid-sized corporates wanting opex-like deals.",
    "Reduces initial cash outlay while maintaining ownership."
  ),
  createData(
    "Hybrid Power Purchase Agreements",
    "Part of the energy tariff covers consumer’s equity share amortized into the rate.",
    "Embedded in long-term PPA pricing.",
    "Price-sensitive consumers seeking simplicity.",
    "Structured tariff ensures compliance + financial ease."
  ),
  createData(
    "Leasing Structures / Equity Leasing",
    "Developer owns equity; contractual/legal agreement gives consumer equity rights for compliance.",
    "No repayment; purely legal construct.",
    "Entities avoiding balance sheet impact.",
    "Enables compliance without cash outlay."
  ),
  createData(
    "Aggregator-Based Group Captive",
    "Multiple small consumers pooled; aggregator negotiates with developer to front pooled 26% equity.",
    "Shared recovery or embedded in tariff via aggregator.",
    "SMEs, startups, low-credit consumers.",
    "Scales group captive access without large investments."
  ),
];

export default function Consumers() {
  return (
    <>
      <HeaderNew />
      <Box sx={{ margin: "0 4.5em", marginTop: "3rem" }}>
        <Typography
          variant="h4"
          component="h1"
          fontWeight={600}
          color="#1b1763"
          textAlign={"left"}
          gutterBottom
        >
          Solutions for Consumers
          <hr />
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{
            maxWidth: "800px",
            textAlign: "left",
            lineHeight: 1.8,
            marginTop: "2rem",
          }}
        >
          Commercial and industrial consumers now have three powerful pathways
          to switch to green energy — without disruption, capex, or complexity.
          Whether you're a manufacturing plant, corporate office, or logistics
          park, our platform connects you to the most efficient and
          cost-effective clean energy options available today. Need to add three
          icons for community solar, captive, and third party: C&I Community
          Solar (Group Captive): We aggregate multiple commercial and industrial
          (C&I) energy consumers by state and discom to form a community based
          on their collective demand. We match them with suitable developers who
          can onboard them into an upcoming or newly developed group captive
          solar/wind plant. Consumers benefit from reduced tariffs and avoid
          upfront capex. This enables faster compliance with RPO and ESG goals.
          Group captive developers in India have evolved their solutions and
          financing structures to minimize or eliminate the initial investment
          burden on consumers, especially corporate and industrial (C&I) buyers.
          Here are the most common and practical solutions being offered:
        </Typography>
      </Box>
      <Container sx={{ margin: "0 4.0em", marginTop: "3rem", height: "100vh" }}>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            maxHeight: "500px", // Set a fixed height for the table container
            overflowY: "auto", // Enable vertical scrolling
          }}
        >
          <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    color: "#1b1763",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  Structure
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    color: "#1b1763",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  Equity Funding Mechanism
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    color: "#1b1763",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  Repayment/Recovery Mode
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    color: "#1b1763",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  Ideal For
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    color: "#1b1763",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  Key Advantage
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { backgroundColor: "#f9f9f9" }, // Add hover effect
                  }}
                >
                  <TableCell
                    align="center"
                    sx={{ fontSize: "0.95rem", color: "#333" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "0.95rem", color: "#333" }}
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "0.95rem", color: "#333" }}
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "0.95rem", color: "#333" }}
                  >
                    {row.carbs}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "0.95rem", color: "#333" }}
                  >
                    {row.protein}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
