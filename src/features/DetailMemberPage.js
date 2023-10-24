import React from "react";
import "../css/pages/Project.css";
import banner from "../Assets/image/bannertrangchu.png";
import "../css/pages/Member_detail.css";
import { Box } from "@mui/material";

const DetailMemberPage = () => {
  return (
    <div>
      <div>
        <img
          src={banner}
          alt="banner"
          className="banner"
          style={{ width: "100%" }}
        ></img>
      </div>
      <div>
        <Box className="Box">
          <div class="member_detail_container"></div>
        </Box>
      </div>
    </div>
  );
};

export default DetailMemberPage;
