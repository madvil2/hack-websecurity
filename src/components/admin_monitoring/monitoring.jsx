import React from "react";
import Table from "../table";

const Monitoring = () => {
  const fakeLogs = [
    {
      time: "ЧЧ:ММ:СС",
      ip: "***.***.**.**",
      address: "**********",
      log: "*************",
    },
    {
      time: "ЧЧ:ММ:СС",
      ip: "***.***.**.**",
      address: "**********",
      log: "*************",
    },
    {
      time: "ЧЧ:ММ:СС",
      ip: "***.***.**.**",
      address: "**********",
      log: "*************",
    },
    {
      time: "ЧЧ:ММ:СС",
      ip: "***.***.**.**",
      address: "**********",
      log: "*************",
    },
  ];
  const columns = [
    {
      title: "Время",
      dataIndex: "time",
      key: "time",
      width: "25%",
    },
    {
      title: "IP",
      dataIndex: "ip",
      key: "ip",
      width: "25%",
    },
    {
      title: "Адрес запроса",
      dataIndex: "address",
      key: "address",
      width: "25%",
    },
    {
      title: "Лог JSON",
      dataIndex: "log",
      key: "log",
      width: "25%",
    },
  ];
  return (
    <div>
      <Table columns={columns} tableContent={fakeLogs} />
    </div>
  );
};

export default Monitoring;
