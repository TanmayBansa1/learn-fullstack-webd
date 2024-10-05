import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string) {
  const res = await prisma.user.create({
    data: {
        email: username,
        password,
        firstname,
        lastname
    },
    select:{
        id: true,
        email: true,
        firstname: true
    }
  })
  console.log(res);
}

// insertUser("Tanmay334.com","12345","tanmay","bansal");


interface UpdateParams {
    Newusername: string,
    firstname: string;
    lastname: string;
}

async function updateUser(username: string,{
    Newusername,
    firstname,
    lastname
}: UpdateParams) {
  const res = await prisma.user.update({where:{
    email: username
  },
    data:{
        email: Newusername,
        firstname,
        lastname
    }
  })
}

// updateUser("Tanmay.com",{Newusername: "stuti.23@com",firstname: "stuti", lastname: "prasad"})

async function getUser(username: string) {
  const res = await prisma.user.findMany({
    where: {
        email: username
    },
    select:{
        id: true,
        email: true,
        firstname: true,
        lastname: true
    }
  })
  console.log(res);
}

getUser("Tanmay334.com");