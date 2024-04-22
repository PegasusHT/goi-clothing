import zod from 'zod';

const envSchema = zod.object({
    GOOGLE_CLIENT_ID: zod.string().nonempty(),
    GOOGLE_CLIENT_SECRET: zod.string().nonempty(),

    DATABASE_URL: zod.string().nonempty(),

    AWS_ACCESS_KEY_ID: zod.string().nonempty(),
    AWS_SECRET_ACCESS_KEY:  zod.string().nonempty(),

    NEXTAUTH_URL: zod.string().nonempty(),
    NEXTAUTH_SECRET: zod.string().nonempty(),
});    

export const env = envSchema.parse(process.env);