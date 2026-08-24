import { RangeText } from "../../constants";
import * as Slider from "@radix-ui/react-slider";
import styles from "./Experience.module.css";
import { useMediaQuery } from 'react-responsive';

const YearSliderComponent=({rangeValue, range})=>{
    const isMobile = useMediaQuery({
        query: '(max-width: 576px)'
      })

    return(
        <Slider.Root className={styles.SliderRoot} defaultValue={[rangeValue]} max={2026.9} min={2020} range={rangeValue} step={0.1} onValueChange={range} orientation={`${isMobile?"horizontal":"vertical"}`}>
        <Slider.Track className={styles.SliderTrack} >
            <Slider.Range className={styles.SliderRange} />
        </Slider.Track>
        <Slider.Thumb className={styles.SliderThumb} aria-label="Volume" value={rangeValue} asChild>
            <RangeText>{Math.trunc(rangeValue)}</RangeText>
        </Slider.Thumb>
    </Slider.Root>
    )
}

export default YearSliderComponent;
