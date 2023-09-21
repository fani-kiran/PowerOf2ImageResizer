import os
import sys
from PIL import Image

def pad_to_power_of_2(image_path):
    img = Image.open(image_path)
    width, height = img.size

    new_width = 2 ** (width - 1).bit_length()
    new_height = 2 ** (height - 1).bit_length()

    if width == new_width and height == new_height:
        return  # Image is already a power of 2, no need to pad.

    padding_left = (new_width - width) // 2
    padding_top = (new_height - height) // 2
    padding_right = new_width - width - padding_left
    padding_bottom = new_height - height - padding_top

    padded_img = Image.new(img.mode, (new_width, new_height), (0, 0, 0, 0))  # RGBA mode for transparent padding
    padded_img.paste(img, (padding_left, padding_top))

    padded_img.save(image_path)

def main(folder_path):
    if not os.path.exists(folder_path):
        print("Folder does not exist.")
        return

    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
                image_path = os.path.join(root, file)
                pad_to_power_of_2(image_path)
                print(f"Padded: {image_path}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py /path/to/folder")
    else:
        folder_path = sys.argv[1]
        main(folder_path)
