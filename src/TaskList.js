import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import axios from "axios";

const columns = [
  { field: "id", headerName: "S No", flex: 0.3 },
  { field: "title", headerName: "Title", flex: 0.5 },
  { field: "description", headerName: "Description", flex: 1 },
  {
    field: "deadline",
    headerName: "Deadline",
    flex: 1,
  },
  {
    field: "priority",
    headerName: "Priority",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
  },
];

const rows = [
  { id: 1, Title: "Snow", Description: "Jon", Deadline: 35, Priority: "high" },
  {
    id: 2,
    Title: "Lannister",
    Description: "Cersei",
    Deadline: 42,
    Priority: "high",
  },
  {
    id: 3,
    Title: "Lannister",
    Description: "Jaime",
    Deadline: 45,
    Priority: "high",
  },
  {
    id: 4,
    Title: "Stark",
    Description: "Arya",
    Deadline: 16,
    Priority: "high",
  },
  {
    id: 5,
    Title: "Targaryen",
    Description: "Daenerys",
    Deadline: null,
    Priority: "high",
  },
  {
    id: 6,
    Title: "Melisandre",
    Description: null,
    Deadline: 150,
    Priority: "high",
  },
  {
    id: 7,
    Title: "Clifford",
    Description: "Ferrara",
    Deadline: 44,
    Priority: "high",
  },
  {
    id: 8,
    Title: "Frances",
    Description: "Rossini",
    Deadline: 36,
    Priority: "high",
  },
  {
    id: 9,
    Title: "Roxie",
    Description: "Harvey",
    Deadline: 65,
    Priority: "high",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function TaskList() {
  const [data, setData] = useState(rows);
  const getData = async () => {
    let res = await axios.get("http://localhost:8081/get-task-list");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Paper sx={{ width: "100%", marginTop: 2 }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
        sx={{ height: 500, border: 0 }}
      />
    </Paper>
  );
}
