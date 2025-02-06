import { type SchemaTypeDefinition } from 'sanity';
import landingPage from './landingPage';
import hero from './landingPage-Section/hero';
import featuredProducts from './landingPage-Section/featuredProducts'
import latestProduct from './landingPage-Section/latestProduct';
import unique from './landingPage-Section/unique';
import { userSchema } from './user';
import { product } from './product';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: 
  [
    landingPage,
    product,     
    hero,
    featuredProducts,
    latestProduct,
    unique,
    userSchema
  ],
}
