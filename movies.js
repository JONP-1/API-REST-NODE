const z = require('zod')

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Must be a strinf',
    required_error: 'mustbe required'
  }),
  year: z.number().int().min(1800).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).optional(),
  poster: z.string().url({
    message: 'poster ,ust be a valid url'
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Crime', 'Drama']),
    {
      required_error: 'Movie required',
      invalid_type_error: 'Gedner wring'
    }
  )
})

function validateMovie (object) {
  return movieSchema.safeParse(object)
}

function validatePartialMovie (object) {
  return movieSchema.partial().safeParse(object)
}

module.exports = {
  validateMovie,
  validatePartialMovie
}
