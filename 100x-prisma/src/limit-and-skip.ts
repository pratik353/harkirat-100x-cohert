import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    "info",
    "query",
    {
      emit: "event",
      level: "query",
    },
  ],
});

async function main() {
  let res = await prisma.post.findMany({
    take: 3, // LIMIT
    skip: 10, // OFFSET
  });
  console.log(res);
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// DEBUG with variables values --> Prisma don't show by default with DEBUG  
prisma.$on("query", async (e) => {
    console.log(`${e.query} ${e.params}`)
});
