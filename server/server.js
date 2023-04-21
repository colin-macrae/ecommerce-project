import 'dotenv/config';
import express from 'express';
import errorMiddleware from './lib/error-middleware.js';
import pg from 'pg';
import ClientError from './lib/client-error.js';

// eslint-disable-next-line no-unused-vars -- Remove when used
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/build', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

// app.get('/api/hello', (req, res) => {
//   res.json({ message: 'Hello World!' });
// });

app.get('/api/mensproducts', async (req, res, next) => {
  try {
    const sql = `
      select "type",
            "gender",
            "name",
            "description",
            "details",
            "price",
            "color",
            "url",
            "productId"
        from "products"
        where "gender" = 'm'
    `;
    const products = await db.query(sql);
    // res.json(products.rows[0].color);
    res.json(products.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/womensproducts', async (req, res, next) => {
  try {
    const sql = `
      select "type",
            "gender",
            "name",
            "description",
            "details",
            "price",
            "color",
            "url",
            "productId"
        from "products"
        where "gender" = 'w'
    `;
    const products = await db.query(sql);
    // res.json(products.rows[0].color);
    res.json(products.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    if (!productId) {
      throw new ClientError(400, 'productId must be a positive integer');
    }
    const sql = `
      select "type",
            "gender",
            "name",
            "description",
            "details",
            "price",
            "color",
            "url",
            "productId"
        from "products"
        where "productId" = $1
    `;
    const params = [productId];
    const product = await db.query(sql, params);
    if (!product.rows[0]) {
      throw new ClientError(404, `cannot find product with productId ${productId}`);
    }
    // res.json(products.rows[0].color);
    res.json(product.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
