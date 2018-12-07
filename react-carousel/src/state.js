export function initialState() {
  return {
    activeSlide: 0,
    images: [
      {
        largeImageURL:
          "http://via.placeholder.com/800x300/00FFFF/808080?Text=1",
        active: false,
        caption: "Image 2"
      },

      {
        largeImageURL:
          "http://via.placeholder.com/800x300/FF00FF/808080?Text=2",
        active: false,
        caption: "Image 3"
      },
      {
        largeImageURL:
          "http://via.placeholder.com/800x300/FFFF00/808080?Text=3",
        active: false,
        caption: "Image 4"
      },
      {
        largeImageURL:
          "http://via.placeholder.com/800x300/F0F0FF/808080?Text=4",
        active: false,
        caption: "Image 5"
      },
      {
        largeImageURL:
          "http://via.placeholder.com/800x300/0F0FFF/808080?Text=5",
        active: false,
        caption: "Image 6"
      },
      {
        largeImageURL:
          "http://via.placeholder.com/800x300/FFF0F0/808080?Text=6",
        active: false,
        caption: "Image 1"
      }
    ]
  };
}
