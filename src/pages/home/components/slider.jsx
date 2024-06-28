import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { sliderContent } from "../../../constant"
import { Typewriter } from "react-simple-typewriter"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2"

const HomeSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <div>
        <span className="absolute z-10 bg-secondary right-2 top-1/2 -translate-y-1/2 size-12 text-2xl flex items-center justify-center shadow-md rounded cursor-pointer">
          <HiOutlineChevronRight />
        </span>
      </div>
    ),
    prevArrow: (
      <div>
        <span className="absolute z-10 bg-secondary left-2 top-1/2 -translate-y-1/2 size-12 text-2xl flex items-center justify-center shadow-md rounded cursor-pointer">
          <HiOutlineChevronLeft />
        </span>
      </div>
    ),
  }
  return (
    <Slider
      {...settings}
      className="relative"
    >
      {sliderContent.map((slide, i) => (
        <div
          key={"slider" + "-" + i}
          className="px-4"
        >
          <div className="min-h-[300px] md:min-h-[460px] relative px-10 py-8 rounded-md bg-secondary text-center flex flex-col gap-3 items-center justify-center overflow-hidden">
            <img
              src={slide.backgroundImage}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute inset-0 w-full h-full bg-gradient-to-t from-background to-primary/60" />
            <div className="max-w-[650px] relative z-10 flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-foreground">
                {slide.heading}
              </h2>
              <span className="text-primary font-bold text-3xl drop-shadow-md shadow-primary">
                <Typewriter
                  words={slide.typewritingText}
                  loop
                  cursor
                  cursorStyle="_"
                />
              </span>
              <p className="text-sm sm:text-base text-foreground/80">
                {slide.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}
export default HomeSlider
