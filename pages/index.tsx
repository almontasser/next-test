import { Product } from "@prisma/client";
import type { GetStaticProps, NextPage } from "next";
import prisma from "../lib/prisma";

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({ products }) => {
  return (
    <ul>
      {products.map((product: Product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return {
    props: { products },
    revalidate: 10,
  };
};

export default Home;
