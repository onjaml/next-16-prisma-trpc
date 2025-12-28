import {number,object, string,email,z} from "zod"

const createUserSchema = object({
   name: string({ error: 'Name is required' }),
   email: string({ error: 'Email is required' }).check(email('Invalid email')),
})


const filterQuery = object({
    limit: number().default(1),
    page: number().default(10)
})

type InferType<T> = z.infer<T>;
type CreateUserInput = InferType<typeof createUserSchema> 
type FilterQueryInput = InferType<typeof filterQuery>

export type {
    CreateUserInput,
    FilterQueryInput
}

export {
    createUserSchema,
    filterQuery
}