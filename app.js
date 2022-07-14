var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var menuRouter = require("./routes/menu");
var categoryRouter = require("./routes/category");
var cartRouter = require("./routes/cart");
var orderRouter = require("./routes/order");
var galleryRouter = require("./routes/gallery");
var videoRouter = require("./routes/video");
var blogRouter = require("./routes/blog");
var wishlistRouter = require("./routes/wishlist");
var enquiryRouter = require("./routes/enquiry");
var countdownRouter = require("./routes/countdown");
var tags = require("./routes/tags");
var review = require("./routes/review");
var testimonial = require("./routes/testimonial");
var admin = require("./routes/admin");
var homemenu = require("./routes/homemenu");
var todayspl = require("./routes/todayspl");
var about = require("./routes/about");
var foodcard = require("./routes/foodcard");
var swiper = require("./routes/swiper");

var app = express();
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/menu", menuRouter);
app.use("/category", categoryRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/gallery", galleryRouter);
app.use("/video", videoRouter);
app.use("/blog", blogRouter);
app.use("/wishlist", wishlistRouter);
app.use("/enquiry", enquiryRouter);
app.use("/countdown", countdownRouter);
app.use("/tags", tags);
app.use("/review", review);
app.use("/testimonial", testimonial);
app.use("/admin", admin);
app.use("/homemenu", homemenu);
app.use("/todayspl", todayspl);
app.use("/about", about);
app.use("/foodcard", foodcard);
app.use("/swiper", swiper);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
