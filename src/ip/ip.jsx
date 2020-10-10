import React from "react";
import { getReputationScore } from "../services/ipCheck.js";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const CheckIp = () => {
  const { Search } = Input;
  return (
    <div>
      <h1>Результат поиска будет в console.log</h1>
      <Search
        placeholder="input ip"
        onSearch={(value) => getReputationScore(value)}
        style={{ width: 200 }}
      />
    </div>
  );
};

export default CheckIp;
