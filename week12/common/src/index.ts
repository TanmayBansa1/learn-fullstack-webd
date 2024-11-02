import {z} from 'zod';

export const signUpbody = z.object({
  username: z.string(),
  password: z.string()
})

 export type signupParams = z.infer<typeof signUpbody>;