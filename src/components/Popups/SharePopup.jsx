import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import styles from "./SharePopup.module.css";

class SharePopup extends React.Component {
    render() {
        if (navigator.share) {
            navigator.share({
                title: window.document.title,
                url: window.document.location.href
            }).then(() => {})
        } else {
            return (
                <div className={styles.overlay}>
                    <div className={styles.shareContainer}>
                        <div className={styles.headingBox}>
                            <div className={styles.heading}>COVID-19 Tracker</div>
                            <span className={styles.closePopup} role="button" onClick={this.props.togglePopup} style={{ fontSize: 30, color: "#808080" }}>&times;</span>
                        </div>
                        <div className={styles.mainBox}>
                            <div className={styles.title}>Share via</div>
                            <div className={styles.shareLinks}>
                                <div className={styles.shareItem}>
                                    <a className={styles.shareButton} href={'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href}
                                        target="_blank" title="Share on Facebook" rel="noopener noreferrer">
                                        <FacebookIcon htmlColor='#3b5998' fontSize='large'></FacebookIcon>
                                        <div className={styles.shareText}>Facebook</div>
                                    </a>
                                </div>
                                <div className={styles.shareItem}>
                                    <a className={styles.shareButton} href={'https://twitter.com/home?status=' + window.location.href}
                                        target="_blank" title="Share on twitter" rel="noopener noreferrer">
                                        <TwitterIcon htmlColor='#1da1f2' fontSize='large'></TwitterIcon>
                                        <div className={styles.shareText}>Twitter</div>
                                    </a>
                                </div>
                                <div className={styles.shareItem}>
                                    <a className={styles.shareButton} href={'mailto:info@example.com?&subject=&body=' + window.location.href}
                                        target="_blank" title="Share via Mail" rel="noopener noreferrer">
                                        <EmailIcon htmlColor='#7f7f7f' fontSize='large'></EmailIcon>
                                        <div className={styles.shareText}>Email</div>
                                    </a>
                                </div>
                                <div className={styles.shareItem}>
                                    <a className={styles.shareButton} href={'whatsapp://send?text=' + window.location.href}
                                        target="_blank" title="Share on WhatsApp" rel="noopener noreferrer">
                                        <WhatsAppIcon htmlColor='#2cb742' fontSize='large'></WhatsAppIcon>
                                        <div className={styles.shareText}>WhatsApp</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default SharePopup;