// Problem: Write a function named numberPixels that calculates the total number of pixels in an image. The function numberPixels has one parameter named namefile, which is a string that is the name of an image file. This function calculates and returns the total number of pixels in the specified image filename.
function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    var ans = width * height;
    return ans;
}

var result = numberPixels("chapel.png");
print(result);
result = numberPixels("dinos.png");
print(result);

print("---");



// Problem: Write a function named perimeter that calculates the number of pixels in the perimeter of an image. The perimeter is the number of pixels on the edge of the image, from all four sides. The function perimeter has one parameter named imageName, which is a string that is the name of an image file. This function calculates and returns the perimeter in the specified image filename. 

function perimeter(imageName) {
    var someImg = new SimpleImage(imageName);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    var ans = (height * 2) + (width * 2);
    return ans;
}

print(perimeter("rodger.png"));

print("---");



// Problem: Write a function named printPixel that prints the red, blue and green values of a pixel, in that order, one on each line, and identifies each one.  The function printPixel has three parameters,  namefile, which is a string that is the name of an image file, and xpos and ypos that are numbers representing the x and y coordinates of the pixel location. Consider using the SimpleImage methods getRed, getGreen, and getBlue. Since this function is printing values, it does not need a return statement. 

function printPixel(nameImage, xpos, ypos) {
    var someImg = new SimpleImage(nameImage);
    print("red is " + someImg.getRed(xpos,ypos));
    print("green is " + someImg.getGreen(xpos,ypos));
    print("blue is " + someImg.getBlue(xpos,ypos));
}

printPixel("drewgreen.png",10, 10);
printPixel("drewgreen.png",250, 500);

print("---");



// Problem: Write a function named sumPixel that calculates and returns the sum of the red, blue and green values of a pixel.  The function sumPixel has three parameters,  namefile, which is a string that is the name of an image file, and xpos and ypos that are numbers representing the x and y coordinates of the pixel location. Since this function is returning a value, it should NOT have a print statement in the function, and it should have a return statement. 

function sumPixel(nameOfImage, xpos, ypos) {
    var someImg = new SimpleImage(nameOfImage);
    var red = someImg.getRed(xpos,ypos);
    var green = someImg.getGreen(xpos,ypos);
    var blue = someImg.getBlue(xpos,ypos);
    var ans = red + blue + green;
    return ans;
}

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png",10, 10);
print(answer);



// Write code that starts with the image “chapel.png” shown below on the left and turns the red part of every pixel to the highest red value possible, resulting in the image shown on the right.
var image = new SimpleImage("chapel.png");

for ( var pixel of image.values() ) {
    pixel.setRed(255);
}

print(image);



// Write code that starts with the image “chapel.png” shown below on the left and removes all the red, resulting in the image shown on the right. You will notice that in the resulting image you will mostly see blue and green colors.
var image = new SimpleImage("chapel.png");

for ( var pixel of image.values() ) {
    pixel.setRed(0);
}

print(image);



// Write code that starts with the image “eastereggs.jpg” shown below on the left and reduces all the red pixel values that are greater than 70 to 70, resulting in the image shown on the right. You will notice that in the resulting image you will see some reddish colors but no bright reds. 
var image = new SimpleImage("eastereggs.jpg");

for ( var pixel of image.values() ) {
    if ( pixel.getRed() > 70 ) {
        pixel.setRed(70);
    }
}

print(image);



// Write code that starts with the image “astrachan.jpg” shown below on the left and replaces the bottom ten rows with black pixels, resulting in the image shown on the right. Note that the color black has a red value of 0, a green value of 0 and a blue value of 0. Also note that the pixel in the top left corner has x-value 0 and y-value 0.

image

for ( var pixel of image.values() ) {
    if ( pixel.getY() >= image.getHeight() - 10 ) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
}

print(image);



// Write code that starts with the image “chapel.png” shown below on the left, and replaces the top left corner with an all green square of size 50 by 50, resulting in the image on the right below.

function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    
    var startX = someImage.getWidth() - cornerWidth;

    for ( var pixel of someImage.values() ) {
        if ( pixel.getX() >= startX && pixel.getY() < cornerHeight ) {
            pixel.setRed(red);
            pixel.setGreen(green);
            pixel.setBlue(blue);
        }
    }
    
    return someImage
}

var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
print(result);
var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
print(result2);



// Write the function named changeRed that draws a rectangle of width 256 showing all the changes of the color red, from left to right repeatedly, while blue and green are both set to 0. With height set to 200, the resulting image is shown here. 

function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;

    for ( var pixel of picture.values() ) {
        
        red = pixel.getX() % 256;
        
        pixel.setRed(red + 1);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }

    return picture;
}

var result = changeRed(256,200);
print(result);



// Write a JavaScript program that modifies an image by putting three vertical stripes on it - a red stripe on the left one third, a green stripe in the middle, and a blue stripe on the right one third. For example, if your program ran on Drew’s picture shown on the left, the resulting image would have red, green and blue vertical stripes as shown in the image on the right.

var image = new SimpleImage("hilton.jpg");

for ( var pixel of image.values() ) {
    
    var thirdWidth = image.getWidth() / 3;
    
        if ( pixel.getX() < thirdWidth ) {
            pixel.setRed(255);
        }
        else if ( pixel.getX() > 2 * thirdWidth ) {
          pixel.setGreen(255);
        }
        else {
            pixel.setBlue(255);
        }
    
}

print(image);



// Write a JavaScript function named swapRedGreen with one parameter pixel (representing a single pixel). This function should swap the red and green values of the pixel. For example, if you have a pixel with red = 255, green = 100, blue = 150, after calling swapRedGreen on that pixel its new RGB values would be red = 100, green = 255, blue = 150. 

var image = new SimpleImage("hippieflower.jpg");

function swapRedGreen(pixel) {
    var red = pixel.getRed();
    var green = pixel.getGreen();

    pixel.setRed(green);
    pixel.setGreen(red);
}

for ( var pixel of image.values() ) {
    swapRedGreen(pixel);
}

print(image);



// Write code to change the Duke blue devil (the image below on the left) to be yellow (as in the image below on the right). 

var image = new SimpleImage("duke_blue_devil.png");

for ( var pixel of image.values() ) {
    
    if ( pixel.getBlue() >  pixel.getRed() && pixel.getBlue() >  pixel.getGreen() ) {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
    
}

print(image);