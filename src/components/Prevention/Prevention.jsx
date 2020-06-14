import React from "react";
import styles from "./Prevention.module.css";

class Prevention extends React.Component {
    render() {
        return (
            <div className={styles.preventionTipsContainer}>
                <div className={`${styles.overview} ${styles.box}`}>
                    <div className={`${styles.overview} ${styles.heading}`}>Overview</div>
                    <div className={`${styles.overview} ${styles.content}`}>
                        <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.<br /><br />

                            Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.<br /><br />

                            The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face.<br /><br />

                            The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).</p>
                    </div>
                </div>
                <div className={`${styles.preventionTips} ${styles.box}`}>
                    <div className={`${styles.preventionTips} ${styles.heading}`}>Prevention-tips</div>
                    <div className={`${styles.preventionTips} ${styles.content}`}>
                        <h3>1. Wash your hands frequently and carefully</h3>
                        <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.</p>

                        <h3>2. Take social distancing seriously</h3>
                        <p>Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.</p>

                        <h3>3. Avoid going to crowded places</h3>
                        <p>Where people come together in crowds, you are more likely to come into close contact with someone that has COIVD-19 and it is more difficult to maintain physical distance of 1 metre (3 feet).</p>

                        <h3>4. Avoid touching eyes, nose and mouth</h3>
                        <p>Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and infect you.</p>

                        <h3>5. Cover your mouth and nose when you cough and sneeze</h3>
                        <p>Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands. Why? Droplets spread virus. By following good respiratory hygiene, you protect the people around you from viruses such as cold, flu and COVID-19.</p>

                        <h3>6. Self-isolate if sick</h3>
                        <p>Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others. Why? Avoiding contact with others will protect them from possible COVID-19 and other viruses.</p>

                        <h3>7. Stay informed and follow advice given by your healthcare provider</h3>
                        <p>Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities. Why? Local and national authorities are best placed to advise on what people in your area should be doing to protect themselves.</p>
                    </div>
                </div>
                <div className={`${styles.symptoms} ${styles.box}`}>
                    <div className={`${styles.symptoms} ${styles.heading}`}>Symptoms</div>
                    <div className={`${styles.symptoms} ${styles.content}`}>
                        <p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
                        <p>Most common symptoms:</p>
                        <ul>
                            <li>fever.</li>
                            <li>dry cough.</li>
                            <li>tiredness.</li>
                        </ul>
                        <p>Less common symptoms:</p>
                        <ul>
                            <li>aches and pains.</li>
                            <li>sore throat.</li>
                            <li>diarrhoea.</li>
                            <li>conjunctivitis.</li>
                            <li>headache.</li>
                            <li>loss of taste or smell.</li>
                            <li>a rash on skin, or discolouration of fingers or toes.</li>
                        </ul>
                        <p>Serious symptoms:</p>
                        <ul>
                            <li>difficulty breathing or shortness of breath.</li>
                            <li>chest pain or pressure.</li>
                            <li>loss of speech or movement.</li>
                        </ul>
                        <p>Seek immediate medical attention if you have serious symptoms.  Always call before visiting your doctor or health facility.<br />

                            People with mild symptoms who are otherwise healthy should manage their symptoms at home.<br />

                            On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days. </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Prevention;