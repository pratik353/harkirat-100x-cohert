import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()
const prisma = new PrismaClient({log: ['info', 'query','error'],}) // this will logs the query and info

async function main() {
    const user = await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'pratik@prisma.io',
        //   posts: {
        //     create: [
        //         {
        //             title: "harkirats title1"
        //         },
        //         {
        //             title: "harkirats title2"
        //         },
        //     ]
        //  } you can create also post from here
        },
      })
      console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })