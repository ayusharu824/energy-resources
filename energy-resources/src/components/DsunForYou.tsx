import { Box, Typography, Grid } from "@mui/material";
import DsunForYouIcon2 from "../assets/DsunForYouIcon1.png";
import DsunForYouIcon1 from "../assets/DsunForYouIcon2.png";
import DsunForYouIcon4 from "../assets/DsunForYouIcon3.png";
import DsunForYouIcon3 from "../assets/DsunForYouIcon4.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

const gridData = [
  {
    title: "Step 1\nRaise Your Requirement",
    image: DsunForYouIcon1,
    desc: [
      "Submit your clean energy needs.",
      "Capacity, location, model (Group Captive/Third-Party), consumption details",
      "Start your green energy journey with clarity",
      //"→"
    ],
  },
  {
    title: "Step 2\nFree Feasibility Report",
    image: DsunForYouIcon2,
    desc: [
      "We assess your case independently.",
      "Evaluate site, discom policy, technical & financial feasibility",
      "Get a clear unbiaseed, roadmap - at zero cost",
    ],
  },
  {
    title: "Step 3\nMatch with Developers & Financiers",
    image: DsunForYouIcon3,
    desc: [
      "We connect you with verified partners.",
      "Tailored PPAs, reduced capex, flexible investment models",
      "Pre-negotiated terms to fast-track decision-making",
    ],
  },
  {
    title: "Step 4\nExecute & Go Live",
    image: DsunForYouIcon4,
    desc: [
      "We support till project completion.",
      "Compliance, coordination, approvals, and timely commissioning",
      "A fully managed on-time green energy switch",
    ],
  },
];

const DsunForYou = () => {
  return (
    <Box sx={{ mb: 6, mt: 8, backgroundColor: "#f0f7ff", py: 8 }}>
      <Box sx={{ pl: { xs: 2, md: "2.2em" }, mb: 3 }}>
        <Typography variant="h4" fontWeight={700} color="#1b1763" gutterBottom>
          D-Sun For You
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: { xs: 4, md: 0 },
        }}
      >
        {gridData.map((item, idx) => (
          <React.Fragment key={item.title}>
            <Box
              sx={{
                background: "#fff",
                borderRadius: 3,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                p: 3,
                textAlign: "center",
                minWidth: 230,
                maxWidth: 280,
                mx: { xs: 0, md: 2 },
                mb: { xs: 4, md: 0 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxHeight: 500,
                minHeight: 400,
                height: 500,
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                color="#1b1763"
                sx={{ mb: 2, whiteSpace: "pre-line" }}
              >
                {item.title}
              </Typography>
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
              {Array.isArray(item.desc) ? (
                <>
                  <Typography
                    variant="body2"
                    color="textSecondary"
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
                          fontFamily: "Lato, 'Segoe UI', Arial, sans-serif",
                          fontSize: "1.02rem",
                          color: "#222",
                          letterSpacing: 0.05,
                          lineHeight: 1.7,
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
                                  style={{ fontWeight: 700, color: "#1b1763" }}
                                >
                                  at zero cost
                                </span>
                              </>
                            ) : line.includes("fast-track decision-making") ? (
                              <>
                                {line.replace("fast-track decision-making", "")}
                                <span
                                  style={{ fontWeight: 700, color: "#1b1763" }}
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
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: "auto" }}
                >
                  {item.desc}
                </Typography>
              )}
            </Box>
            {/* Arrow between cards, except after the last card */}
            {idx < gridData.length - 1 && (
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  mx: 1,
                  mt: 10,
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 56, color: "#1b1763" }} />
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default DsunForYou;
