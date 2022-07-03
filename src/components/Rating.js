import { CButton, CButtonGroup, CContainer } from "@coreui/react";
import { useEffect, useState } from "react";
import { useMoviesContext } from "../context/MoviesContext";
import { Star } from "./Star";

export const Rating = () => {
  const { rating, setRating } = useMoviesContext();

  const [fillStars, setFillStars] = useState([1, 1, 1, 1, 1])
  const [filledStars, setFilledStars] = useState([1, 1, 1, 1, 1])
  const [top, setTop] = useState(4)
  const [bottom, setBottom] = useState(0)

  function changeStars(key) {
    let old = [...fillStars]
    if (old[key.target.id] & key.target.id == top) {
      for (let i = key.target.id; i <= top; i++) {
        old[i] = 0
      }
      setTop(key.target.id - 1)
    } else if (old[key.target.id] & key.target.id < top) {
      for (let i = key.target.id; i >= 0; i--) {
        old[i] = 0
      }
      setBottom(key.target.id + 1)
    } else if (!old[key.target.id]) {
      for (let i = key.target.id; i <= top; i++) {
        old[i] = 0
      }
      for (let i = 0; i <= key.target.id; i++) {
        old[i] = 1
      }
      setBottom(0)
      setTop(key.target.id)
    }
    setFillStars([...old])
  }

  useEffect(() => {
    setFilledStars([...fillStars])
    let min = fillStars.findIndex((element) => element == 1)
    let max = fillStars.lastIndexOf(1)
    setRating([2 * min, 2 * max + 2])
  }, [fillStars]);

  return (
    <>
      <CButtonGroup role="group" onClick={(key) => changeStars(key)}>
        <Star id="0" filled={filledStars[0]} />
        <Star id="1" filled={filledStars[1]} />
        <Star id="2" filled={filledStars[2]} />
        <Star id="3" filled={filledStars[3]} />
        <Star id="4" filled={filledStars[4]} />
      </CButtonGroup>
    </>
  )

}