
from keras.preprocessing.image import img_to_array
from keras.preprocessing.image import array_to_img
from keras.preprocessing.image import load_img
img = load_img('ai/diseaseplant.jpg')
# details about the image printed below
print(type(img))
print(img.format)
print(img.mode)
print(img.size)
 
# convert the given image into  numpy array
img_numpy_array = img_to_array(img)
print("Image is converted and NumPy array information :")
 
# <class 'numpy.ndarray'>
print(type(img_numpy_array))
 
# type: float32
print("type:", img_numpy_array.dtype)
 
# shape: (200, 400, 3)
print("shape:", img_numpy_array.shape)
 
# convert back to image
img_pil_from_numpy_array = array_to_img(img_numpy_array)
 
# <class 'PIL.PngImagePlugin.PngImageFile'>
print("converting NumPy array into image:",
      (img_numpy_array).)
