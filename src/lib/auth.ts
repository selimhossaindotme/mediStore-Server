import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// your prisma client instance
import envVars from "../app/config";
import { prisma } from "./prisma";
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "sqlite", ...etc
    }),
    secret: envVars.BETTER_AUTH_SECRET,
    baseURL: envVars.BETTER_AUTH_URL,


});