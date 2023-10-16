import { PrismaClient } from "../src/generated/client";

const prisma = new PrismaClient()

async function checkDataBaseConnection() {
    try {
        await prisma.$connect()
        console.log('connected to Database Successfully !')
    } catch (error) {
        console.error('Database Connection Error' , error);
        
    } finally {
        await prisma.$disconnect();
    }
}

export { checkDataBaseConnection }