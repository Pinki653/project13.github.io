const button = document.querySelector(".btn");

// Event listener for button click
button.addEventListener("click", () => {
  const title = "Product Title"; // Replace with actual title
  const description = "This is the product description."; // Replace with actual description
  const imageUrl = "https://via.placeholder.com/150"; // Replace with actual image URL

  showProductDetails(title, description, imageUrl);
});



function showProductDetails(title, description, imageUrl) {
    const newTabContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Title</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    body {
      display: flex;
      justify-content: center;
      background-color: antiquewhite;
    }
    .containter {
      display: flex;
      margin-top: 50px;
      margin-bottom: 50px;
      height: 700px;
      width: 1000px;
      border: 1px solid black;
      border-radius: 10px;
      background-color: cadetblue;
    }
    .small-img {
      height: 700px;
      width: 280px;
      border: 1px solid black;
      overflow-y: scroll; /* This will make it scrollable */
      display: flex;
      flex-direction: column;
    }
    .box {
      height: 200px;
      width: 200px;
      border: 1px solid black;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 20px;
      border-radius: 10px;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Ensures images fit within the box without stretching */
    }
    .larger-img {
      height: 660px;
      width: 680px;
      margin-top: 20px;
      margin-bottom: 20px;
      position: relative;
      background-color: white;
      text-align: center;
      overflow: hidden; /* Ensures that the background image stays within the rounded corners */
      margin-left: 20px;
      margin-right: 20px;
      border-radius: 10px; /* Apply border-radius to the parent container */
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.8);
      background-image: url("https://m.media-amazon.com/images/I/41mWz2aRrTL._SY695_.jpg");
      background-size: cover;
      background-position: center; /* Ensure the image is properly aligned */
    }
    @media (max-width: 768px) {
      .containter {
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100%;
      }
      .small-img {
        width: 100%; /* Matches parent container */
        max-width: 100%; /* Prevents overflow */
        height: 110px;
        display: flex;
        flex-direction: row;
        border-radius: 10px;
        overflow-x: scroll; /* Enables horizontal scroll for child elements */
      }
      .box {
        flex: 0 0 auto;
        width: 100px; /* Adjusted size for smaller screens */
        height: 100px;
        margin: 5px;
        border-radius: 10px;
        background-size: cover;
      }
      .larger-img {
        height: 370px;
        width: 350px;
        margin: 10px auto;
      }
      body {
        overflow-x: hidden;
      }
    }
  </style>
</head>
<body>
  <div class="containter">
    <div class="small-img">
      <div class="box"><img src="https://m.media-amazon.com/images/I/41mWz2aRrTL._SY695_.jpg" alt="Image 1"></div>
      <div class="box"><img src="https://m.media-amazon.com/images/I/71XVeb5MXPL._SY695_.jpg" alt="Image 2"></div>
      <div class="box"><img src="https://m.media-amazon.com/images/I/716cBIZmfFL._SY695_.jpg" alt="Image 3"></div>
      <div class="box"><img src="https://m.media-amazon.com/images/I/61XOptqxmBL._SY695_.jpg" alt="Image 3"></div>
      <div class="box"><img src="https://m.media-amazon.com/images/I/51tQT7QqJnL._SY695_.jpg" alt="Image 3"></div>
    </div>
    <div class="larger-img"></div>
  </div>
  <script>
    // Attach click events to .box elements
    const boxes = document.querySelectorAll(".box");
    const large = document.querySelector(".larger-img");

    boxes.forEach((box) => {
      box.addEventListener("click", function () {
        const boxImage = getComputedStyle(box.querySelector("img")).backgroundImage;
        large.style.backgroundImage = "url(" + box.querySelector("img").src + ")"; // Update larger image with the clicked image
      });
    });
  </script>
</body>
</html>

    `;
  
    // Open a new tab
    const newTab = window.open('', '_blank');
  
    // Write the content into the new tab
    newTab.document.open();
    newTab.document.write(newTabContent);
    newTab.document.close();
  }
  