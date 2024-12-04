import { PrismaClient } from "@repo/db/clint";

const prisma = new PrismaClient();


export default function Home() {
  return (
    <div className="text-2xl">
      hi there from user-app
    </div>
  );

}
