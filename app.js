const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent =
  "Nulla pellentesque dignissim enim sit amet. At auctor urna nunc id cursus metus. At quis risus sed vulputate odio ut. Etiam tempor orci eu lobortis. Netus et malesuada fames ac turpis egestas. Suscipit tellus mauris a diam maecenas sed. Duis convallis convallis tellus id interdum velit laoreet. In ante metus dictum at tempor. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Proin libero nunc consequat interdum varius sit amet. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Quam lacus suspendisse faucibus interdum posuere lorem. Porttitor lacus luctus accumsan tortor posuere. Vitae purus faucibus ornare suspendisse sed. Lacinia at quis risus sed vulputate odio. Non curabitur gravida arcu ac tortor dignissim convallis aenean.";
const aboutContent =
  "Ligula ullamcorper malesuada proin libero nunc consequat interdum. Elit duis tristique sollicitudin nibh sit. Sem integer vitae justo eget magna. Purus gravida quis blandit turpis. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Eget mi proin sed libero enim sed faucibus turpis. Ut morbi tincidunt augue interdum. Massa vitae tortor condimentum lacinia quis vel eros donec. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Mauris a diam maecenas sed enim ut sem. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Malesuada fames ac turpis egestas integer eget aliquet nibh. Lorem ipsum dolor sit amet consectetur. Ut porttitor leo a diam sollicitudin tempor id eu. Risus in hendrerit gravida rutrum quisque. Risus quis varius quam quisque id. Non nisi est sit amet facilisis magna etiam. Vitae purus faucibus ornare suspendisse sed nisi.";
const contactContent =
  "Auctor neque vitae tempus quam pellentesque nec nam. Id donec ultrices tincidunt arcu. Nunc sed blandit libero volutpat sed cras. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Ut tortor pretium viverra suspendisse. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. A pellentesque sit amet porttitor eget dolor morbi non arcu. Proin nibh nisl condimentum id venenatis a condimentum vitae. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Duis convallis convallis tellus id. Magna fringilla urna porttitor rhoncus dolor purus. Tristique senectus et netus et malesuada fames. Aenean pharetra magna ac placerat vestibulum. Nibh tortor id aliquet lectus proin.";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];

app.get("/", (req, res) => {
  res.render("home", { startingContent: homeStartingContent, posts: posts });
});

app.get("/about", (req, res) => {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };

  posts.push(post);

  res.redirect("/");
});

app.get("/posts/:postName", (req, res) => {
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach((post) => {
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("post", {
        title: post.title,
        content: post.content,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
