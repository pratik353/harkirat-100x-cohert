
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.post.create({
    data: {
     title: "2nd post",
     content:"asdddsdDdsd",
    //  author: {
    //     connect: {
    //         id: 1
    //     }
    //  }
    authorId:1 // another way to connect with user id 
    }
  })
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })