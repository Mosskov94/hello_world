import styles from "../components/footer.module.css";

function Footer (){

    return <div>

        <footer className={styles.footer}>
            <div>
                <div >
                <a href="./questions.pdf" target="_blank" rel="noopener noreferrer">
                    <button className={styles.text}>PDF-fil</button>
                    </a>
                </div>
            </div>
        </footer>

       
        </div>


}

export default Footer;