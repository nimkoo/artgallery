from PIL import Image
import os

# Define the directory containing the images
directory = 'images'

# Loop through the images in the directory
for filename in os.listdir(directory):
    if filename.endswith('.jpg') or filename.endswith('.jpeg') or filename.endswith('.png'):
        # Open the image
        image_path = os.path.join(directory, filename)
        image = Image.open(image_path)

        # Calculate the new dimensions
        new_width = image.width // 3
        new_height = image.height // 3

        # Resize the image
        resized_image = image.resize((new_width, new_height))

        # Save the resized image
        resized_image.save(image_path)

# Print a message after resizing all images
print('Image resizing complete!')
