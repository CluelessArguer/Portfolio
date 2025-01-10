import styles from "./Header.module.css";

const HeaderTitlesComponent=()=>{
    return (
    <div className={styles.header_titles}>
        <span className="accent_color">Front-End Web Developer</span>
        <h1 className={styles.header_title}>Marc Mansour</h1>
        <h2 className={styles.header_subtitle}>Moments. Dreams. Hopes.</h2>
        <p className={styles.header_about}>
            We all have them. If you think you've wasted away many moments then I urge you to 
            start appreciating every moment. I too regret my wasted moments and dreams 
            but becoming a web developer is not one of them. This is a journey that I want to take you along.
            <span className="block mt-sm">
                Join me as I take you along my web development journey! I hope you too can share your
                passions with others and be better for it!
            </span>
        </p>
    </div>
    )
}
export default HeaderTitlesComponent;