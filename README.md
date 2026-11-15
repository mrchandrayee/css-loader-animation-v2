# CSS Loader Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-loader-animation-v2/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the 25.03-second uploaded screen recording.

## Nine loaders identified in the video

1. **Flip Cube** — orange 3D square rotating around its axes.
2. **Conic Gradient Spinner** — multicolour conic-gradient ring rotating continuously.
3. **Double Ring** — two coloured ring segments rotating in opposite directions.
4. **Ripple** — two blue outlined circles expanding and fading in sequence.
5. **Triangle Spinner** — three cyan, pink and yellow triangles orbiting.
6. **Hourglass** — two orange triangles flip to form an hourglass.
7. **Ping Pong** — cyan and pink dots move back and forth.
8. **Diamond Orbit** — four coloured diamonds rotate around a center.
9. **Typing Dots** — three grey dots bounce with staggered timing.

## CSS transcribed from the video

### Flip Cube
```css
.flip-cube {
  animation: flipCube 1.5s infinite ease-in-out;
}
```

### Conic Gradient Spinner
```css
.conic-spinner {
  background: conic-gradient(...);
  animation: spin 1s linear infinite;
}
```

### Double Ring
```css
.double-ring {
  border-top-color: #38bdf8;
  border-bottom-color: #f472b6;
  animation: spin 1s linear infinite;
}
```

### Ripple
```css
.ripple span {
  border: 4px solid #60a5fa;
  animation: ripple 1.8s infinite;
}
```

### Triangle Spinner
```css
.tri {
  animation: spin 1.8s linear infinite;
}
```

### Hourglass
```css
.hourglass::before,
.hourglass::after {
  animation: 1.6s infinite ease-in-out;
}
```

### Ping Pong
```css
.pingpong::before,
.pingpong::after {
  animation: 1s ease-in-out infinite alternate;
}
```

### Diamond Orbit
```css
.diamond-orbit {
  animation: spin 2s linear infinite;
}
```

### Typing Dots
```css
.typing span {
  animation: type .9s infinite ease-in-out;
}
```

## Included in this project

- All nine animated loader demos.
- Dark navy panels and orange outer frame inspired by the video.
- CSS code snippet under every animation.
- Copy CSS buttons.
- Responsive one-column mobile / two-column desktop layout.
- Reduced-motion accessibility support.
- No frameworks, dependencies or build process.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
css-loader-animation-v2/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Accuracy note

The names and visible CSS declarations above were transcribed from the recording. The complete HTML markup, full animation keyframes, styling and copy interaction are reconstructed as a runnable project; this is not the original creator's verbatim source repository.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
