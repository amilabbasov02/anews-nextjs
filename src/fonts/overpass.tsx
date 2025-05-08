import localFont from "next/font/local";

export const OverpassRegular = localFont({
  src: [
    {
      path: "/subset-Overpass-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/subset-Overpass-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "/subset-Overpass-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const OverpassMedium = localFont({
  src: [
    {
      path: "/subset-Overpass-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/subset-Overpass-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "/subset-Overpass-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
});

export const OverpassSemiBold = localFont({
  src: [
    {
      path: "/subset-Overpass-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/subset-Overpass-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "/subset-Overpass-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});
