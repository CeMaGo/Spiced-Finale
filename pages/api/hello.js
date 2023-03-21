// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

//pages/api/index.js

if (request.method === "POST") {
  // Here we're distinguishing between our GET and POST method.
  try {
    const jokeData = request.body;
    // We're declaring jokeData to contain the body of our request sent by our form that we haven't created yet.
    // The body of our request might contain data in a variety of formats, but is typically an object.
    const joke = new Joke(jokeData);
    // Utilizing our Joke scheme, we're creating a new joke.
    // At this point we're sanitizing our data according to the schema of our Joke model.
    await joke.save();
    // We've created a new joke, now we're calling save() to have mongoose insert a new document into our database.

    // The three lines above are functionally the same as:
    // Joke.create(request.body)
    // It's just a somewhat less opaque way.

    response.status(201).json({ status: "Joke created" });
  } catch (error) {
    console.log(error);
    response.status(400).json({ error: error.message });
  }
}
