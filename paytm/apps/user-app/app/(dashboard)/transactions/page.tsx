import prisma from "@repo/db/client";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

// async function getBalance() {
//     const session = await getServerSession(authOptions);
//     const balance = await prisma.balance.findFirst({
//         where: {
//             userId: Number(session?.user?.id)
//         }
//     });
//     return {
//         amount: balance?.amount || 0,
//         locked: balance?.locked || 0
//     }
// }

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export default async function () {
    // const balance = await getBalance();
    const transactions = await getOnRampTransactions();

    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Transaction
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 p-4 pr-20">

            <div className="pt-4">
                <OnRampTransactions transactions={transactions} />
            </div>

        </div>
    </div>
}