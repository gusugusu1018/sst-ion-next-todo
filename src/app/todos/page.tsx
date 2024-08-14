import { promises as fs } from "fs";
import path from "path";

import React from "react";

import { z } from "zod";
import { columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/data-table";
import { taskSchema } from "@/data/schema";

// TODO: Create API
// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TodoPage() {
  const tasks = await getTasks();
  return (
    <>
      <div className="px-6 py-6 flex flex-grow">
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
