import express from "express";
import db from "@repo/db/client";

const app = express();

app.post("/hdfcWebhook", async (req, res) => {
    //TODO: Add zod validation here?
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    db.balance.update({
        where: {
            userId: userId
        },
        data: {
            ammount: {
                increment: paymentInformation.amount
            }
        }
    });
  await  db.onRampTracnsaction.update({
        where: {
            token: paymentInformation.token
        },
        data: {
            status: "Success"
        }
    })
    
    // Update balance in db, add txn
})