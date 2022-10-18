// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await prisma.order.create({
    data: {
      clientName: "John Doe",
      quantity: 10,
      product: {
        connect: {
          id: 1,
        },
      },
    },
  });
  res.status(200).json({ name: "John Doe" });
}
