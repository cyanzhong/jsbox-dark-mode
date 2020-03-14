$ui.render({
  props: {
    title: "Dark Mode Tests"
  },
  views: [
    {
      type: "label",
      props: {
        text: "This is a label\nIts textColor supports dark mode by default",
        lines: 2,
        align: $align.center
      },
      layout: (make, view) => {
        make.centerX.equalTo(view.super);
        make.top.equalTo(20);
      }
    },
    {
      type: "label",
      props: {
        id: "rect-view",
        bgcolor: $color("green", "red"),
        align: $align.center
      },
      layout: (make, view) => {
        make.top.equalTo(80);
        make.centerX.equalTo(view.super);
        make.size.equalTo($size(150, 50));
      },
      events: {
        ready: () => {
          updateRectView($device.isDarkMode);
        },
        themeChanged: (sender, isDarkMode) => {
          updateRectView(isDarkMode);
        }
      }
    },
    {
      type: "image",
      props: {
        image: (() => {
          const light = $image("assets/lenna.jpg");
          const dark = $imagekit.grayscale(light);
          return $image(light, dark);
        })()
      },
      layout: (make, view) => {
        make.top.equalTo(150);
        make.centerX.equalTo(view.super);
        make.size.equalTo($size(200, 200));
      }
    }
  ]
});

function updateRectView(isDarkMode) {
  $("rect-view").text = isDarkMode ? "Red" : "Green";
}