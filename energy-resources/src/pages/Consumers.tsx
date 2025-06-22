import {
  Box,
  Container,
  Grid,
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
import RenewableEnergyImg from "../assets/RenewableEnergy.png";
import GroupCaptiveImg from "../assets/GroupCaptiveImg.png";
import GroupCaptiveIcon from "../assets/GroupCaptiveIcon.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // import this at the top
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

const gridData = [
  {
    title: "Client Registration",
    image: GroupCaptiveIcon,
    desc: [
      "Submit your clean energy needs.",
      "Capacity, location, model (Group Captive/Third-Party), consumption details",
      "Start your green energy journey with clarity",
      //"→"
    ],
  },
  {
    title: "Feasibility check & Eligibility",
    image: GroupCaptiveIcon,
    desc: [
      "Technical and regulatory assessment conducted, cliehs clusterd by state and load profile.",
    ],
  },
  {
    title: "Community Aggregation & Clustering",
    image: GroupCaptiveIcon,
    desc: [
      "Minimum capacity thrushold met, consolidated project brief prepared.",
    ],
  },
  {
    title: "Developer Selection & Documentation",
    image: GroupCaptiveIcon,
    desc: ["Developer selected, agreements on energy requirements drafted."],
  },
  {
    title: "Project Execution & Power Delivery",
    image: GroupCaptiveIcon,
    desc: [
      "Monitoring and implementation until green power deliverd to clients",
    ],
  },
];

export default function Consumers() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#F1FBF7", // soft pastel background
          minHeight: "100vh", // ensures background covers the whole page
        }}
      >
        <HeaderNew />
        <Box
          sx={{
            px: { xs: 2, md: 6 },
            py: { xs: 10, md: 15 },
          }}
        >
          <Box sx={{ pl: { xs: 2, md: "2.2em" }, mb: 3 }}>
            <Typography
              variant="h4"
              component="h1"
              fontWeight={700}
              color="#1b1763"
              textAlign="left"
              sx={{ mb: 1 }}
              gutterBottom
            >
              Solutions for C&I Consumers
            </Typography>
            <Box
              sx={{
                width: 64,
                height: 6,
                borderRadius: 3,
                background: "linear-gradient(90deg, #1b1763 60%, #4fc3f7 100%)",
                mt: 0.5,
              }}
            />
          </Box>
          <Box sx={{ margin: "0 2.5em" }}>
            <Typography
              variant="body1"
              color="#222"
              sx={{
                fontFamily: "Segoe UI, Arial, Helvetica, sans-serif",
                fontSize: "1.1rem",
                lineHeight: 1.85,
                marginBottom: "1rem",
                letterSpacing: 0.02,
              }}
            >
              Commercial and industrial consumers now have three powerful
              pathways to switch to green energy — without disruption, capex, or
              complexity. Whether you're a manufacturing plant, corporate
              office, or logistics park, our platform connects you to the most
              efficient and cost-effective clean energy options available today.
            </Typography>
          </Box>
          <Box sx={{ margin: "2em 2.5em 0 2.5em", textAlign: "center" }}>
            <img
              src={RenewableEnergyImg}
              alt="C&I Consumers"
              style={{
                maxWidth: "40%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            />
          </Box>
          <Box sx={{ margin: "2em 2.5em 0 2.5em", textAlign: "center" }}></Box>
        </Box>
      </Box>

      <Box sx={{ mt: 0, backgroundColor: "#FAF8FD", py: 6, px: { xs: 2, md: 4 }}}>
        <Box sx={{ pl: { xs: 2, md: "2.2em" }, mb: 0 }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight={700}
            color="#1b1763"
            textAlign="left"
            sx={{ mb: 1 }}
            gutterBottom
          >
            Group Captive Open Access Community
          </Typography>
          <Box
            sx={{
              width: 64,
              height: 6,
              borderRadius: 3,
              background: "linear-gradient(90deg, #1b1763 60%, #4fc3f7 100%)",
              mt: 0.5,
            }}
          />
        </Box>
        <Typography
          variant="body1"
          color="#222"
          sx={{
            fontFamily: "Segoe UI, Arial, Helvetica, sans-serif",
            fontSize: "1.1rem",
            lineHeight: 1.85,
            marginTop: "1.5rem",
            letterSpacing: 0.02,
            padding: "0 2.0em",
            px: { xs: 2, md: 6 },
          }}
        >
          Group Captive Open Access Solution is a clean energy project developed
          for the collective usage by a group of corporate and industrial (C&I)
          electricity buyers. As per the government regulation, the group of
          buyers will hold 26% equity. Together, all buyers collectively will
          need to consume at least 51% of the power – a PPA is drawn up to
          ensure clarity on electricity tariffs for 15-25 years. The adoption of
          the Group Captive model is witnessing an increasing trend amongst
          corporates, because the savings per-unit electricity make it a
          compelling model. The capital investment is minimal, while per-unit
          tariffs are at least 25-40% cheaper than the grid.
          <br />
          <br />
          We aggregate multiple commercial and industrial (C&I) energy consumers
          by state and discom to form a community/group based on their
          collective demand - this will reduce the time taken to get the clean
          energy from group captive plants.
        </Typography>
        <Box sx={{ margin: "2em 2.5em 0 2.5em", textAlign: "center" }}>
          <img
            src={GroupCaptiveImg}
            alt="C&I Consumers"
            style={{
              maxWidth: "40%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          />
        </Box>
      </Box>

      <Box sx={{mt: 0, backgroundColor: "#F0FAFD", py: 6, px: { xs: 2, md: 4 } }}>
        <Box sx={{ pl: { xs: 2, md: "2.2em" }, mb: 0 }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight={700}
            color="#1b1763"
            textAlign="left"
            sx={{ mb: 1 }}
            gutterBottom
          >
            Benefits of Joining a Group Captive Community
          </Typography>
          <Box
            sx={{
              width: 64,
              height: 6,
              borderRadius: 3,
              background: "linear-gradient(90deg, #1b1763 60%, #4fc3f7 100%)",
              mt: 0.5,
            }}
          />
        </Box>
        <Typography
          variant="body1"
          color="#222"
          sx={{
            fontFamily: "Segoe UI, Arial, Helvetica, sans-serif",
            fontSize: "1.1rem",
            lineHeight: 1.85,
            marginBottom: "1rem",
            letterSpacing: 0.02,
            padding: "0 2.0em",
          }}
        >
          Group Captive Open Access Solution is a clean energy project developed
          for the collective usage by a group of corporate and industrial (C&I)
          electricity buyers. As per the government regulation, the group of
          buyers will hold 26% equity. Together, all buyers collectively will
          need to consume at least 51% of the power – a PPA is drawn up to
          ensure clarity on electricity tariffs for 15-25 years. The adoption of
          the Group Captive model is witnessing an increasing trend amongst
          corporates, because the savings per-unit electricity make it a
          compelling model. The capital investment is minimal, while per-unit
          tariffs are at least 25-40% cheaper than the grid.
          <br />
          <br />
          We aggregate multiple commercial and industrial (C&I) energy consumers
          by state and discom to form a community/group based on their
          collective demand - this will reduce the time taken to get the clean
          energy from group captive plants.
        </Typography>
        <Box sx={{ padding: "0 2.5em", mt: 2 }}>
          <Typography
            variant="h5"
            fontWeight={600}
            color="#1b1763"
            sx={{ mb: 2 }}
          >
            Key Benefits
          </Typography>
          <ol
            style={{
              fontFamily: "Segoe UI, Arial, Helvetica, sans-serif",
              fontSize: "1.08rem",
              color: "#222",
              lineHeight: 1.8,
              margin: 0,
              paddingLeft: "1.2em",
            }}
          >
            <li>
              <strong>Lower Tariffs</strong>
              <ul>
                <li>
                  Shared infrastructure reduces per-unit cost of electricity.
                </li>
                <li>Avoid cross-subsidy surcharge (CSS) & wheeling charges.</li>
              </ul>
            </li>
            <li>
              <strong>No Capex Burden</strong>
              <ul>
                <li>
                  Structured models allow zero or minimal upfront equity
                  investment.
                </li>
                <li>Equity buy-in can be staggered or built into tariffs.</li>
              </ul>
            </li>
            <li>
              <strong>Quick Access to Renewable Energy</strong>
              <ul>
                <li>
                  Faster onboarding via pre-formed consumer groups and ready
                  developers.
                </li>
              </ul>
            </li>
            <li>
              <strong>Stronger Bargaining Power</strong>
              <ul>
                <li>
                  Aggregated demand helps negotiate better PPA terms with
                  developers and financiers.
                </li>
              </ul>
            </li>
            <li>
              <strong>Regulatory Compliance Made Easy</strong>
              <ul>
                <li>
                  Meet open access and renewable purchase obligation (RPO) norms
                  smoothly.
                </li>
              </ul>
            </li>
            <li>
              <strong>Scalability & Flexibility</strong>
              <ul>
                <li>
                  Add more locations or sites under the same energy contract
                  over time.
                </li>
              </ul>
            </li>
            <li>
              <strong>Green Branding & Scope 2 Reduction</strong>
              <ul>
                <li>
                  Boost ESG credentials and track decarbonization progress for
                  reporting.
                </li>
              </ul>
            </li>
          </ol>
        </Box>
      </Box>

      <Box sx={{mt: 0, backgroundColor: "#FAFAFA", py: 6, px: { xs: 2, md: 4 } }}>
        <Box sx={{ pl: { xs: 2, md: "2.2em" }, mb: 0 }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight={700}
            color="#1b1763"
            textAlign="left"
            sx={{ mb: 1 }}
            gutterBottom
          >
            How Does It Work?
          </Typography>
          <Box
            sx={{
              width: 64,
              height: 6,
              borderRadius: 3,
              background: "linear-gradient(90deg, #1b1763 60%, #4fc3f7 100%)",
              mt: 0.5,
            }}
          />
        </Box>
        <Typography
          variant="body1"
          color="#222"
          sx={{
            fontFamily: "Segoe UI, Arial, Helvetica, sans-serif",
            fontSize: "1.1rem",
            lineHeight: 1.85,
            marginBottom: "1rem",
            letterSpacing: 0.02,
            padding: "0 2.0em",
          }}
        >
          Group Captive Open Access Solution is a clean energy project developed
          for the collective usage by a group of corporate and industrial (C&I)
          electricity buyers. As per the government regulation, the group of
          buyers will hold 26% equity. Together, all buyers collectively will
          need to consume at least 51% of the power – a PPA is drawn up to
          ensure clarity on electricity tariffs for 15-25 years. The adoption of
          the Group Captive model is witnessing an increasing trend amongst
          corporates, because the savings per-unit electricity make it a
          compelling model. The capital investment is minimal, while per-unit
          tariffs are at least 25-40% cheaper than the grid.
          <br />
          <br />
          We aggregate multiple commercial and industrial (C&I) energy consumers
          by state and discom to form a community/group based on their
          collective demand - this will reduce the time taken to get the clean
          energy from group captive plants.
        </Typography>
        <Box sx={{ padding: "0 2.5em", mt: 2 }}>
          <Typography
            variant="h5"
            fontWeight={600}
            color="#1b1763"
            sx={{ mb: 2 }}
          >
            Key Benefits
          </Typography>
          <ol
            style={{
              fontFamily: "Segoe UI, Arial, Helvetica, sans-serif",
              fontSize: "1.08rem",
              color: "#222",
              lineHeight: 1.8,
              margin: 0,
              paddingLeft: "1.2em",
            }}
          >
            <li>
              <strong>Lower Tariffs</strong>
              <ul>
                <li>
                  Shared infrastructure reduces per-unit cost of electricity.
                </li>
                <li>Avoid cross-subsidy surcharge (CSS) & wheeling charges.</li>
              </ul>
            </li>
            <li>
              <strong>No Capex Burden</strong>
              <ul>
                <li>
                  Structured models allow zero or minimal upfront equity
                  investment.
                </li>
                <li>Equity buy-in can be staggered or built into tariffs.</li>
              </ul>
            </li>
            <li>
              <strong>Quick Access to Renewable Energy</strong>
              <ul>
                <li>
                  Faster onboarding via pre-formed consumer groups and ready
                  developers.
                </li>
              </ul>
            </li>
            <li>
              <strong>Stronger Bargaining Power</strong>
              <ul>
                <li>
                  Aggregated demand helps negotiate better PPA terms with
                  developers and financiers.
                </li>
              </ul>
            </li>
            <li>
              <strong>Regulatory Compliance Made Easy</strong>
              <ul>
                <li>
                  Meet open access and renewable purchase obligation (RPO) norms
                  smoothly.
                </li>
              </ul>
            </li>
            <li>
              <strong>Scalability & Flexibility</strong>
              <ul>
                <li>
                  Add more locations or sites under the same energy contract
                  over time.
                </li>
              </ul>
            </li>
            <li>
              <strong>Green Branding & Scope 2 Reduction</strong>
              <ul>
                <li>
                  Boost ESG credentials and track decarbonization progress for
                  reporting.
                </li>
              </ul>
            </li>
          </ol>
        </Box>
        <Box sx={{ padding: "0 5.5em", mt: 8 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            align="center"
            sx={{
              color: "#1b1763",
              mb: 4,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
            How Group Open Access Community Works
          </Typography>
        </Box>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="flex-start"
          sx={{ marginTop: 4 }}
        >
          {gridData.map((item, idx) => (
            <Grid
              size={{ xs: 12, md: 4, sm: 6 }}
              key={item.title}
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: 3,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  p: 3,
                  textAlign: "center",
                  minWidth: 230,
                  maxWidth: 280,
                  height: 500,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                {/* Title */}
                <Typography
                  variant="h6"
                  fontWeight={600}
                  color="#1b1763"
                  sx={{ mb: 2, whiteSpace: "pre-line" }}
                >
                  {item.title}
                </Typography>

                {/* Image */}
                <Box sx={{ mb: 2 }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      maxWidth: "120px",
                      height: "auto",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* Description */}
                {Array.isArray(item.desc) ? (
                  <>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 1,
                        fontFamily: "Lato, 'Segoe UI', Arial, sans-serif",
                        fontSize: "1.08rem",
                        color: "#222",
                        letterSpacing: 0.1,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.desc[0]}
                    </Typography>

                    <ul
                      style={{
                        textAlign: "left",
                        margin: "0.5em 0 0 1em",
                        padding: 0,
                        fontFamily: "Lato, 'Segoe UI', Arial, sans-serif",
                        fontSize: "1.02rem",
                        color: "#222",
                        letterSpacing: 0.05,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.desc.slice(1).map((line, i) => (
                        <li
                          key={i}
                          style={{
                            marginBottom: 6,
                            listStyle: "disc",
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: "Lato, 'Segoe UI', Arial, sans-serif",
                              fontSize: "1.02rem",
                              color: "#222",
                              letterSpacing: 0.05,
                              lineHeight: 1.7,
                              display: "inline",
                            }}
                          >
                            {typeof line === "string" ? (
                              line.includes("at zero cost") ? (
                                <>
                                  {line.replace("at zero cost", "")}
                                  <span
                                    style={{
                                      fontWeight: 700,
                                      color: "#1b1763",
                                    }}
                                  >
                                    at zero cost
                                  </span>
                                </>
                              ) : line.includes(
                                  "fast-track decision-making"
                                ) ? (
                                <>
                                  {line.replace(
                                    "fast-track decision-making",
                                    ""
                                  )}
                                  <span
                                    style={{
                                      fontWeight: 700,
                                      color: "#1b1763",
                                    }}
                                  >
                                    fast-track decision-making
                                  </span>
                                </>
                              ) : (
                                line
                              )
                            ) : (
                              line
                            )}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Typography variant="body2" sx={{ mt: "auto" }}>
                    {item.desc}
                  </Typography>
                )}
              </Box>

              {/* Arrow – show only if not the last item */}
              {idx < gridData.length - 1 && (
                <ArrowForwardIcon
                  sx={{
                    position: "absolute",
                    right: -12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: 50,
                    color: "#4a6972",
                  }}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
