const express = require('express');
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres',
  password: 'post',
  host: 'localhost',
  port: 5432,
  database: 'practice'
});

// Test the database connection
pool.connect()
  .then(client => {
    console.log('Connected to PostgreSQL database');
    client.release(); // Release the client back to the pool
  })
  .catch(err => {
    console.error('Error connecting to PostgreSQL database:', err);
  });

// Read the image file and convert to buffer
const imageBuffer = fs.readFileSync(path.join(__dirname, 'public', 'war.png'));

// Route to insert image into database (one-time setup)
app.get('/upload-image', async (req, res) => {
  try {
    // Insert the image into the restaurant_images table
    // Assuming you want to associate it with a restaurant_id (use 1 as an example)
    const insertQuery = `
      INSERT INTO restaurant_images (restaurant_id, image) 
      VALUES (1, $1)
    `;
    
    await pool.query(insertQuery, [imageBuffer]);
    res.send('Image uploaded successfully');
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).send('Error uploading image');
  }
});

// Route to display the HTML page with the image
app.get('/display-image', async (req, res) => {
  try {
    // Fetch the image from the database
    const query = `
      SELECT image FROM restaurant_images 
      WHERE restaurant_id = 1 
      LIMIT 1
    `;
    
    const result = await pool.query(query);
    
    if (result.rows.length > 0) {
      // Set content type to HTML
      res.setHeader('Content-Type', 'text/html');
      
      // Create HTML to display the image
      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Display Image</title>
        </head>
        <body>
          <h1>Image from Database</h1>
          <img src="data:image/png;base64,${result.rows[0].image.toString('base64')}" alt="Image" />
        </body>
        </html>
      `;
      
      res.send(html);
    } else {
      res.status(404).send('Image not found');
    }
  } catch (error) {
    console.error('Error retrieving image:', error);
    res.status(500).send('Error retrieving image');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});