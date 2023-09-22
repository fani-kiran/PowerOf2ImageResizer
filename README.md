# PowerOf2ImageResizer
This program resizes images to a power of 2 (256, 512, 1024, 2048, etc.). 
Many game engines cannot use textures without them being a power of 2. Some game engines will use them with poor optimization and limited features. For example, in Unity Engine, textures that are not a power of 2 cannot use texture streaming and will appear horribly jarring from a distance. This program will take an image, find the closest power of 2, and resize that image by adding padding with empty pixcels. So an image that is 1080x900 would be resized (Added epty pixcels - images are never cut or cropped) to 1024x1024. 

Supported Image Types:
PNG
JPG
GIF
BMP

There are more file types supported (anything supported by Pillow) like ICO, but they really won't be used for textures so I won't bother listing them.

This script uses the Python Imaging Library (PIL), which you can install using pip if you haven't already:
< pip install pillow >

Save this script as. To use it, open your terminal and navigate to the directory where you saved the script. Then, run the script with the folder path as an argument:
< python resize_images.py /path/to/your/folder >

Make sure to replace /path/to/your/folder with the actual path to the folder containing your images. The script will resize all supported image files in the folder to the nearest power of 2 dimensions.
